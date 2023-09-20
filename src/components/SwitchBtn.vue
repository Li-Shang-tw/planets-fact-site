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
    justify-content: space-between;
    padding:  1em 0;
    margin-top:1em;
}

.switch__btn{
    font-weight: 500;
    color:var(--primary);    
}

.switch_btn_no{
    display:none;    
}

.switch__btn__subtitle{
    display: none;
}

@media(min-width:600px){
    /*---解除隱藏 */
    .switch_btn_no{
    display:inline;
    margin-right: 1em;    
    }
    .switch__btn__subtitle{
    display: inline;
    }
    .switch__list{
    border:0;
    flex-direction:column;
    justify-content: center;    
    }
    .switch__btn{
       border:1px solid var(--secondary);
       padding:1em;
       margin-bottom: 1em;
    }    
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
            const currentWidth =document.body.clientWidth; /*-取得當前裝置的大小-*/          
            const colorVar = "var("+this.color+")";
            if(btn===this.model){
                if(currentWidth<600){
                    return{ 'border-bottom':["0.5em","solid"],
                        'border-color':colorVar,/*為何要這樣才能設定border的顏色*/                         
                    }
                }else{
                    return{ 'background-color':colorVar }
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
