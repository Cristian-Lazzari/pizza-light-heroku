<script >
  import {state} from '../state.js';
  import axios from 'axios'
 

  export default {


    data(){
        return{     
            state,
            arrProduct:[],
            arrCategory:[],
            categoryId: 0,
        }
    },
    methods:{
      getProduct(cat){
        this.categoryId = cat,
        axios
				.get(state.baseUrl + 'api/projects', {
					params: {
						category: this.categoryId,
					},
				})
				.then(response => {
					this.arrProduct = response.data.results.data;
				});
      },
      getCategory(){
        axios
				.get(state.baseUrl + 'api/categories', {})
				.then(response => {
					this.arrCategory = response.data.results;
				});
        this.arrCategory = this.arrCategory.shift()
      },
      changeCategory(value){

        this.getProduct(value)
      },
      getPrice(cent){
        let num = parseFloat(cent);
        num = num / 100;
        num = "€" + num  

        return num
      }

    },
    created(){
      this.getProduct(0);
      this.getCategory();


      this.state.actvPage = 2;
    },

  }
</script>

<template>
  <div class="menu">
    <div class="top-menu">
      <h1>Menu</h1>
      <select name="category" class="category" @change="changeCategory(categoryId)" v-model="categoryId">
        <option value="0">SCEGLI UNA CATEGORIA</option>
        <option value="2">Pizze Speciali</option>
        <option value="3">Pizze Rosse</option>
        <option value="4">Pizze Bianche</option>
        <option value="5">Dolci</option>
        <option value="6">Bibite</option>
      </select>
    </div>

    <div class="body-menu">

      <div class="product" :key="item.id" v-for="item in arrProduct">
        <div class="text-content">
          <h2>{{ item.name }}</h2>

          <div class="componenti">
            <h5>Ingredienti:</h5>
            <span v-for="item in item.tags" :key="item.id">{{ item.name + ' - ' }}</span>
          </div>

        </div>
        <img :src="state.getImageUrl(item.image)" alt="">
        <div class="price">{{ getPrice(item.price) }}</div>
      </div>

    </div>


  </div>
</template>

<style scoped lang="scss">
@use '../assets/styles/general.scss' as *;

.menu{
  padding: 1em;
  .top-menu{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1em;
    padding-top: 1em;
    h1{
      font-size: 3em;
      text-shadow: 2px -3px 3px black;
    }
    select{
      border: 2px solid $c-white;
      border-radius: 20px;
      color: $c-white;
      padding: 1em;
      background-color: $c-red-op-med;
    }

  }
  .body-menu{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1em;
    .product{
      display: flex;
      align-content: flex-start;
      justify-content: space-between;
      background-color: $c-black-op-max;
      border-radius: 10px;
      padding: 1em;
      position: relative;
      box-shadow: 3px 3px 5ch black;
      .price{
        position: absolute;
        bottom: 1rem;
        right: 1rem;
      }
      .text-content{
        h2{

          font-size: 1.7em;
          text-transform: uppercase;
        }
        h5{
          font-size: 1.2em;
          text-transform: uppercase;

        }
        gap:.5em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      img{
        width: 150px;
        height: 150px;
        border-radius: 150px;
        margin-bottom: 1.5rem;
      }
    }
  }
}
@media (max-width:1150px) {
  .product{
    flex-direction: column-reverse;
    align-items: center;
    justify-content: flex-end!important;
    .text-content{
      margin-bottom: 1.8em;
    }
    img{
      margin-bottom: 7px!important;
    }
  }
}
@media (max-width:750px) {
.product{
  h2{
    font-size: 1.3em!important;
  }
}
img{
        width: 100px!important;
        height: 100px!important;
        border-radius: 100px!important;

      }
}
@media (max-width:620px) {
  .product{
  h2{
    font-size: 1.3em!important;
  }
}
.body-menu{
  grid-template-columns: 1fr 1fr!important;
  
}
img{
        width: 110px!important;
        height: 110px!important;
        border-radius: 100px!important;

      }
}
@media (max-width:580px) {
  .product{
    font-size: .8em!important;
    h2{
      font-size: 1.2em!important;

    }
    h5{
      font-size: .9em!important;
    }
  
}
.body-menu{
  @include dfc;
  align-items: stretch;

  
}

}

</style>
