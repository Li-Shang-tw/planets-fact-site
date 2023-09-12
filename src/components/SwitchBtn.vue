<template>
    <ul class="switch__list">
        <li class="switch__btn" @click="getModel('overview')">
            <span class="switch_btn_no">01</span>
             OVERVIEW 
        </li>
        <li class="switch__btn" @click="getModel('structure')">
            <span class="switch_btn_no">02</span>
             INTERNAL <span class="switch__btn__subtitle"> STRUCTURE</span>
        </li>
        <li class="switch__btn"  @click="getModel('geology')">
            <span class="switch_btn_no">01</span>
             SURFACE <span class="switch__btn__subtitle">GEOLOGY </span> 
        </li>
    </ul>
</template>

<style>
.switch__list{
    border:1px solid var(--secondary);
    display:flex;
    justify-content: space-around;
    padding:  1em 0;
}

.switch__btn{
    font-weight: 500;
    color:var(--secondary);
}

.switch_btn_no{
    display:none;
    
}

.switch__btn__subtitle{
    display: none;
}
</style>

<script>
export default{
    methods:{
        getModel(model){
            this.$emit('passModel',model);
        }
    }
}
</script>
