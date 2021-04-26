<template>
  <div class="container">
    <div class="row">
      <SingleHeaderNews
        :news="news"
        v-for="news in allNews.slice(0, 4)"
        :key="news.id"
      />
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
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>