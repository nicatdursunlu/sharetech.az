<template>
  <div class="home">
    <HeaderNews />
    <div class="divider" />
    <div class="container">
      <div v-if="!searchState">
        <MainNews />
        <Advertising />
      </div>
      <HomeNews :visible="visible" :query="query" :searchState="searchState" />
    </div>
  </div>
</template>

<script>
import MainNews from "../../components/MainNews";
import HomeNews from "../../components/HomeNews";
import HeaderNews from "../../components/HeaderNews";
import Advertising from "../../components/Advertising";

export default {
  name: "Home",
  components: {
    HeaderNews,
    MainNews,
    Advertising,
    HomeNews,
  },
  props: ["query", "searchState"],
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
