<script>
import sourceData from "../data.json"
export default{
    data(){
      return {
        planets:sourceData               
      }  
    },
    props:["showNavList"],  
    computed:{
        color(){
            if(this.$route.params.planetName){
                return "var(--"+this.$route.params.planetName.toLowerCase()+")"
            }else{
                return "red";  //加上這個重新整理就不會無法渲染了
            }  
        }
    },  
    methods:{
        iconStyle(planetName){
            const iconColor ="var(--"+planetName.toLowerCase()+")";
            return  {
                /*---製作星球色的圓點 */
                'background-color':iconColor,
                width:'1em',
                'border-radius': "50%",
                color:iconColor,
                margin:[0,'1em'] ,
            }            
        },
        toggleNavList(){
           this.$emit('ChangeshowNavList');

        }
    }   
}
</script>

<template>  
    <nav class="nav">
        <div class="nav__head row">
            <h2 class="logo">THE PLANETS</h2>
        <button class="nav__btn--toogle" @click="toggleNavList">
            <img src="../assets/images/icon-hamburger.svg" alt="icon-hamburger">
        </button>
        </div>
       
        <ul class="nav_list" :class="{hide:!showNavList}">
            <li class="nav_item" v-for="planet in planets" :Key="planet.name">
                <router-link class="nav_link" :to="{ name: 'MainView', params: { planetName:planet.name  }}">
                    <div class="nav__link__icon"  :style="iconStyle(planet.name )">.</div>
                    {{ planet.name }}
                    <img src="../assets/images/icon-chevron.svg" class="nav__link__chevron" alt="icon-chevron">
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<style>  
.nav__head{
    justify-content: space-between;
} 

/*---按鈕樣式 */
.nav__btn--toogle{
    background-color: var(--background);
    border:0px;
} 
.nav_list{    
    min-height: 80vh; /*---手機板:導覽列占螢幕高度80%*/    
    display:flex;
    flex-direction: column;
   
}
.nav_item{
    flex-grow: 1;
    border-top:0.5px solid var(--second-btn)
}
/* navigator list 樣式*/
.nav_link{
    color:var(--primary);
    text-decoration: none;
    font-size: 1.5rem;
    display:flex;
    align-items: center;
    min-height: 10vh;  /*---每個項目佔總高度的14% */

}
.nav__link__chevron{
    width:0.5em;
    margin:0 0 0 auto;
 }
 .hide{
display:none;
} 


@media(min-width: 600px){
    /*---隱藏漢堡icon與永遠顯示導覽列 */
    .nav__btn--toogle{
        display:none;
    }
    .nav__head{
        justify-content: center;
        margin: 1.5em 0;
    }
    /*解除隱藏的list */
    .nav_list{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        min-height: 10vh; 
        border-bottom: 1px solid var(--second-btn);                     
    }   
    /*---縮小文字 */
    .nav_link{
        font-size: 1rem;       
    }
    /*---清除圖例 */
    .nav__link__icon,.nav__link__chevron{
        display:none;
    }
    .nav_item{     
        border-top:0; 
        flex-grow:0;/*取消之前設置的grow */        
    }
    /*----router-active---- */
    .router-link-active{
        border-top:3px solid;
        border-top-color: v-bind(color);
    }

    
}
@media(min-width:1200px){
    .nav{
        display:flex;
        justify-content: space-between;
        border-bottom: 0.05px solid var(--second-btn);
    }

    .nav_list{
        width:50%;
        justify-content: space-between;       
        border-bottom: 0px; 
    }
    .nav_item{
        margin:1.5em 0;        
        padding:0px;              
    }
    
}


</style>