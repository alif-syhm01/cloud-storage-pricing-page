<template>
  <div :class="recommendPriceLists">
    <div class="price-card__header">
      <div class="price-card__header-title">
        <span class="price-card__header-title__category">{{
          categoryPrice
        }}</span>
        <span class="price-card__header-title__price">
          <span class="price-card__header-title__price--heading">{{
            pricePerMonth
          }}</span>
          {{ pricePerMonth.toLowerCase() !== 'custom' ? '/month' : '' }}
        </span>
      </div>
      <p class="price-card__header-description">
        {{ description }}
      </p>
    </div>
    <a :href="linkTo.link" class="price-card__contact-link">{{
      linkTo.title
    }}</a>
    <div class="price-card__feature">
      <span class="price-card__feature__title">Features</span>
      <ul class="price-card__feature__lists">
        <price-list-feature-item
          v-for="feature in features"
          :key="feature.description"
          :available="feature.available"
          :description="feature.description"
        ></price-list-feature-item>
      </ul>
    </div>
  </div>
</template>

<script>
import PriceListFeatureItem from '@/components/pricing/PriceListFeatureItem.vue';

export default {
  components: {
    PriceListFeatureItem,
  },
  props: {
    isRecommended: {
      type: Boolean,
      required: false,
    },
    categoryPrice: {
      type: String,
      required: true,
    },
    pricePerMonth: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    linkTo: {
      type: Object,
      required: true,
    },
    features: {
      type: Array,
      required: true,
    },
  },
  computed: {
    recommendPriceLists() {
      return this.isRecommended
        ? 'price-card price-card--recommendation'
        : 'price-card';
    },
  },
};
</script>

<style scoped>
.price-card {
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 3rem;

  background-color: #fff;
  padding: 3rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
}

.price-card--recommendation {
  position: relative;
}

.price-card--recommendation::after {
  content: 'recommended';
  position: absolute;
  background-color: #160e48;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  width: calc(100% + 1px);
  padding: 0.3rem 0;

  top: -2.7rem;
  left: -0.05rem;

  font-size: 1rem;
  font-weight: 700;
  line-height: 2.2rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  color: #fff;
  text-align: center;
}

.price-card:first-child {
  border-top-left-radius: 1rem;
}

.price-card:last-child {
  border-top-right-radius: 1rem;
}

.price-card__header {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.price-card__header-title__category {
  display: block;
  font-size: 1.6rem;
  font-weight: 700;
  color: #160e48;
  margin-bottom: 0.75rem;
}

.price-card__header-title__price {
  display: flex;
  align-items: baseline;
  gap: 0.8rem;

  font-size: 1.4rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 60%);
}

.price-card__header-title__price--heading {
  font-size: 4rem;
  font-weight: 700;
  color: #160e48;
}

.price-card__header-description {
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.2rem;
  color: rgba(0, 0, 0, 60%);
}

.price-card__contact-link {
  background-color: #7c67fe;
  border-radius: 0.6rem;
  padding: 1rem 0;
  text-align: center;

  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.2rem;
  color: #fff;
  transition: all 0.3s;
}

.price-card__contact-link:hover,
.price-card__contact-link:active {
  background-color: #715cff;
}

.price-card__feature {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.price-card__feature__title {
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.2rem;
  color: rgba(0, 0, 0, 60%);
}

.price-card__feature__lists {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>
