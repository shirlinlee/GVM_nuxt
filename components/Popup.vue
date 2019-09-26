<template>
  <div id="black" class="W100 poF">
      <div class="popup">
          <p class="f24">{{ popupMsg }}</p>
          <a href="javascript:;" class="close btn f18 f_white" @click="popupHandler">確認</a>
      </div>
  </div>
</template>

<script>
// :pages="{ 頁碼資訊 }"
// @emitPages="更新頁面事件"
export default {
  name: 'Popup',
  props: ['popupMsg'],
  mounted() {
  },
  methods: {
    popupHandler() {
      this.$emit('popupHandler', { close: false });
    }
  }
}
</script>

<style lang="scss" scoped>
#black {
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  text-align: center;
  background-color: rgba(0,0,0, .7);
  z-index: 500;
  .popup{
    width: 88%;
    max-width: 600px;
    padding: 70px 30px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 2.8px 2.8px 20px 0 rgba(100, 100, 85, 0.2);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 599px){
        padding: 40px 20px;
    }
    p {
        padding-bottom: 20px;
    }
    a {
        width: 92%;
        display: inline-block;
        max-width: 300px;
        line-height: 56px;
        border-radius: 3px;
        background-color: #24509b;
        padding: 0 30px;
        text-decoration: none;
    }
  }
}
</style>
