<template>
  <router-link to="#" class="content">
    <img :src="news.img" :alt="news.title" class="image" />
    <div class="details">
      <h4 class="title">{{ news.title }}</h4>
      <p class="desc">{{ news.desc }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["news"],
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>