<template>
  <div id="top" class="W100 bg_trans_white">
      <ul :class="{'show': isNavOpen}">
          <li>講者簡介</li>
          <li>論壇議程</li>
          <li>立即報名</li>
          <li>場地資訊</li>
      </ul>
      <div class="hambergur mb" :class="{'show': isNavOpen}" @click="navHandler">
        <span />
        <span />
        <span />
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isNavOpen: false,
      }
    },
    methods: {
      navHandler() {
        this.isNavOpen = !this.isNavOpen;
      }
    }
  }
</script>

<style lang="scss" scoped>
#top {
  width: 100%;
  text-align: center;
  position: fixed;
  z-index: 300;
  li{
    display: inline-block;
    line-height: 90px;
    padding: 0 15px;
    color: #fff;
  }
  @media (max-width: 599px){
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
