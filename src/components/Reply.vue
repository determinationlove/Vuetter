<script setup>
import { ref } from "vue";
import userStore from "../stores/user";
import { storeToRefs } from "pinia";

const user = userStore();
const { username } = storeToRefs(user);

let data = ref({
    newItem: "",
    items: [],
});

function addItem() {
    if (data.value.newItem) {
        data.value.items.push(data.value.newItem);
        data.value.newItem = "";
    }
}
</script>

<template>
    <input
        type="text"
        v-model="data.newItem"
        @keyup.enter="addItem"
        placeholder="留言..."
        class="h-6 p-5"
    />
    <ul class="mt-5">
        <li
            v-for="(item, index) in data.items"
            :key="index"
            class="flex flex-row m-3"
        >
            <p class="font-bold mr-3">{{ username }} ：</p>
            <p class="break-all">{{ item }}</p>
        </li>
    </ul>
</template>
