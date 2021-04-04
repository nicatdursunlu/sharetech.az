<template>
  <HeaderNews />
  <div class="divider" />
  <MainNews />
  <Advertising />
</template>

<script>
import HeaderNews from "../components/HeaderNews";
import MainNews from "../components/MainNews";
import Advertising from "../components/Advertising";

export default {
  name: "Home",
  components: {
    HeaderNews,
    MainNews,
    Advertising,
  },
};
</script>

<style lang="scss" scoped>
</style>
