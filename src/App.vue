<template>
  <Header v-if="!searchState" :toggleSearch="toggleSearch" />
  <SearchBar v-else :toggleSearch="toggleSearch" />
  <router-view />
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
  }),
  methods: {
    toggleSearch() {
      this.searchState = !this.searchState;
      console.log("searchState", this.searchState);
    },
  },
};
</script>

<style lang="scss">
@import "assets/styles/main.scss";
</style>
