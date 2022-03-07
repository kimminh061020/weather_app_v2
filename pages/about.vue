<template>
<div>
    <AppHeader />
    
<div id="about-wrapper">
    <h1> Made By Mark Nguyen</h1>
<div class="carousel-inner" role="listbox" style=" width:1024px; height: 480px !important; text-align: center">
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
      caption="Awesome Weathenur App"
      text="This is an app to check weather based on city names"
      img-src="../assets/rodion-kutsaev-PEm_sLmJT-w-unspl.jpg"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Awesome Weather App"
      text="This is an app to check weather based on city names"
      img-src="../assets/jeremy-thomas-E0AHdsENmDg-unspla.jpg"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Awesome Weather App"
      text="This is an app to check weather based on city names"
      img-src="../assets/damian-mccoig-2HqpqSqy0zg-unspla.jpg"
    ></b-carousel-slide>
  </b-carousel>
</div>
</div>
</div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
export default {
  components: { AppHeader },
head() {
    return {
        title: 'About The App',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'Best app to check weather information',
            }
        ]
    }
}
}
</script>


<style scoped>
#about-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}
h1 {
    padding-top: 2%;
    padding-bottom: 2%;
}
</style>