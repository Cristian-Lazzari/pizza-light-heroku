
<script >
  import {state} from '../state.js';

 export default{
  data(){
    return{
      state,
    }
  },
  methods: {
        openSide(){
            if(this.state.sideMenuValue == 0){
                this.state.sideMenuValue = 1;
            }else{
                this.state.sideMenuValue = 0;
            }
           
        },
        updateActvPage(page){
          this.state.actvPage = page;
        }
    }
 }
</script>


<template>
  <div class="nav">
    <div class="top">
      <router-link :to="{ name: 'home' }" :class="state.actvPage == 1 ? 'active-link' : '' " class="nav-link" @click="updateActvPage(1)" >home</router-link>
      <router-link :to="{ name: 'menu' }" :class="state.actvPage == 2 ? 'active-link' : '' " class="nav-link" @click="updateActvPage(2)" >menu</router-link>
      <router-link :to="{ name: 'chi-siamo' }" :class="state.actvPage == 3 ? 'active-link' : '' " class="nav-link" @click="updateActvPage(3)" >chi siamo?</router-link>
      <router-link :to="{ name: 'contatti' }" :class="state.actvPage == 4 ? 'active-link' : '' " class="nav-link" @click="updateActvPage(4)" >contatti</router-link>
      <router-link :to="{ name: 'prenota' }" :class="state.actvPage == 5 ? 'active-link' : '' " class="nav-link" @click="updateActvPage(5)" >Ordina d'Asporto</router-link>
      <router-link :to="{ name: 'prenotaServizio' }" :class="state.actvPage == 6 ? 'active-link' : '' " class="nav-link" @click="updateActvPage(6)" >Prenota tavolo</router-link>
    </div>
    <div class="bottom-footer">
      <div class="sec-1">
        <h4>Dove puoi trovarci</h4>
        <p>Borghetto | via borghetto 69</p>
      </div>
      <div class="sec-2">
        <h4>Orari d'apertura</h4>
        <div class="cont-giorni">
          <span>lunedì</span>
          <span>martedì</span>
          <span>giovedì</span>
          <span>venerdì</span>
          <span>sabato</span>
          <span>domenica</span>
        </div>
        <div class="cont-orari">
          <span class="time" >chiusi</span>         
          <span class="time" >16:00 - 22:00</span>
          <span class="time" >16:00 - 22:00</span>
          <span class="time" >16:00 - 22:00</span>
          <span class="time" >16:00 - 22:00</span>
          <span class="time" >16:00 - 22:00</span>
        </div>

      </div>
      <div class="sec-3">

      </div>
    </div>
  </div>
</template>
<!-- 


<span>16:00 - 22:00</span> -->
<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;

.nav{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  background-color: $c-nav;
  width: 30%;
  text-align: center;
  .top{
    @include dfc;
    width: 100%;
    padding: 2rem;
    height: 60%;
    flex-direction: column;
    gap: 2rem;
    
    .nav-link{
      max-width: 150px;
      text-transform: uppercase;
      line-height: 2rem;
      color: $c-nav-link;
      font-family: 'Gabarito', cursive;
      font-size: 1.8rem;
    }
    .active-link{
      color: $c-white;
    }
  }
  .bottom-footer{
    @include dfa;
    flex-direction: column;
    gap: 2rem;
    justify-content: flex-end;
    text-shadow: 1px 1px 8px black;
    height: 40%;
    width: 100%;
    color: $c-f-t;
    background-color: $c-footer-nav;
    .sec-1{
      @include dfj;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
    }
    .sec-2{
      @include dfj;
      flex-wrap: wrap;
      gap: 1rem;
      width: 100%;
      justify-content: space-around;
      h4{
        
        width: 100%;
        
      }
      .cont-giorni, .cont-orari{
        @include dfj;
        flex-direction: column;
        gap: .5rem;
        text-align: left;
        text-transform: uppercase;
        
        .time{
          text-align: center;
        }
      }

    }
    
  }
}

</style>


