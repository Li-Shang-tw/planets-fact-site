<template>
    <section class="image_section">   
       
       <template v-if="model=='overview'">
        <img :src="imgOverview" alt="imgOverview" class="planetImg"> 
       </template>
       <template  v-else-if="model=='structure'">
        <img :src="imgStructure" alt="imgStructure" class="planetImg"> 
       </template>
       <template  v-else-if="model=='geology'">
        <div class="img_box">
            <img :src="imgOverview" alt="imgOverview" class="planetImg planetImg1"> 
        <img :src="imgGeology" alt="imgGeology" class="planetImg planetImg2"> 
        </div>        
       </template>
       

    
</section>   
</template>
<script>

export default{
    data(){
        return{
            planetName:this.planetNameProp,
            model:this.modelProp,
            imgOverview:"",
            imgStructure:"",
            imgGeology:"" 
        }
    },
    props:["modelProp","planetNameProp"],
    watch:{
        planetNameProp(){
            this.planetName=this.planetNameProp;
            this.getImg(this.planetName);
        },
        modelProp(){
            this.model = this.modelProp;
        }
    },
    methods:{
        getImg(name){
            const nameLowcase =name.toLowerCase();
            this.imgOverview =  new URL(`../assets/images/planet-${nameLowcase}.svg`, import.meta.url).href;
            this.imgStructure =new URL(`../assets/images/planet-${nameLowcase}-internal.svg`, import.meta.url).href;
            this.imgGeology = new URL(`../assets/images/geology-${nameLowcase}.png`, import.meta.url).href;
        }
    }   
    }
</script>

<style>
.image_section{
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 4em;
}
.planetImg{
    max-width:50%;    
}
.planetImg2{
    max-width:20%;  
    margin-left:-35%; 
    margin-bottom: -12%;  
}
.img_box{
display:flex;
align-items: flex-end;
justify-content: center;


}
</style>