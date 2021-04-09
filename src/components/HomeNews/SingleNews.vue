<template>
  <router-link :to="{ name: 'NewsPage', params: news }" class="news-card col-4">
    <img :src="news.img" :alt="news.title" class="news-card__img" />
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
  </router-link>
</template>

<script>
export default {
  props: ["news"],
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>