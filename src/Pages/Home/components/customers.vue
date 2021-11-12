<template>
  <section class="sub-section">
    <h3 class="section-title">برخی از مشتریان ما</h3>
    <div class="customers-carousel" style="direction: ltr">
      <div class="centered" v-for="(customer, index) of customers" :key="index">
        <a :href="customer.href" target="_blank">
          <img
            :src="`/images/customer/${customer.imageName}`"
            :alt="customer.title"
            class="customer"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      customers: [],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>