<template>
  <div class="container">
    <div v-if="newsLength" class="row">
      <SingleHeaderNews
        v-for="news in allNews.slice(newsLength - 4, newsLength)"
        :news="news"
        :key="news.id"
      />
    </div>
    <div v-else-if="!newsLength" class="loading">
      <h1 class="loading-message">Loading...</h1>
    </div>
  </div>
</template>

<script>
import SingleHeaderNews from "./SingleHeaderNews";
import fetchNews from "../../API/fetchNews";

export default {
  name: "HeaderNews",
  components: {
    SingleHeaderNews,
  },
  data: () => ({
    allNews: [],
  }),
  created() {
    this.getNews();
  },
  methods: {
    async getNews() {
      const data = await fetchNews(this.query);
      this.allNews = data.articles;
    },
  },
  computed: {
    newsLength() {
      return this.allNews.length;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>