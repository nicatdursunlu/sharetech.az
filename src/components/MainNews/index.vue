<template>
  <div class="container news flex">
    <router-link to="#" class="news__left-side single-news single-news--big">
      <div class="single-news__gradient"></div>
      <img src="../../assets/images/5.png" class="single-news__image" />
      <div class="single-news__info">
        <h3 class="single-news__title--big">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo
        </h3>
        <div class="single-news__desc">
          <div class="single-news__icon">
            <i class="fas fa-user-edit"></i>
            &nbsp;2 deq evvel
          </div>
          <div class="single-news__icon">
            <i class="fas fa-clock"></i>
            &nbsp;2 deq
          </div>
          <div class="single-news__icon">
            <i class="fas fa-heart"></i>
            &nbsp;160
          </div>
        </div>
      </div>
    </router-link>

    <div class="news__right-side">
      <router-link to="#" class="single-news single-news--medium">
        <div class="single-news__gradient"></div>
        <img src="../../assets/images/6.png" class="single-news__image" />
        <div class="single-news__info">
          <h3 class="single-news__title--big">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h3>
          <div class="single-news__desc">
            <div class="single-news__icon">
              <i class="fas fa-user-edit"></i>
              &nbsp;2 deq evvel
            </div>
            <div class="single-news__icon">
              <i class="fas fa-clock"></i>
              &nbsp;2 deq
            </div>
            <div class="single-news__icon">
              <i class="fas fa-heart"></i>
              &nbsp;160
            </div>
          </div>
        </div>
      </router-link>

      <div class="single-news__row">
        <router-link to="#" class="single-news single-news--small">
          <div class="single-news__gradient"></div>
          <img src="../../assets/images/8.png" class="single-news__image" />
          <div class="single-news__info">
            <h3 class="single-news__title--small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h3>
          </div>
        </router-link>

        <router-link to="#" class="single-news single-news--small">
          <div class="single-news__gradient"></div>
          <img src="../../assets/images/7.png" class="single-news__image" />
          <div class="single-news__info">
            <h3 class="single-news__title--small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>