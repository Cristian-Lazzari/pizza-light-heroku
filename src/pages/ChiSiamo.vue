<script >
  import {state} from '../state.js'

  export default {


    data(){
        return{     
            state,
        }
    },
    created(){
   
      this.state.actvPage = 3;
    }
    
  }
</script>

<template>
  <div class="about">
    <header>
      <h1>Il Capriccio di Leo</h1>
    </header>
    
    <div class="main-about">
    <h1>LA NOSTRA PIZZERIA</h1>
    <div class="post-container">
      <div class="post">
        <div class="text">
          <h4>LA NOSTRA STORIA...</h4>
          <p>
            Qui, dal marzo del 2017, si servono pizze soffici, gustose e croccanti, preparate con impasti naturali a lunga lievitazione, apprezzati per la leggerezza e la facile digeribilità.
          </p>
        </div>
        <img src="../assets/img/abus.png" alt="">
      </div>
      <div class="post">
        <div class="text">
          <h4>LA NOSTRA STORIA...</h4>
          <p>
            Il Capriccio di Leo è una pizzeria a conduzione familiare con un’ampia sala e servizio d’asporto. Punto di forza del locale è la sua pizza ad alta digeribilità cotta nel forno a pietra, con pasta sottile e preparata con un impasto a lunga lievitazione. 
          </p>
        </div>
        <img src="../assets/img/abus.png" alt="">
      </div>
      <div class="post">
        <div class="text">
          <h4>GLI IMPASTI PIU BUONI E DIGERIBILI</h4>
          <p>
            Un impasto digeribile e ben lievitato è il giusto punto di partenza per una pizza sana, genuina e appetitosa. Il Capriccio di Leo è una pizzeria con forno in pietra a Monte San Vito, piccolo centro della provincia di Ancona. 
          </p>
        </div>
        <img src="../assets/img/farine.png" alt="">
      </div>
      <div class="post">
        <div class="text">
          <h4>GLI IMPASTI PIU BUONI E DIGERIBILI</h4>
          <p>
          La leggerezza e la genuinità del prodotto, così come la cura riservata alla selezione degli ingredienti e dei condimenti, rendono la pizzeria di Monte San Vito un riferimento anche per chi ha problemi di allergie e intolleranze alimentari.
          </p>
        </div>
        <img src="../assets/img/farine.png" alt="">
      </div>
    </div>


    </div>

</div>

   


</template>

<style scoped lang="scss">
@use '../assets/styles/general.scss' as *;

.about{
  overflow: hidden;
  header{
    padding: 10px 0;
    background-color: $c-header;
    
    h1{
      text-align: center;
      font-size: 30px;
      color: white;
      font-family: 'Playball', cursive;
      text-shadow: -3px -3px 15px black;
    }
  }
  .main-about{
    overflow: auto;
    padding: 2rem;
    .post-container{
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      .post{
        @include dfc;
        gap: 1rem;
        .text{
          display: flex;
          flex-direction: column;
          gap: .5rem;
        }
        img{
          width: 60%;
        }
      }
    }
  }
}




</style>