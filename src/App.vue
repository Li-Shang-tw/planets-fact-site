<script >
import { RouterLink, RouterView } from 'vue-router'
import TheNavigator from "../src/components/TheNavigator.vue"
export default{
  components:{TheNavigator},
  data(){
    return{
      showNavList:false
    }    
  },
  methods:{
    ChangeshowNavList(){
      this.showNavList =!this.showNavList;
    }
  }
}
</script>

<template>
<div class="container">
   <TheNavigator :showNavList="showNavList" @ChangeshowNavList="ChangeshowNavList"/>
  
    <RouterView  v-if="!showNavList"/>
 <!--如果展現navlist,就不渲染頁面-->
   

</div>   

</template>

<style >
.container{
  width:90%;
  margin: 0 auto;
}


</style>
