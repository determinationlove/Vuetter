<script setup>
import { RouterLink, RouterView } from "vue-router";
import Greet from "../components/Greet.vue";
import LoginView from "./LoginView.vue";

// 隨機大標
let msg = "";
const msgs = [
  "歡迎來到 Vuetter",
  "天哪！這裡是Vuetter！",
  "也許這裡只有陌生人...",
  "船過水無痕，紀錄不留存",
  "你是無貌的，每一次都不同",
];
msg = msgs[Math.floor(Math.random() * msgs.length)];
</script>

<template>
  <header class="w-screen flex justify-center">
    <div class="wrapper flex justify-center w-full">
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      />
      <Greet :msg="msg" class="w-4/12" />
      <LoginView class="w-5/12" />
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    justify-content: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
