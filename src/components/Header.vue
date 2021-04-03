<template>
  <div class="header">
    <div class="flex">
      <img src="../assets/images/logo.png" alt="logo" />
      <i class="fas fa-search icon"></i>
    </div>
  </div>
  <Divider />
</template>

<script>
import Divider from "./Divider";

export default {
  components: {
    Divider,
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 1.5rem 8rem;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.icon {
  font-size: 2rem;
  color: #6d6e70;
}
</style>