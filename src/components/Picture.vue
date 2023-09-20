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
            imgOverview: "",
            imgStructure: this.formatUrl(this.imgStructureProp),
            imgGeology: this.formatUrl(this.imgGeologyProp),
            model:this.modelProp
        }
    },
    props:["imgOverviewProp","imgStructureProp","imgGeologyProp","modelProp"],
    watch:{
        imgOverviewProp(){            
            this.imgOverview =  this.formatUrl(this.imgOverviewProp);
        },
        imgStructureProp(){            
            this.imgStructure =  this.formatUrl(this.imgStructureProp);
        },
        imgGeologyProp(){            
            this.imgGeology =  this.formatUrl(this.imgGeologyProp);
        },
        modelProp(){
            this.model = this.modelProp;
        }
    },
    methods:{
        formatUrl(url){
            let newUrl = ".."+  url.slice(1);
            
            return newUrl
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
</style>