<template>       
    <ul class="switch__list">
        <li class="switch__btn" :style="currentBtn('overview')"   @click="getModel('overview')">
            <span class="switch_btn_no">01</span>
             OVERVIEW 
        </li>
        <li class="switch__btn" :style="currentBtn('structure')"  @click="getModel('structure')">
            <span class="switch_btn_no">02</span>
             INTERNAL <span class="switch__btn__subtitle"> STRUCTURE</span>
        </li>
        <li class="switch__btn"   :style="currentBtn('geology')"  @click="getModel('geology')">
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
    margin-top:1em;
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
    data(){
        return{            
            model:this.modelProp, 
            color:this.colorNameProp                    
        }
    },
    props:["modelProp","colorNameProp"],    
    methods:{
        getModel(model){
            this.$emit('passModel',model);
        },
        currentBtn(btn){
            const colorVar = "var("+this.color+")";
            if(btn===this.model){
                return{ 'border-bottom':["0.5em","solid"],
                        'border-color':colorVar,/*為何要這樣才能設定border的顏色*/                         
                    }
            }
            
        }

    },
    watch:{
        colorNameProp(){
            this.color = this.colorNameProp;          
        },modelProp(){
            this.model = this.modelProp;            
        }             
    }
}
</script>
