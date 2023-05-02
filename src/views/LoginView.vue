<script >
import { mapState, mapActions } from "pinia";
import userStore from "../stores/user";

export default {
  data() {
    uname: "";
  },
  methods: {
    ...mapActions(userStore, ["updateName"]),
  },
  computed: {
    ...mapState(userStore, ["username"]),
  },
};
</script>

<template>
  <div class="flex flex-col justify-end w-60vh ml-40">
    <p class="text-3xl mb-2 flex justify-end">兄弟，這次你叫什麼名字？</p>
    <form class="flex flex-col justify-end mt-5">
      <input
        v-model="uname"
        type="text"
        class="border-b-4 border-green-500 outline-none flex justify-center text-5xl"
      />

      <router-link to="/home" @click="updateName(uname)">
        <input type="submit" class="flex mt-5 cursor-pointer w-20" />
      </router-link>
    </form>
  </div>
</template>