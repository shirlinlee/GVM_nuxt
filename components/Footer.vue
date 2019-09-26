<template>
   <div id="footer">
        <div class="poF goToTop" @click="scrollToTop">
            <img src="@/assets/img/btngo.png" alt="">
            <span class="f30 poA">立即<br />報名<br /><img src="@/assets/img/arrow.png" class="arrow" alt=""></span>
            
        </div>
        
        <img src="@/assets/img/gv-mlogo.jpg" class="logo" alt="">
        <img src="@/assets/img/wd-alogo.jpg" class="logo" alt="">
        <p class="f14"><br>Copyright© 1999~2019遠見天下文化出版股份有限公司. All rights reserved.</p>
        <p class="f14">讀者服務電話：(02)26620012 時間：週一至週五9:00～12:30；13:30～17:00 服務信箱：gvm@cwgw.com.tw</p>
    </div>
</template>
<script>
export default {
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}
</script>

<style lang="scss" scoped>
#footer {
    text-align: center;
    padding: 20px;
    img.logo {
        display: inline-block;
        height: 58px;
        margin: 10px;
    }
    .goToTop {
        right: 40px;
        bottom: 40px;
        width: 155px;
        z-index: 400;
        @media (max-width: 599px){
            transform: scale(.5);
            transform-origin: right bottom;
        }

        span{
            width: 100%;
            left: -2px;
            display: block;
            line-height: 1.2;
            top: 33px;
            .arrow {
                width: 20px;
                display: block;
                margin: 5px auto 0;
            }
        }
    }
     p{
        display: block;
        margin-bottom: 10px;
        line-height: 1.5;
    }
}

</style>
