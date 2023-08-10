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
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  color: $c-white;
  
  .small-cont{
    min-height: 85vh;
    @include dfj;
    flex-direction: column;
    gap: 1rem;    
    padding: 1rem;
    margin: 0 auto;
    max-width: 1150px;
  }
}

@media (max-width:700px) {
  
  .app{
    background-size:  100vh!important;

    
  }
}
</style>
