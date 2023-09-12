<script >
import sourceData from "../data.json"
export default{
  data(){
    return{
      
      planet:{}
    }
  },
  props:['planetName'],
  mounted(){
   
  },watch:{
    planetName(){
      this.updatePlanet();
    }
  },
  mounted(){
    this.updatePlanet();
  },
  methods:{
    updatePlanet(){
      this.planet = sourceData.find((item)=>item.name===this.planetName)  ;
      
    }
  }
}

</script>

<template >
  <div class="main">
    <h1 >{{planet.name  }}</h1>
  </div>
  
</template>

<style >
.main--hide{
  display:none;
}
</style>