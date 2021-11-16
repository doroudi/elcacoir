<template>
  <div>
    <div class="sub-section">
      <h3 class="section-title">تیم ما</h3>
      <p class="description">
        تیمی متشکل از جوانان تحصیل کرده در تخصص های مختلف گرد هم آورده ایم تا با
        بهره گیری از نیروی جوانی ، تحصیلات بالا و کار تیمی محصولاتی ارزشمند
        تولید کنیم و نیاز های مشتریانمان را برطرف کنیم
      </p>
    </div>
    <div class="team row container-fluid">
      <div
        v-for="(user, index) of users"
        :key="index"
        class="col-md-3 col-xs-12 col-sm-6"
      >
        <div class="profile">
          <img
            :src="user.image.url"
            :alt="user.fullName"
            class="person"
          />
          <h4 class="name">{{ user.fullName }}</h4>
          <h4 class="details">{{ user.role }}</h4>
          <p class="bio">
            {{ user.bio }}
          </p>
          <div class="social" v-if="user.social">
            <a
              v-show="user.social.instagram"
              :href="`https://instagram.com/${user.social.instagram}`"
              target="_blank"
            >
              <box-icon type="logo" name="instagram"></box-icon>
            </a>
            <a
              v-show="user.social.telegram"
              :href="`https://t.me/${user.social.telegram}`"
              target="_blank"
            >
              <box-icon type="logo" name="telegram"></box-icon>
            </a>
            <a
              v-show="user.social.linkedin != null"
              :href="`https://ir.linkedin.com/in/${user.social.linkedin}`"
              target="_blank"
            >
              <box-icon name="linkedin" type="logo"></box-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    };
  },
  async created() {
    this.users = await this.getUsers();
  },
  methods: {
    getUsers: async () => {
      const query = `
            {
                personCollection(order: id_ASC) {
                    items {
                    id
                    fullName
                    role
                    bio
                    social
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
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';
.profile {
  position: relative;
  text-align: center;
  min-height: 400px;
  overflow: hidden;
  direction: rtl;
  border: 1px solid #ddd;
  margin: 20px 7px;
  &:hover {
    transition: all ease 0.5s;
  }
  .name {
    font-size: 1.8rem;
    color: $second-color;
  }
  .bio {
    margin-top: 20px;
    font-size: 1.2rem;
    color: #777;
  }
  img.person {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: solid 5px #ccc;
    margin: 15px auto;
  }
  .social {
    position: absolute;
    bottom: 0;
    padding: 15px 0;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-weight: 700;
    transition: all ease-in-out 0.5s;
    a {
      color: #1f1f1e;
      background: #fff;
      border-radius: 50%;
      width: 33px;
      height: 33px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin: 0 5px;
      transition: all ease-in 0.5s;
      &:hover {
        border: none;
        text-decoration: none;
        color: #1f1f1e;
        background: #fd1;
        box-shadow: 0 0 3px 1px #e4e4e4;
      }
    }
  }
}
</style>