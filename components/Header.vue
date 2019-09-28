<template>
  <div id="top" class="W100 bg_trans_white" :class="{'bg_blue': showFixBar}">
      <img src="@/assets/img/gv-mlogo.jpg" alt="" class="logo">
      <img src="@/assets/img/logotop-2.png" alt="" class="logo">

      <ul :class="{'show': isNavOpen}" class="f18">
          <li @click="scrollHandler('#speaker')">講者簡介</li>
          <li @click="scrollHandler('#schedual')">論壇議程</li>
          <li @click="scrollHandler('#form')">立即報名</li>
          <li @click="scrollHandler('#location')">場地資訊</li>
      </ul>
      <div class="hambergur" :class="{'show': isNavOpen}" @click="navHandler">
        <span />
        <span />
        <span />
      </div>
  </div>
</template>

<script>
  import $ from 'jquery';

  export default {
    data() {
      return {
        isNavOpen: false,
        $body: null,
        showFixBar: false,
      }
    },
    mounted() {
      this.$body =  (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
      this.$nextTick( ()=> {
        window.addEventListener("scroll", this.deviceTop);
      });
    },
    methods: {
      navHandler() {
        this.isNavOpen = !this.isNavOpen;
      },
      scrollHandler(dom) {
        this.isNavOpen = false;
        this.$body.animate({scrollTop: $(dom).offset().top - 70 });
      },
      deviceTop() {
          if ($(window).scrollTop() >= 90 ) {
            this.showFixBar = true;
          } else {
            this.showFixBar = false;
          }
      }
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.deviceTop);
    }
  }
</script>

<style lang="scss" scoped>
#top {
  width: 100%;
  text-align: center;
  position: fixed;
  z-index: 300;
  transition: all .4s;
  height: 80px;

  li{
    display: inline-block;
    line-height: 80px;
    color: #fff;
    font-weight: bold; 
    padding: 0 30px;
    cursor: pointer;
    transition: all .4s;
    @media (min-width: 769px){
      &:hover{
        color: #ffc62c;
      }
    }
    
  }
  ul {
    padding: 0 20px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
  }
  .logo {
    float: left;
    margin-left: 20px;
    height: 36px;
    margin-top: 20px;
    &:nth-child(2) {
      height: 44px;
      margin-top: 16px;
    }
   
    @media (max-width: 768px){
      margin-top: 12px;
      height: 25px;
      &:nth-child(2) {
        height: 31px;
        margin-top: 10px;
      }
    }
  }
  &.bg_blue {
    background-color: #043884;
  }
  .hambergur {
    display: none;
  }
  @media (max-width: 768px){
    background-color: #043884;
    height: 50px;
    ul {
      width: 100%;
      padding: 20px 0;
      position: fixed;
      top: 50px;
      left: 100%;
      z-index: 300;
      background-color: #043884;
      transform: translate(0, 0);
      transition: all .4s;
      &.show {
        left: 0;
      }
      li {
        width: 100%;
        line-height: 50px;

      }
    }
    .hambergur {
      display: block;
      float: right;
      margin: 13px 16px;
      span {
        transition: all .4s;
        display: block;
        margin-bottom: 6px;
        width: 30px;
        height: 4px;
        border-radius: 2px;
        background-color: #ffffff;
        &:nth-child(2) {
          width: 22px;

        }
      }
      &.show {
        span {
          transform-origin: left center;
          &:nth-child(1) {
            transform: rotate(45deg);
          }
          &:nth-child(2) {
            opacity: 0;
          }
          &:nth-child(3) {
            transform: rotate(-45deg);

          }
      }
      }
    }
  }
  
}


</style>
