<template>
  <HeaderNews />
  <div class="divider" />
  <NewsDetails :news="news" :title="title" />
  <div class="divider" />
  <div class="container">
    <div class="news">
      <h3 class="news__title"></h3>
      <h3 class="news__title">Oxşar xəbərlər</h3>
      <HomeNews :allNews="allNews" />
    </div>
  </div>
</template>

<script>
import HeaderNews from "../../components/HeaderNews";
import HomeNews from "../../components/HomeNews";
import NewsDetails from "./NewsDetails";
import fetchNews from "../../API/fetchNews";

export default {
  components: {
    HeaderNews,
    NewsDetails,
    HomeNews,
  },
  data: () => ({
    news: {},
    title: "",
    allNews: [],
  }),
  mounted() {
    this.getNews();
  },
  updated() {
    console.log("all", this.allNews);
  },
  watch: {
    "$route.path": "getNews",
  },
  methods: {
    async getNews() {
      this.title = this.$route.params.title;
      const data = await fetchNews(this.title);
      this.allNews = await fetchNews();
      this.allNews = this.allNews.articles;
      this.news = data.articles[0];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>