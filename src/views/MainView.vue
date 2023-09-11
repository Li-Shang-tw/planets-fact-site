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

<template>
  <h1>{{planet.name  }}</h1>
</template>
