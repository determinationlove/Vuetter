<script setup>
import userStore from "../stores/user";
import { storeToRefs } from "pinia";
import Post from "../components/Post.vue";


    const user = userStore();
    const { username } = storeToRefs(user);

</script>

<template>
  <h1>{{ username }}</h1>
  <br/>
  <Post />
</template>
