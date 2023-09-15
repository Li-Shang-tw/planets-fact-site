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
  <div class="container2">    
    <RouterView  v-if="!showNavList"/>
  </div>
 <!--如果展現navlist,就不渲染頁面-->
   

</div>   

</template>

<style >
.container{
  width:90%;
  margin: 0 auto;
}

@media(min-width:1200px){
  .container2{
  width:90%;
  margin: 0 auto;
}
}

</style>
