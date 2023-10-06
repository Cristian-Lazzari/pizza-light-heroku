<script>
import { state } from "../state.js";
import axios from "axios";

export default {
  components: {},
  
  data() {
    return {
      state,


      arrTimesSlot: [],
      arrTimesSlotApi: [],

      categoryId: 0,
      totCart: 0,

      name: "",
      phone: "",
      idate:'',
      timeSlot: "",

      nameError: "",
      phoneError: "",
      timeError: "",
      dateError: "",

      isValid: true,
      loading: false,
      succes: false,
      DeltaMinuti: 10,
    };
  },
  methods: {
    getTimesSlots() {
      axios.get(this.state.baseUrl + "api/time").then((response) => {
        this.arrTimesSlotApi = response.data.results;
      });

    },
    getPrice(cent) {
      let num = parseFloat(cent);
      num = num / 100;
      num = "€" + num;

      return num;
    },

    order_validations() {
       this.isValid = true;

      if (!this.name) {
        this.nameError = "Il campo 'nome' è richiesto!";
        this.isValid = false;
      } else if (this.name.length < 2) {
        this.nameError = "Il campo 'nome' è troppo corto!";
        this.isValid = false;
      } else if (this.name.length > 50) {
        this.nameError = "Il campo 'name' non può superare i 50 caratteri!";
        this.isValid = false;
      }

      if (!this.phone) {
        this.phoneError = "Il campo 'N° 'telefono' è richiesto!";
        this.isValid = false;
      }
      // modificare quando verrà cambiato il tipo di dato per il telefono (numerico)
      else if (this.phone.length !== 10) {
        this.phoneError = "Il campo 'N° 'telefono' deve essere di 10 cifre!";
        this.isValid = false;
      }

      if (!this.idate) {
        this.dateError = "Seleziona una data!" ;
        this.isValid = false;
      }
      if (!this.timeSlot) {
        this.timeError = "Seleziona una fascia oraria!";
        this.isValid = false;
      }

      if (!this.isValid) {
        return;
      }
    },

    sendOrder() {
      this.phoneError = "";
      this.nameError = "";
      this.timeError = "";
      this.isValid = true;
      this.order_validations();
      console.log(this.timeSlot);
      if (this.isValid) {
        this.loading = true;
        let data = {
          name: this.name,
          phone: this.phone,
          date: this.idate,
          time: this.timeSlot,
          arrId: JSON.stringify(this.state.arrId),
          arrQt: JSON.stringify(this.state.arrQt),
        };

        console.log(data);

        console.log(JSON.stringify(this.state.arrQt));
        axios.post(state.baseUrl + "api/orders", data).then((response) => {
          this.success = response;
          this.loading = false;
        });
        this.name = "";
        this.phone = "";
        this.idate = "";
        this.timeSlot = "";
        this.state.arrId= [];
        this.state.arrQt= [];
        this.state.arrCart= [];
        this.arrTimesSlot= [];
        this.arrTimesSlotApi= [];
      }
    },

    removeItem(title) {
      this.state.arrCart.forEach((element, i) => {
        if (element.title == title) {
          if (element.counter >= 0) {
            element.counter--;
            element.totprice -= element.price;
            this.state.arrQt[i]--;
          }
          if (element.counter == 0) {
            let nwi = i - 1;
            this.state.arrId.splice(i, 1);
            this.state.arrQt.splice(i, 1);
            let newarrCart = this.state.arrCart.filter((element) => {
              return element.title !== title;
            });
            this.state.arrCart = [];
            this.state.arrCart = newarrCart;
          }
        }
      });
    },

    inputTime(time, id){
      this.arrTimesSlot.forEach((element, i) => {
        if(element.id == 'active'){
          element.id = i + 1
        }
        
      });
      this.arrTimesSlot.forEach((element, i) => {
        if(element.id == id){
          element.id = 'active'
        }
        
      });
      this.timeSlot = time;
      
    },

    checkData(i){
      let oggi = new Date()
      let di = new Date(i)
      
      if(di.getDate() == oggi.getDate() && di.getMonth() == oggi.getMonth() && di.getFullYear() == oggi.getFullYear() ){
        this.arrTimesSlot =[];
        this.getTimesSlots()
        console.log('oggi')
        
        let oraOggi = parseInt(oggi.getHours());
        let minOggi = parseInt(oggi.getMinutes());
        
        console.log('foreach')
        
        this.arrTimesSlotApi.forEach(element => {
          let ora     = parseInt(element.time_slot.slice(0,2));
          let min     = parseInt(element.time_slot.slice(3,5));
          
          
          if(oraOggi == ora){
            console.log(min)
            if((min - (this.DeltaMinuti + minOggi)) > 0 ){
              this.arrTimesSlot.push(element)
            }
          }
          else if(ora == (oraOggi + 1)){
            if((minOggi - 60 + min) > this.DeltaMinuti)
            this.arrTimesSlot.push(element)
          }
          else if(oraOggi < ora){
            this.arrTimesSlot.push(element)
          }
          
        });
      }
      else if(Date.parse(di) > Date.now()){
        this.arrTimesSlot = [];
        console.log('domani')
        this.arrTimesSlot= this.state.defaultTimes
        
      }
      else {
        
        this.arrTimesSlot = [];
        console.log('scrivi un giorno accettabile')
        
        
      }
      
    }
  },
  created() {
   
    this.getTimesSlots()
  },
};
</script>

