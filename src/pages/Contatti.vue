<script >
  import {state} from '../state.js'


  export default {

    data(){
        return{     
            state,
         //center: {lat: 51.093048, lng: 6.842120},
            
        }
    },
    
  }
</script>

<template>
  <div class="contatti">
    <h1>I nostri Contatti:</h1>
    <div class="mail">pizzeria@gmail.com</div>
    <div class="tel">333344455</div>
    <h2>Dove trovarci</h2>
    <img src="../assets/img/googlemaps.png" alt="">
  </div>
</template>

<style scoped lang="scss">
@use '../assets/styles/general.scss' as *;
img{
  width: 60%;
}
.contatti{
  @include dfc;
  flex-direction: column;
  gap: .5rem;
  
}
  
</style>
