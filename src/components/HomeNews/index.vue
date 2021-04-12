<template>
  <div class="row">
    <SingleNews v-for="news in allNews.tv_shows" :key="news.id" :news="news" />
  </div>
  <button @click="loadMoreBtn">Load more</button>
</template>

<script>
import SingleNews from "./SingleNews";

export default {
  components: {
    SingleNews,
  },
  mounted() {
    this.fetchNews();
    // this.loadMoreBtn();
    console.log("allNews.tv_shows ", this.allNews);
  },
  methods: {
    fetchNews() {
      this.axios
        .get("https://www.episodate.com/api/most-popular?page=3")
        .then((response) => {
          this.allNews = response.data;
        })
        .catch((error) => {
          console.log("fetch eror: ", error);
        });
    },
    // loadMoreBtn() {
    //   if (!this.moreNewsFetched) {
    //     this.axios
    //       .get("https://www.episodate.com/api/most-popular?page=3")
    //       .then((response) => {
    //         this.moreNews = response.data;
    //         this.allNews = this.moreNews.splice(0, 5);
    //         this.moreNewsFetched = true;
    //       });
    //   }
    //   const nextNews = this.moreNews.splice(0, 5);
    //   this.moreNews.push(nextNews);
    // },
  },
  data: () => ({
    allNews: [
      {
        tv_shows: [],
      },
    ],
    moreNews: [],
    moreNewsFetched: false,
    totalNews: 0,
  }),
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>