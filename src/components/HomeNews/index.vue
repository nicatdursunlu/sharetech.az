<template>
  <div class="news">
    <!-- <button @click="queryClick">CLG</button> -->
    <h1 v-if="allNews.length" class="news__heading">
      <span class="news__heading-span">“Share tech” </span>ile bagli neticeler
    </h1>

    <!-- <div v-else class="news__error-box">
      <h1 class="news__exclamation">!</h1>
      <div class="news__error-content">
        <h1 class="news__error-message news__error-message--orange">
          “Mənim axdardığım söz”
        </h1>
        <h1 class="news__error-message">
          Axtarışınız ilə bağlı heç bir nəticə tapılmadı!
        </h1>
      </div>
    </div> -->

    <div class="row" v-if="allNews.length">
      <SingleNews
        v-for="news in allNews.slice(0, visible)"
        :key="news.title"
        :news="news"
      />
    </div>

    <div v-if="visible < allNews.length" class="news__btn-box">
      <button @click="loadMoreBtn" to="#" class="news__btn-box-button">
        Diger xeberler
      </button>
    </div>
  </div>
</template>

<script>
import SingleNews from "./SingleNews";
import fetchNews from "../../API/fetchNews";
import { nextTick } from "vue";

export default {
  components: {
    SingleNews,
  },
  created() {
    this.getNews();
  },
  methods: {
    // get() {
    //   this.$forceUpdate(function () {
    //     this.getNews();
    //   });
    // },
    async getNews() {
      const data = await fetchNews(this.query);
      this.allNews = data.articles;
      await nextTick();
    },
    loadMoreBtn() {
      this.visible = this.visible + 6;
    },
    async queryClick() {
      const data = await fetchNews("");
      console.log("fetchNews", data.articles);
    },
    // fetchNews() {
    //   // const apiKey = "19a55dd2e1794c1b95df5fa8420418e8";
    //   const apiKey = "fba9f5931dd5400080368938a8ec863f";
    //   const url =
    //     "https://newsapi.org/v2/top-headlines?" +
    //     "country=tr&" +
    //     `apiKey=${apiKey}` +
    //     `&q=${this.query}`;

    //   console.log("url", this.query);

    //   fetch(url)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log("data", data.articles);
    //       this.allNews = data.articles;
    //     })
    //     .catch((error) => {
    //       console.log("error", error);
    //       this.errored = true;
    //     })
    //     .finally(() => (this.loading = false));
    // },
  },
  props: ["query", "searchState"],
  data: () => ({
    allNews: [],
    visible: 6,
  }),
  computed: {
    filteredNews() {
      return this.allNews.filter((news) => {
        return (
          news.title.toLowerCase().match(this.query.toLowerCase()) ||
          news.source.name.toLowerCase().match(this.query.toLowerCase())
        );
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
