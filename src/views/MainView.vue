<script >
import sourceData from "../data.json"
import SwitchBtn from "../components/SwitchBtn.vue"
import Intro from "../components/Intros.vue"
import Pictures from "../components/Picture.vue"
import DataSection from "../components/DataSections.vue"
export default{
  components:{SwitchBtn,Intro,DataSection,Pictures},
  data(){
    return{      
      planet:{},
      model:'overview',
      description:"",
      imgOverview:"",
      imgStructure:"",
      imgGeology:"",
      colorName:""    
    }
  },
  props:['planetName'],
  computed:{
    isDesktop(){
      const clientWidth = document.body.clientWidth;
      if(clientWidth <1200){
        return false
      }else{
        return true
      }     
    }    
  }, 
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
      //取得planet的三種model的圖片
      this.imgOverview = this.planet.images.planet; 
      this.imgStructure = this.planet.images.internal;    
      this.imgGeology = this.planet.images.geology; 
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
  <div class="wrap">
    
    <Pictures class="pictures" :modelProp="model" :planetNameProp ="planet.name" />
    <!--在不同的裝置使用不同的架構-->
   <template v-if="isDesktop">
    <div class="container3" >
    <SwitchBtn class="btn" @passModel="changeModel" :modelProp="model" :colorNameProp="colorName" />   
    <Intro class="intro" :planetProp ="planet" :descriptionProp="description" :urlProp="url"  :modelProp="model"/>    
   </div>
  </template>
  <template v-else>   
    <SwitchBtn class="btn" @passModel="changeModel" :modelProp="model" :colorNameProp="colorName" />   
    <Intro class="intro" :planetProp ="planet" :descriptionProp="description" :urlProp="url"  :modelProp="model"/>    
  </template> 
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

@media(min-width:600px){
  .wrap{
    flex-wrap:wrap;
    flex-direction: row;
    justify-content: space-between;
  }
  .pictures{
    width:100%;
  }
  .btn{
   order:2;
   width:45%
  }
  .intro{
    order:1;
    width:45%
  }
  .data{
    order:3;
    width:100%;
  }
}

@media(min-width:1200px){  
  .pictures{
     width:45%;      
  }
  .container3{
    width:40%;
    display:flex;
    flex-direction: column;
  }
  .btn{
    width:100%;    
  }
  .intro{
      
    width:100%;
  }
 
}

</style>