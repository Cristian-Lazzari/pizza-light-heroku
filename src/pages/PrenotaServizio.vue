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
      phone: "",
      nperson: 0,
      time: "",
      date: "",
      message: "",
      nameError: "",
      phoneError: "",
      isValid: true,
      loading: false,
      succes: false,
    };
  },
  methods: {

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
          n_person: JSON.stringify(this.nperson),
          time: this.time,
          date: this.date,
          message: this.message,
        };

            console.log(data)

        console.log(JSON.stringify(this.state.arrQt));
        axios.post(state.baseUrl + "api/reservations", data).then((response) => {
          this.success = response;
          this.loading = false;
        });
        this.name='';
        this.phone='';
      }
    },


  },

};
</script>

<template>
  <div class="ordina-servizio">
    <div class="top">
      <h1>Prenota il tuo tavolo</h1>
    </div>


    <div class="form" id="orderForm">
      <div>
        <input v-model="name" type="text" placeholder="Nome" id="name" />
        <div v-if="nameError" id="nameError">{{ nameError }}</div>
      </div>

      <div>
        <input v-model="nperson" type="number" placeholder="N persone" id="name" />
        <div v-if="npersonError" id="npersonError">{{ npersonError }}</div>
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
        <textarea v-model="message"  placeholder="scrivi un messaggio" rows="4" cols="50">
          
        </textarea>
        <div v-if="npersonError" id="npersonError">{{ npersonError }}</div>
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

.ordina-servizio{
  width: 100%;
}
.form {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: flex-start;
  input, textarea {
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
