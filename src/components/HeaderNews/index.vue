<template>
  <div class="container">
    <div class="row">
      <SingleHeaderNews
        v-for="news in allNews.slice(allNews.length - 4, allNews.lebgth)"
        :news="news"
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