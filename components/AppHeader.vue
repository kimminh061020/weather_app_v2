<template>
  <div class="nav-wrap">
       <img class="" src="../assets/weather.png" height="70px">
  <b-nav align="center">
     
    
    <b-nav-item >
        <router-link to="/" id="nav-bar-home">Home</router-link>
    </b-nav-item>
    <b-nav-item >
        <router-link to="/about" id="nav-bar-about">About</router-link>
    </b-nav-item>
  </b-nav>
  <div id="button_wrap">
  <b-button pill id="button">Contact</b-button>
  </div>
</div>
</template>

<script>
import image from "../assets/weather.png"



export default {
name: 'AppHeader',

}
</script>

<style scoped>
.nav-wrap {
display: grid;
grid-template-columns: 1fr 2fr 1fr;
background: black;
padding-bottom: 10px;
padding-top: 10px;
}

#nav-bar-home, #nav-bar-about {
    color: white;
    font-size: 20px;
    padding: 10px;

}

img {
    padding-left: 30px;
}

.justify-content-center {
    justify-content: center !important;
    align-content: center;
}

#button_wrap {
    color: black;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
#button {
    background: white;
    color: black;
    font-weight: 600;
    margin-right: 10%;
    width: 200px
}

@media only screen and (max-width: 980px) {
    #nav-bar-home, #nav-bar-about {
    font-size: 15px;
    padding: 0px;
}
#button {
    background: white;
    width: 100px
}
}
</style>