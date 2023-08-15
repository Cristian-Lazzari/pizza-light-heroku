<script >
  
  import AppHeader from './components/AppHeader.vue'
  import AppFooter from './components/AppFooter.vue'

  export default {
  components:{ AppFooter, AppHeader }
  }
</script>

<template>

    <div class="app">
      <div class="small-cont">
        <AppHeader />
        <router-view></router-view>
      </div>
      <AppFooter />
    </div>

  
</template>

<style lang="scss">
@use './assets/styles/general.scss' as *;
body{
  background-color: black;
}


  .app{    
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url('./assets/img/pizza-2.png');
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;

  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  color: $c-white;

  .small-cont{
      min-height: 85vh;
      @include dfj;
      flex-direction: column;
      gap: .3em;    
      padding-top: 1rem;
      margin: 0 auto;
      max-width: 1150px;
    }
  }

// @media (max-width:650px) {

//   .app{
//     background-size: 100% 100vh!important;
    
//   }
  
//}

@media (max-width:1000px) {
    html::before {
      content: ' ';
      display: block;
      background-image: url('./assets/img/pizza-2.png');
      background-position: center; 
      
      background-size: cover;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      position: fixed;
      z-index: -10; 
  }
  .app{
    background-image: none!important;
  }
}
</style>
