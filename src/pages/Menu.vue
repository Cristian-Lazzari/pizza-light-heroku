<script >
  import {state} from '../state.js';
  import axios from 'axios'

  export default {
  components:{  },

    data(){
        return{     
            state,
            arrProduct:[],
            arrPizzaSp:[],
            arrPizzaR:[],
            arrPizzaB:[],
        }
    },
    methods:{
      getProduct(){
        axios
				.get(state.baseUrl + 'api/projects', {
					params: {
						category: this.categoryId,
					},
				})
				.then(response => {
					this.arrPizzaSp = response.data.results;
				});
      }
    },
    created(){
      this.getProduct();
    }
  }
</script>

<template>



  <div class="menu">

    
    <div class="categoria">
      <a href="" >PIZZE SPECIALI</a>
    </div>
    <div class="product-cont">
      <div
      class="product"
      :key="index"
      v-for="(item, index) in arrPizzaSp"
      >
          <img class="img" :src="state.getImageUrl(item.image)">
          <div class="text-c">
            <div class="title">{{item.name}}</div>
            <div class="sub-title">INGREDIENTI</div>
            <div class="text">({{ item.ingredienti }})</div>
            <div class="price">TODO€</div>
          </div>
      </div>
    </div>
    <div class="categoria">
      <a href="" >PIZZE ROSSE</a>
    </div>
    <div class="product-cont">
      <div
      class="product"
      :key="index"
      v-for="(item, index) in state.fakemenu[1]"
      >
          <img class="img" src="../assets/img/pizza-alto.png">
          <div class="text-c">
            <div class="title">{{item.titolo}}</div>
            <div class="sub-title">INGREDIENTI</div>
            <div class="text">({{ item.ingredienti }})</div>
            <div class="price">{{ item.prezzo }}</div>
          </div>
      </div>
    </div>
    <div class="categoria">
      <a href="" >PIZZE BIANCHE</a>
    </div>
    <div class="product-cont extended">
      <div
      class="product"
      :key="index"
      v-for="(item, index) in state.fakemenu[2]"
      >
          <img class="img" src="../assets/img/pizza-alto.png">
          <div class="text-c">
            <div class="title">{{item.titolo}}</div>
            <div class="sub-title">INGREDIENTI</div>
            <div class="text">({{ item.ingredienti }})</div>
            <div class="price">{{ item.prezzo }}</div>
          </div>
      </div>
    </div>


  </div>
</template>

<style scoped lang="scss">
@use '../assets/styles/general.scss' as *;

.menu{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1150px;
  padding: 1em;

}
.extended{
  height: 650px!important;
}
.product-cont{
  max-width: 1150px;
  width: 100%;
  margin: 0 auto;
  height:580px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
  z-index: 1!important;
  .product{
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      width: 350px;
      background-color: rgba(29, 24, 24, 0.637);
      padding: 5px;
      border-radius: 10px;
      z-index: 1!important;
      
      .img{
        align-self: center;
        width: 129px;
        height: 129px;
        background-size: cover;
        background-position: center;
        border-radius: 220px;
        border: 3px solid rgba(0, 0, 0, 0.435);
        flex-shrink: 0;
        
      }
      .text-c{
        gap: .3em;
        flex-shrink: 1;
        color: $c-white;
        @include dfj;
        flex-direction: column;
        text-shadow: 1.5px 1.5px 1.5px black;
        .title{
          font-size: 1.5em;
          text-shadow: 3px 3px 3px black;
        }
        .sub-title, .text{
          color: $c-white-op-max;
        }
      }
    }
    .product{
     flex-direction: row-reverse;
  }
}

.categoria{
  font-size: 50px;
  text-align: center;
  width: 100%;
  padding: 0rem;
  margin-bottom: 1rem ;
  a{
    color: $c-white;
    text-shadow: 1.5px 3.5px 5px black;

  }
}





@media (max-width:1230px) {
  
  .menu{
    align-items: center;
    width: 920px;
  }
  .product-cont{
    width: 720px;
    height: 800px;
  }
  .extended{
    height: 950px!important;
  }

}

@media (max-width:980px) {
  
  .menu{
    width: 730px;
  }
  .product-cont{
    width: 720px;
    height: 800px;
  }


}

@media (max-width:810px) {
  
  .menu{
    width: 720px;
  }
  .product-cont{
    width: 700px;
    height: 1100px;
    .product{
      flex-direction: column;
      width: 180px;
    }
  }
  .extended{
    height: 1500px!important;
  }

}
@media (max-width:790px) {
  .menu{
    width: 600px;
  }
  .product-cont{
    width: 550px;
    height: 1150px;
    .product{
      width: 170px;
    }
  }
 

}
@media (max-width:650px) {
  .menu{
    width: 360px;
  }
  .product-cont{
    
    width: 350px;
    height: 1500px;
  }
  .extended{
    height: 2000px!important;
  }
 
}
@media (max-width:520px) {
  .menu{
    width: 410px;
    margin: 0 auto;
  }
 
}
@media (max-width:410px) {
  .menu{
    width: 320px;
  }
  .product-cont{
    
    width: 300px;
    height: 1550px;
    .product{
      width: 140px;
      .text-c{

        font-size: 14px!important;
      }
      .title{
        font-size: 19px!important;
      }
    }
  }
  .extended{
    height: 2000px!important;
  }
}
</style>
