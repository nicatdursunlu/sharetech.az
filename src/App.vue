<template>
  <Header v-if="!searchState" :toggleSearch="toggleSearch" />
  <SearchBar v-else :toggleSearch="toggleSearch" />
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
  },
  created() {
    this.emitter.on("query", (data) => {
      this.query = data;
    });
    console.log("this.query", this.query);
  },
};
</script>

<style lang="scss">
@import "assets/styles/main.scss";
</style>
