<script>
import { state } from "../state.js";
import axios from "axios";

export default {
  components: {},

  data() {
    return {
      state,
      arrProduct: [],
      arrCategory: [],
      categoryId: 0,
      totCart: 0,
      name: "",
      nperson: 0,
      phone: "",
      nameError: "",
      phoneError: "",
      timeError: "",
      isValid: true,
      loading: false,
      succes: false,
    };
  },
  methods: {
    getPrice(cent) {
      let num = parseFloat(cent);
      num = num / 100;
      num = "€" + num;

      return num;
    },

    order_validations() {
      // this.isValid = true;

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
        this.phoneError = "Il campo 'N° telefono' è richiesto!";
        this.isValid = false;
      }
      // modificare quando verrà cambiato il tipo di dato per il telefono (numerico)
      else if (this.phone.length !== 10) {
        this.phoneError = "Il campo 'N° telefono' deve essere di 10 cifre!";
        this.isValid = false;
      }

      if (!this.isValid) {
        return;
      }
    },

    sendOrder() {
      // debugger;
      this.phoneError='';
      this.nameError='';
      this.isValid=true;
      this.order_validations();
      if (this.isValid) {
        this.loading = true;
        let data = {
          name: this.name,
          phone: this.phone,
          time: '',
          arrId: JSON.stringify(this.state.arrId),
          arrQt: JSON.stringify(this.state.arrQt),
        };

            console.log(data)

        console.log(JSON.stringify(this.state.arrQt));
        axios.post(state.baseUrl + "api/orders", data).then((response) => {
          this.success = response;
          this.loading = false;
        });
        this.name='';
        this.phone='';
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
  },
  created() {},
};
</script>

<template>
  <div class="menu">
    <div class="top-menu">
      <h1>Prenota il tuo tavolo</h1>
    </div>


    <div class="form" id="orderForm">
      <div>
        <input v-model="name" type="text" placeholder="Nome" id="name" />
        <div v-if="nameError" id="nameError">{{ nameError }}</div>
      </div>

      <div>
        <input v-model="name" type="number" placeholder="N persone" id="name" />
        <div v-if="nameError" id="nameError">{{ npersonError }}</div>
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

      <!-- Gestire campo tempo ordinazione -->
      <!-- <input v-model="time" type="text" placeholder="Orario" id="time" />
      <div id="timeError"></div> -->

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

.form {
  display: flex;
  gap: 1rem;
  align-items: center;
  input {
    background-color: rgba(250, 235, 215, 0);
    padding: 1em 1.4em;
    border: 2px solid $c-white;
    border-radius: 100px;
    color: white;
  }
}
::placeholder {
  opacity: 1;
  color: white;
}

#nameError,
#phoneError {
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
</style>
