<script setup>
import { ref } from "vue";
import userStore from "../stores/user";

const user = userStore();

let uname = ref("");
let updateName = user.updateName;
</script>

<template>
    <div
        class="flex flex-col w-screen items-center justify-center md:justify-end md:w-60vh md:ml-40"
    >
        <p
            class="text-xl break-keep md:text-3xl md:mb-2 flex md:justify-end md:ml-20"
        >
            兄弟，這次你叫什麼名字？
        </p>

        <div
            class="flex flex-col justify-center items-center md:items-start md:justify-end mt-5"
        >
            <input
                v-model="uname"
                type="text"
                class="border-b-4 border-green-500 outline-none flex text-center justify-center text-5xl w-80 md:w-full md:text-left"
            />

            <router-link
                to="/home"
                @click="updateName(uname)"
                class="flex w-20 items-center justify-center mt-5"
            >
                <button
                    class="flex cursor-pointer w-20 items-center justify-center md:justify-start"
                >
                    這是我了!
                </button>
            </router-link>
        </div>
    </div>
</template>
