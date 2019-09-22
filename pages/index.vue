<template>
  <div class="container">
    <Header />

    <div id="content">
      <div class="section" id="sec1">
            <div class="title">
                <h4 class="f66 poA">01</h4>
                <h3 class="f30">專題演講者</h3>
                <h2 class="f66">SPEAKERS</h2>
            </div>
            <!-- <no-ssr placeholder="loading..."> -->
                <div v-swiper:mySwiper="swiperOption" id="person_slider">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="img_wrapper">
                                <img src="@/assets/img/person.jpg" alt="">
                                <h6 class="f_white f30 poA">
                                    簡士評
                                    <font class="f18">MAYO創辦人暨執行長</font>
                                </h6>
                                <h5 class="f18 poA">專題演講一</h5>
                            </div>
                            <h4 class="f_grey f18">
                                #新科技帶來新企業，未來人才你挑對了嗎?
                            </h4>
                        </div>
                        <div class="swiper-slide">
                            <div class="img_wrapper">
                                <img src="@/assets/img/person.jpg" alt="">
                                <h6 class="f_white f30 poA">
                                    簡士評
                                    <font class="f18">MAYO創辦人暨執行長</font>
                                </h6>
                                <h5 class="f18 poA">專題演講一</h5>
                            </div>
                            <h4 class="f_grey f18">
                                    #從隊員變教練──迎向數位轉型，人資要比老闆清楚的那件事
                            </h4>
                        </div>
                        <div class="swiper-slide">
                            <div class="img_wrapper">
                                <img src="@/assets/img/person.jpg" alt="">
                                <h6 class="f_white f30 poA">
                                    簡士評
                                    <font class="f18">MAYO創辦人暨執行長</font>
                                </h6>
                                <h5 class="f18 poA">專題演講一</h5>
                            </div>
                            <h4 class="f_grey f18">
                                #智慧浪潮來襲，HR如何領軍站上浪頭
                            </h4>
                        </div>
                        <div class="swiper-slide">
                            <div class="img_wrapper">
                                <img src="@/assets/img/person.jpg" alt="">
                                <h6 class="f_white f30 poA">
                                    簡士評
                                    <font class="f18">MAYO創辦人暨執行長</font> 
                                </h6>
                                <h5 class="f18 poA">專題演講一</h5>
                            </div>
                            <h4 class="f_grey f18">
                                #智慧浪潮來襲，HR如何領軍站上浪頭
                            </h4>
                        </div>
                        <div class="swiper-slide">
                            <div class="img_wrapper">
                                <img src="@/assets/img/person.jpg" alt="">
                                <h6 class="f_white f30 poA">
                                    簡士評
                                    <font class="f18">MAYO創辦人暨執行長</font>
                                </h6>
                                <h5 class="f18 poA">專題演講一</h5>
                            </div>
                            <h4 class="f_grey f18">
                                #智慧浪潮來襲，HR如何領軍站上浪頭
                            </h4>
                        </div>
                    </div>
                </div>
            <!--</no-ssr> -->

      </div>
      
      <div class="section" id="sec2">
          <div class="title">
              <h4 class="f66 poA">02</h4>
              <h3 class="f30">地方論壇議程</h3>
              <h2 class="f66">SCHEDULE</h2>
          </div>
          <div class="schedual_wrapper W1140">
              <div class="location active">
                  <h5 class="f30">-台中場-</h5>
                  <h6 class="f48">10/15</h6>
              </div>
              <div class="eventsList f24">
                  <div class="event">
                      <p class="time">13:30 – 14:00</p>
                      <p class="dot"></p>
                      <p class="subject">與會人員/貴賓報到</p>

                  </div>
                  <div class="event">
                      <p class="time">13:30 – 14:00</p>
                      <p class="dot"></p>
                      <p class="subject">活動開場/長官致詞</p>

                  </div>
                  <div class="event">
                      <p class="time">14:05 – 14:35</p>
                      <p class="dot"></p>
                      <p class="subject">
                          專題演講一
                          <span class="f_blue">
                              新科技帶來新企業，<br>
                              未來人才你挑對了嗎?
                          </span>
                      </p>

                  </div>
                  <div class="event">
                      <p class="time">14:35 – 15:05</p>
                      <p class="dot"></p>
                      <p class="subject">
                          專題演講二
                          <span class="f_blue">
                              隊員變教練──迎向數位轉型，
                              人資要比老闆清楚的那件事
                          </span>
                      </p>

                  </div>
                  <div class="event">
                      <p class="time">15:05 – 16:25</p>
                      <p class="dot"></p>
                      <p class="subject">
                          綜合座談暨交流Q&A
                          <span class="f_blue">
                              智慧浪潮來襲，
                              HR如何領軍站上浪頭
                          </span>
                      </p>

                  </div>
                  <div class="event">
                      <p class="time">16:25 – 16:30</p>
                      <p class="dot"></p>
                      <p class="subject">大合影</p>

                  </div>
                  <div class="event">
                      <p class="time">16:30 – </p>
                      <p class="dot"></p>
                      <p class="subject">散場/發放餐盒</p>

                  </div>
                
              </div>

          </div>
      </div>

      <div class="section" id="sec3">
          <div class="title">
              <h4 class="f66 poA">03</h4>
              <h3 class="f30">填寫報名</h3>
              <h2 class="f66">&nbsp;&nbsp;FORM&nbsp;&nbsp;</h2>
          </div>
          <form @submit="onSubmit" action="https://vuejs.org/" method="post" class="f18" >
              <div class="tr t_right f_red">
                  *為必填項目
              </div>
              <div class="tr">
                  <p>姓名</p>
                  <input type="text" name="name" maxlength="20" v-model="formObj.name" required="required">
              </div>
              <div class="tr">
                  <p>電話</p>
                  <input type="number" name="phone" maxlength="10" v-model="formObj.phone" required="required">
              </div>
              <div class="tr">
                  <p>e-mail</p>
                  <input type="email" name="email" v-model="formObj.email" required="required">
              </div>
              <div class="tr">
                  <p>場次</p>
                  <select name="" id="event" v-model="formObj.session" required="required">
                      <option value="台中">台中</option>
                      <option value="彰化">彰化</option>
                  </select>
              </div>
              <div class="tr">
                  <p>主辦單位</p>
                  <input type="text" name="organizer" v-model="formObj.organizer" required="required">
              </div>
              <div class="tr">
                  <p>職稱</p>
                  <input type="text" name="jobTitle" v-model="formObj.jobTitle" required="required">
              </div>
              <div class="tr">
                  <p class="optional">身分證字號</p>
                  <input type="text" name="id" v-model="formObj.id">
              </div>
              <div class="tr t_left">
                  <input type="checkbox" name="" id="agreement" v-model="agreement">
                  <label for="agreement">我已詳閱並同意<a href="https://www.gvm.com.tw/about.html" target="_blank">個資告知事項</a>。</label>
              </div>
              <button class="f18 submit" type="submit">送出</button>
          </form>
      </div>

      <div class="section" id="sec4">
          <div class="title">
              <h4 class="f66 poA">04</h4>
              <h3 class="f30">場地資訊</h3>
              <h2 class="f66">&nbsp;PLACE&nbsp;</h2>
          </div>
          <div class="google_map">
              <!-- <img src="" alt=""> -->
              <h5 class="f18 poA">國立自然科學博物館 第三演講(藍)廳</h5>
          </div>
          <h6 class="f18"><br>臺中市北區館前路一號B1</h6>
      </div>
        
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
    data () {
      return {
        carouselCurrent: 0,
        swiperOption: {
            slidesPerView: 3,
            spaceBetween: 0,
             breakpoints: { 
                768: { 
                    slidesPerView: 2,
                },
                414: {
                    slidesPerView: 1,
                }
            }
        },
        formObj: {
            name:'',
            phone:'',
            email:'',
            session:'',
            organizer:'',
            jobTitle:'',
            id: '',
        },
        agreement: false, 
      }
    },
    computed: {
        validatePhone() {
            var mobileReg = /^(09)[0-9]{8}$/;
            return (this.formObj.phone.match(mobileReg)) ? true : false
        },
        validateMail() {
            var mailRegex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            return (this.formObj.email.match(mailRegex)) ? true : false
        },
        validateId() {
            var idRegex=/^[a-z](1|2)\d{8}$/i; 
            return (this.formObj.id.match(idRegex)) ? true : false
        }
        
    },
    components: {
        Header,
        Footer,
    },
    mounted() {
       
    },
    methods: {
        deviceDetect() {
           
        },
        onSubmit(e) {
            let formData = JSON.stringify(this.formObj);
            console.log(formData);
            console.log(this.validatePhone, this.validateMail, this.validateId);
            // this.$http.post('', formData).then(function (res) {
            //     if (res.status === 2000) {

            //     }
            //     else{

            //     }
            // })
            e.preventDefault();
        }
        
    },

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC:400,500,700|Oswald:500&display=swap');

