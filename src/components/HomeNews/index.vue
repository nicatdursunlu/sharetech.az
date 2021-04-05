<template>
  <div class="container flex">
    <SingleNews v-for="news in allNews" :key="news.id" :news="news" />
  </div>
</template>

<script>
import SingleNews from "./SingleNews";

export default {
  components: {
    SingleNews,
  },
  data: () => ({
    allNews: [
      {
        id: 1,
        tag: "Social, Android, Mobile",
        title: "Duis aute irure dolor in reprehenderi",
        img: "../../assets/images/9.png",
        editTime: "2 deq",
        comments: 15,
        clock: "7 deq",
      },
      {
        id: 2,
        tag: "Social, Android, Mobile",
        title: "Duis aute irure dolor in reprehenderi",
        img: "../../assets/images/10.png",
        editTime: "5 deq",
        comments: 21,
        clock: "6 deq",
      },
      {
        id: 3,
        tag: "Social, Android, Mobile",
        title: "Duis aute irure dolor in reprehenderi",
        img: "../../assets/images/11.png",
        editTime: "20 deq",
        comments: 10,
        clock: "30 deq",
      },
      {
        id: 4,
        tag: "Social, Android, Mobile",
        title: "Duis aute irure dolor in reprehenderi",
        img: "../../assets/images/12.png",
        editTime: "2 deq",
        comments: 15,
        clock: "7 deq",
      },
      {
        id: 5,
        tag: "Social, Android, Mobile",
        title: "Duis aute irure dolor in reprehenderi",
        img: "../../assets/images/13.png",
        editTime: "2 deq",
        comments: 15,
        clock: "7 deq",
      },
      {
        id: 6,
        tag: "Social, Android, Mobile",
        title: "Duis aute irure dolor in reprehenderi",
        img: "../../assets/images/14.png",
        editTime: "2 deq",
        comments: 15,
        clock: "7 deq",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>