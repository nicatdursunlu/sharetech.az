<template>
  <div class="container">
    <div class="row">
      <SingleHeaderNews
        :news="news"
        v-for="news in allNews.slice(0, 4)"
        :key="news.id"
      />
    </div>
  </div>
</template>

<script>
import SingleHeaderNews from "./SingleHeaderNews";
import fetchNews from "../../API/fetchNews";
import image1 from "../../assets/images/1.png";
import image2 from "../../assets/images/2.png";
import image3 from "../../assets/images/3.png";
import image4 from "../../assets/images/4.png";

export default {
  name: "HeaderNews",
  components: {
    SingleHeaderNews,
  },
  data: () => ({
    allNews: [
      // {
      //   id: 1,
      //   title: "Generate lorem ipsum",
      //   desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      //   img: image1,
      // },
      // {
      //   id: 2,
      //   title: "Generate lorem ipsum",
      //   desc: "Lore m ipsum dolor sit, amet consectetur adipisicing elit.",
      //   img: image2,
      // },
      // {
      //   id: 3,
      //   title: "Generate lorem ipsum",
      //   desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      //   img: image3,
      // },
      // {
      //   id: 4,
      //   title: "Generate lorem ipsum",
      //   desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      //   img: image4,
      // },
    ],
  }),
  created() {
    this.getNews();
  },
  methods: {
    async getNews() {
      const data = await fetchNews(this.query);
      this.allNews = data.articles;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>