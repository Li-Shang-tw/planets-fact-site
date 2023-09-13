<script >
import sourceData from "../data.json"
import SwitchBtn from "../components/SwitchBtn.vue"
import Intro from "../components/Intros.vue"
import Pictures from "../components/Pictures.vue"
import DataSection from "../components/DataSections.vue"
export default{
  components:{SwitchBtn,Intro,DataSection,Pictures},
  data(){
    return{      
      planet:{},
      model:'overview',
      description:"",
      imgUrl:"", 
      colorName:""    
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
      this.updateData();
      this.colorName = "--"+(this.planet.name.toLowerCase())    
    },
    changeModel(model){
      this.model =model;
      this.updateData();
      
    },
    updateData(){
      if(this.model ==="overview"){
        this.description =this.planet.overview.content;
        this.url =this.planet.overview.source; 
        this.imgUrl = this.planet.images.planet;      
      }else if(this.model ==="structure"){
        this.description =this.planet.structure.content;
        this.url =this.planet.structure.source;  
        this.imgUrl = this.planet.images.internal;               
      }else if(this.model ==="geology"){
        this.description =this.planet.geology.content;
        this.url =this.planet.geology.source; 
        this.imgUrl = this.planet.images.geology;                    
      }
    }

  }
}

</script>

<template >
  <div class="wrap">
    <Pictures class="pictures" :imgUrlProp="imgUrl" />
    <SwitchBtn class="btn" @passModel="changeModel" :modelProp="model" :colorNameProp="colorName" />   
    <Intro class="intro" :planetProp ="planet" :descriptionProp="description" :urlProp="url"  :modelProp="model"/>    
    <DataSection class="data" :planetProp ="planet"/>
  </div>
 
  
</template>

<style >
.wrap{
  display:flex;
  flex-direction: column;
}

.btn{
  order:-1;
}

</style>