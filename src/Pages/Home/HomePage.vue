<template>
  <div id="home" class="container wrapper">
    <nav-bar></nav-bar>
    <services-box></services-box>
    <about-box></about-box>
    <works-box></works-box>
    <contact-box></contact-box>
    <address-box></address-box>
    <footer-box></footer-box>
  </div>
</template>

<script>
import NavBar from '@/components/navbar-widget.vue'
import ServicesBox from './components/services-box.vue'
import AboutBox from './components/about-box.vue'
import WorksBox from './components/works-box.vue'
import ContactBox from './components/contact-box.vue'
import AddressBox from './components/address-box.vue'
import FooterBox from '@/components/footer-box.vue'

export default {
    components: {
        NavBar,
        ServicesBox,
        AboutBox,
        WorksBox,
        ContactBox,
        AddressBox,
        FooterBox
    }

};
</script>

<style lang="scss" scoped>
</style>