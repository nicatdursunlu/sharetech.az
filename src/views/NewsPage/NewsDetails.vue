<template>
  <div class="container">
    <div class="news-details">
      <img
        :src="news.image_thumbnail_path"
        :alt="news.name"
        class="news-details__img"
      />
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
          <p class="news-details__tag">{{ news.status }}</p>
          <h3 class="news-details__title">{{ news.title }}</h3>
          <div class="flex row">
            <!-- <div class="news-details__icon">
              <i class="fas fa-user-edit"></i>
              &nbsp;{{ news.editTime }} evvel
            </div> -->
            <div class="news-details__icon">
              <i class="fas fa-clock"></i>
              &nbsp; Oxunma vaxti {{ news.start_date }}
            </div>
            <!-- <div class="news-details__icon">
              <i class="fas fa-comment-alt"></i>
              &nbsp; {{ news.comments }} serh
            </div> -->
          </div>
          <p class="news-details__desc">
            Proin id ultricies justo, fringilla pharetra enim. Phasellus
            vehicula pretium malesuada. Proin dolor enim, suscipit vitae luctus
            non, maximus malesuada odio. Phasellus condimentum tellus eget quam
            egestas, a lobortis mauris venenatis. Vestibulum id leo quis felis
            suscipit pulvinar. Duis aliquam mi urna, eu bibendum ante convallis
            eu. Praesent sit amet enim purus. Sed egestas pretium purus id
            consectetur.
          </p>
          <p class="news-details__desc">{{ news.desc }}</p>
          <h1 class="news-details__heading news-details__heading--1">
            Heading 1 - 30px
          </h1>
          <h2 class="news-details__heading news-details__heading--2">
            Heading 2 - 24px
          </h2>
          <h3 class="news-details__heading news-details__heading--3">
            Heading 3 - 21px
          </h3>
          <h4 class="news-details__heading news-details__heading--4">
            Heading 4 - 18px
          </h4>
          <h5 class="news-details__heading news-details__heading--5">
            Heading 5 - 16px
          </h5>
          <h6 class="news-details__heading news-details__heading--6">
            Heading 6 - 14px
          </h6>
          <p class="news-details__desc">{{ news.desc }}</p>
          <p class="news-details__desc">
            Proin id ultricies justo, fringilla pharetra enim. Phasellus
            vehicula pretium malesuada. Proin dolor enim, suscipit vitae luctus
            non, maximus malesuada odio. Phasellus condimentum tellus eget quam
            egestas, a lobortis mauris venenatis. Vestibulum id leo quis felis
            suscipit pulvinar. Duis aliquam mi urna, eu bibendum ante convallis
            eu. Praesent sit amet enim purus. Sed egestas pretium purus id
            consectetur.
          </p>
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