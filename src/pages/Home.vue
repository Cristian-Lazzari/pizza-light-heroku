<script >
  import {state} from '../state.js'
  import axios from 'axios';
  export default {


    data(){
        return{     
            state,
        }
    },
    created(){
        axios.get(state.baseUrl + 'api/setting', {}).then(response=> this.state.setting = response.data.results );
   
    }

  }
</script>

<template>

    <div class="main-home">
        <div v-if="state.setting[2].status" class="ferie">
            Finalmente un po di riposo anche per noi.. siamo in ferie dal {{ state.setting[2].from }} e torneremo il  {{ state.setting[2].to }}
        </div>
        <div class="par">
            <span>Se ancora non hai provato le sfiziosità della nostra cucina devi assolutamente vedere il nostro menù</span>
            <button class="btn btn-2" ><router-link :to="{ name: 'menu' }" class="nav-link active" >Menù</router-link></button>
        </div>
        <div class="par par-2">
            <span>La serata perfetta non esis... E invece esiste eccome! Nasce proprio dal pasto perfetto, quindi che aspetti prenota ora la tua pizza o il tavolo per poterla gustare da noi </span>
            <button class="btn btn-1" ><router-link :to="{ name: 'prenota' }" class="nav-link active" >Prenota asporto</router-link></button>
        </div>
        <div class="par par-2">
            <span>E se volessi cenare proprio da noi? Prenota subito il tuo tavolo ti aspettiamo a cena da noi!</span>
            <button class="btn btn-1" ><router-link :to="{ name: 'prenotaServizio' }" class="nav-link active" >Prenota un tavolo</router-link></button>
        </div>
    </div>

</template>

<style scoped lang="scss">
@use '../assets/styles/general.scss' as *;


.main-home{
    display: grid;
    grid-template-columns: 2fr 1.5fr;
    gap: 1.5rem;
    padding: 1em;
}
    
.par{
    align-self: flex-start;
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    max-width: 1000px;
    line-height: 30px;
    background-color: $c-black-op-med ;
    color: $c-white-op-max ;
    letter-spacing: 1.5px;
    padding: 1rem;
    
}
.par-2{
    // margin-left: 15%;
    max-width: 500px;
    align-self: flex-end;
}
span{
    opacity: 1;
}


.btn {
border: 3px solid $c-white;
padding: .6rem 1rem;
transition: ease-in-out 0.3s;
background-color: transparent;
color: $c-white;
font-weight: bold;
font-size: 16px;
white-space: nowrap;
transition: all cubic-bezier(0.075, 0.82, 0.165, 1) .5s;
}
.btn-1, .btn-2{
    align-self: flex-end;
    margin-bottom: 1rem;
    margin-right: 1rem;
}
a{
padding: 1.2rem 2.2rem;
color: $c-white;
}

.btn:hover {
transform: scale(1.1) rotate(6deg);
background-color: $c-white;
color: $c-white;
}
.btn:hover a{
color: black;
}

@media (max-width:790px)  {
    .btn:hover {
transform: scale(1) rotate(0deg) !important;
background-color: transparent!important;
color: $c-black!important;
}
.btn:hover a{
color: $c-white!important;
}
}
@media (max-width:590px) {
    //menu hamburger
.main-home{
    grid-template-columns: 1fr;
}
}

</style>
