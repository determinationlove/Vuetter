<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="greetings">
    <p class="green w-full flex justify-center md:justify-start text-3xl md:text-4xl mb-5 lg:mb-4">{{ msg }}</p>
    <h3 class=" text-gray-500">Vue Side Project</h3>
    <div class="flex w-full justify-center items-center">
      <nav class="flex w-screen md:w-full  justify-center items-center mb-10 md:mb-0 lg:mb-10 md:mt-5 lg:mt-2 md:block">
        <a href="https://home.gamer.com.tw/homeindex.php?owner=guiltyghost">
          About
        </a>
      </nav>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
