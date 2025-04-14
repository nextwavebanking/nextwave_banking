<template>
  <div
    @pointerdown.passive="handleOutsideClick"
    @wheel.passive="isClickedOutside = !isClickedOutside"
    class="flex flex-col relative"
  >
    <Header ref="headerRef" @scroll-to="handleScrollTo" :is-clicked-outside="isClickedOutside" />
    <HeroSection ref="heroRef" @scroll-to="handleScrollTo" />
    <AboutUs ref="AboutUsRef" />
    <Service ref="ServiceRef" @scroll-to="handleScrollTo" />
    <HowItWorks ref="HowItWorksRef" @scroll-to="handleScrollTo" />
    <WhyChooseUs ref="WhyChooseUsRef" @scroll-to="handleScrollTo" />
    <ContactUs ref="ContactUsRef" />
    <Footer ref="FooterRef" @scroll-to="handleScrollTo" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Footer from './components/Sections/Footer.vue'
import Header from './components/Sections/Header.vue'
import AboutUs from './components/Sections/AboutUs.vue'
import ContactUs from './components/Sections/ContactUs.vue'
import HeroSection from './components/Sections/HeroSection.vue'
import HowItWorks from './components/Sections/HowItWorks.vue'
import Service from './components/Sections/ourService.vue'
import WhyChooseUs from './components/Sections/WhyChooseUs.vue'

const headerRef = ref()
const heroRef = ref()
const AboutUsRef = ref()
const ServiceRef = ref()
const HowItWorksRef = ref()
const WhyChooseUsRef = ref()
const ContactUsRef = ref()
const FooterRef = ref()

const isClickedOutside = ref(false)

const handleOutsideClick = (event: any) => {
  if (!headerRef.value.$el.contains(event.target)) {
    isClickedOutside.value = !isClickedOutside.value
  }
}

const handleScrollTo = (value: string) => {
  const sections: any = {
    AboutUsRef,
    ServiceRef,
    HowItWorksRef,
    WhyChooseUsRef,
    ContactUsRef,
    FooterRef,
    heroRef,
    headerRef,
  }

  if (value === 'top') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  } else {
    sections[value].value.$el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}
</script>

<style scoped></style>
