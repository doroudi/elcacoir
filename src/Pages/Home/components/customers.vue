<template>
  <section class="sub-section">
    <h3 class="section-title">برخی از مشتریان ما</h3>
    <div class="customers-carousel" style="direction: ltr">
      <div class="centered" v-for="(customer) of customers" :key="customer.id">
        <a :href="customer.href" target="_blank">
          <img
            :src="customer.image.url"
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
  async created() {
      this.customers = await this.fetchCustomers();
  },
  methods: {
      fetchCustomers: async () => {
           const query = `
            {
                customerCollection {
                    items {
                        id
                        title
                        description
                        image {
                            url
                        }
                    }
                }
            }`;
      const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.VUE_APP_CONTENTFUL_SPACE_ID}`;
      const fetchOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.VUE_APP_CONTENTFUL_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
        }),
      };
      try {
        const response = await fetch(fetchUrl, fetchOptions).then((response) =>
          response.json()
        );
        return response.data.personCollection.items;
      } catch (error) {
        throw new Error("Could not receive the data from Contentful!");
      }
      }
  }
};
</script>

<style lang="scss" scoped>
</style>