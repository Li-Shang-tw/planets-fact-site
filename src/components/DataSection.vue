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

</style>