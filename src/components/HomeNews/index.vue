<template>
  <div class="news">
    <div v-if="errored">
      <p>
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </p>
    </div>
    <div class="row" v-else>
      <h1 v-if="loading" class="news__loading">Loading...</h1>
      <SingleNews
        v-else
        v-for="news in allNews.slice(0, visible)"
        :key="news.source.id"
        :news="news"
      />
    </div>

    <div v-if="visible < allNews.length" class="news__btn-box">
      <button @click="loadMoreBtn" to="#" class="news__btn-box-button">
        Diger xeberler
      </button>
    </div>

    <!-- <button @click="queryClick">Query</button>
    <div class="row" v-if="filteredNews.length">
      <SingleNews
        v-for="news in filteredNews"
        :key="news.source.id"
        :news="news"
      />
    </div>

    <h1 v-else class="news__loading">Loading...</h1>
    <div v-if="visible < filteredNews.length" class="news__btn-box">
      <button @click="loadMoreBtn" to="#" class="news__btn-box-button">
        Diger xeberler
      </button>
    </div> -->
  </div>
</template>

<script>
import SingleNews from "./SingleNews";

export default {
  components: {
    SingleNews,
  },
  // created() {
  //   this.fetchNews();
  // },
  mounted() {
    this.fetchNews();
  },
  methods: {
    fetchNews() {
      // const url =
      //   "http://api.mediastack.com/v1/news?access_key=79ef386c0cd69491442c6728b42d97bf&sources=cnn,bbc&limit=100";
      // const url = `https://newsapi.org/v2/everything?q=Apple&from=2021-04-14&sortBy=popularity&apiKey=${apiKey}&q=Reuters`;
      // const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=19a55dd2e1794c1b95df5fa8420418e8`;
      const apiKey = "19a55dd2e1794c1b95df5fa8420418e8";
      const url =
        "https://newsapi.org/v2/top-headlines?" +
        "country=us&" +
        `apiKey=${apiKey}` +
        "&limit=100" +
        // `&q=cnet`;
        `&q=${this.query}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log("data", data.articles);
          this.allNews = data.articles;
          // this.allNews = data.data;
        })
        .catch((error) => {
          console.log("error", error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    loadMoreBtn() {
      this.visible = this.visible + 6;
    },
    queryClick() {
      console.log("query", this.query);
    },
  },
  props: ["query"],
  data: () => ({
    allNews: [],
    visible: 6,
    loading: true,
    errored: false,
  }),
  computed: {
    filteredNews() {
      return this.allNews.filter((news) => {
        return (
          news.title.toLowerCase().includes(this.query.toLowerCase()) ||
          news.source.name.toLowerCase().includes(this.query.toLowerCase()) ||
          news.author.toLowerCase().includes(this.query.toLowerCase())
        );
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
