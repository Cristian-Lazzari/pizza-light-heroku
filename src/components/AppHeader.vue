
<script >
  import {state} from '../state.js';

 export default{
  data(){
    return{
      state,
    }
  },
  methods: {
        openSide(){
            if(this.state.sideMenuValue == 0){
                this.state.sideMenuValue = 1;
            }else{
                this.state.sideMenuValue = 0;
            }
        },
    }
 }
</script>


<template>
  <div class="header">

    <div class="jumbo">
        <div class="title">
            <div class="fr-title">Capriccio</div>
            <div class="sc-title">di Leo</div>
  
        </div>
        <div class="side-menu">
          <p class="special"><span> <router-link :to="{ name: 'menu' }" class="nav-link active active-p" >Menu</router-link> </span></p>
            <p><span> <router-link :to="{ name: 'home' }" class="nav-link active active-p" >home</router-link> </span></p>
            <p><span> <router-link :to="{ name: 'chi-siamo' }" class="nav-link active active-p" >chi siamo?</router-link> </span></p>
            <p><span> <router-link :to="{ name: 'contatti' }" class="nav-link active active-p" >contatti</router-link> </span></p>
        </div>
        <div @click="openSide" :class="state.sideMenuValue ?  'burger-off' : 'burger-on'">
            <span id="s-1"></span>
            <span id="s-2"></span>
            <span id="s-3"></span>
        </div>
    </div>
      <div class="aside-m"
            :class="state.sideMenuValue ?  'aside-tel-on' : 'aside-tel-off'">
              <span @click="openSide"> <router-link :to="{ name: 'home' }" class="nav-link active" >home</router-link> </span>
              <span @click="openSide"> <router-link :to="{ name: 'menu' }" class="nav-link active " >menu</router-link> </span>
              <span @click="openSide"> <router-link :to="{ name: 'chi-siamo' }" class="nav-link active" >chi siamo?</router-link> </span>
              <span @click="openSide"> <router-link :to="{ name: 'contatti' }" class="nav-link active" >contatti</router-link> </span>
            </div>
        </div>
</template>

<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;
.special{
  background-color: rgba(230, 18, 18, 0.225)!important;
}
.active-p{
  cursor: pointer;
  padding-top: 4.5rem;
  padding-bottom: 4.5rem;
}
.header{
  padding: 1em;
}
.jumbo{
color: $c-white;
display: flex;
width: 100%;
justify-content: space-between;
margin-bottom: 20px;
font-size: $fs-title-max;
font-weight: bolder;  
gap: 3rem; 
    .title{
    text-shadow: 3px 4px 5px $c-black;
    }       
    .burger{
    display: none;
    margin-top: 10px;
    }
}


.side-menu {
font-size:13px;
width: 230px;
aspect-ratio: 1;
border-radius: 4px;
background: $c-black-op-min;
display: flex;
gap: 5px;
padding: .4em;
}

.side-menu p {
height: 100%;
flex: 1;
overflow: hidden;
border-radius: 2px;
transition: all .5s;
background: $c-black-op-min;
border: 1px solid white;
display: flex;
justify-content: center;
align-items: center;
}

.side-menu p:hover {
flex: 4;
}

.side-menu p span {
min-width: 14em;
padding: .5em;
text-align: center;
transform: rotate(-90deg);
transition: all .5s;
text-transform: uppercase;
letter-spacing: .4em;
}
.side-menu a{
color: $c-white;
}
.side-menu p:hover span {
transform: rotate(0);
letter-spacing: .0em;
}
.side-menu p span:hover{
  text-shadow: 0 7px 25px $c-white;
}
.aside-tel-off{
    transition: all linear .2s;
    width: 0!important;
    height: 100%;
    span{
      display: none;
    }
  }
  .aside-tel-on{
  transition: all linear .2s;
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    height: 100%;
    width: 60%;
    position: fixed;
    right: 0;
    top: 0;
    padding: 2rem;
    background-color: $c-aside;
    box-shadow: -10px 0px 300px 130px $c-black;
    text-transform: uppercase;
    font-size: 20px;
    z-index: 100!important;
    .nav-link{
      color: $c-white!important;
    }
}


      .burger-on {
        position: fixed;
        right: 2.5rem;
        top:  3.5rem;
        width: 30px;
        height: 30px;
        background: transparent;
        cursor: pointer;
        display: none;
        z-index: 1500;
        span{
          box-shadow: 1px 1px 10px 2px rgb(127, 127, 127);
          display: block;
          height: 4px;
          width: 30px;
          border-radius: 2px;
          background-color: $c-white;
          margin-bottom: 5px;
          transition: all linear .2s;
        }
      }
      .burger-off{
        position: fixed;
        right: 2.5rem;
        top:  2.5rem;
        width: 30px;
        height: 30px;
        background: transparent;
        cursor: pointer;
        display: block;
        z-index: 1500;
        span{
          box-shadow: 1px 1px 3px 1px rgb(0, 0, 0);
          transition: all linear .2s;
          display: block;
          height: 4px;
          width: 30px;
          border-radius: 2px;
          background-color: $c-white;

        }
        #s-1{
          transform:rotateZ(140deg);
          position: absolute;
          top: 0;
        }
        #s-2{
          transform:rotateZ(-140deg);
        }
        #s-3{
          transform:rotateZ(-140deg);
          position: absolute;
          top: 0
        }
      }


    

@media (max-width:950px) {
    //menu hamburger

    .title{
            margin-bottom: 10%;
            .fr-title, .sc-title{
                font-size: $fs-title-med;

            }
          }
    .side-menu{
                height: 200px;

    
            }
}
@media (max-width:790px) {
    //menu hamburger
    .side-menu{
                display: none;
                
            }

    .burger-on{
                display: inline-block !important;
            }
    .aside-tel{
                display: block !important;
            }
    .title{
            margin-bottom: 8%;
            .fr-title, .sc-title{
                font-size: $fs-title-med-s;

            }
        }
    .main-home{
        flex-direction: column;
    }
}
@media (max-width:500px) {
  .header{
    width: 100vw;
  }
    .title{
            margin-bottom: 5%;
            .fr-title, .sc-title{
                font-size: $fs-title-min;
                
            }
            
        }
      .burger-on{
        top: 3.5rem ;
        bottom: 1.7rem;
      }

}
@media (max-width:460px) {
    .title{
            margin-bottom: 0%;
            .fr-title, .sc-title{
                font-size: $fs-title-min-s;
                
            }
            
        }
}

@media (max-width:700px) {
//menu hamburger
}
@media (max-width:500px) {
}
@media (max-width:460px) {
}
</style>