* {
    user-select: none; 
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0); 
    outline:none 
}

body {
    font-family: 'Noto Sans TC', sans-serif;
}
img {
    max-width: 100%;
}
.W100{
    width: 100%;
}

.W1140 {
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;

}

.f14{
    font-size: 14px;
}

.f18{
    font-size: 18px;
}

.f24{
    font-size: 24px;
}

.f30{
    font-size: 30px;
}

.f48{
    font-size: 48px;
}

.f66{
    font-size: 66px;
}

.f_blue {
    color: #003b8f;
}

.f_grey {
    color: #333;
}

.f_white {
    color: #fff;
}

.f_red {
    color: #e43434;
}

.t_left {
    text-align: left;
}

.t_right {
    text-align: right;
}

.poA {
    position: absolute;
}

.poF {
    position: fixed;
}

.flex {
    display: flex;
}

.title {
    position: relative;
    display: inline-block;
    text-align: right;
    line-height: 1;
    margin-bottom: 50px;
    h2{
        font-family: 'Oswald', sans-serif;
        position: relative;
    }

    h4{
        font-family: 'Oswald', sans-serif;
        background: -webkit-linear-gradient(#a6c0fe, #f68084);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        top: -8px;
        left: -10px;
    }
}


.section{
    text-align: center;
    padding: 40px 0 50px; 
}

#person_slider {
    margin-bottom: 50px;
    padding-bottom: 30px;
    border-bottom: 1px solid #9b9b9b;
}

