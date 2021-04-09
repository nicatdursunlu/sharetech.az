<template>
  <div class="news row">
    <div class="col-6">
      <router-link to="#" class="single-news">
        <div class="single-news__gradient"></div>
        <img src="../../assets/images/5.png" class="single-news__image" />
        <div class="single-news__info">
          <h3 class="single-news__title--big">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmo
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
    </div>

    <div class="col-6 flex column align-self">
      <div class="row">
        <div class="col-12">
          <router-link to="#" class="single-news">
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
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          <router-link to="#" class="single-news">
            <div class="single-news__gradient"></div>
            <img src="../../assets/images/8.png" class="single-news__image" />
            <div class="single-news__info">
              <h3 class="single-news__title--small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h3>
            </div>
          </router-link>
        </div>

        <div class="col-6">
          <router-link to="#" class="single-news">
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
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>