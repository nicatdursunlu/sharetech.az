<template>
  <div class="container">
    <div class="search-bar">
      <input
        type="text"
        v-model.trim="query"
        class="search-bar__input"
        placeholder="Axtarmaq istədiyiniz sözü daxil edin ..."
        @keyup="emitToParent"
        @keyup.enter="toggleSearch"
      />
      <button @click="closeSearch" class="search-bar__button">
        <i class="fas fa-times"></i>
      </button>
    </div>
  </div>
  <div class="divider"></div>
</template>

<script>
export default {
  props: ["toggleSearch"],
  data: () => ({
    query: "",
  }),
  methods: {
    emitToParent() {
      this.emitter.emit("query", this.query);
    },
    closeSearch() {
      this.toggleSearch();
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.search-bar {
  margin: 2.4rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  &__input {
    height: 4rem;
    width: 90%;
    padding: 2rem;
    border: none;
    border-left: 1px solid $color-grey-dark;
    outline: none;
    font-size: 1.7rem;
    cursor: pointer;

    &:focus {
      border-left: 1px solid $color-orange;
    }
  }

  &__button {
    font-size: 3rem;
    border: none;
    outline: none;
    color: $color-grey-dark;
    background-color: $color-white;
    cursor: pointer;
  }
}
</style>