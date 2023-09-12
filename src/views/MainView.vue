<script >
import sourceData from "../data.json"
import SwitchBtn from "../components/SwitchBtn.vue"
import Intro from "../components/Intro.vue"
// import Pictures from "../components/Pictures.vue"
import DataSection from "../components/DataSection.vue"
export default{
  components:{SwitchBtn,Intro,DataSection},
  data(){
    return{      
      planet:{},
      model:'overview',
      description:"",
      url:"",
    }
  },
  props:['planetName'],
  watch:{
    planetName(){
      this.updatePlanet();
    }
  },
  mounted(){
    this.updatePlanet();
  },
  methods:{
    updatePlanet(){
      this.planet = sourceData.find((item)=>item.name===this.planetName);
      this.updateDescriptionAndUrl();    
    },
    changeModel(model){
      this.model =model;
      this.updateDescriptionAndUrl();
      
    },
    updateDescriptionAndUrl(){
      if(this.model ==="overview"){
        this.description =this.planet.overview.content;
        this.url =this.planet.overview.source;        
      }else if(this.model ==="structure"){
        this.description =this.planet.structure.content;
        this.url =this.planet.structure.source;        
      }else if(this.model ==="geology"){
        this.description =this.planet.geology.content;
        this.url =this.planet.geology.source;        
      }
    }

  }
}

</script>

<template >
   
    <SwitchBtn class="btn" @passModel="changeModel"/>   
    <Intro class="intro" :planetProp ="planet" :descriptionProp="description" :urlProp="url"  :modelProp="model"/>    
    <DataSection class="data"/>
  
 
  
</template>

<style >


</style>