<script >
  import {state} from '../state.js';
  import axios from 'axios'

  export default {
  components:{  },

    data(){
        return{     
            state,
            arrProduct:[],
            arrCategory:[],
            categoryId: 0,
            totCart:0,
            name:'',
            phone:'',
            time:'',

        }
    },
    methods:{
      getProduct(cat){
        this.categoryId = cat,
        axios
				.get('http://127.0.0.1:8000/api/projects', {
					params: {
						category: this.categoryId,
					},
				})
				.then(response => {
					this.arrProduct = response.data.results.data;
				});
      },
      changeCategory(value){
        this.getProduct(value)
      },
      getPrice(cent){
        let num = parseFloat(cent);
        num = num / 100;
        num = "€" + num  

        return num
      },
      opencart(){
        if(state.sideCartValue){
          state.sideCartValue=0
        }else{
          state.sideCartValue=1
        }
      },
      sendOrder(){
        let data = {
          name:this.name,
          phone:this.phone,
          time:this.time,
          arrId:this.state.arrId,
          arrQt:this.state.arrQt,
          
        };
        axios.post(state.baseUrl + 'api/orders', {data}).then(response=>(response))
      },
      newItem(title, counter, tprice, price) {
        let newitem={
          title,
          counter,
          totprice: tprice,
          price: parseInt(price),
        }
        return newitem;
      },
      addItem(title, counter, price, id){
        if(counter<=0){
          return console.log('ci hai provato amico!')
        }
        let check= false;
        let newitem= this.newItem(title, counter, price*counter, price);
        console.log(newitem);
        this.state.arrCart.forEach((element, index) => {
          if(element.title == title){
            element.counter += counter
            element.totprice = element.counter * element.price
            check=true
            this.state.arrQt[index] += counter
          }

        });
      
        if(!check){
          this.state.arrCart.push(newitem);
          this.state.arrId.push(id)
          this.state.arrQt.push(counter)
        }
        this.arrProduct.forEach(element => {
          if(element.name == title){
            element.counter = 0
          }
        });
      },
      removeItem(title){
        this.state.arrCart.forEach((element, i) => {
          if(element.title== title){
            if(element.counter>=0){
            element.counter --;
            element.totprice -= element.price
            this.state.arrQt[i]--;
            }if(element.counter == 0){
              let nwi = i - 1;
              this.state.arrId.splice(i, 1)
              this.state.arrQt.splice(i, 1)
              let newarrCart = this.state.arrCart.filter((element) => {
                return element.title !== title;
              });
              this.state.arrCart=[];
              this.state.arrCart = newarrCart;
              }
          }
        });

      },
      upCounter(id){
        this.arrProduct.forEach(element => {
          if(element.id == id){
            element.counter ++
          }
        });

      },
      downCounter(id){
        this.arrProduct.forEach(element => {
          if(element.id == id){
            if(element.counter>=1){
              element.counter --
            }
          }
        });
      }
    },
    created(){
      this.getProduct(0);

     
      this.state.actvPage = 5;
    },

  }
</script>

