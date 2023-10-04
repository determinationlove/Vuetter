<script setup>
import axios from "axios";
import { ref, defineProps  } from "vue";
import { generateText, generateParagraph, generateArticle } from "lipsum-zh";
import Reply from "./Reply.vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

console.log (props.data);

let user = ref({
  id: "",
  name: "",
  icon: "",
  article: "",
});

user.value.id = props.data.login.username;
user.value.name = props.data.name.first + " " + props.data.name.last;
user.value.icon = props.data.picture.thumbnail;
user.value.article = generateArticle(Math.floor(Math.random() * 500))[0];
</script>

<template>
  <div class="flex flex-col max-w-4xl min-w-full rounded-md bg-slate-50 shadow-md shadow-slate-400 p-5 ">
    <div class="flex flex-row items-center mb-5">
      <img :src="user.icon" class="w-10 rounded-full mr-5" />
      <p class="mr-2 text-lg">{{ user.name }}</p>
      <p class="text-gray-500 hidden md:block">@{{ user.id }}</p>
    </div>

    <p class="mb-10">{{ user.article }}</p>

    <Reply />
  </div>
</template>