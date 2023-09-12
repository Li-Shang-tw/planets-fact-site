<script >
import sourceData from "../data.json"
import SwitchBtn from "../components/SwitchBtn.vue"
import Intro from "../components/Intro.vue"
import Pictures from "../components/Picture.vue"
import DataSection from "../components/DataSection.vue"
export default{
  components:{SwitchBtn,Intro,Pictures,DataSection},
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
 
    <DataSection/>
    <Intro/>
    <Pictures/>
    <SwitchBtn/>

  
  
</template>

<style >

</style>