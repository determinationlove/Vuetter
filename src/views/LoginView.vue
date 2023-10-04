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
  <div class="flex flex-col w-screen items-center justify-center md:justify-end md:w-60vh md:ml-40">
    <p class="text-xl break-keep md:text-3xl md:mb-2 flex md:justify-end md:ml-20">兄弟，這次你叫什麼名字？</p>

    <form class="flex flex-col justify-center items-center md:items-start md:justify-end mt-5">
      <input
        v-model="uname"
        type="text"
        class="border-b-4 border-green-500 outline-none flex text-center justify-center text-5xl w-80 md:w-full md:text-left"
      />

      <router-link to="/home" @click="updateName(uname)">
        <input type="submit" value="這是我了!" class="flex mt-5 cursor-pointer w-20 justify-center md:justify-start" />
      </router-link>
    </form>
  </div>
</template>