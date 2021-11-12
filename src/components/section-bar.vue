<template>
  <div>
    <h3 class="section-title">{{ title }}</h3>
    <div class="line">
      <div class="seprator-curved-line">
        <svg viewBox="0 0 212 27">
          <path d="M0, 0 C79.5, 0, 79.5, 26, 106, 26 S132.5, 0, 212, 0"></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { title: { type: String } },
};
</script>
