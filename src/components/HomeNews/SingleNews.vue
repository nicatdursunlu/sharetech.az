<template>
  <div class="col-4">
    <div class="news-card">
      <router-link :to="{ name: 'NewsPage', params: news }">
        <div v-if="news.urlToImage === ''">Lodaing...</div>
        <div else>
          <img
            :src="news.urlToImage"
            :alt="news.source.name"
            class="news-card__img"
          />
        </div>
        <Advertising />
      </router-link>
      <div class="news-card__desc">
        <router-link
          :to="{ name: 'NewsPage', params: news }"
          class="text-decoration"
        >
          <p class="news-card__tag">{{ news.source.name }}</p>
        </router-link>
        <router-link
          :to="{ name: 'NewsPage', params: news }"
          class="text-decoration"
        >
          <h2 class="news-card__author">{{ news.author }}</h2>
        </router-link>
        <router-link
          :to="{ name: 'NewsPage', params: news }"
          class="text-decoration"
        >
          <h3 class="news-card__title">{{ news.title }}</h3>
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
            &nbsp; {{ time }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Advertising } from "../Advertising";
import { format } from "date-fns";

export default {
  props: ["news"],
  components: {
    Advertising,
  },
  computed: {
    time() {
      return format(new Date(this.news.publishedAt), "MM.dd.yyyy");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>