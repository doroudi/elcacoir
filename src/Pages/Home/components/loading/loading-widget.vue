<template>
  <div id="ip-container" class="ip-container">
    <!-- initial header -->
    <header class="ip-header">
      <h1 class="ip-logo">
        <svg
          class="ip-inner"
          width="100%"
          height="100%"
          viewBox="0 0 300 160"
          preserveAspectRatio="xMidYMin meet"
          aria-labelledby="logo_title"
        >
          <title id="logo_title">Delightful Demonstrations by Codrops</title>
          <path d="...our super-long path..." />
        </svg>
      </h1>

      <div class="ip-loader">
        <svg class="ip-inner" width="60px" height="60px" viewBox="0 0 80 80">
          <path
            class="ip-loader-circlebg"
            d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"
          />
          <path
            id="ip-loader-circle"
            class="ip-loader-circle"
            d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"
          />
        </svg>
      </div>
    </header>

    <!-- main content -->
    <div class="ip-main">
      <h2>Make yourself at home.</h2>

      <div class="browser clearfix">
        <div class="box">
          <span class="icon-bell"></span>
          <p>...</p>
        </div>
        <div class="box">
          <span class="icon-heart"></span>
          <p>...</p>
        </div>
        <div class="box">
          <span class="icon-cog"></span>
          <p>...</p>
        </div>
      </div>
    </div>
  </div>
  <!-- /container -->
</template>

<script>
import "./loading.scss";
import Loading from './loading.js';

export default {
	created() {
		Loading();
	},
};
</script>
