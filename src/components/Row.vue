<template>
  <div class="row flex container">
    <div v-for="data in dummyData" :key="data.id" class="col-1-of-4 flex">
      <img src="../assets/images/2.png" :alt="data.title" class="image" />
      <div class="details">
        <h4 class="title">{{ data.title }}</h4>
        <p class="desc">{{ data.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    dummyData: [
      {
        id: 1,
        title: "Generate lorem ipsum",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        img: "../assets/1.png",
      },
      {
        id: 2,
        title: "Generate lorem ipsum",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        img: "../assets/2.png",
      },
      {
        id: 3,
        title: "Generate lorem ipsum",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        img: "../assets/1.png",
      },
      {
        id: 4,
        title: "Generate lorem ipsum",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        img: "../assets/1.png",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.row {
  padding: 2rem 0;
}

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