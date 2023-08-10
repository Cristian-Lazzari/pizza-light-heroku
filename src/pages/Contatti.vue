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
    <h1>I nostri Contatti</h1>
    <div class="mail">pizzeria@gmail.com</div>
    <div class="tel">333344455</div>
    <h2>Dove trovarci</h2>
    <a href="https://www.google.com/maps/place/Pizzeria+Il+Capriccio+di+Leo/@43.5948219,13.2980245,17z/data=!3m1!4b1!4m6!3m5!1s0x132d9dbad592a331:0x349d7e3dd6b01160!8m2!3d43.5948219!4d13.3005994!16s%2Fg%2F11dxlc9msx?entry=ttu">

      <img src="../assets/img/googlemaps.png"  alt="">
    </a>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/styles/general.scss' as *;

img{
  width: 100%;
  max-width: 600px;
}
.contatti{
  @include dfc;
  flex-direction: column;
  gap: .5rem;
  
}
  
</style>
