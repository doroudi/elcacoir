<template>
  <div class="about section">
    <section-bar title="درباره"></section-bar>
    <div class="about-part animated">
      <div class="col-md-12 big-title">
        <h2>شرکت فنی و مهندسی <span class="highlight">الکا</span></h2>
        <h3>
          تولید کننده تجهیزات التراسونیک ، سیستم های امنیتی ، اینترنت اشیا ،
          تجهیزات رنگ آمیزی جاده
        </h3>
      </div>
      <div class="row container-fluid">
        <div class="col-md-3 description">
          <box-icon size="5rem" name="sun"></box-icon>
          <h3>نوآوری</h3>
          <p>ما در الکا به دنبال خلق محصولات جدید برای نیاز های جامعه هستیم</p>
        </div>
        <div class="col-md-3 description">
          <box-icon
            color="#000"
            size="5rem"
            type="solid"
            name="graduation"
          ></box-icon>
          <h3>تیم تحصیل کرده و مجرب</h3>
          <p>
            تیمی متشکل از افراد تحصیل کرده و با استعداد در زمینه های مختلف گرد
            آورده ایم
          </p>
        </div>
        <div class="col-md-3 description">
          <box-icon color="#000" size="5rem" name="vial"></box-icon>

          <h3>تست های متعدد</h3>
          <p>
            از کیفیت سرویس ها و محصولاتمان اطمینان داریم ، چون فرایند تست دشواری
            را طی میکنند
          </p>
        </div>

        <div class="col-md-3 description">
          <box-icon color="#000" size="5rem" name="package"></box-icon>

          <h3>فناروی های نوین</h3>
          <p>
            تکنولوژی های روز دنیا را برای ارائه محصولاتی با کیفیت و بی نقص به
            خدمت گرفته ایم
          </p>
        </div>
      </div>
    </div>

    <Map></Map>
    <ElcaTeam></ElcaTeam>
    <OurCustomers></OurCustomers>
  </div>
</template>

<script>
import ElcaTeam from "./team.vue";
import Map from "./map";
import OurCustomers from "./customers.vue";

export default {
  name: "About",
  components: {
    ElcaTeam,
    Map,
    OurCustomers,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables";
.about {
  .about-part {
    overflow: auto;
    margin-top: -65px;
    min-height: 500px;
    .big-title {
      padding-top: 60px;
      text-align: center;

      h2 {
        font-size: 2.4rem;
        font-weight: bold;
        .highlight {
          color: $second-color;
        }
      }
      h3 {
        font-size: 1.5rem;
      }
    }
    .description {
      line-height: 2em;
      text-align: center;
      padding-top: 75px;
      i {
        font-size: 7rem;
      }
      //border-bottom: solid 1px $line-color;
      h2 {
        font-size: 2rem;
      }
      h3 {
        font-size: 1.5rem;
        margin-bottom: 25px;
      }
    }
  }
}
</style>