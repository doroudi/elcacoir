<template>
  <div class="section container-fluid">
    <div class="row">
      <template v-for="(service,index) of services">
        <div class="col-md-3 col-sm-6 service" :key="'image' + index">
          <div class="service-img" :style="{'background-image' : `url('images/services/${service.image}')`}">
            <div class="overlay">
              <a href="service.url" class="circle-button">
                <box-icon name="link"></box-icon>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 service" :key="'info' + index">
          <div class="description">
            <h2>{{service.name}}</h2>
            <h3 class="text">
              {{service.description}}
              <br />
              <a class="service-button" :href="service.url">
                <box-icon name="link"></box-icon>
              </a>
            </h3>
          </div>
        </div>
      </template>     
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            services: [
                {
                    id:1,
                    name: 'التراسونیک',
                    icon: '',
                    url: '/ultrasonic',
                    description: 'تجهیزات پیشرفته التراسونیک',
                    image: 'ultrasonic.jpg'
                },
                {
                    id:2,
                    name: 'اینترنت اشیا',
                    url: '/iot',
                    icon:'',
                    description: 'سیستم های کنترل مبتنی بر اینترنت اشیا',
                    image: 'iot.jpg'
                },
                {
                    id:3,
                    name: 'سیستم های امنیت',
                    url: '/security',
                    icon:'',
                    description: 'سیستم های امنیتی ورود با اثر انگشت و RFID',
                    image: 'security.jpg'
                },
            ]
        }
    }
};
</script>

<style lang="scss" scoped>
</style>