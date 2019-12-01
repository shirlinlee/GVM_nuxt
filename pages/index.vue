<template>
  <div class="container">
    <Header />

    <div id="content">
      <div class="hidden W100">
        <div id="banner">
          <!-- <img src="@/assets/img/kvbg.jpg" alt=""> -->
          <div class="kv">
            <h1 class="wow flipInX">
              <img src="@/assets/img/hl.png" class="pc" alt="新時代人力資源管理策略系列" />
              <img src="@/assets/img/hl_m.png" class="mb" alt="新時代人力資源管理策略系列" />
            </h1>
            <img src="@/assets/img/ppls.png" class="global" />
          </div>
        </div>

        <div class="section" id="intro">
          <div class="gradient_bg"></div>
          <div class="wow fadeInUp">
            <div class="title">
              <h4 class="f66 poA">01</h4>
              <h3 class="f30">論壇簡介</h3>
              <h2 class="f66">INTRODUCTION</h2>
            </div>
            <div class="W1140">
              <h1 class="f30">人力資源X數位轉型X企業接班</h1>
              <p class="f18">
                21世紀是快速又時刻充滿高風險的時代，我們無法預知產業未來，卻能看見人才！
                <br />臺灣企業面臨衝擊，企業經營者應該保持前瞻遠見，培養新時代人資管理者，因應數位時代洪流！
                <br />勞動力發展署中彰投分署為使企業及勞工能因應新時代人力資源發展趨勢，特別舉辦「108年新時代人力資源管理策略系列論壇」。
                <br />期盼透過呼應地方產業發展特色的兩場
                <font class="f_blue">論壇</font>及綜觀人力資源新趨勢
                <font class="f_blue">總論壇，</font>
                <br />共同探討企業人資該如何整備以因應新時代的挑戰，幫助企業提升競爭力！
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="section" id="speaker">
        <img src="@/assets/img/rightimg.png" class="poA geo_top" />
        <div class="W1140 poR wow fadeInUp" style="z-index: 20;">
          <div class="title">
            <h4 class="f66 poA">02</h4>
            <h3 class="f30">講者簡介</h3>
            <h2 class="f66">SPEAKERS</h2>
          </div>
          <client-only>
            <div v-swiper:mySwiper="swiperOption" id="person_slider">
              <div class="swiper-wrapper" :class="{few: allSpeakers.length ===2 }">
                <div
                  class="swiper-slide"
                  v-for="(slide, index) in allSpeakers"
                  :key="'speaker_'+index"
                >
                  <div class="img_wrapper">
                    <img :src="slide.photo" alt />
                    <h6 class="f_white f30 poA">
                      {{ slide.name }}
                      <font class="f18" v-html="slide.title" />
                    </h6>
                    <p class="session_tag poA f18" v-html="slide.session" />
                  </div>
                  <h4 class="f_grey f18">
                    <h5 class="f18 poA">{{ slide.subject }}</h5>
                    <font v-html="slide.hashtag"></font>
                  </h4>
                </div>
              </div>
            </div>
          </client-only>
          <div class="slider_nav">
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </div>
      </div>

      <div class="section" id="schedual">
        <div class="wow fadeInUp">
          <div class="title">
            <h4 class="f66 poA">03</h4>
            <h3 class="f30">論壇議程</h3>
            <h2 class="f66">SCHEDULE</h2>
          </div>
          <div class="schedual_wrapper W1140">
            <div class="tab">
              <div
                class="location"
                v-for="(tab, index) in sessions"
                :key="'tab_'+index"
                :class="[{'active': index === schedualCurrent }, `active_${index}`]"
                @click="schedualTabHandler(index)"
              >
                <h5 class="f30">-{{ tab.name }}-</h5>
                <h6 class="f48">{{ tab.time }}</h6>
              </div>
            </div>

            <div class="eventsList f24" v-show="schedualCurrent===0">
              <div class="event">
                <p class="time">09:30 – 10:00</p>
                <p class="dot"></p>
                <div class="subject">貴賓報到</div>
              </div>
              <div class="event">
                <p class="time">10:00 – 10:20</p>
                <p class="dot"></p>
                <div class="subject">活動開場</div>
              </div>
              <div class="event">
                <p class="time">10:20 – 10:25</p>
                <p class="dot"></p>
                <div class="subject">主題引言</div>
              </div>
              <div class="event">
                <p class="time">10:25 – 10:55</p>
                <p class="dot"></p>
                <div class="subject">
                  <h2 class="f18 f_white">專題演講一</h2>
                  <span class="f_blue">
                    科技X人力資源 ──
                    <br />做一個新時代人力資源工作者
                  </span>
                </div>
              </div>
              <div class="event">
                <p class="time">10:55 – 11:25</p>
                <p class="dot"></p>
                <div class="subject">
                  <h2 class="f18 f_white">專題演講二</h2>
                  <span class="f_blue">
                    企業人資新思維 ──
                    <br />新時代人才聘用與管理
                  </span>
                </div>
              </div>
              <div class="event">
                <p class="time">11:25 – 12:30</p>
                <p class="dot"></p>
                <div class="subject">
                  <h2 class="f18 f_white">綜合座談暨交流Q&A</h2>
                  <span class="f_blue">
                    永遠走在最前面 ──
                    <br />新時代的人力資源管理策略
                  </span>
                </div>
              </div>
              <div class="event">
                <p class="time">12:30 – 13:30</p>
                <p class="dot"></p>
                <div class="subject">中場休息</div>
              </div>
              <div class="event">
                <p class="time">13:30 – 14:00</p>
                <p class="dot"></p>
                <div class="subject">貴賓入場</div>
              </div>
              <div class="event">
                <p class="time">14:00 – 14:05</p>
                <p class="dot"></p>
                <div class="subject">主題引言</div>
              </div>
              <div class="event">
                <p class="time">14:05 – 14:35</p>
                <p class="dot"></p>
                <div class="subject">
                  <h2 class="f18 f_white">專題演講一</h2>
                  <span class="f_blue">
                      跨世代的人才需求 ── <br />
                      HR如何選賢與能，助力接班布局 
                  </span>
                </div>
              </div>
              <div class="event">
                <p class="time">14:35 – 15:05</p>
                <p class="dot"></p>
                <div class="subject">
                  <h2 class="f18 f_white">專題演講二</h2>
                  <span class="f_blue">
                      二代接班新布局 ──<br />
                      繼承者所需要的新世代HR
                  </span>
                </div>
              </div>
              <div class="event">
                <p class="time">15:05 – 15:25</p>
                <p class="dot"></p>
                <div class="subject">茶敘時間</div>
              </div>
              <div class="event">
                <p class="time">15:25 – 16:30</p>
                <p class="dot"></p>
                <div class="subject">
                  <h2 class="f18 f_white">綜合座談暨交流Q&A</h2>
                  <span class="f_blue">
                    老手拉新手 ──<br />打造跨世代不老企業
                  </span>
                </div>
              </div>
              <div class="event">
                <p class="time">16:30 –</p>
                <p class="dot"></p>
                <div class="subject">散場</div>
              </div>
            </div>

            <div class="eventsList f24" v-show="schedualCurrent===1">
              <div class="event">
                <p class="time">13:30 – 14:00</p>
                <p class="dot"></p>
                <div class="subject">報到</div>
              </div>
              <div class="event">
                <p class="time">14:00 – 14:05</p>
                <p class="dot"></p>
                <div class="subject">活動開場</div>
              </div>
              <div class="event">
                <p class="time">14:05 – 14:35</p>
                <p class="dot"></p>
                <div class="subject">
                  <h2 class="f18 f_white">專題演講一</h2>
                  <span class="f_blue">
                    新科技帶來新企業，
                    <br />未來人才你挑對了嗎?
                  </span>
                </div>
              </div>
              <div class="event">
                <p class="time">14:35 – 15:05</p>
                <p class="dot"></p>
                <div class="subject">
                  <h2 class="f18 f_white">專題演講二</h2>
                  <span class="f_blue">
                    迎向數位轉型，
                    <br />人資要比老闆清楚的那件事
                  </span>
                </div>
              </div>
              <div class="event">
                <p class="time">15:05 – 16:25</p>
                <p class="dot"></p>
                <div class="subject">
                  <h2 class="f18 f_white">綜合座談暨交流Q&A</h2>
                  <span class="f_blue">
                    智慧浪潮來襲，
                    <br />HR如何領軍站上浪頭
                  </span>
                </div>
              </div>
              <div class="event">
                <p class="time">16:25 –</p>
                <p class="dot"></p>
                <div class="subject">散場</div>
              </div>
            </div>

            <div class="eventsList f24" v-show="schedualCurrent===2">
              <div class="event">
                <p class="time">13:30 – 14:00</p>
                <p class="dot"></p>
                <div class="subject">報到</div>
              </div>
              <div class="event">
                <p class="time">14:00 – 14:05</p>
                <p class="dot"></p>
                <div class="subject">活動開場</div>
              </div>
              <div class="event">
                <p class="time">14:05 – 14:35</p>
                <p class="dot"></p>
                <div class="subject">
                  <h2 class="f18 f_white">專題演講一</h2>
                  <span class="f_blue">
                    跟對老闆不如幫對老闆
                    <br />── 二代接班的HR角色怎麼演?
                  </span>
                </div>
              </div>
              <div class="event">
                <p class="time">14:35 – 15:05</p>
                <p class="dot"></p>
                <div class="subject">
                  <h2 class="f18 f_white">專題演講二</h2>
                  <span class="f_blue">
                    老將or新兵?用對的都是好兵!
                     ──<br />HR的跨世代用人哲學
                  </span>
                </div>
              </div>
              <div class="event">
                <p class="time">15:05 – 16:25</p>
                <p class="dot"></p>
                <div class="subject">
                  <h2 class="f18 f_white">綜合座談暨交流Q&A</h2>
                  <span class="f_blue">輔佐繼承者們的HR成功秘笈</span>
                </div>
              </div>
              <div class="event">
                <p class="time">16:25 –</p>
                <p class="dot"></p>
                <div class="subject">散場</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section wow fadeInUp" id="location">
        <img src="@/assets/img/leftimg.png" class="poA geo_bottom" />
        <img src="@/assets/img/bg-02.png" class="poA bg W100" />

        <div class="wow fadeInUp" style="position: relative; z-index: 4;">
          <div class="title">
            <h4 class="f66 poA">04</h4>
            <h3 class="f30">場地資訊</h3>
            <h2 class="f66">&nbsp;PLACE&nbsp;</h2>
          </div>
          <div class="google_map W1140">
            <!-- <img src="" alt=""> -->
            <div class="tab">
              <div
                class="location"
                v-for="(tab, index) in sessions"
                :key="'session_'+index"
                :class="[{'active': index === locationCurrent }, `active_${index}`]"
                @click="locationTabHandler(index)"
              >
                <h5 class="f30">-{{ tab.name }}-</h5>
                <h6 class="f48">{{ tab.time }}</h6>
                <div class="bg_grey" :class="'bg_grey_'+index">
                  <img class="pin poA" src="@/assets/img/pin.png" />
                  <p v-html="tab.place" />
                  <font class="f_grey">{{ tab.location }}</font>
                </div>
              </div>
            </div>
            <div class="map_imgs">
                <img src="@/assets/img/map_03.png" v-show="locationCurrent===0" />
                <img src="@/assets/img/map_01.png" v-show="locationCurrent===1" />
                <img src="@/assets/img/map_02.png" v-show="locationCurrent===2" />
            </div>
          </div>
        </div>
      </div>
      <div class="section" id="form">
        <div class="W1140 wow fadeInUp">
          <div class="title">
            <h4 class="f66 poA">05</h4>
            <h3 class="f30">立即報名</h3>
            <h2 class="f66">&nbsp;&nbsp;FORM&nbsp;&nbsp;</h2>
          </div>
          <form @submit="onSubmit" method="post" :class="{'f18': true, 'disable':stopSignUp }">
              <div class="tr t_right f_red">{{ attentionText }}</div>

              <div class="tr">
                <p>姓名</p>
                <input
                  type="text"
                  name="name"
                  maxlength="20"
                  v-model="formObj.name"
                  required="required"
                />
              </div>
              <div class="tr">
                <p>手機</p>
                <input
                  type="tel"
                  name="phone"
                  maxlength="10"
                  v-model="formObj.phone"
                  placeholder="0912345678"
                  required="required"
                />
              </div>
              <div class="tr">
                <p>e-mail</p>
                <input type="email" name="email" v-model="formObj.email" required="required" />
              </div>
              <div class="tr">
                <p>場次</p>
                <select name id="event" v-model="formObj.session" required="required">
                  <option disabled value>請選擇場次</option>
                  <option value="總論壇(葷)">總論壇 - 供餐(葷食)</option>
                  <option value="總論壇(素)">總論壇 - 供餐(素食)</option>

                  <!-- //FIXME: 可選彰化場 -->
                  <!-- <option value="彰化場">彰化場</option> -->
                </select>
                <i class="arrow"></i>
              </div>
              <div class="tr">
                <p>所屬單位</p>
                <input type="text" name="dept" v-model="formObj.dept" required="required" />
              </div>
              <div class="tr">
                <p>職稱</p>
                <input type="text" name="job" v-model="formObj.job" required="required" />
              </div>
              <div class="tr">
                <p class="optional">身分證字號</p>
                <input type="text" name="rocid" v-model="formObj.rocid" />
                <font class="f15 f_grey">(須申請公務人員學習時數者提供)</font>
              </div>
              <div class="tr t_left">
                <input type="checkbox" name id="agreement" v-model="agreement" required="required" />
                <label for="agreement">
                  我同意並授權「勞動部勞動力發展署」、「遠見雜誌」
                  <a href="https://www.gvm.com.tw/about.html" target="_blank">個資告知事項</a>
                </label>
              </div>
              <button class="f18 submit" type="submit" :class="{'disable': submitClicked || stopSignUp }">送出</button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    <Popup @popupHandler="popupHandler" :popupMsg="popupMsg" v-show="isPopupOpen" />
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";

