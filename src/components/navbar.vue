<template>
  <header class="menu" :class="{ open: menuIsOpen }">
    <nav class="main-nav">
      <ul>
        <li>
          <a class="menu-item" ui-sref-active="active" ui-sref="home"
            >صفحه نخست</a
          >
        </li>
        <li>
          <a class="menu-item" href="http://chipsaz.ir/" target="_blank"
            >التراسونیک</a
          >
        </li>
        <li>
          <a class="menu-item" ui-sref-active="active" ui-sref="iot"
            >اینترنت اشیاء</a
          >
        </li>
        <li>
          <a class="menu-item" ui-sref-active="active" ui-sref="network"
            >محصولات امنیتی</a
          >
        </li>
        <li>
          <a class="menu-item" ui-sref-active="active" ui-sref="software"
            >سایر محصولات</a
          >
        </li>
      </ul>
    </nav>
    <div class="menu-tools">
      <div class="menu-open-button">
        <svg viewBox="0 0 100 25">
          <path
            id="menu-drop-curve"
            d="M0, 0 C37.5, 0, 37.5, 25, 50, 25 S62.5, 0, 100, 0"
            data-start-d="M0, 0 C37.5, 0, 37.5, 25, 50, 25 S62.5, 0, 100, 0"
            data-end-d="M0, 0 C37.5, 0, 37.5, 0, 50, 0 S62.5, 0, 100, 0"
          ></path>
        </svg>
        <a
          href="#"
          class="menu-handler"
          @click.stop="toggleMenu"
          id="menu-handler"
          style="display: block"
        >
          <box-icon name="chevron-down"></box-icon>
        </a>
      </div>
      <div class="menu-close-button">
        <svg viewBox="0 0 100 25">
          <path
            id="menu-close-curve"
            d="M100, 25 C62.5, 25, 62.5, 0,  50, 0  S37.5, 25, 0,  25"
            data-start-d="M100, 25 C62.5, 25, 62.5, 25, 50, 25 S37.5, 25, 25, 25"
            data-end-d="M100, 25 C62.5, 25, 62.5, 0,  50, 0  S37.5, 25, 0,  25"
          ></path>
        </svg>

        <a
          href="#"
          class="menu-handler"
          @click.stop="toggleMenu"
          id="menu-close"
          style="display: block"
        >
          <box-icon name="x"></box-icon>
        </a>
      </div>
    </div>
    <div class="logo">
      <img id="logo" src="../assets/images/logo.png" alt="الکا" />
      <h1>شرکت فنی و مهندسی <span class="highlight">الکا</span></h1>

    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuIsOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>