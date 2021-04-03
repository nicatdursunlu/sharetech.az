<template>
  <HeaderNews />
  <div class="divider" />
  <MainNews />
</template>

<script>
import HeaderNews from "../components/HeaderNews";
import MainNews from "../components/MainNews";

export default {
  name: "Home",
  components: {
    HeaderNews,
    MainNews,
  },
};
</script>

<style lang="scss" scoped>
</style>
