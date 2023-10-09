
<script >
  import {state} from '../state.js';

 export default{
  data(){
    return{
      state,
    }
  },
  
 }
</script>


<template>
  <div class="header">
    <div class="cont">
      <h1 id="title">Il Capriccio <br> di Leo</h1>
      <img src="../assets/img/pizza-olio.png" alt="">
    </div>
    <div class="par" v-if="state.setting[2].status" >
      Finalmente un po di riposo anche per noi.. siamo in ferie dal {{ state.setting[2].from }} e torneremo il  {{ state.setting[2].to }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/styles/general.scss' as *;
.header{
  @include dfc;
  flex-direction: column;
  gap: 1em;
  height: 253px;
  padding: 3rem;
  margin-left: 2rem;
  background-color: $c-header;
  .cont{
    @include dfc;
    justify-content: space-between;
    height: 100%;
    width: 100%;

    h1{
      color: white;
      font-family: 'Playball', cursive;
      font-size: 60px;
      text-shadow: -3px -3px 15px black;
      text-align: center;
    }
    img{
      box-shadow: -7px -7px 20px black;
      position: relative;
      height: 100% ;
    }
  }
  
}
.par{
  color: white;
  text-shadow: 2px 2px 6px black;
}

@media (max-width:$bp1) {


  #title{
    font-size: 40px;
  }
  
}

</style>
