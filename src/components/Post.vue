<script setup>
import axios from "axios";
import { ref } from "vue";
import { generateText, generateParagraph, generateArticle } from "lipsum-zh";
import Reply from "./Reply.vue";

let user = ref({
  id: "",
  name: "",
  icon: "",
  article: "",
});

const fetchData = async () => {
  await axios
    .get("https://randomuser.me/api/", {
      responseType: "json",
    })
    .then((res) => {
      const r = res.data.results[0];
      console.log(r.login.username);

      user.value.id = r.login.username;
      user.value.name = r.name.first + " " + r.name.last;
      user.value.icon = r.picture.thumbnail;
    })
    .catch((error) => console.log(error));
};
user.value.article = generateArticle(50)[0];
fetchData();
</script>

<template>
  <div class="flex flex-col rounded-md bg-slate-50 shadow-md p-5 max-w-5xl">
    <div class="flex flex-row items-center mb-5">
      <img :src="user.icon" class="w-10 rounded-full mr-5" />
      <p class="mr-2 text-lg">{{ user.name }}</p>
      <p class="text-gray-500">@{{ user.id }}</p>
    </div>

    <p class=" mb-10">{{ user.article }}</p>

    <Reply />
  </div>
</template>