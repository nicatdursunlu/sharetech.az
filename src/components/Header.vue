<template>
  <div class="header container">
    <div class="flex">
      <a href="#" class="header__logo">
        <img src="../assets/images/logo.png" alt="logo" class="header__img" />
      </a>
      <button @click="toggleSearch" class="header__search">
        <i class="fas fa-search icon"></i>
      </button>
    </div>
  </div>
  <div class="divider" />
</template>

<script>
export default {
  props: ["toggleSearch"],
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
@import "../assets/styles/mixins";

.header {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  &__search {
    border: none;
    outline: none;
    cursor: pointer;
  }
}

.flex {
  align-items: center;
  justify-content: space-between;
}

.icon {
  font-size: 2rem;
  color: #6d6e70;
}

@include responsive($breakpoint-mobile) {
  .header {
    padding-top: 1rem;
    padding-bottom: 1rem;

    &__img {
      width: 70%;
    }
  }

  .icon {
    font-size: 1.4rem;
  }
}
</style>