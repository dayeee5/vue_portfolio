<template>
  <div class="main_layout">
    <router-link to="/home">Home</router-link>
    <router-view />
    <div class="div-top row">
      <div class="col">
        <section class="hero is-warning">
          <section class="section is-large">
            <h1 class="home_title_L">안녕하세요</h1>
            <h1 class="home_title_L">프로트엔드 개발자</h1>
            <h1 class="home_title_L"><strong>김다예</strong>입니다.</h1>
            <h2 class="home_subTitle_L"><strong>혁신적인 솔루션</strong>을</h2>
            <h2 class="home_subTitle_L">만들어내는</h2>
            <h2 class="home_subTitle_L"><strong>열정적인 개발자</strong>로</h2>
            <h2 class="home_subTitle_L">거듭나기 위해 항상 도전합니다</h2>
          </section>
        </section>
      </div>
      <div class="col">
        <section class="hero is-success">
          <section class="section is-large">
            <h1 class="home_title_R">저의 개발 여정을</h1>
            <h1 class="home_title_R2">소개합니다.</h1>
            <h2 class="home_subTitle_R">앞으로도 지속될</h2>
            <h2 class="home_subTitle_R">여정은 제 <strong>자부심</strong>과</h2>
            <h2 class="home_subTitle_R"><strong>용기</strong>가 될 것 입니다</h2>
            <div class="socialLink-div">
              <div class="term-contents"></div>
              <SocialLinks />
            </div>
          </section>
        </section>
      </div>
      <div class="col">
        <div ref="animationContainer" class="animation-container"></div>
      </div>
    </div>
    <div class="socialLink-div"></div>
  </div>
</template>

<script>
import Lottie from 'lottie-web';
import aniDev from '@/assets/dev.json';
import SocialLinks from './SocialLinkComp';

export default {
  components: {
    SocialLinks
  },
  mounted() {
    const container = this.$refs.animationContainer;
    Lottie.loadAnimation({
      container: container,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: aniDev,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    });
  }
  
  
};

</script>

  
<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";

.home-container-fluid {
  background-color: beige;
  width: 100%;
  height: 100vh;
}

.animation {
  justify-content: flex-end;
}

.animation-container {
  height: 40%;
  width: 40%;
  margin: auto;

}

.home-font {
  font-size: x-large;
  font-weight: 700;
}

.div-top {
  margin-top: 5%;
}

.socialLink-div {
  font-size: large;
  text-align: end;
  margin-right: 5%;
}

.AboutMe-Line {
  border: 1px solid burlywood;
  width: 12rem;
  height: 1px;
  margin-bottom: 12px;
}

.home_title_L {
  font-size: xx-large;
  padding-bottom: 5%;
  font-weight: 1200;
  color: black;
  text-align: end;
}

.home_subTitle_L {
  font-size: xx-large;
  padding-bottom: 3%;
  font-weight: 1200;
  color: white;
}

.home_title_R {
  font-size: xx-large;
  padding-bottom: 5%;
  font-weight: 900;
  color: black;
  text-align: end;
}
.home_title_R2 {
  font-size: xx-large;
  padding-bottom: 20%;
  font-weight: 900;
  color: black;
  text-align: end;
}

.home_subTitle_R {
  font-size: xx-large;
  padding-bottom: 3%;
  font-weight: 1200;
  color: white;
  margin-bottom: 10px;
}

.hero is-warning {
  width: 50%;
}

.term-contents {
  padding-bottom: 50%;
}

.term-contents1 {
  padding-bottom: 20%;
}

display {
  background-color: beige;
}

.main_layout {
  background-color: beige;
  width: 100%;
  height: 100%;
}

.main_layout2 {
  background-color: cadetblue;
  width: 100%;
  height: 100%;
}

.page_title {
  font-size: 2rem;
  padding-bottom: 5%;
  font-weight: 900;
  color: coral;
  padding-top: 5%;
  padding-left: 5%;
}

.Title_line {
  border: 1px solid burlywood;
  width: 12rem;
  height: 1px;
}

.div-top {
  display: flex;
}

.section {
  margin: 5px;
}
.col {
  flex: 1;
}
</style>