<template>
  <div class="menu">
    <div class="top-menu">
      <h1>Completa il tuo ordine</h1>
    </div>
    <div @click="opencart()" class="icon-cart">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-cart-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
        />
      </svg>
    </div>
    <div class="cart-on">
      <!-- <div class="icon-cart"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg></div> -->
      <div
        v-for="item in state.arrCart"
        :class="state.sideCartValue ? 'item-off' : 'item-on'"
        :key="item.id"
      >
        <div :class="state.sideCartValue ? 'sub-item-off' : 'sub-item-on tag'">
          {{ item.title }}
        </div>
        <div :class="state.sideCartValue ? 'sub-item-off' : 'sub-item-on tag'">
          {{ item.counter }}
        </div>
        <div :class="state.sideCartValue ? 'sub-item-off' : 'sub-item-on tag'">
          {{ getPrice(item.totprice) }}
        </div>
        <svg
          :class="state.sideCartValue ? 'sub-item-off' : 'sub-item-on'"
          @click="removeItem(item.title)"
          style="color: red"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-trash"
          viewBox="0 0 16 16"
        >
          <path
            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
            fill="red"
          ></path>
          <path
            fill-rule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            fill="red"
          ></path>
        </svg>
      </div>
      <div :class="state.sideCartValue ? 'item-off' : 'item-on'">
        <div :class="state.sideCartValue ? 'sub-item-off' : 'sub-item-on'">
          Totale:{{ getPrice(totCart) }}
        </div>
      </div>
    </div>

    <div class="form" id="orderForm">
      <div>
        <input v-model="name" type="text" placeholder="Nome" id="name" />
        <div v-if="nameError" id="nameError">{{ nameError }}</div>
      </div>
      <div>
        <input
          v-model="phone"
          type="text"
          onkeypress="return /[0-9]/i.test(event.key)"
          placeholder="N° telefono"
          id="phone"
        />
        <div v-if="phoneError" id="phoneError">{{ phoneError }}</div>
      </div>
      <div>
        <input type="date" v-model="idate" @input="checkData(idate)" id="">
        <div v-if="dateError" id="dateError">{{ dateError }}</div>
      </div>
      <div class="orari-container">
        <!-- <select name="times" id="times" v-model="timeSlot">
          <option value="">Seleziona una fascia oraria</option>
          <option v-for="time in arrTimesSlot" :key="time.time_slot">
            <span  v-if="time.visible" > {{ time.time_slot }} </span>
              

          </option>
        </select> -->

          <div class="center-orari">
            <div v-for="time in arrTimesSlot" :key="time.time_slot" >
              <div v-if="time.visible" class="badge" :class="time.id == 'active' ? 'actv' : ''" @click="inputTime(time.time_slot, time.id)"  >{{ time.time_slot }} </div>
            </div>
          </div>
         <div v-if="timeError" id="timeError">{{ timeError }}</div>
      </div>


      <span v-if="!loading" @click="sendOrder()" class="btn">Invia</span>
    </div>
    <div v-if="loading" class="loop cubes">
      <div class="item cubes"></div>
      <div class="item cubes"></div>
      <div class="item cubes"></div>
      <div class="item cubes"></div>
      <div class="item cubes"></div>
      <div class="item cubes"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/styles/general.scss" as *;

.actv{
  color: #fe1e52;
  background-color: white !important;;
}


.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  input {
    background-color: rgba(250, 235, 215, 0);
    padding: 1em 1.4em;
    border: 2px solid $c-white;
    border-radius: 100px;
    color: white;
    min-width: 250px;
  }
  select {
    min-width: 250px;
    background-color: rgba(250, 235, 215, 0);
    padding: 1em 1.4em;
    border: 2px solid $c-white;
    border-radius: 100px;
    color: white;
    option {
      background-color: black;
      color: white;
    }
  }
}
::placeholder {
  opacity: 1;
  color: white;
}

