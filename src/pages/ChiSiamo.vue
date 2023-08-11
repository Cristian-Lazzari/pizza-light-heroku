<script >
  import {state} from '../state.js'

  export default {
  components:{  },

    data(){
        return{     
            state,
        }
    },
    
  }
</script>

<template>
  <div class="about">
    <h1>LA NOSTRA PIZZERIA</h1>

    <div class="main-about">
      <div class="post">
        <div class="row">
          <div class="header-section">
            <h2>LA NOSTRA STORIA...</h2>
            <p>
              Qui, dal marzo del 2017, si servono pizze soffici, gustose e croccanti, preparate con impasti naturali a lunga lievitazione, apprezzati per la leggerezza e la facile digeribilità.
            </p>
          </div>
          
          <img src="../assets/img/abus.png" alt="">
        </div>        
        <div class="row">
          <p class="header-section">
            Il Capriccio di Leo è una pizzeria a conduzione familiare con un’ampia sala e servizio d’asporto. Punto di forza del locale è la sua pizza ad alta digeribilità cotta nel forno a pietra, con pasta sottile e preparata con un impasto a lunga lievitazione. 
          </p>
          
          <img src="../assets/img/abus.png" alt="">
        </div>
      </div>

      <div class="post">
        <div class="row">
          <div class="header-section">
            <h2>GLI IMPASTI PIU BUONI E DIGERIBILI</h2>
            <p>
              Un impasto digeribile e ben lievitato è il giusto punto di partenza per una pizza sana, genuina e appetitosa. Il Capriccio di Leo è una pizzeria con forno in pietra a Monte San Vito, piccolo centro della provincia di Ancona. 
            </p>
            
          </div>
          <img src="../assets/img/farine.png" alt="">
        </div>
        <div class="row">
          <p class="header-section">
            La leggerezza e la genuinità del prodotto, così come la cura riservata alla selezione degli ingredienti e dei condimenti, rendono la pizzeria di Monte San Vito un riferimento anche per chi ha problemi di allergie e intolleranze alimentari.
          </p>

          <img src="../assets/img/farine.png" alt="">
        </div>
      </div>
    </div>

   


  </div>
</template>

<style scoped lang="scss">
@use '../assets/styles/general.scss' as *;
.about{
  @include dfc;
  flex-direction: column;
  gap: 1em;
  padding: 1em;
  text-align: left;
  h1{
    font-size: 2em;

  }
  .main-about .post:nth-child(even){
    .row{
      flex-direction: row-reverse
    }
  }
  .main-about{
    @include dfc;
    flex-direction: column;
    gap: 1em;
    max-width: 600px;

    .post{
      @include dfc;
      flex-direction: column;
      gap: 1em;
      padding-bottom: 3em;
      .row{
        @include dfc;
        flex-wrap: wrap;
        gap: 1em;
        letter-spacing: 1.5px;

      }
      .header-section{
        width: 50%;
        @include dfj;
        flex-direction: column;
        justify-content: space-around;
        padding: 1em;
        flex: 1 1 auto;
        background-color: $c-black-op-med;
        

      }
      img{
        flex: 0 0 auto;
        width: calc(50% - 1em);
      }
      

    }
  }
}

@media (max-width:650px) {
  .main-about{
    width: 100%;

  }
  .row{
    flex-direction: column;

  }
  .header-section{
    width: 100%!important;
  }
  img{
        flex: 0 0 auto;
        width: 100%!important;
  }
  .main-about .post:nth-child(even){
    .row{
      flex-direction: column!important;
    }
  }
}


</style>