import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Popup from "~/components/Popup.vue";

if (process.browser) {
  var { WOW } = require("wowjs");
}

export default {
  data() {
    return {
      carouselCurrent: 0,
      schedualCurrent: 0,
      locationCurrent: 0,
      sessions: [
        {
          time: "12/3",
          name: "總論壇",
          location: "台中市西區館前路57號",
          place: "全國大飯店 草悟廳"
        },
        {
          time: "11/6",
          name: "台中場",
          location: "台中市西屯區科園路19號",
          place: "國立中興大學中科校區<br>育成推廣組國際會議廳"
        },
        {
          time: "11/14",
          name: "彰化場",
          location: "彰化縣鹿港鎮中正路588號",
          place: "勞動力發展署中彰投分署-<br>勞動學苑國際會議廳"
        }
      ],
      swiperOption: {
        //FIXME: 可選彰化場
        loop: true,
        slidesPerView: 3,
        spaceBetween: 0,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        spaceBetween: 30,
        breakpoints: {
          768: {
            slidesPerView: 2
          },
          599: {
            slidesPerView: 1
          }
        }
      },
      submitClicked: false,
      // formObj: {
      //     name:'李芷儀',
      //     phone:'0978036006',
      //     email:'hn85412404@gmail.com',
      //     session:'台中場',
      //     dept:'ABC',
      //     job:'設計師',
      //     rocid: 'A226498914',
      //     event: '108管理策略論壇',
      // },
      test: "123",
      formObj: {
        name: "",
        phone: "",
        email: "",
        session: "",
        dept: "",
        job: "",
        rocid: "",
        event: "108管理策略論壇"
      },
      agreement: false,
      isPopupOpen: false,
      popupMsg: "",
      stopSignUp: false,
      allSpeakers: [
        //FIXME: 可選彰化場
        {
          session: "<span>總論壇</span>",
          name: "陳家聰",
          photo: require("@/assets/img/speaker-10.jpg"),
          title: "SAP台灣業務副總經理",
          subject: "專題演講一",
          hashtag: "#科技X人力資源 ──<br />做一個新時代人力資源工作者"
        },
        {
          session: "<span>總論壇</span>",
          name: "李岳倫",
          photo: require("@/assets/img/speaker-11.jpg"),
          title: "美商宏智（DDI）台灣區<br />董事總經理",
          subject: "專題演講二",
          hashtag: "#企業人資新思維 ──<br />新時代人才聘用與管理"
        },
        {
          session: "<span>總論壇</span>",
          name: "鄭晉昌",
          photo: require("@/assets/img/speaker-7.jpg"),
          title: "國立中央大學<br />人力資源管理研究所教授",
          subject: "綜合座談暨交流Q&A ",
          hashtag: "#永遠走在最前面 ──<br />新時代的人力資源管理策略"
        },
        {
          session: "<span>總論壇</span>",
          name: "陳焜耀",
          photo: require("@/assets/img/speaker-12.jpg"),
          title: "合隆毛廠總裁",
          subject: "專題演講一",
          hashtag: "#跨世代的人才需求 ──<br />HR如何選賢與能，助力接班布局 "
        },
        {
          session: "<span>總論壇</span>",
          name: "朱姵穎",
          photo: require("@/assets/img/speaker-8.jpg"),
          title: "友嘉集團 董事",
          subject: "專題演講二",
          hashtag: "#二代接班新布局 ──<br />繼承者所需要的新世代HR"
        },
        {
          session: "<span>總論壇</span>",
          name: "李建興",
          photo: require("@/assets/img/speaker-9.jpg"),
          title: "遠見雜誌副總編輯",
          subject: "綜合座談暨交流Q&A",
          hashtag: "#老手拉新手 ──<br />打造跨世代不老企業"
        },
        {
          session: "<span>彰化場</span>",
          name: "詹賀博",
          photo: require("@/assets/img/speaker-5.jpg"),
          title: "光隆實業 董事長",
          subject: "專題演講一",
          hashtag: "＃跟對老闆不如幫對老闆 ──<br />二代接班的HR角色怎麼演?"
        },
        {
          session: "<span>彰化場</span>",
          name: "許士軍",
          photo: require("@/assets/img/speaker-4.jpg"),
          title: "逢甲大學人言講座教授",
          subject: "專題演講二",
          hashtag: "#老將or新兵?用對的都是好兵! ──<br />HR的跨世代用人哲學"
        },
        {
          session: "<span>彰化場</span>",
          name: "林珮萱",
          photo: require("@/assets/img/speaker-6.jpg"),
          title: "《遠見雜誌》資深撰述",
          subject: "綜合座談暨交流Q&A ",
          hashtag: "#輔佐繼承者們的HR成功秘笈"
        },
        {
          session: "<span>台中場</span>",
          name: "簡士評",
          photo: require("@/assets/img/speaker-3.jpg"),
          title: "MAYO鼎恒數位創辦人暨執行長",
          subject: "專題演講一 ",
          hashtag: "#新科技帶來新企業，<br />未來人才你挑對了嗎?"
        },
        {
          session: "<span>台中場</span>",
          name: "謝鄭忠",
          photo: require("@/assets/img/speaker-2.jpg"),
          title: "宇瞻科技行政服務處處長",
          subject: "專題演講二",
          hashtag: "#迎向數位轉型，<br />人資要比老闆清楚的那件事"
        },
        {
          session: "<span>台中場</span>",
          name: "盧世安",
          photo: require("@/assets/img/speaker-1.jpg"),
          title: "人資小週末專業社群創辦人",
          subject: "綜合座談暨交流Q&A ",
          hashtag: "#智慧浪潮來襲，<br />HR如何領軍站上浪頭"
        }
      ]
    };
  },
  computed: {
    validatePhone() {
      var mobileReg = /^(09)[0-9]{8}$/;
      return this.formObj.phone.match(mobileReg) ? true : false;
    },
    // validateMail() {
    //     var mailRegex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    //     return (this.formObj.email.match(mailRegex)) ? true : false
    // },
    validateId() {
      var idRegex = /^[a-z](1|2)\d{8}$/i;
      return this.formObj.rocid.match(idRegex) ? true : false;
    },
    attentionText () {
      return this.stopSignUp ? '*報名已額滿': '*為必填項目'
    }
  },
  components: {
    Header,
    Footer,
    Popup
  },
  mounted() {
    console.log(process.env.baseUrl);
    if (process.browser) {
      // 在页面mounted生命周期里面 根据环境实例化WOW
      new WOW({
        live: false,
        offset: 0
      }).init();
    }
    // 35.185.161.185/api/getSessions.php
    axios
        .create({
          baseURL: process.env.baseUrl
        })
        .get("/api/getSessions.php")
        .then(response => {
          const { data, status } = response;
          if(status === 200 && data.data[0].status ===0 ) {
            this.isPopupOpen = true;
            this.popupMsg = '報名已額滿，謝謝您！';
            this.stopSignUp = true;
          }
          console.log(response);
        })
        .catch(error => {
          console.log(error.response.status);
        });
  },
  methods: {
    deviceDetect() {},
    popupHandler(el) {
      this.isPopupOpen = el.close;
    },
    //FIXME: 可選彰化場
    schedualTabHandler(index) {
      // return false;
      this.schedualCurrent = index;
    },
    //FIXME: 可選彰化場
    locationTabHandler(index) {
      // return false;
      this.locationCurrent = index;
    },
    onSubmit(e) {
      e.preventDefault();

      if (this.submitClicked) {
        return false;
      }

      this.submitClicked = true;

      // console.log('phone:',this.validatePhone, 'mail:',this.validateMail, 'id:',);

      if (this.validatePhone) {
        if (this.formObj.rocid) {
          if (this.validateId) {
            this.validatePass();
          } else {
            this.openPopup("表單資料有誤，請檢查欄位格式");
          }
        } else {
          this.validatePass();
        }
      } else {
        this.openPopup("表單資料有誤，請檢查欄位格式");
      }
    },
    openPopup(txt) {
      this.isPopupOpen = true;
      this.popupMsg = txt;
      this.submitClicked = false;
    },
    validatePass() {
      axios
        .create({
          baseURL: process.env.baseUrl
        })
        .post("/api/postAttendee.php", qs.stringify(this.formObj))
        .then(response => {
          console.log(response);
          if (response.status === 200) {
            this.openPopup("報名成功！");
            this.clearForm();
          } else {
            this.openPopup("表單尚未送出");
          }
          this.submitClicked = false;
        })
        .catch(error => {
          console.log(error.response.status);
          if (error.response.status === 409) {
            this.openPopup("你已經完成報名，感謝您的參與！");
            this.clearForm();
          } else {
            this.openPopup("表單尚未送出");
          }
          this.submitClicked = false;
        });
    },
    clearForm() {
      this.formObj = {
        name: "",
        phone: "",
        email: "",
        session: "",
        dept: "",
        job: "",
        rocid: "",
        event: "108管理策略論壇"
      };
      this.agreement = false;
    }
  }
};
</script>

