<template>
  <div class="container">
    <div class="news-details">
      <img :src="news.img" :alt="news.title" class="news-details__img" />
      <div class="news-details__content">
        <div class="news-details__social-media">
          <a href="#">
            <i class="fab fa-twitter news-details__link"></i>
          </a>
          <a href="#">
            <i class="fab fa-facebook-messenger news-details__link"></i>
          </a>
          <a href="#">
            <i class="fab fa-google news-details__link"></i>
          </a>
          <a href="#">
            <i class="fab fa-whatsapp news-details__link"></i>
          </a>
          <a href="#">
            <i class="fab fa-pinterest news-details__link"></i>
          </a>
        </div>

        <div class="news-details__info">
          <p class="news-details__tag">{{ news.tag }}</p>
          <h3 class="news-details__title">{{ news.title }}</h3>
          <div class="flex row">
            <div class="news-details__icon">
              <i class="fas fa-user-edit"></i>
              &nbsp;{{ news.editTime }}
            </div>
            <div class="news-details__icon">
              <i class="fas fa-comment-alt"></i>
              &nbsp; {{ news.comments }}
            </div>
            <div class="news-details__icon">
              <i class="fas fa-clock"></i>
              &nbsp; {{ news.clock }}
            </div>
          </div>
          <p class="news-details__desc">{{ news.desc }}</p>
          <h1 class="news-details__heading">Heading 1 - 30px</h1>
          <h2 class="news-details__heading">Heading 2 - 24px</h2>
          <h3 class="news-details__heading">Heading 3 - 21px</h3>
          <h4 class="news-details__heading">Heading 4 - 18px</h4>
          <h5 class="news-details__heading">Heading 5 - 16px</h5>
          <h6 class="news-details__heading">Heading 6 - 14px</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>