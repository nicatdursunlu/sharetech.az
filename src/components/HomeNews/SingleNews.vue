<template>
  <div @click="goToSingleNews" class="news-card">
    <img :src="news.img" alt="" />
    <div class="news-card__desc">
      <p class="news-card__tag">{{ news.tag }}</p>
      <h3 class="news-card__title">{{ news.title }}</h3>
      <div class="news-card__info">
        <div class="news-card__icon">
          <i class="fas fa-user-edit"></i>
          &nbsp;{{ news.editTime }}
        </div>
        <div class="news-card__icon">
          <i class="fas fa-comment-alt"></i>
          &nbsp; {{ news.comments }}
        </div>
        <div class="news-card__icon">
          <i class="fas fa-clock"></i>
          &nbsp; {{ news.clock }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["news"],
  methods: {
    goToSingleNews() {
      this.$router.push({
        name: "NewsPage",
        params: this.news,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>