<style lang="scss">
* {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  outline: none;
}

body,
html {
  font-family: "Noto Sans TC", sans-serif;
  width: 100%;
  // overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
span {
  font-weight: normal;
  font-family: "Noto Sans TC", sans-serif;
}

img {
  max-width: 100%;
}
.W100 {
  width: 100%;
}

.W1140 {
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
}

.f15 {
  font-size: 15px;
}

.f18 {
  font-size: 18px;
  line-height: 1.5;
}

.f24 {
  font-size: 24px;
}

.f30 {
  font-size: 30px;
}

.f48 {
  font-size: 48px;
}

.f66 {
  font-size: 66px;
}

.f_blue {
  color: #003b8f;
}

.f_grey {
  color: #666;
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

.bg_grey {
  background-color: #f1f1f1;
}

.poA {
  position: absolute;
}

.poF {
  position: fixed;
}

.poR {
  position: relative;
}

.flex {
  display: flex;
}

.mb {
  display: none;
}

.pc {
  display: inline-block;
}

.title {
  position: relative;
  display: inline-block;
  text-align: right;
  line-height: 1;
  margin-bottom: 50px;
  z-index: 5;
  @media (max-width: 599px) {
    margin-bottom: 30px;
  }
  h2 {
    font-family: "Oswald", sans-serif;
    position: relative;
    font-weight: 500;
  }

  h4 {
    font-family: "Oswald", sans-serif;
    background: linear-gradient(to bottom, #24509b, #6cc29d),
      linear-gradient(to bottom, #ffffff, #ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    top: -8px;
    left: -10px;
    font-weight: 500;
  }
}

.hidden {
  overflow: hidden;
  // background-image: url(../assets/img/kvbg.jpg);
  // background-position: center;
  // background-size: cover;
  // background-position: center top;
}

#banner {
  position: relative;
  background-image: url(../assets/img/kvbg.jpg);
  background-position: 50% 20%;
  background-size: 1500px;
  background-position: center top;
  text-align: center;
  overflow: hidden;
  @media (min-width: 1400px) {
    background-size: 2280px;
  }
  @media (max-width: 599px) {
    background-size: 900px;
  }

  .kv {
    width: 88%;
    max-width: 850px;
    display: inline-block;
    margin: 90px auto 0;
    position: relative;
    text-align: center;
    // @media (max-width: 599px){
    //     transform: translate(0, 0);
    //     top: 0;
    //     left: 0;
    //     margin-left: 4%;
    // }
    h1 {
      width: 92%;
      margin-left: 4%;
      padding: 0 0 5%;
      //    opacity: 0;
      @media (max-width: 599px) {
      }
    }
    .global {
      width: 90%;
      margin: 0 auto -60%;
      animation: float 6s ease-in-out infinite;
      @media (max-width: 599px) {
        width: 90%;
        position: relative;
        margin-bottom: -33%;
      }
    }
  }
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-15px);
  }
  100% {
    transform: translatey(0px);
  }
}

#content {
  width: 100%;
  overflow: hidden;
}

