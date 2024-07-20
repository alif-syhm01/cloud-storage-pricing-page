<template>
  <pricing-page></pricing-page>
</template>

<script>
import PricingPage from '@/views/PricingPage.vue';

export default {
  components: {
    PricingPage,
  },
};
</script>

<style>
.container {
  height: 100%;
  max-width: 114rem;
  margin: 0 auto;
}

a {
  text-decoration: none;
}

.heading-primary,
.heading-primary span {
  font-size: 3.6rem;
  font-style: normal;
  font-weight: 700;
  color: #fff;
  line-height: normal;
  text-align: center;
  letter-spacing: 0.1rem;
}

.heading-primary__underline {
  text-decoration: underline;
}

.heading-description {
  font-family: 'Inter', sans-serif;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  color: #fff;
  line-height: 2.8rem;
  text-align: center;
}
</style>
