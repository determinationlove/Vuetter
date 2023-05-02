<script>
import userStore from "../stores/user";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const user = userStore();
    const { username } = storeToRefs(user);

    return {
      username,
    };
  },
};
</script>

<template>
  <h1>{{ username }}</h1>
</template>
