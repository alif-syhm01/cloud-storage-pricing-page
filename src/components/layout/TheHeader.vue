<template>
  <header class="header">
    <div class="container container--header">
      <a href="javascript:;" class="logo-link">Strawrage</a>
      <nav class="main-nav">
        <ul class="main-nav__nav-list">
          <li class="main-nav__nav-links">
            <a href="javascript:;" class="main-nav__link">Home</a>
          </li>
          <li class="main-nav__nav-links">
            <a href="javascript:;" class="main-nav__link">Product</a>
          </li>
          <li class="main-nav__nav-links--active">
            <a href="javascript:;" class="main-nav__link main-nav__link--active"
              >Pricing</a
            >
          </li>
          <li class="main-nav__nav-links">
            <a href="javascript:;" class="main-nav__link">Contact Us</a>
          </li>
        </ul>
      </nav>
      <a href="javascript:;" class="button-link">Sign Up</a>
    </div>
  </header>
</template>

<style scoped>
.container--header {
  padding-top: 5.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-link {
  font-size: 1.8rem;
  font-weight: 700;
  font-style: italic;
  color: #fff;
}

.main-nav__nav-list {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
  padding: 0;
}

.main-nav__link {
  color: #fff;
  font-size: 1.6rem;
  font-weight: 500;
  opacity: 0.8;
  transition: all 0.3s;
}

.main-nav__link--active {
  font-weight: 700;
  opacity: 1;
}

.main-nav__link:hover,
.main-nav__link:active {
  font-weight: 700;
  opacity: 1;
}

.button-link {
  background-color: #160e4b;
  border: 1px solid transparent;
  border-radius: 0.6rem;

  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
  padding: 1rem 1.8rem;
}

.button-link:hover,
.button-link:active {
  background-color: transparent;
  border: 1px solid #160e4b;
  color: #160e4b;
}
</style>
