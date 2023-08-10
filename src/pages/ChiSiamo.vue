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
        <div class="text-post">
          <h2>La nostra storia...</h2>
          <p>
            Qui, dal marzo del 2017, si servono pizze soffici, gustose e croccanti, preparate con impasti naturali a lunga lievitazione, apprezzati per la leggerezza e la facile digeribilità.
          </p>
          <p>
            Un impasto digeribile e ben lievitato è il giusto punto di partenza per una pizza sana, genuina e appetitosa. Il Capriccio di Leo è una pizzeria con forno in pietra a Monte San Vito, piccolo centro della provincia di Ancona. 
          </p>
        </div>
        
        <img src="../assets/img/abus.png" alt="">
      </div>

      <div class="post">

        
        <div class="text-post">
          <h2>GLI IMPASTI PIU BUONI E DIGERIBILI</h2>
          <p>
            Il Capriccio di Leo è una pizzeria a conduzione familiare con un’ampia sala e servizio d’asporto. Punto di forza del locale è la sua pizza ad alta digeribilità cotta nel forno a pietra, con pasta sottile e preparata con un impasto a lunga lievitazione. 
          </p>
          <p>
            La leggerezza e la genuinità del prodotto, così come la cura riservata alla selezione degli ingredienti e dei condimenti, rendono la pizzeria di Monte San Vito un riferimento anche per chi ha problemi di allergie e intolleranze alimentari.
          </p>
        </div>
        
        <img src="../assets/img/farine.png" alt="">
      </div>
    </div>

   


  </div>
</template>

<style scoped lang="scss">
@use '../assets/styles/general.scss' as *;

.about{

  text-align: center;


  .main-about{
    @include dfj;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;
      
  }
  .post{
    @include dfa;
    gap: 1rem;
    width: 70%;
    img{
      width: 350px;
      box-shadow: 2px 10px 15px black
    }
    .text-post{
      @include dfj;
      flex-direction: column;
      gap: 2rem;
    }
  }
  p{
    text-align: start;
  }
.main-about .post:nth-child(even){
    flex-direction: row-reverse;
    align-self: flex-end;
    p{
      text-align: end;
    }
  }
}

@media (max-width:950px) {
  .post{
    align-self: center;
    width: 100%!important;

  }
  .main-about .post:nth-child(even){
    flex-direction: row-reverse;
    align-self: center;
    p{
      text-align: end;
    }
  }
}

@media (max-width:550px) {
  .post{
    align-items: flex-start!important;
    .text-post{
      width: 30%;
    }

    img{
      width: 190px!important;
    }
  }

}

@media (max-width:350px) {
  .post{
    flex-direction: column!important;
    img{
      width: 190px!important;
    }
  }

}

</style>
