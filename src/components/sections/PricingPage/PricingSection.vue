<template>
  <section class="pricing-section">
    <div class="container container--pricing-section">
      <div class="pricing-section__heading">
        <h1 class="heading-primary">
          <span class="heading-primary__underline">Secure and Reliable</span>
          Cloud Storage for Your Data
        </h1>
        <p class="heading-description">
          Scalable storage solutions for businesses of all sizes
        </p>
      </div>
      <div class="pricing-section__price-lists">
        <base-price-card
          v-for="priceList in priceLists"
          :key="priceList.id"
          :is-recommended="priceList.isRecommended"
          :category-price="priceList.categoryPrice"
          :price-per-month="priceList.pricePerMonth"
          :description="priceList.description"
          :link-to="priceList.linkTo"
          :features="priceList.features"
        ></base-price-card>
      </div>
    </div>
  </section>
</template>

<script>
import BasePriceCard from '@/ui/BasePriceCard.vue';

export default {
  components: {
    BasePriceCard,
  },
  data() {
    return {
      priceLists: [
        {
          id: 1,
          isRecommended: false,
          categoryPrice: 'Basic',
          pricePerMonth: '$5',
          description:
            'A budget-friendly option for individuals and small businesses.',
          linkTo: {
            title: 'Get Started',
            link: 'javascript:;',
          },
          features: [
            {
              available: true,
              description: '10 GB storage',
            },
            {
              available: true,
              description: 'Basic file collaboration',
            },
            {
              available: true,
              description: 'Mobile app access',
            },
            {
              available: true,
              description: 'File synchronization across devices',
            },
            {
              available: true,
              description: 'Support for common file types',
            },
            {
              available: false,
              description: 'Automatic file backup',
            },
            {
              available: false,
              description: 'Advanced security features',
            },
          ],
        },
        {
          id: 2,
          isRecommended: true,
          categoryPrice: 'Professional',
          pricePerMonth: '$15',
          description:
            'A comprehensive option for businesses with more advanced needs.',
          linkTo: {
            title: 'Get Started',
            link: 'javascript:;',
          },
          features: [
            {
              available: true,
              description: '10 GB storage',
            },
            {
              available: true,
              description: 'Advanced file collaboration',
            },
            {
              available: true,
              description: 'Mobile app access',
            },
            {
              available: true,
              description: 'File synchronization across devices',
            },
            {
              available: true,
              description: 'Support for common file types',
            },
            {
              available: true,
              description: 'Automatic file backup',
            },
            {
              available: true,
              description: 'Advanced security features',
            },
            {
              available: true,
              description: 'Purchase additional features',
            },
          ],
        },
        {
          id: 3,
          isRecommended: false,
          categoryPrice: 'Enterprise',
          pricePerMonth: 'Custom',
          description:
            'A customizable plan for large organizations with specific needs.',
          linkTo: {
            title: 'Contact Us',
            link: 'javascript:;',
          },
          features: [
            {
              available: true,
              description: 'Customizable storage capacity',
            },
            {
              available: true,
              description: 'Basic file collaboration',
            },
            {
              available: true,
              description: 'Mobile app access',
            },
            {
              available: true,
              description: 'File synchronization across devices',
            },
            {
              available: true,
              description: 'Support for common file types',
            },
            {
              available: true,
              description: 'Automatic file backup',
            },
            {
              available: true,
              description: 'Advanced security features',
            },
            {
              available: true,
              description: 'Customizable features',
            },
            {
              available: true,
              description: 'Purchase additional features',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.pricing-section {
  padding: 10.2rem 0;
}

.pricing-section__heading {
  margin: 0 auto;
  width: 61.7rem;
  display: flex;
  flex-direction: column;
  gap: 2.1rem;
}

.pricing-section__price-lists {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2.2rem;
  padding-top: 9.6rem;
}
</style>
