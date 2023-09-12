<script >
import { RouterLink, RouterView } from 'vue-router'
import TheNavigator from "../src/components/TheNavigator.vue"
export default{
  components:{TheNavigator}
}
</script>

<template>
<div class="container">
   <TheNavigator/>
 <RouterView  />
</div>   

</template>

<style >
.container{
  width:90%;
  margin: 0 auto;
}
</style>
