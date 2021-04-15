<template>
  <div class="news">
    <div class="row" v-if="allNews.length">
      <SingleNews
        v-for="news in filteredNews"
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
  created() {
    this.fetchNews();
  },
  methods: {
    fetchNews() {
      const apiKey = "19a55dd2e1794c1b95df5fa8420418e8";
      // const url = `https://newsapi.org/v2/everything?q=Apple&from=2021-04-14&sortBy=popularity&apiKey=${apiKey}&q=Reuters`;
      // const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=19a55dd2e1794c1b95df5fa8420418e8`;
      const url =
        "https://newsapi.org/v2/top-headlines?" +
        "country=us&" +
        `apiKey=${apiKey}` +
        `&q=${this.query}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log("data", data.articles);

          if (this.query) {
            this.allNews = data.articles.filter((news) => {
              news.title.toLowerCase().match(this.query.toLowerCase()) ||
                news.source.name
                  .toLowerCase()
                  .match(this.query.toLowerCase()) ||
                news.author.toLowerCase().match(this.query.toLowerCase());
            });
          } else {
            this.allNews = data.articles;
          }
        })
        .catch((error) => console.log("error", error));
    },
    loadMoreBtn() {
      this.visible = this.visible + 6;
    },
  },
  props: ["query"],
  data: () => ({
    visible: 6,
    allNews: [],
  }),
  computed: {
    filteredNews() {
      return this.allNews.filter((news) => {
        return (
          news.title.toLowerCase().match(this.query.toLowerCase()) ||
          news.source.name.toLowerCase().match(this.query.toLowerCase()) ||
          news.author.toLowerCase().match(this.query.toLowerCase())
        );
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