#nameError,
#phoneError,
#timeError {
  text-align: center;
  font-size: 0.8em;
  color: red;
  margin-top: 0.3rem;
}


.btn_loading {
  cursor: wait;
}
.tag {
  display: flex;
  gap: 0.4em;
  background-color: $c-black-op-med;
  padding: 0.5em;
  border-radius: 30px;
}

.cart-mobile {
  display: flex;
  flex-direction: column;
  gap: 0.3em;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 70%;
  background-color: black;
  border: 2px solid white;
}
.sub-item-off {
  display: none;
}
.sub-item-on {
  display: inline-block;
}
.cart-on {
  margin: 1rem 1rem 3rem;
  @include dfj;
  flex-direction: column;
  height: 100%;
  gap: 0.4rem;
  transition: all linear 0.3s;
}
.carts-on {
  margin: 1rem 1rem 3rem;
  @include dfj;

  height: 100%;
  gap: 0.4rem;
  transition: all linear 0.3s;
}
.cart-off {
  height: 0%;
  margin: 0;
  transition: all linear 0.3s;
}
.item-on {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  border: 2px solid white;
  min-width: 300px;

  transition: all linear 0.3s;
}
.item-off {
  gap: 0rem;
  padding: 0rem;
  border: 0px solid white;
  //width: 0px;
  height: 0;
  transition: all linear 0.3s;
}
.icon-cart {
  margin: 1rem;
}

.cs {
  display: flex;
  flex-direction: column;
  width: 50%;
}

//loader
.cubes {
  position: absolute;
  top: 50%;
  left: 50%;
  transform-style: preserve-3d;
}

.loop {
  transform: rotateX(-35deg) rotateY(-45deg) translateZ(1.5625em);
}

@keyframes s {
  to {
    transform: scale3d(0.2, 0.2, 0.2);
  }
}

.item {
  margin: -1.5625em;
  width: 3.125em;
  height: 3.125em;
  transform-origin: 50% 50% -1.5625em;
  box-shadow: 0 0 0.125em currentColor;
  background: currentColor;
  animation: s 0.6s cubic-bezier(0.45, 0.03, 0.51, 0.95) infinite alternate;
}

.item:before,
.item:after {
  position: absolute;
  width: inherit;
  height: inherit;
  transform-origin: 0 100%;
  box-shadow: inherit;
  background: currentColor;
  content: "";
}

.item:before {
  bottom: 100%;
  transform: rotateX(90deg);
}

.item:after {
  left: 100%;
  transform: rotateY(90deg);
}

.item:nth-child(1) {
  margin-top: 6.25em;
  color: #fe1e52;
  animation-delay: -1.2s;
}

.item:nth-child(1):before {
  color: #ff6488;
}

.item:nth-child(1):after {
  color: #ff416d;
}

.item:nth-child(2) {
  margin-top: 3.125em;
  color: #fe4252;
  animation-delay: -1s;
}

.item:nth-child(2):before {
  color: #ff8892;
}

.item:nth-child(2):after {
  color: #ff6572;
}

.item:nth-child(3) {
  margin-top: 0em;
  color: #fe6553;
  animation-delay: -0.8s;
}

.item:nth-child(3):before {
  color: #ffa499;
}

.item:nth-child(3):after {
  color: #ff8476;
}

.item:nth-child(4) {
  margin-top: -3.125em;
  color: #fe8953;
  animation-delay: -0.6s;
}

.item:nth-child(4):before {
  color: #ffb999;
}

.item:nth-child(4):after {
  color: #ffa176;
}

.item:nth-child(5) {
  margin-top: -6.25em;
  color: #feac54;
  animation-delay: -0.4s;
}

.item:nth-child(5):before {
  color: #ffce9a;
}

.item:nth-child(5):after {
  color: #ffbd77;
}

.item:nth-child(6) {
  margin-top: -9.375em;
  color: #fed054;
  animation-delay: -0.2s;
}

.item:nth-child(6):before {
  color: #ffe49a;
}

.item:nth-child(6):after {
  color: #ffda77;
}
.badge{
  background-color: blue;
  padding: 5px 10px;
  margin: 5px;
}
.badge-off{
  background-color: rgb(210, 32, 19);
  padding: 5px 10px;
  margin: 5px;
}
.orari-container{
  display: flex;
  justify-content: center;
  gap: 5px;
  flex-wrap: wrap;
  max-width: 900px;
}
.center-orari{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
