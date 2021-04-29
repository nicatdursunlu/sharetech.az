<template>
  <div class="home">
    <HeaderNews />
    <div class="divider" />
    <div class="container">
      <div v-if="!searchState">
        <MainNews />
        <Advertising />
      </div>
      <div v-if="!allNews.length" class="home__loading-box">
        <h1 class="home__loading-message">Loading...</h1>
      </div>
      <HomeNews
        :visible="visible"
        :query="query"
        :searchState="searchState"
        :allNews="allNews"
      />
    </div>
  </div>
</template>

<script>
import MainNews from "../../components/MainNews";
import HomeNews from "../../components/HomeNews";
import HeaderNews from "../../components/HeaderNews";
import Advertising from "../../components/Advertising";

import fetchNews from "../../API/fetchNews";

export default {
  name: "Home",
  components: {
    HeaderNews,
    MainNews,
    Advertising,
    HomeNews,
  },
  props: ["query", "searchState"],

  data: () => ({
    allNews: [],
  }),
  created() {
    this.getNews();
  },
  methods: {
    async getNews() {
      const data = await fetchNews();
      this.allNews = data.articles;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