#intro {
  position: relative;
  z-index: 5;
  padding-left: 15px;
  padding-right: 15px;
  // background-image: url(../assets/img/bg-01.png);
  // background-size: 1400px;
  // background-position: center top;
  .gradient_bg {
    background: linear-gradient(
      352deg,
      white 38%,
      rgba(255, 255, 255, 0.4) 58%,
      rgba(255, 255, 255, 0) 56%
    );
    height: 350px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0, -350px);
  }
  > .wow {
    margin-top: -150px;
    position: relative;
    z-index: 30;
  }
  @media (min-width: 1400px) {
    background-size: 2280px;
  }
  @media (max-width: 599px) {
    // margin-top: -25vh;
    // padding-top: 20vh;
    // background-size: 600px;
  }
  .title {
    display: inline-block;
  }
  p {
    padding: 30px 0 50px;
    margin-bottom: 30px;
    border-bottom: 1px solid #9b9b9b;
    line-height: 1.6;
    color: #666666;
    @media (max-width: 599px) {
      padding: 15px 0;
    }
    font {
      color: #24509b;
      font-weight: 500;
    }
  }
}

.section {
  position: relative;
  text-align: center;
  padding: 20px 0 40px;
  @media (max-width: 599px) {
    padding: 20px 0 30px;
  }
}

