<template>
    <img :src="imgUrl" alt="">    
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