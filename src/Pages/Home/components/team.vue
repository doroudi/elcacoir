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
            :src="`images/team/${user.image}`"
            :alt="user.fullName"
            class="person"
          />
          <h4 class="name">{{ user.fullName }}</h4>
          <h4 class="details">{{ user.responsibility }}</h4>
          <p class="bio">
            {{ user.bio }}
          </p>
          <div class="social">
            <a
              v-show="user.social.instagram"
              :href="`https://linkedin.com/${user.social.instagram}`"
              target="_blank"
            >
              <box-icon type="logo" name="instagram"></box-icon>
            </a>
            <a
              v-show="user.social.telegram"
              :href="`https://linkedin.com/${user.social.telegram}`"
              target="_blank"
            >
              <box-icon type="logo" name="telegram"></box-icon>
            </a>
            <a
              v-show="user.social.linkedin != null"
              :href="`https://linkedin.com/${user.social.linkedin}`"
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
      users: [
        {
          id: 1,
          fullName: "سامان قنبرپور",
          responsibility: "موسس و مدیرعامل",
          bio: "کارشناس ارشد برق الکترونیک",
          image: "saman.jpeg",
          social: {
            linkedin: "samanelec",
            instagram: "samanelec",
            telegram: "samanelec",
          },
        },
        {
          id: 2,
          fullName: "ساجد سیدخوشکار",
          responsibility: "کارشناس شبکه و زیرساخت",
          bio: "متخصص شبکه ، میکروتیک",
          image: "khoshkar.jpg",
          social: {
            linkedin: "khoshkar.pro",
            instagram: "khoshkar.pro",
            telegram: "khoshkar.pro",
          },
        },
        {
          id: 1,
          fullName: "",
          responsibility: "",
          bio: "",
          social: {
            linkedin: "",
            instagram: "",
            telegram: "",
          },
        },
        {
          id: 1,
          fullName: "",
          responsibility: "",
          bio: "",
          social: {
            linkedin: "",
            instagram: "",
            telegram: "",
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
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
    color: #fd1;
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