#person_slider {
  margin-bottom: 50px;
  padding-bottom: 30px;
  border-bottom: 1px solid #9b9b9b;
  @media (max-width: 599px) {
    margin-bottom: 30px;
    padding-bottom: 25px;
  }
}

.slider_nav {
  position: absolute;
  top: 50%;
  left: -10px;
  width: calc(100% + 20px);
  z-index: 100;
  transform: translate(0, -50%);
  opacity: 1;
  @media (max-width: 599px) {
    width: 100%;
    left: 0;
  }
  > div {
    width: 50px;
    height: 50px;
    border: solid 4px #ffffff;
    background-color: #24509b;
    border-radius: 50%;
    color: white;
    opacity: 1;
    background-image: url(../assets/img/arrow.svg);
    background-size: 15px;

    &.swiper-button-next {
      right: 0;
    }
    &.swiper-button-prev {
      left: 0;
      transform: rotate(180deg);
    }
  }
}

.swiper-wrapper {
  &.few {
    @media (min-width: 769px) {
      display: block;
      .swiper-slide {
        display: inline-block;
      }
    }
  }
}

.swiper-slide {
  position: relative;
  h4 {
    padding: 0 10px;
    position: relative;
    margin-top: 30px;
    font-weight: 500;
  }
}

.img_wrapper {
  position: relative;
  * {
    color: #fff;
  }
  img {
    width: 100%;
    border-radius: 50%;
  }
  h6 {
    top: 75%;
    width: 100%;
    transform: translate(0, -50%);
    font {
      display: block;
    }
  }
  .session_tag {
    color: #fff;
    width: 80px;
    height: 80px;
    // line-height: 80px;
    background-color: #e64a4a;
    border-radius: 40px;
    top: 0;
    left: 0;
    font {
      line-height: 26px;
      padding: 14px 0;
      display: block;
    }
    span {
      line-height: 80px;
    }
  }
}

