<template>
  <div class="col-4">
    <div class="news-card">
      <router-link :to="{ name: 'NewsPage', params: news }">
        <img
          :src="news.image_thumbnail_path"
          :alt="news.name"
          class="news-card__img"
        />
      </router-link>
      <div class="news-card__desc">
        <router-link
          :to="{ name: 'NewsPage', params: news }"
          class="text-decoration"
        >
          <p class="news-card__tag">{{ news.status }}</p>
        </router-link>
        <router-link
          :to="{ name: 'NewsPage', params: news }"
          class="text-decoration"
        >
          <h3 class="news-card__title">{{ news.name }}</h3>
        </router-link>
        <div class="news-card__info">
          <!-- <div class="news-card__icon">
            <i class="fas fa-user-edit"></i>
            &nbsp;{{ news.editTime }}
          </div>
          <div class="news-card__icon">
            <i class="fas fa-comment-alt"></i>
            &nbsp; {{ news.comments }}
          </div> -->
          <div class="news-card__icon">
            <i class="fas fa-clock"></i>
            &nbsp; {{ news.start_date }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["news"],
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>