.swiper-slide {
    position: relative;
    h4{
        padding: 0 10px;
    }
}

.img_wrapper {
    position: relative;
    margin-bottom: 30px;
    *{
        color: #fff;
    }  
    img {
        width: 100%;
    }
    h6{
        bottom: 30%;
        width: 100%;
        transform: translate(0 , -50%);
        font{
            display: block;
        }
    }
}

#sec2, #sec3 {
    background-color: #f1f1f1;
    padding-left: 20px;
    padding-right: 20px;
}


.schedual_wrapper {
    flex-wrap: wrap;
    flex-direction: row;
}

.location {
    display: inline-block;
    width: 125px;
    line-height: 1.2;
    vertical-align: top;
    margin-top: 35px;
     h5{
        display: block;
    }
     h6{
        display: block;
        font-family: 'Oswald', sans-serif;
    }
}

.eventsList {
    display: inline-block;
    width: calc(100% - 245px);
    margin-bottom: 50px;
    margin-left: 85px;
    *{
        vertical-align: top;
    }
}

.event {
    width: 100%;
    padding: 35px 40px;
    border-bottom: 1px solid #9b9b9b;
    position: relative;
}

.time {
    width: 130px;
    text-align: left;
    font-family: 'Oswald', sans-serif;
    display: inline-block;
}

.dot {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius:50%;
    background-color: #003b8f;
    margin: 9px 30px;
    &:after {
        content: '';
        height: calc(100% - 20px);
        position: absolute;
        width: 1px;
        top: 65px;
        left: 217px;
        border-right: 1px dashed #9b9b9b;
    }

}


.subject {
    display: inline-block;
    width: calc(100% - 225px);
    text-align: left;
    line-height: 1.25;
    span{
        padding-top: 10px;
        display: block;
    }
}


form {
    margin-top: -80px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 20px;
    box-shadow: 2.8px 2.8px 20px 0 rgba(100, 100, 85, 0.2);
    background-color: #ffffff;
    max-width: 800px;
    padding: 40px 40px 60px;
    a{
        color: #0042a0;
        border-bottom: 1px solid #0042a0;
        text-decoration: none;
    }
    .submit {
        display: block;
        height: 60px;
        line-height: 60px;

        background-color: #0042a0;
        border-radius: 3px;
        color: #fff;
        width: 100%;
        max-width: 550px;
        margin: 10px;

    }
}


input, select {
    -webkit-appearance: none;
    line-height: 52px;
    background-color: #f1f1f1;
    border: 1px solid #9d9d9d;
    width: calc(100% - 107px);
    padding: 0 10px;
    border-radius: 3px;
    font-size: 18px;
    &:focus {
        border: 1px solid #003b8f;
    }
}


input[type='checkbox'] {
    width: 26px;
    height: 26px;
    vertical-align: top;
}

input[type='checkbox'] + label {
    line-height: 26px;
    vertical-align: top;
}


.tr {
    max-width: 550px;
    margin: 15px auto;
    display: inline-block;
    width: 100%;
    p{
        width: 100px;
        display: inline-block;
        text-align: left;
        &:before {
            content: '*';
            color: #e43434;
           
        }
        &.optional{
            &:before {
                display: none;
            }
            
        }
    }
   
}




.google_map {
    height: 40vw;
    position: relative;
}


.google_map h5, .img_wrapper h5 {
    color: #fff;
    bottom: 0;
    left: 50%;
    display: inline-block;
    padding: 0 21px;
    transform: translate(-50% , 50%);
    border-radius: 18px;
    line-height: 36px;
    background-blend-mode: screen;
    background-image: linear-gradient(50deg, #0064c9, #f68084);
    font-weight: 500;
    white-space: nowrap;
}



</style>
