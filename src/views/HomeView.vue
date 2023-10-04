<script setup>
import { ref } from "vue";
import userStore from "../stores/user";
import { storeToRefs } from "pinia";
import axios from "axios";
import Post from "../components/Post.vue";
import Header from "../components/Header.vue";
import Editor from "../components/Editor.vue";

const user = userStore();
const { username } = storeToRefs(user);

let data = ref({
    r: [],
});
const isEditorVisible = ref(false);
const customPostHtml = ref([]);

const fetchData = async () => {
    await axios
        .get("https://randomuser.me/api/?results=30", {
            responseType: "json",
        })
        .then((res) => {
            data.value.r = res.data.results;
            console.log(data.value.r[0].login);
        })
        .catch((error) => console.log(error));
};

const toggleElement = () => {
    isEditorVisible.value = !isEditorVisible.value;
};

const addTextToCustomPost = (text) => {
    let temp = `<div class="flex flex-col max-w-4xl min-w-full rounded-md bg-slate-50 shadow-md shadow-slate-400 p-5">
        <div class="flex flex-row items-center mb-5">
            <img src="./src/assets/logo.svg" class="w-10 rounded-full mr-5" />
            <p class="mr-2 text-lg">${username.value}</p>
            <p class="text-gray-500 hidden md:block">isYou</p>
        </div>
        <p class="mb-10">${text}</p>
        <Reply />
    </div>`;
    customPostHtml.value.unshift(temp);
    console.log(customPostHtml.value)
};

fetchData();
</script>

<template>
    <div class="flex flex-col w-full min-h-screen md:mb-20 items-start">
        <Header />
        <div
            class="flex flex-col w-full justify-center items-centerpx-4 px-5 sm:px-20 md:px-28 lg:px-60 xl:px-96"
        >
            <div class="flex w-full h-full justify-end items-center">
                <button
                    class="flex w-10 h-10 pb-1 items-center justify-center rounded-full bg-emerald-500 text-3xl text-white transition duration-300 hover:scale-125"
                    @click="toggleElement"
                >
                    ＋
                </button>
            </div>

            <Editor v-if="isEditorVisible" @addtext="addTextToCustomPost" />

            <div
                v-for="(item, index) in customPostHtml"
                :key="index"
                v-html="item"
                class="custom-post flex my-5 "
            ></div>

            <Post
                v-for="(item, index) in data.r"
                :key="index"
                :data="data.r[index]"
                class="flex my-5"
            />
        </div>
    </div>
</template>
