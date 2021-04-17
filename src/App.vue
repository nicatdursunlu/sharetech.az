<template>
  <Header v-if="!searchState" :toggleSearch="toggleSearch" />
  <SearchBar @query="getQuery" v-else :toggleSearch="toggleSearch" />
  <router-view :query="query" :searchState="searchState" />
  <Footer />
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

export default {
  components: {
    Header,
    Footer,
    SearchBar,
  },
  data: () => ({
    searchState: false,
    query: "",
  }),
  methods: {
    toggleSearch() {
      this.searchState = !this.searchState;
    },
    getQuery(value) {
      this.query = value;
    },
  },
};
</script>

<style lang="scss">
@import "assets/styles/main.scss";
</style>
