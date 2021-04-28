<template>
  <div class="home">
    <HeaderNews />
    <div class="divider" />
    <div class="container">
      <div v-if="!searchState">
        <MainNews />
        <Advertising />
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
  updated() {
    console.log("homepage", this.allNews);
  },
  watch: {
    query: {
      handler() {
        this.getNews();
      },
    },
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
