<template>
  <div class="col-3">
    <router-link
      :to="{ name: 'NewsPage', params: { title: news.title } }"
      class="content"
    >
      <img :src="news.urlToImage" :alt="news.title" class="image" />
      <div class="details">
        <h4 class="title">{{ news.title }}</h4>
        <p class="desc">{{ news.description }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["news"],
  computed: {
    filteredTitle() {
      return this.news.title;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>