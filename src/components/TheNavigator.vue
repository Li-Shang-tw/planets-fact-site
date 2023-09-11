<script>
import sourceData from "../data.json"
export default{
    data(){
      return {
        planets:sourceData
      }  
    }
}
</script>

<template>
    
    <nav class="nav">
        <h2 class="logo">THE PLANETS</h2>
        <button class="nav__btn--toogle">
            <img src="../assets/images/icon-hamburger.svg" alt="icon-hamburger">
        </button>
        <ul class="nav_list">
            <li class="nav_item" v-for="planet in planets" :Key="planet.name">
                <router-link :to="{ name: 'MainView', params: { planetName:planet.name  }}">{{ planet.name }}</router-link>
            </li>
        </ul>
    </nav>
</template>
<style>
</style>