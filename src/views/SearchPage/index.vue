<template>
  <div class="search">
    <HeaderNews />
    <div class="divider"></div>
    <div class="container">
      <div class="search__content">
        <h1 v-if="newsLength" class="search__heading">
          <span class="search__heading-span">“Share tech” </span>ile bagli
          neticeler
        </h1>

        <div v-else-if="!newsLength" class="search__error-box">
          <h1 class="search__exclamation">!</h1>
          <div class="search__error-content">
            <h1 class="search__error-message news__error-message--orange">
              “Mənim axdardığım söz”
            </h1>
            <h1 class="search__error-message">
              Axtarışınız ilə bağlı heç bir nəticə tapılmadı!
            </h1>
          </div>
        </div>

        <HomeNews :allNews="allNews" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNews from "../../components/HeaderNews";
import HomeNews from "../../components/HomeNews";
import fetchNews from "../../API/fetchNews";

export default {
  components: {
    HeaderNews,
    HomeNews,
  },
  props: ["query", "searchState"],
  data: () => ({
    allNews: [],
    visible: 10,
    loading: true,
    errored: false,
  }),
  created() {
    this.getNews();
  },
  updated() {
    console.log("allNews search", this.allNews);
  },
  watch: {
    query: {
      handler() {
        this.getNews();
      },
    },
  },
  methods: {
    async getNews() {
      const data = await fetchNews(this.query);
      this.allNews = data.articles;
    },
    loadMoreBtn() {
      this.visible = this.visible + 10;
    },
  },
  computed: {
    newsLength() {
      return this.allNews.length;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>