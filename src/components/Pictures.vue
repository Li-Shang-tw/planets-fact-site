<template>
    <section class="image_section">
    <img :src="imgUrl" alt="" class="planetImg"> 
</section>   
</template>
<script>
export default{
    data(){
        return{
            imgUrl: this.formatUrl(this.imgUrlProp)
        }
    },
    props:["imgUrlProp"],
    watch:{
        imgUrlProp(){            
            this.imgUrl =  this.formatUrl(this.imgUrlProp);
        }
    },
    methods:{
        formatUrl(url){
            let newUrl = "/src"+  url.slice(1);
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
    max-width:60%;    
}
</style>