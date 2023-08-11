<script >
  import {state} from '../state.js';

 export default{
  data(){
    return{
      state,
    }
  }
 }
</script>


<template>
  <div class="footer-container">
    <div class="footer">
      <div class="side-feature">
        <div class="top-s">
          <img src="../assets/img/maps.png" alt="img">
          <span>Dove puoi trovarci</span>
        </div>
        <div class="main-s">
          <div class="hidden-content">
            <ul>
              <li>Borghetto | via borghetto 69</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
      <a class="socialContainer containerOne" href="#">
          <svg viewBox="0 0 16 16" class="socialSvg instagramSvg"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg>
      </a>
      
      <a class="socialContainer containerTwo" href="#">
          <svg xmlns="http://www.w3.org/2000/svg"  class="socialSvg bi bi-facebook" fill="white" viewBox="0 0 16 16"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/> </svg>
      </a>
          
      <a class="socialContainer containerFour" href="#">
          <svg viewBox="0 0 16 16" class="socialSvg whatsappSvg"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path> </svg>
      </a>
      </div>

      <div class="side-feature time">
        <div class="top-s">
          <div class="clock">
            <div class="min"></div>
            <div class="sec"></div>
          </div>
          <span>Orari d'apertura</span>
        </div>
        <div class="main-s">
          <div class="hidden-content">
            <ul>
              <li>
                <span>lun:</span>
                <span>chiusi</span>
              </li>
              <li>
                <span>mar-dom:</span>
                <span>16:00 - 22:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>             
    </div>

    <div class="bottom-footer">
      <p>P.IVA:123123123123123123</p>
    </div>
    
    <div 
    :class="state.sideMenuValue ?  'footer-on' : 'footer-off' ">
      
    <div class="side-feature on">
      <div class="top-s">
        <img src="../assets/img/maps.png" alt="img">
      </div>
      <div class="main-s">
        <div class="hidden-content">
          <ul>
            <li>Borghetto | via borghetto 69</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="side-feature on time">
      <div class="top-s">
        <div class="clock">
          <div class="min"></div>
          <div class="sec"></div>
        </div>
      </div>
      <div class="main-s">
        <div class="hidden-content">
          <ul>
            <li>
              <span>lun:</span>
              <span>chiusi</span>
            </li>
            <li>
              <span>mar-dom:</span>
              <span>16:00 - 22:00</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;

.footer-container{

}
.on{
  display: block !important;
  opacity: .7;
  font-size: 12px;
  .clock, img{
    scale: .9;
  }
  .main-s{
    height: 30px!important;
    padding: 1rem;
    .hidden-content{
      display: inline!important;
    }
  }
}
.footer-on{
  @include dfc; 
  gap: 1rem;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  padding: 1rem;
  z-index: 1610;

}
.footer-off{
  display: none
}
.footer{
    min-height: 11vh;
    @include dfc;
    justify-content: space-around;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 1rem;
    background:  linear-gradient($c-black-op-none, $c-black-op-max 80% );
    z-index: 1900;
  }
  .bottom-footer{
  min-height: 4vh;
  @include dfc;
  padding: 1em;
  background-color: $c-b-footer;
  color: $c-white;
}

.side-feature{
  @include dfc;
  width: 300px;
  flex-direction: column;
  margin-bottom: 15px;
  position: relative;
  justify-self: center;
  .top-s{
    @include dfc;
    flex-direction: column;
    color: $c-white;
    gap: .5em;
    font-size: 12px;
    text-transform: uppercase;
    text-shadow: 3px 10px 15px $c-black;
    img{
      height: 40px;
      filter: invert(100%);
      padding: 5px;
      border: 2.5px solid $c-black;
      border-radius: 90px;
    }

    
  }
  .main-s{
    text-align: center;
    height: 1px;
    width: 100%;
    
    .hidden-content{
      display: none;
      color: $c-white;
    }
    transition: all ease-out 1s;
  }
}


.footer .side-feature:hover .main-s{
  height: 30px;
  padding: 1rem;
  
  transition: all ease-out .3s;
}

.footer .side-feature:hover .hidden-content{
  display: block;
  transition: all linear 1s;
}


.time ul li{
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.clock{
  background-color: $c-black-op-min;
  border-radius: 90px;
  height: 40px;
  width: 40px;
  border: 3px solid $c-white;
  position: relative;
}
.min{
  width: 13px;
  height: 3px;
  border-radius: 2px;
  background-color: white;
  position: absolute;
  bottom: 12px;
  transform: rotate(45deg);
  left: 14px;
}
.sec{
  width: 3px;
  height: 13px;
  border-radius: 2px;
  background-color: white;
  position: absolute;
  bottom: 14px;
  left: 16px;
}





        .card {
        justify-self: center;
        width: fit-content;
        height: fit-content;
        background-color: $c-white-op-med;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px;
        gap: 20px;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.935);
        }

        /* for all social containers*/
        .socialContainer {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        background-color: rgb(44, 44, 44);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition-duration: .3s;
        }
        /* instagram*/
        .containerOne:hover {
        background-color: #d62976;
        transition-duration: .3s;
        }
        /* twitter*/
        .containerTwo:hover {
        background-color: #00acee;
        transition-duration: .3s;
        }
        /* linkdin*/
        .containerThree:hover {
        background-color: #0072b1;
        transition-duration: .3s;
        }
        /* Whatsapp*/
        .containerFour:hover {
        background-color: #128C7E;
        transition-duration: .3s;
        }

        .socialContainer:active {
        transform: scale(0.9);
        transition-duration: .3s;
        }

        .socialSvg {
        width: 17px;
        }

        .socialSvg path {
        fill: rgb(255, 255, 255);
        }

        .socialContainer:hover .socialSvg {
        animation: slide-in-top 0.3s both;
        }

        @keyframes slide-in-top {
        0% {
        transform: translateY(-50px);
        opacity: 0;
        }

        100% {
        transform: translateY(0);
        opacity: 1;
        }
        }

@media (max-width:950px) {
.side-feature{
width: 200px;
}

}
@media (max-width:750px) {
//menu hamburger
.footer{
grid-template-columns: 1fr;
}
.side-feature{
display: none;
}
.socialContainer{
width: 30px;
height: 30px;
}

}
@media (max-width:500px) {
}
@media (max-width:460px) {
}
</style>
