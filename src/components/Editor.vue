<script setup>
import { ref } from "vue";
import { defineEmits } from "vue"; 
import userStore from "../stores/user";
import { storeToRefs } from "pinia";

const user = userStore();
const { username } = storeToRefs(user);

let inputText = ref("");
const emit = defineEmits();

const addTextToParent = () => {
    emit("addtext", inputText.value);
    console.log(inputText.value);
    inputText.value = "";
};
</script>

<template>
    <div
        class="flex flex-col w-full h-full min-h-60 items-start text-lg shadow-lg mb-10"
    >
        <p
            class="flex w-fit min-h-10 justify-start m-5 text-base font-bold md:text-lg"
        >
            {{ username }}　想說：
        </p>

        <div
            class="flex w-full h-40 absolute items-start justify-start ml-5 mt-14 text-7xl text-slate-400 pointer-events-none z-10"
        >
            “
        </div>
        <textarea
            class="flex w-full h-60 min-h-60 py-6 px-12 items-start focus:outline-none"
            @keyup.enter="addTextToParent"
            v-model="inputText"
        />
        <div
            class="flex w-full min-h-[11.5rem] h-full absolute items-end justify-end pr-5 text-7xl text-slate-400 pointer-events-none z-10"
        >
            ”
        </div>
    </div>
</template>
