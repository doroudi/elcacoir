<template>
  <div>
    <section-bar title="تماس با ما"></section-bar>
    <div class="section">
      <div class="row">
        <div class="col-md-4 col-xs-12 contact-box">
          <box-icon name="envelope"></box-icon>
          <h4 class="box-title">ایمیل</h4>
          <span>info[@]elcaco.ir</span> -
          <span>elcaco[@]gmail.com</span> 
        </div>
        <div class="col-md-4 col-xs-12 contact-box">
          <box-icon name="map"></box-icon>
          <h4 class="box-title">آدرس</h4>
          <span>
            <address>مرند خیابان جلفا بالاتر از دارایی کوچه امانت</address>
          </span>
        </div>
        <div class="col-md-4 col-xs-12 contact-box">
          <box-icon name="phone"></box-icon>
          <h4 class="box-title">تلفن</h4>
          <span><a href="tel:04142233952">0414 223 3952</a></span><br>
          <span><a href="tel:09370470088">0937 047 0088</a></span>
        </div>
      </div>
      <h3 class="section-title">ارسال پیغام</h3>
      <form
        class="contact-form"
        name="contactForm"
        @submit.prevent="sendMessage"
        novalidate
      >
        <input
          type="text"
          name="name"
          v-model="message.senderName"
          placeholder="نام"
          required
        />
        <input
          type="text"
          name="email"
          v-model="message.email"
          placeholder="ایمیل"
        />
        <input
          type="text"
          name="tel"
          v-model="message.tel"
          placeholder="شماره تماس"
        />
        <textarea
          name="text"
          cols="30"
          rows="10"
          v-model="message.text"
          placeholder="متن"
        ></textarea>
        <input
          type="submit"
          value="ارسال"
          class="send-button"
        />
      </form>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            message: {

            }
        }
    },
    methods: {
        sendMessage() {}
    }
};
</script>

<style lav="scss" scoped>
</style>