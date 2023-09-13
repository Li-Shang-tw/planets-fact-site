<template>
    <section class="intro__section">
    <h1 class="into__title">{{ planet.name }}</h1>
    <p class="intro__description">
       {{ decription }}       
    </p>
    <p class="intro__link">
        Source:
        <a :href="url">Wikipedia
            <img src="../assets/images/icon-source.svg" alt="icon-source">
        </a>
    </p>
</section>
</template>
<script>
export default{
    data(){
        return{
            planet:this.planetProp,
            model:this.modelProp,
            decription:this.descriptionProp,
            url:this.urlProp
        }
    },
    props:["planetProp","modelProp","descriptionProp","urlProp"],
        
    watch:{
        planetProp(){
            this.planet=this.planetProp;      
            
        },
        modelProp(){
            this.model=this.modelProp;                    
        },
        descriptionProp(){
            this.decription =this.descriptionProp;
        },
        urlProp(){
            this.url =this.urlProp;
        }
        
    }
           
    
    }
   


</script>

<style>
.intro__section{
text-align: center;
}
.into__title{
    margin-bottom: 0.2em;
}
.intro__description{
    margin-bottom: 2em;
}
.intro__link{
    margin-bottom: 2em;
}
</style>