<template>
  <div class="header container">
    <div class="flex">
      <img src="../assets/images/logo.png" alt="logo" />
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
</style>