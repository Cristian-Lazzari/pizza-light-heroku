<script >
  import {state} from '../state.js'
  import axios from 'axios';
  import AppHeader from '../components/AppHeader.vue'
  export default {
    components:{ AppHeader },

    data(){
        return{     
            state,
        }
    },
    created(){
        axios.get(state.baseUrl + 'api/setting', {}).then(response=> this.state.setting = response.data.results );
   
        this.state.actvPage = 1;
    }

  }
</script>

<template>
    <div class="home">
        <AppHeader/>
        <div class="main-home">
            
            <div class="par par-1"  v-if="state.setting[0].status">
                <div class="overlay">
                    <div class="t-c">
                        <h2><span class="s1">ORDINA</span> IL NOSTRO <span class="s2">ASPORTO</span> </h2>
                        <span>La serata perfetta non esis... E invece esiste eccome! Nasce proprio dal pasto perfetto, quindi che aspetti prenota ora la tua pizza o il tavolo per poterla gustare da noi </span>
                    </div>
                    <router-link :to="{ name: 'prenota' }" class="btn" >Prenota asporto</router-link>
                </div>
            </div>
            <div class="par par-2"  v-if="state.setting[1].status">
            <div class="overlay">
                <div class="t-c">
                    <h2><span class="s1">PRENOTA ORA</span> IL TUO <span class="s2">TAVOLO</span></h2>
                    <span>E se volessi cenare proprio da noi? Prenota subito il tuo tavolo ti aspettiamo a cena da noi!</span>
                </div>
                <router-link :to="{ name: 'prenotaServizio' }" class="btn" >Prenota un tavolo</router-link>
            </div>
            </div>
            <div class="par par-3">
                <div class="overlay">
                    <div class="t-c">
                        <h2>SCOPRI IL NOSTRO MENU</h2>
                        <span>
                            Se ancora non hai provato le sfiziosità della nostra cucina devi assolutamente vedere il nostro menù
                        </span>
                    </div>
                    <router-link :to="{ name: 'menu' }" class="btn" >Menù</router-link>
                </div>
            </div>
        </div>

    </div>

</template>

<style scoped lang="scss">
@use '../assets/styles/general.scss' as *;

*{
    font-family: 'Gabarito', cursive;
}

.main-home::-webkit-scrollbar{
        
        width: 10px;
        height: 10px;
        
    }

    .main-home::-webkit-scrollbar-thumb {
        border-radius: 20px;
        background: $c-header;
        
    }
    .main-home::-webkit-scrollbar-track {
        border-radius: 20px;
        background: rgba(52, 4, 7, 0.786);
        
    }
    .main-home::-webkit-scrollbar-thumb:hover {
        border-radius: 20px;
        background-color: $c-nav-link;
        border: 2px solid $c-header;
        
    }
.home{
    position: fixed;
    top: 0;
    right: 0;
    overflow: hidden;
    padding-bottom: 1rem;
    height: calc(100%);
    .main-home{
        padding-bottom: 1rem;
        //margin-bottom: 1rem;
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        height: 60%;
        width: calc(100% - 2rem);
        margin-left: 2rem;
        display: flex;
        gap: 3rem;
        
        
        .par{
            
            scroll-snap-align: start;
            flex: 1 0 auto;
            height: 100%;
            width: 100%!important;
            color: $c-white;
            //filter: grayscale(50);
            background-position: center;
            background-size: cover;
            position: relative;
            .overlay{
                background-color: rgba(0, 0, 0, 0.522);
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                
                padding: 2rem;
                @include dfc;
                gap: 2rem;
                justify-content: space-between;
                .t-c{
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    h2{
                        line-height: 38px;
                        max-width: 200px;
                        font-size: 40px;
                        .s1{
                            font-size: 50px;
                            
                        }
                        .s2{
                            font-size: 60px;
                            
                        }
                    }
                    
                }
            }

        }
    }
}
.par-1{
    background-image: url('../assets/img/pizza-4.png');
}
.par-2{
    background-image: url('../assets/img/pizza-2.png');
}
.par-3{
    background-image: url('../assets/img/pizza-olio.png');

}

</style>
