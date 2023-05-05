<script setup>
import { ref } from "vue";
import userStore from "../stores/user";
import { storeToRefs } from "pinia";
import axios from "axios";
import Post from "../components/Post.vue";
import Header from "../components/Header.vue";

let data = ref({
  r: [],
});

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

fetchData();
</script>

<template>
  <div class="w-full mb-20">
    <Header />
    <div class="flex flex-col justify-center items-center w-full px-96">
      <Post
        v-for="(item, index) in data.r"
        :key="index"
        :data="data.r[index]"
        class="my-5 min-w-full "
      />
    </div>
  </div>
</template>
