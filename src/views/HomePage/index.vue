<template>
  <div class="home">
    <HeaderNews />
    <div class="divider" />
    <div class="container">
      <MainNews />
      <Advertising />
      <HomeNews :visible="visible" />
    </div>
  </div>
</template>

<script>
import HeaderNews from "../../components/HeaderNews";
import MainNews from "../../components/MainNews";
import Advertising from "../../components/Advertising";
import HomeNews from "../../components/HomeNews";

export default {
  name: "Home",
  components: {
    HeaderNews,
    MainNews,
    Advertising,
    HomeNews,
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
