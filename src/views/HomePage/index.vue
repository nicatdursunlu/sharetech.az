<template>
  <HeaderNews />
  <div class="divider" />
  <MainNews />
  <Advertising />
  <HomeNews />
  <div class="btn-box">
    <button class="btn-box__button">Diger xeberler</button>
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
