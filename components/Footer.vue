<template>
   <div id="footer">
        <div class="poF goToTop" @click="scrollToTop">
            <img src="@/assets/img/btngo.png" alt="">
            <span class="f30 poA">立即<br />報名<br /><img src="@/assets/img/arrow.png" class="arrow" alt=""></span>
            
        </div>
        <ul>
            <p class="f15">指導單位</p>
            <li><img src="@/assets/img/logo-2.png" alt=""><span class="f18">勞動部</span></li>
            <li><img src="@/assets/img/logo-3.png" alt=""><span class="f18">勞動部勞動力發展署</span></li>
        </ul>
        <ul>
            <p class="f15">主辦單位</p>
            <li><img src="@/assets/img/logo-3.png" alt=""><span class="f18">勞動部勞動力發展署中彰投分署</span></li>
        </ul>
        <ul>
            <p class="f15">執行單位</p>
            <li><img src="@/assets/img/logotop-1.png" alt="" class="mini"><span class="f18">遠見雜誌</span></li>
        </ul>
        <br>
       
        <p class="f14"><br>Copyright© 1999~2019遠見天下文化出版股份有限公司. All rights reserved.</p>
        <p class="f14">讀者服務電話：(02)26620012 時間：週一至週五9:00～12:30；13:30～17:00 服務信箱：gvm@cwgw.com.tw</p>
    </div>
</template>
<script>
import $ from 'jquery';
export default {
    data() {
      return {
        $body: null,
      }
    },
    mounted() {
      this.$body =  (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    },
    methods: {
        scrollToTop(dom) {
            this.$body.animate({scrollTop: 0 });
        }
    }
}
</script>

<style lang="scss" scoped>
#footer {
    text-align: center;
    padding: 30px 20px;
    background-color: #f1f1f1;
    
    img.logo {
        display: inline-block;
        height: 58px;
        margin: 10px;
    }
    ul {
        display: inline-block;
        text-align: left;
        padding:  0 10px;
        color: #666666;
        @media (max-width: 599px){
            width: 100%;
            margin-bottom: 25px;
            text-align: center;
        }
        img {
            height: 44px;
            &.mini {
                height: 36px;
                margin-top: 4px;
                
            }
            @media (max-width: 599px){
                height: 25px;
                &.mini {
                    height: 23px;
                }
            }
        }
        span {
            color: #24509b;
            line-height: 44px;
            display: inline-block;
            padding: 0 0 0 15px;
            vertical-align: top;
            @media (max-width: 599px){
                line-height: 25px;
                padding: 0 0 0 7px;
            }
        }
        li {
            list-style: none;
            float: left;
            margin-right: 20px;
            @media (max-width: 599px){
                display: inline-block;
                margin-right: 14px;
                float: none;
            }
        }
    }
    .goToTop {
        right: 40px;
        bottom: 40px;
        width: 155px;
        z-index: 400;
        @media (max-width: 599px){
            width: 100px;
            right: 15px;
            bottom: 15px;
        }
        span{
            width: 100%;
            left: -2px;
            display: block;
            line-height: 1.2;
            top: 33px;
            @media (max-width: 599px){
                top: 24px;
                font-size: 15px;
            }

            .arrow {
                width: 20px;
                display: block;
                margin: 5px auto 0;
                @media (max-width: 599px){
                    width: 15px;
                }
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
