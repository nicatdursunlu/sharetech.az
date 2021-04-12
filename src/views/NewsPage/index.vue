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

export default {
  components: {
    HeaderNews,
    NewsDetails,
    HomeNews,
  },
  computed: {
    news() {
      return this.$route.params;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>