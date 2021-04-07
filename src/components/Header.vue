<template>
  <div class="header container">
    <div class="flex">
      <a href="#" class="header__logo">
        <img src="../assets/images/logo.png" alt="logo" class="header__img" />
      </a>
      <a href="#" class="header__search">
        <i class="fas fa-search icon"></i>
      </a>
    </div>
  </div>
  <div class="divider" />
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
.header {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.flex {
  align-items: center;
  justify-content: space-between;
}

.icon {
  font-size: 2rem;
  color: #6d6e70;
}

@media screen and (max-width: 550px) {
  .header {
    padding-top: 1rem;
    padding-bottom: 1rem;

    &__img {
      width: 70%;
    }
  }

  .icon {
    font-size: 1.4rem;
    color: #6d6e70;
  }
}
</style>