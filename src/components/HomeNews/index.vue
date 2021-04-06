<template>
  <div class="container flex">
    <SingleNews v-for="news in allNews" :key="news.id" :news="news" />
  </div>
</template>

<script>
import SingleNews from "./SingleNews";
import image9 from "../../assets/images/9.png";
import image10 from "../../assets/images/10.png";
import image11 from "../../assets/images/11.png";
import image12 from "../../assets/images/12.png";
import image13 from "../../assets/images/13.png";

export default {
  components: {
    SingleNews,
  },
  data: () => ({
    allNews: [
      {
        id: 1,
        tag: "Social, Android, Mobile",
        title: "Duis aute irure dolor in reprehenderi reprehenderi",
        img: image9,
        editTime: "2 deq",
        comments: 15,
        clock: "7 deq",
        desc:
          "Fusce gravida ipsum tellus, quis pharetra lorem volutpat a. Proin feugiat tincidunt mattis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas facilisis felis lorem, quis tempus nisi sagittis sit amet. In bibendum sodales risus, at convallis mi pellentesque sit amet. Morbi magna mauris, condimentum non interdum sed, tincidunt vitae odio. Fusce maximus mauris nec ex mattis, sed maximus enim gravida. Maecenas sit amet metus odio. Vivamus interdum orci nibh, non tincidunt eros vulputate non. Ut gravida nulla nunc. Ut facilisis odio eget est blandit egestas.",
      },
      {
        id: 2,
        tag: "Social, Android, Mobile",
        title: "Duis aute irure dolor in reprehenderi reprehenderi",
        img: image10,
        editTime: "5 deq",
        comments: 21,
        clock: "6 deq",
        desc:
          "Fusce gravida ipsum tellus, quis pharetra lorem volutpat a. Proin feugiat tincidunt mattis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas facilisis felis lorem, quis tempus nisi sagittis sit amet. In bibendum sodales risus, at convallis mi pellentesque sit amet. Morbi magna mauris, condimentum non interdum sed, tincidunt vitae odio. Fusce maximus mauris nec ex mattis, sed maximus enim gravida. Maecenas sit amet metus odio. Vivamus interdum orci nibh, non tincidunt eros vulputate non. Ut gravida nulla nunc. Ut facilisis odio eget est blandit egestas.",
      },
      {
        id: 3,
        tag: "Social, Android, Mobile",
        title: "Duis aute irure dolor in reprehenderi",
        img: image11,
        editTime: "20 deq",
        comments: 10,
        clock: "30 deq",
        desc:
          "Fusce gravida ipsum tellus, quis pharetra lorem volutpat a. Proin feugiat tincidunt mattis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas facilisis felis lorem, quis tempus nisi sagittis sit amet. In bibendum sodales risus, at convallis mi pellentesque sit amet. Morbi magna mauris, condimentum non interdum sed, tincidunt vitae odio. Fusce maximus mauris nec ex mattis, sed maximus enim gravida. Maecenas sit amet metus odio. Vivamus interdum orci nibh, non tincidunt eros vulputate non. Ut gravida nulla nunc. Ut facilisis odio eget est blandit egestas.",
      },
      {
        id: 4,
        tag: "Social, Android, Mobile",
        title: "Duis aute irure dolor in reprehenderi",
        img: image12,
        editTime: "2 deq",
        comments: 15,
        clock: "7 deq",
        desc:
          "Fusce gravida ipsum tellus, quis pharetra lorem volutpat a. Proin feugiat tincidunt mattis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas facilisis felis lorem, quis tempus nisi sagittis sit amet. In bibendum sodales risus, at convallis mi pellentesque sit amet. Morbi magna mauris, condimentum non interdum sed, tincidunt vitae odio. Fusce maximus mauris nec ex mattis, sed maximus enim gravida. Maecenas sit amet metus odio. Vivamus interdum orci nibh, non tincidunt eros vulputate non. Ut gravida nulla nunc. Ut facilisis odio eget est blandit egestas.",
      },
      {
        id: 5,
        tag: "Social, Android, Mobile",
        title: "Duis aute irure dolor in reprehenderi",
        img: image13,
        editTime: "2 deq",
        comments: 15,
        clock: "7 deq",
        desc:
          "Fusce gravida ipsum tellus, quis pharetra lorem volutpat a. Proin feugiat tincidunt mattis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas facilisis felis lorem, quis tempus nisi sagittis sit amet. In bibendum sodales risus, at convallis mi pellentesque sit amet. Morbi magna mauris, condimentum non interdum sed, tincidunt vitae odio. Fusce maximus mauris nec ex mattis, sed maximus enim gravida. Maecenas sit amet metus odio. Vivamus interdum orci nibh, non tincidunt eros vulputate non. Ut gravida nulla nunc. Ut facilisis odio eget est blandit egestas.",
      },
      {
        id: 6,
        tag: "Social, Android, Mobile",
        title: "Duis aute irure dolor in reprehenderi",
        img: image9,
        editTime: "2 deq",
        comments: 15,
        clock: "7 deq",
        desc:
          "Fusce gravida ipsum tellus, quis pharetra lorem volutpat a. Proin feugiat tincidunt mattis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas facilisis felis lorem, quis tempus nisi sagittis sit amet. In bibendum sodales risus, at convallis mi pellentesque sit amet. Morbi magna mauris, condimentum non interdum sed, tincidunt vitae odio. Fusce maximus mauris nec ex mattis, sed maximus enim gravida. Maecenas sit amet metus odio. Vivamus interdum orci nibh, non tincidunt eros vulputate non. Ut gravida nulla nunc. Ut facilisis odio eget est blandit egestas.",
      },
      {
        id: 7,
        tag: "Social, Android, Mobile",
        title: "Duis aute irure dolor in reprehenderi",
        img: image9,
        editTime: "2 deq",
        comments: 15,
        clock: "7 deq",
        desc:
          "Fusce gravida ipsum tellus, quis pharetra lorem volutpat a. Proin feugiat tincidunt mattis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas facilisis felis lorem, quis tempus nisi sagittis sit amet. In bibendum sodales risus, at convallis mi pellentesque sit amet. Morbi magna mauris, condimentum non interdum sed, tincidunt vitae odio. Fusce maximus mauris nec ex mattis, sed maximus enim gravida. Maecenas sit amet metus odio. Vivamus interdum orci nibh, non tincidunt eros vulputate non. Ut gravida nulla nunc. Ut facilisis odio eget est blandit egestas.",
      },
      {
        id: 8,
        tag: "Social, Android, Mobile",
        title: "Duis aute irure dolor in reprehenderi",
        img: image9,
        editTime: "2 deq",
        comments: 15,
        clock: "7 deq",
        desc:
          "Fusce gravida ipsum tellus, quis pharetra lorem volutpat a. Proin feugiat tincidunt mattis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas facilisis felis lorem, quis tempus nisi sagittis sit amet. In bibendum sodales risus, at convallis mi pellentesque sit amet. Morbi magna mauris, condimentum non interdum sed, tincidunt vitae odio. Fusce maximus mauris nec ex mattis, sed maximus enim gravida. Maecenas sit amet metus odio. Vivamus interdum orci nibh, non tincidunt eros vulputate non. Ut gravida nulla nunc. Ut facilisis odio eget est blandit egestas.",
      },
      {
        id: 9,
        tag: "Social, Android, Mobile",
        title: "Duis aute irure dolor in reprehenderi",
        img: image9,
        editTime: "2 deq",
        comments: 15,
        clock: "7 deq",
        desc:
          "Fusce gravida ipsum tellus, quis pharetra lorem volutpat a. Proin feugiat tincidunt mattis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas facilisis felis lorem, quis tempus nisi sagittis sit amet. In bibendum sodales risus, at convallis mi pellentesque sit amet. Morbi magna mauris, condimentum non interdum sed, tincidunt vitae odio. Fusce maximus mauris nec ex mattis, sed maximus enim gravida. Maecenas sit amet metus odio. Vivamus interdum orci nibh, non tincidunt eros vulputate non. Ut gravida nulla nunc. Ut facilisis odio eget est blandit egestas.",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>