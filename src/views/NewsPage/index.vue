<template>
  <HeaderNews />
  <div class="divider" />
  <NewsDetails :news="news" />
</template>

<script>
import HeaderNews from "../../components/HeaderNews";
import NewsDetails from "./NewsDetails";

export default {
  components: {
    HeaderNews,
    NewsDetails,
  },
  computed: {
    news() {
      return this.$route.params;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>