<template>
  <div class="menu">
    <div class="top-menu">
      <h1>Ordina d'Asporto</h1>
      <select name="category" class="category" @change="changeCategory(categoryId)" v-model="categoryId">
        <option value="0">SCEGLI UNA CATEGORIA</option>
        <option value="2">Pizze Speciali</option>
        <option value="3">Pizze Rosse</option>
        <option value="4">Pizze Bianche</option>
        <option value="5">Dolci</option>
        <option value="6">Bibite</option>
      </select>
    </div>
    <div @click="opencart()"  class="icon-cart"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg></div>
    <div :class="state.sideCartValue ?  'cart-off' : 'cart-on'">
      <!-- <div class="icon-cart"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg></div> -->
      <div v-for="item in state.arrCart" :class="state.sideCartValue ?  'item-off' : 'item-on'" :key="item.id">
        <div :class="state.sideCartValue ?  'sub-item-off' : 'sub-item-on tag'">{{ item.title }}</div>
        <div :class="state.sideCartValue ?  'sub-item-off' : 'sub-item-on tag'">{{ item.counter }}</div>
        <div :class="state.sideCartValue ?  'sub-item-off' : 'sub-item-on tag'">{{ getPrice(item.totprice) }}</div>
        <svg :class="state.sideCartValue ?  'sub-item-off' : 'sub-item-on'" @click="removeItem(item.title)"  style="color: red" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" fill="red"></path> <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" fill="red"></path> </svg>
      </div>
      <div :class="state.sideCartValue ?  'item-off' : 'item-on'">
        <div :class="state.sideCartValue ?  'sub-item-off' : 'sub-item-on'">
          Totale:{{getPrice(totCart)}}
        </div>
        <div :class="state.sideCartValue ?  'sub-item-off' : 'sub-item-on'">
          <router-link :to="{ name: 'conferma' }" class="btn" >Completa il tuo Ordine</router-link>
        </div>
      </div>

    </div>
 

    <div class="body-menu">

      <div class="product" :key="item.id" v-for="item in arrProduct" @submit.prevent="addProduct" >
        
        
        <img :src="state.getImageUrl(item.image)" alt="">

        <h2>{{ item.name }}</h2>

        <div class="tags">
          <div class="tag" v-for="tag in item.tags" :key="tag.id">
            <span>{{ tag.name }}</span>
          </div>
        </div>

        <div class="price">{{ getPrice(item.price) }}</div>

        <div class="btn-cont">
          <div @click="upCounter(item.id)" class="plus-minus">+</div>
          <div class="counter">{{item.counter}}</div>
          <div @click="downCounter(item.id)" class="plus-minus">-</div>
        </div>
        <div  @click="addItem(item.name, item.counter, item.price, item.id)" class="btn">aggiungi</div>
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
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .product{
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.4em;
      padding: 1em;
      border-radius: 50px;
      background-color: $c-white-op-min;
      position: relative;
      box-shadow: 3px 3px 5ch black;
      h2{
        
      }
      .price{
        width: 100%;
        text-align: right
      }
      .btn-cont{
        @include dfc;
        gap: .7em;
        .plus-minus{
          border: 2px solid $c-white;
          background-color: rgba(0, 0, 0, 0);
          @include dfc;
          text-align: center;
          color: $c-white;
          height: 30px;
          width: 30px;
          border-radius: 10px;
          font-size: 1.2em;
          cursor: pointer;
          user-select: none;
        }
      }
      img{
        width: 50px;
        height: 50px;
        border-radius: 50px;
        
      }
    }
  }
}
.tags{
  gap: 1em;
  display: flex;
  white-space: wrap;
  width: 100%;
  flex-wrap: wrap;
}
.tag{
  display: flex;
  gap: .4em;
  background-color: $c-black-op-med;
  padding: .5em;
  border-radius: 30px
}

.cart-mobile{
  display: flex;
  flex-direction: column;
  gap: .3em;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 70%;
  background-color: black;
  border: 2px solid white;
}
.sub-item-off{
  display: none;
}
.sub-item-on{
  display: inline-block;
}
.cart-on{
  margin: 1rem 1rem 3rem ;
  @include dfj;
  flex-direction: column;
  height: 100%;
  gap: .4rem;
  transition: all linear .3s ;
}
.carts-on{
  margin: 1rem 1rem 3rem ;
  @include dfj;

  height: 100%;
  gap: .4rem;
  transition: all linear .3s ;
}
.cart-off{
  height: 0%;
  margin: 0;
  transition: all linear .3s ;
}
.item-on{
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  border: 2px solid white;
  min-width: 300px;
  
  transition: all linear .3s ;
  
}
.item-off{
  
  gap: 0rem;
  padding: 0rem;
  border: 0px solid white;
  //width: 0px;
  height: 0;
  transition: all linear .3s ;
}
.icon-cart{
  margin: 1rem;
}

.cs{
  display: flex;
  flex-direction: column;
  width: 50%;
}

</style>
