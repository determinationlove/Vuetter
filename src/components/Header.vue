<script setup>
import userStore from "../stores/user";
import { storeToRefs } from "pinia";

const user = userStore();
const { username } = storeToRefs(user);
</script>

<template>
    <div class="flex flex-row items-center w-full h-28 text-lg shadow-lg mb-10">
        <div class="w-20">
            <img
                alt="Vue logo"
                class="logo w-14 justify-start ml-10"
                src="@/assets/logo.svg"
            />
        </div>

        <p class="mr-10 w-full flex justify-end text-base md:text-lg">
            歡迎回來！ {{ username }}。
        </p>
    </div>
</template>
