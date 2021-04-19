<template>
  <HeaderNews />
  <div class="divider" />
  <NewsDetails :news="news" />
  <div class="divider" />
  <div class="container">
    <div class="news">
      <h3 class="news__title"></h3>
      <h3 class="news__title">Oxşar xəbərlər</h3>
      <HomeNews />
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
    news: [],
  }),
  mounted() {
    this.getNews();
  },
  methods: {
    async getNews() {
      const data = await fetchNews(this.$route.href.substr(6));
      this.news = data.articles[0];
      console.log("news", this.news.author);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>