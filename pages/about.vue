<template>
<div id="main">
    <AppHeader />
    
<div class="site-header-content">
                    <span class="site-title">
                        <img class="my-face" src="../assets/my-face.jpg" alt="Mark Nguyen's Website">
                        Hi, I'm Mark Nguyen
                    </span>
                    <span class="site-description">I write about building profitable indie products as a developer</span>
                    <p style="color: #818189; margin: 24px auto 0; text-align: center; max-width: 500px;">I'm building an app called <a href="/" target="_blank">Awesome Weather</a> using Nuxt.js</p>
                    <br>
<a href="https://twitter.com/Minh17234068?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @Minh17234068</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
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
.site-home-header .site-header-content {
    padding: 5vw 3vw 6vw;
}

.site-header-content {
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6vw 3vw;
    max-height: 100%;
    color: #fff;
    background: #090a0b no-repeat 50%;
    background-size: cover;
}

.site-home-header .site-title {
    font-size: 4rem;
    text-align: center;
}

.site-title {
    z-index: 10;
    margin: 0 0 0 -2px;
    padding: 0;
    font-size: 4rem;
    line-height: 1em;
    font-weight: 600;
}

.my-face {
    width: 150px;
    border-radius: 100%;
    display: block;
    margin: 0 auto 24px;
}

@media (prefers-color-scheme: dark) {
img {
    opacity: .9;
}
}
img {
  vertical-align: middle;
  border: 0;
  max-width: 100%;
}

#main {
  position: absolute;
    height: 100%;
    width: 100%;
    background: #090a0b no-repeat 50%;
}

.site-description {
    z-index: 10;
    margin: 0;
    padding: 10px 0;
    font-size: 1.5rem;
    line-height: 1.4em;
    font-weight: 400;
    opacity: .8;
}

</style>