#schedual,
#form {
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 599px) {
    padding-left: 0px;
    padding-right: 0px;
  }
}

#schedual {
  background-color: #ffffff;
}

#speaker {
  z-index: 5;
  overflow: visible;
  .geo_top {
    right: 0;
    top: -70px;
    width: 34%;
    z-index: 50;
    @media (max-width: 599px) {
      top: -60px;
      width: 60%;
    }
  }
}

#location {
  .bg {
    bottom: -35vw;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    min-width: 1680px;
    z-index: 2;
    @media (max-width: 599px) {
      min-width: 768px;
      bottom: -50vw;
    }
  }
  .geo_bottom {
    bottom: -42vw;
    width: 40%;
    left: 0;
    z-index: 1;
    @media (max-width: 599px) {
      width: 60%;
      bottom: -55vw;
    }
  }
}

#form .W1140 {
  z-index: 40;
  position: relative;
}

.schedual_wrapper {
  flex-wrap: wrap;
  flex-direction: row;
}
.tab {
  display: inline-block;
  width: 340px;
  margin-top: 35px;
  vertical-align: top;
  @media (max-width: 768px) {
    width: 88%;
    margin-top: 0;
    position: relative;
  }
  * {
    transition: all 0.4s;
  }
  .location {
    position: relative;
    //FIXME: 可選彰化場
    cursor: pointer;
    width: 100%;
    line-height: 1.2;
    margin-bottom: 80px;
    opacity: 0.3;
    @media (max-width: 768px) {
        width: 33.33%;
        float: left;
        margin-bottom: 30px;
        position: static;
    }
    h5 {
      display: block;
    }
    h6 {
      display: block;
      font-family: "Oswald", sans-serif;
    }
    //FIXME: 可選彰化場
    // &:nth-child(2) {
    //     h6:after {
    //         content: '(敬請期待)';
    //         display: block;
    //         font-family: 'Noto Sans TC', sans-serif;
    //         font-size: 20px;
    //         letter-spacing: 1px;
    //         @media (max-width: 599px){
    //             font-size: 16px;
    //         }
    //     }
    // }
    //FIXME: 可選彰化場
    &:hover {
      opacity: 0.6;
    }
    .bg_grey {
      padding: 30px;
      position: relative;
      line-height: 1.5;
      margin-top: 30px;
      display: none;
      margin-bottom: -40px;
      @media (max-width: 768px) {
        padding: 25px 20px;
        width: 100%;
        margin-top: 50px;
        position: absolute;
        left: 0;
      }
      .pin {
        width: 25px;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        @media (max-width: 599px) {
          width: 20px;
        }
      }
      .f_grey {
        padding-top: 10px;
        display: block;
      }
    }
    &.active {
      opacity: 1;
      &:after {
        content: "";
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 6px 0 6px 12px;
        border-color: transparent transparent transparent #e64a4a;
        position: absolute;
        right: 10%;
        top: 48px;
        transform: translate(-100%, -50%);
        @media (max-width: 768px) {
          top: 100px;
          transform: translate(50%, 0) rotate(90deg);
          
        }
        @media (max-width: 559px) {
          top: 70px;
        }
      }
      .bg_grey {
        display: block;
      }
      @media (max-width: 768px) {
        &.active_0 {
          &:after {
            right: 83.33%;
          }
        }
        &.active_1 {
          &:after {
            right: 50%;
          }
        }
        &.active_2 {
          &:after {
            right: 16.66%;
          }
        }
      }
    }
  }
}

