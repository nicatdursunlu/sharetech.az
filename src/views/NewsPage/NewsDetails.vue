<template>
  <div class="container">
    <div class="news-details">
      <img :src="news.urlToImage" :alt="news.title" class="news-details__img" />
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
          <!-- <h4 v-if="news.source.name == 'null'" class="news-details__tag">
            No referance
          </h4>
          <a v-else :href="news.url" target="_blank" class="text-decoration">
            <h4 class="news-details__tag">{{ news.source.name }}//</h4>
          </a> -->
          <h4 v-if="news.author == null" class="news-details__author">
            No author
          </h4>
          <h4 v-else class="news-details__author">{{ news.author }}</h4>
          <h3 class="news-details__title">{{ news.title }}</h3>
          <div class="flex row">
            <div class="news-details__icon">
              <i class="fas fa-clock"></i>
              &nbsp; Oxunma vaxti: {{ time }}
            </div>
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
          <p class="news-details__desc">{{ news.description }}</p>
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
          <p class="news-details__desc">{{ news.content }}</p>
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
import { format, parseISO } from "date-fns";

export default {
  props: {
    news: {
      type: Object,
      required: true,
    },
  },
  computed: {
    time() {
      return this.news.publishedAt
        ? format(parseISO(this.news.publishedAt), "dd.MM.yyyy")
        : "";
    },
  },
  updated() {
    console.log("source", this.news.source);
    // console.log("name", this.news.source.name);
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>