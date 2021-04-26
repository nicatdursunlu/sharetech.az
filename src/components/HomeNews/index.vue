<template>
  <div class="news">
    <h1 v-if="newsLength && searchState" class="news__heading">
      <span class="news__heading-span">“Share tech” </span>ile bagli neticeler
    </h1>

    <!-- <button @click="queryClick">Query</button> -->
    <div v-if="newsLength" class="row">
      <SingleNews
        v-for="news in allNews.slice(0, visible)"
        :key="news.title"
        :news="news"
      />
    </div>

    <div v-else class="news__error-box">
      <h1 class="news__exclamation">!</h1>
      <div class="news__error-content">
        <h1 class="news__error-message news__error-message--orange">
          “Mənim axdardığım söz”
        </h1>
        <h1 class="news__error-message">
          Axtarışınız ilə bağlı heç bir nəticə tapılmadı!
        </h1>
      </div>
    </div>

    <div v-if="visible < newsLength" class="news__btn-box">
      <button @click="loadMoreBtn" to="#" class="news__btn-box-button">
        Diger xeberler
      </button>
    </div>
  </div>
</template>

<script>
import SingleNews from "./SingleNews";
import fetchNews from "../../API/fetchNews";

export default {
  components: {
    SingleNews,
  },
  props: ["query", "searchState"],
  data: () => ({
    allNews: [],
    visible: 10,
    loading: true,
    errored: false,
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
  created() {
    this.getNews();
  },
  updated() {
    console.log("allNews", this.allNews);
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
