<template>
  <div class="row flex container">
    <SingleHeaderNews :news="news" v-for="news in allNews" :key="news.id" />
  </div>
</template>

<script>
import SingleHeaderNews from "./SingleHeaderNews";

export default {
  components: {
    SingleHeaderNews,
  },
  data: () => ({
    allNews: [
      {
        id: 1,
        title: "Generate lorem ipsum",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        img: "../assets/images/1.png",
      },
      {
        id: 2,
        title: "Generate lorem ipsum",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        img: "../assets/images/2.png",
      },
      {
        id: 3,
        title: "Generate lorem ipsum",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        img: "../assets/images/3.png",
      },
      {
        id: 4,
        title: "Generate lorem ipsum",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        img: "../assets/images/4.png",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.image {
  margin-right: 2rem;
}

.title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.desc {
  font-size: 1rem;
  color: #e9e9e9;
}
</style>