.map_imgs {
  display: inline-block;
  width: calc(100% - 340px - 32px);
  margin-left: 25px;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    width: 100%;
    margin: 170px auto 20px;
  }
}

.eventsList {
  display: inline-block;
  width: calc(100% - 340px - 10px);
  margin-bottom: 50px;
  margin-left: 0;
  * {
    vertical-align: top;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
}

.event {
  width: 100%;
  padding: 35px;
  border-bottom: 1px solid #9b9b9b;
  position: relative;
  text-align: left;
  @media (max-width: 599px) {
    padding: 15px;
  }
  h2 {
    display: inline-block;
    border-radius: 18px;
    background-image: linear-gradient(50deg, #24509b, #6cc29d);
    padding: 5px 15px;
  }
  span {
    display: block;
  }
}

.time {
  width: 135px;
  text-align: left;
  font-family: "Oswald", sans-serif;
  display: inline-block;
  white-space: nowrap;
  @media (max-width: 599px) {
    width: 98px;
  }
}

.dot {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #003b8f;
  margin: 9px 28px;
  @media (max-width: 599px) {
    margin: 5px 12px;
    width: 14px;
    height: 14px;
  }
  &:after {
    content: "";
    height: calc(100% - 20px);
    position: absolute;
    width: 1px;
    top: 65px;
    left: 214px;
    border-right: 1px dashed #9b9b9b;
    @media (max-width: 599px) {
      left: 136px;
      top: 38px;
    }
  }
}

.subject {
  display: inline-block;
  width: calc(100% - 228px);
  text-align: left;
  line-height: 1.25;
  @media (max-width: 599px) {
    width: calc(100% - 164px);
  }
  span {
    padding-top: 10px;
    display: block;
    line-height: 1.4;
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
  @media (max-width: 599px) {
    padding: 20px 20px 30px;
    margin-top: -50px;
  }
  &.disable {
    input , select, label, button {
      opacity: .5;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      pointer-events: none;
    }
    .arrow {
      border-color: #9d9d9d transparent transparent transparent;
    }
  }
  a {
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
    margin: 10px auto;
    transition: all 0.4s;
    cursor: pointer;
    &.disable {
      -webkit-user-select: none; /* Safari 3.1+ */
      -moz-user-select: none; /* Firefox 2+ */
      -ms-user-select: none; /* IE 10+ */
      user-select: none; /* Standard syntax */
      opacity: 0.5;
      &:hover {
        letter-spacing: 0;
        text-indent: 0;
      }
    }
    @media (min-width: 769px) {
      &:hover {
        letter-spacing: 5px;
        text-indent: 10px;
      }
    }
  }
}

input,
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  // line-height: 52px;
  height: 52px;
  background-color: #f1f1f1;
  border: 1px solid #9d9d9d;
  width: calc(100% - 107px);
  padding: 0 10px;
  border-radius: 3px;
  font-size: 18px;
  vertical-align: middle;
  &:focus {
    border: 1px solid #003b8f;
  }
  @media (max-width: 599px) {
    width: 100%;
  }
}

::-webkit-input-placeholder {
  /* Edge */
  color: #cbcbcb;
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #cbcbcb;
}

::placeholder {
  color: #cbcbcb;
}

input[type="checkbox"] {
  width: 26px;
  height: 26px;
  vertical-align: top;
  position: relative;
}

input#agreement {
  position: absolute;
  top: 0;
  left: 0;
}

input[type="checkbox"] + label {
  line-height: 26px;
  vertical-align: top;
  padding-left: 33px;
  display: block;
}

input[type="checkbox"]:checked {
  &:before,
  &:after {
    content: "";
    top: 0;
    left: 0;
    display: block;
    background-color: #0042a0;
    width: 4px;
    height: 16px;
    transform: rotate(45deg) translate(17px, -11px);
    position: absolute;
    transform-origin: left top;
  }
  &:after {
    height: 10px;
    transform: rotate(-45deg) translate(-7px, 11px);
  }
}

.tr {
  max-width: 550px;
  margin: 15px auto;
  display: inline-block;
  width: 100%;
  position: relative;
  @media (max-width: 599px) {
    margin: 10px auto 5px;
  }
  p {
    width: 100px;
    display: inline-block;
    text-align: left;
    @media (max-width: 599px) {
      width: 100%;
      margin-bottom: 5px;
    }
    &:before {
      content: "*";
      color: #e43434;
    }
    &.optional {
      &:before {
        display: none;
      }
    }
  }
  .arrow {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 6px 0 6px;
    border-color: #24509b transparent transparent transparent;
    position: absolute;
    right: 15px;
    top: 28px;
    transform: translate(-100%, -50%);
    @media (max-width: 599px) {
      top: 58px;
      right: 10px;
    }
  }
  font {
    width: calc(100% - 107px);
    display: block;
    float: right;
    text-align: left;
    padding: 5px 0 0;
    @media (max-width: 599px) {
      width: 100%;
    }
  }
}

.google_map {
  position: relative;
  z-index: 4;
}

.swiper-slide h5 {
  color: #fff;
  top: -60px;
  left: 50%;
  display: inline-block;
  padding: 0 21px;
  transform: translate(-50%, 0);
  border-radius: 18px;
  line-height: 36px;
  background-blend-mode: screen;
  background-image: linear-gradient(50deg, #24509b, #6cc29d);
  font-weight: 500;
  white-space: nowrap;
}

@media (max-width: 768px) {
}

@media (max-width: 599px) {
  .mb {
    display: inline-block;
  }

  .pc {
    display: none;
  }

  .f15 {
    font-size: 13px;
  }

  .f18 {
    font-size: 16px;
  }

  .f24 {
    font-size: 17px;
  }

  .f30 {
    font-size: 21px;
  }

  .f48 {
    font-size: 29px;
  }

  .f66 {
    font-size: 47px;
  }
}
</style>
