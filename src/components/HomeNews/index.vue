<template>
  <div class="news">
    <div class="row" v-if="allNews.length">
      <SingleNews
        v-for="news in allNews.slice(0, visible)"
        :key="news.source.id"
        :news="news"
      />
    </div>

    <h1 v-else class="news__loading">Loading...</h1>
    <div v-if="visible < allNews.length" class="news__btn-box">
      <button @click="loadMoreBtn" to="#" class="news__btn-box-button">
        Diger xeberler
      </button>
    </div>
  </div>
</template>

<script>
import SingleNews from "./SingleNews";

export default {
  components: {
    SingleNews,
  },
  mounted() {
    this.fetchNews();
  },
  methods: {
    fetchNews() {
      const apiKey = "19a55dd2e1794c1b95df5fa8420418e8";
      const url = `https://newsapi.org/v2/everything?q=Apple&from=2021-04-14&sortBy=popularity&apiKey=${apiKey}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log("data", data.articles);
          this.allNews = data.articles;
        })
        .catch((error) => console.log("error", error));

      // const json = await response.json();
      // this.allNews = json.tv_shows;
      // this.visibleNews = this.allNews;
    },
    loadMoreBtn() {
      this.visible = this.visible + 6;
      console.log("allNews: ", this.allNews);
    },
  },
  data: () => ({
    visible: 6,
    allNews: [],
  }),
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
