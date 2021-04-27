<template>
  <div class="col-4">
    <div class="news-card">
      <router-link :to="{ name: 'NewsPage', params: { title: news.title } }">
        <div v-if="news.urlToImage === null">Lodaing...</div>
        <div v-else>
          <img
            :src="news.urlToImage"
            :alt="news.source.name"
            class="news-card__img"
          />
        </div>
      </router-link>
      <div class="news-card__desc">
        <a :href="news.url" target="_blank" class="text-decoration">
          <p class="news-card__tag">{{ news.source.name }}</p>
        </a>
        <router-link
          :to="{ name: 'NewsPage', params: { title: news.title } }"
          class="text-decoration"
        >
          <h2 class="news-card__author">{{ news.author }}</h2>
        </router-link>
        <router-link
          :to="{ name: 'NewsPage', params: { title: news.title } }"
          class="text-decoration"
        >
          <h3 class="news-card__title">{{ news.title }}</h3>
        </router-link>
        <div class="news-card__info">
          <div class="news-card__icon">
            <i class="fas fa-clock"></i>
            &nbsp; {{ time }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { format, parseISO } from "date-fns";

export default {
  props: ["news"],
  computed: {
    time() {
      return this.news.publishedAt
        ? format(parseISO(this.news.publishedAt), "dd.MM.yyyy")
        : "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>