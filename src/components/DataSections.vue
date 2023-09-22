<template>
 <section class="planet__data">
    <ul class="data__list">
        <li class="data__list__item">
             <span class="item__title">ROTATION TIME</span>
             <span class="item__content"> {{ planet.rotation }}</span>
        </li>
        <li class="data__list__item">
             <span class="item__title">REVOLUTION TIME</span>
             <span class="item__content"> {{ planet.revolution }}</span>
        </li>
        <li class="data__list__item">
             <span class="item__title">RADIUS</span>
             <span class="item__content"> {{ planet.radius }}</span>
        </li>
        <li class="data__list__item">
             <span class="item__title">AVERAGE TEMP</span>
             <span class="item__content"> {{ planet.temperature }}</span>
        </li>
        
    </ul>
 </section>
</template>
<script>
export default{
    data(){
        return{
            planet:this.planetProp
        }
    },
    props:["planetProp"],
    watch:{
        planetProp(){
            this.planet =this.planetProp;
        }
    }
}
</script>
<style>

.data__list{
    display:flex;
    flex-direction: column;
}
.data__list__item{
      
    border:1px solid var( --secondary);
    display:flex;
    justify-content: space-between;
    padding: 1em;
    margin-bottom: 0.5em;
}

.item__title{
color:var( --secondary);
}

.item__content{
font-weight: 600;
font-size: 1.5rem;
text-transform: uppercase;
}

@media(min-width: 600px){
    .data__list{
        display:flex;
        flex-direction: row;
        gap:1em;
    }
    .data__list__item{
        flex-direction: column;  
        width:100%;          
    }

    .item__title{
        font-size: 0.1rem;
        margin-bottom: 0.5em;
    }
    .item__content{
        font-weight: 600;
        font-size: 1rem;
        
    }
}

@media(min-width: 1200px){
    .item__title{
        font-size: 1rem;
    }
    .item__content{        
        font-size: 2rem;
        
    }
}

</style>