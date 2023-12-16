<template>
  <nav class="navbar navbar-expand-lg navbar-mainbg">
    <!-- Lottie 애니메이션 -->
    <Lottie :animationData="logo" :style="style" class="animation" />
    <!-- 홈으로 이동하는 링크 -->
    <router-link class="navbar-brand navbar-logo" to="/" exact>
      다예's PORTFOLIO
    </router-link>
    <!-- Lottie 애니메이션 -->
    <Lottie :animationData="logo" :style="style" class="animation" />
    <!-- 네비게이션 토글 버튼 -->
    <button
      class="navbar-toggler"
      @click="toggleAnimation"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars text-white"></i>
    </button>
    <!-- 네비게이션 목록 -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <div class="hori-selector">
          <div class="left"></div>
          <div class="right"></div>
        </div>
        <!-- 홈 -->
        <li class="nav-item" :class="{ active: $route.path === '/' }">
          <router-link class="nav-link" to="/" exact>
            <FontAwesomeIcon :icon="faHome" /> Home
          </router-link>
        </li>
        <!-- 프로필 -->
        <li class="nav-item" :class="{ active: $route.path === '/profile' }">
          <router-link class="nav-link" to="/profile" exact>
            <FontAwesomeIcon :icon="faAddressBook" /> Profile
          </router-link>
        </li>
        <!-- 경험 -->
        <li class="nav-item" :class="{ active: $route.path.startsWith('/experience') }">
          <router-link class="nav-link" to="/experience" exact>
            <FontAwesomeIcon :icon="faClone" /> Experience
          </router-link>
        </li>
        <!-- 외부 링크 -->
        <li class="nav-item">
          <a
            class="nav-link"
            href="https://open.kakao.com/o/scenbLSf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon :icon="faHandshake" /> Contact
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHome, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook, faClone } from '@fortawesome/free-regular-svg-icons';

import Lottie from 'lottie-web';
import logo from '@/assets/logo.json';
import $ from 'jquery'; 

export default {
  components: {
    FontAwesomeIcon,
    Lottie
  },
  data() {
    return {
      style: {
        height: '3%',
        width: '3%',
      },
      faHome,
      faHandshake,
      faAddressBook, 
      faClone,
      logo,
    };
  },
  methods: {
    toggleAnimatione(event) {
      // jQuery를 사용하여 메뉴바 애니메이션을 조작
      $('#navbarSupportedContent ul li').removeClass('active');
      $(event.currentTarget).addClass('active');

      var activeWidthNewAnimHeight = $(event.currentTarget).innerHeight();
      var activeWidthNewAnimWidth = $(event.currentTarget).innerWidth();
      var itemPosNewAnimTop = $(event.currentTarget).position();
      var itemPosNewAnimLeft = $(event.currentTarget).position();

      $('.hori-selector').css({
        top: itemPosNewAnimTop.top + 'px',
        left: itemPosNewAnimLeft.left + 'px',
        height: activeWidthNewAnimHeight + 'px',
        width: activeWidthNewAnimWidth + 'px',
      });
    },
  },
};
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');

body {
  font-family: 'Roboto', sans-serif;
  background: #fff; /* fallback for old browsers */
}
* {
  margin: 0;
  padding: 0;
}
i {
  margin-right: 10px;
}

.navbar-logo {
  padding: 15px;
  color: #fff;
  pointer-events: none;
}

.navbar-mainbg {
  background-color: #000000;
  padding: 0px;
}

#navbarSupportedContent {
  overflow: hidden;
  position: relative;
  justify-content: flex-end;
}

#navbarSupportedContent ul {
  padding: 0px;
  margin: 0px;
}

#navbarSupportedContent ul li a i {
  margin-right: 10px;
}

#navbarSupportedContent li {
  list-style-type: none;
  float: left;
}

#navbarSupportedContent ul li a {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-size: 15px;
  display: block;
  padding: 20px 20px;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
}

#navbarSupportedContent > ul > li.active > a {
  color: #000000;
  background-color: transparent;
  transition: all 0.7s;
}

#navbarSupportedContent a:not(:only-child):after {
  content: '\f105';
  position: absolute;
  right: 20px;
  top: 10px;
  font-size: 14px;
  font-family: 'Font Awesome 5 Free';
  display: inline-block;
  padding-right: 3px;
  vertical-align: middle;
  font-weight: 900;
  transition: 0.5s;
}
#navbarSupportedContent .active > a:not(:only-child):after {
  transform: rotate(90deg);
}

.hori-selector {
  display: inline-block;
  position: absolute;
  height: 100%;
  top: 0px;
  left: 0px;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  background-color: beige;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-top: 10px;
}

.hori-selector .right,
.hori-selector .left {
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: beige;
  bottom: 10px;
}

.hori-selector .right {
  right: -25px;
}

.hori-selector .left {
  left: -25px;
}

.hori-selector .right:before,
.hori-selector .left:before {
  content: '';
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #000000;
}

.hori-selector .right:before {
  bottom: 0;
  right: -25px;
}

.hori-selector .left:before {
  bottom: 0;
  left: -25px;
}

@media (max-width: 991px) {
  #navbarSupportedContent ul li a {
    padding: 12px 30px;
  }

  .hori-selector {
    margin-top: 0px;
    margin-left: 10px;
    border-radius: 0;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
  }

  .hori-selector .left,
  .hori-selector .right {
    right: 10px;
  }

  .hori-selector .left {
    top: -25px;
    left: auto;
  }

  .hori-selector .right {
    bottom: -25px;
  }

  .hori-selector .left:before {
    left: -25px;
    top: -25px;
  }

  .hori-selector .right:before {
    bottom: -25px;
    left: -25px;
  }
}

/* 메뉴바 상단 고정 */
.navbar-mainbg {
  background-color: #000000;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
}

.navbar-brand {
  color: #fff;
  margin: 0;
}

.navbar-nav {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin-left: 15px;
}

.nav-link {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-size: 15px;
  transition-duration: 0.6s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
}

.nav-item.active > .nav-link {
  color: #000000;
  background-color: transparent;
  transition: all 0.7s;
}
</style>


