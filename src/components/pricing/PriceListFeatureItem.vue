<template>
  <li class="price-card__feature__lists__list">
    <svg
      v-if="available"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_102_111)">
        <path
          d="M10 18.3333C14.6025 18.3333 18.3333 14.6025 18.3333 10C18.3333 5.39751 14.6025 1.66667 10 1.66667C5.39751 1.66667 1.66667 5.39751 1.66667 10C1.66667 14.6025 5.39751 18.3333 10 18.3333Z"
          fill="#7C67FE"
          stroke="#7C67FE"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.5 9.99999L9.16667 11.6667L12.5 8.33333"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_102_111">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
    <svg
      v-else
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 9.99999C18.3334 5.39762 14.6024 1.66666 10 1.66666C5.39765 1.66666 1.66669 5.39762 1.66669 9.99999C1.66669 14.6024 5.39765 18.3333 10 18.3333Z"
        fill="#FF4794"
      />
      <path
        d="M12.5 7.5L7.5 12.5"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.5 7.5L12.5 12.5"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span class="price-card__feature__lists__list-description">{{
      description
    }}</span>
  </li>
</template>

<script>
export default {
  props: {
    available: {
      type: Boolean,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.price-card__feature__lists__list {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.price-card__feature__lists__list-description {
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.2rem;
  color: rgba(0, 0, 0, 60%);
}
</style>
