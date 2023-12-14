<script>
import { RouterView } from "vue-router";
import TheNavigator from "../src/components/TheNavigator.vue";
export default {
  components: { TheNavigator },
  data() {
    return {
      showNavList: false,
    };
  },
  methods: {
    ChangeshowNavList() {
      this.showNavList = !this.showNavList;
    },
  },
};
</script>

<template>
  <div class="wrap">
    <div class="container">
      <TheNavigator
        :showNavList="showNavList"
        @ChangeshowNavList="ChangeshowNavList"
      />

      <div class="container2">
        <!--只有手機板,會再顯示導覽列時,不渲染主畫面-->
        <div :class="{ main_hide: showNavList }"><RouterView /></div>
      </div>
    </div>
  </div>
</template>

<style>
.wrap {
  background-image: url("./assets/images/background-stars.svg");
}
.container {
  width: 90%;
  margin: 0 auto;
}
.main_hide {
  display: none;
}
@media (min-width: 600px) {
  .main_hide {
    display: block;
  }
}

@media (min-width: 1200px) {
  .container2 {
    width: 90%;
    margin: 0 auto;
  }
}
</style>
