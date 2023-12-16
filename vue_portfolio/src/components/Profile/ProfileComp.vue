<template>
  <div class="main_layout">
    <router-link to="/profile">Profile</router-link>
    <router-view />
    <div class="page_title">
      Resume
      <div class="Title_line"></div>
    </div>
    <div class="row">
      <Lottie :animationData="arrowLtoR" class="arrowLtoR" />
      <div class="col">
        <div class="resume-container">
          <table class="resume-table">
            <thead>
              <tr>
                <th>프로필</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    :src="profileImage"
                    :alt="'프로필 사진 - ' + Info[0].name"
                    class="profile-image"
                  />
                </td>
                <td class="profile-info">
                  <div class="betweenLine">
                    <strong>이 름 |</strong> {{ Info[0].name }}
                  </div>
                  <div class="betweenLine">
                    <strong>Email |</strong> {{ Info[0].Email }}
                  </div>
                  <div class="betweenLine">
                    <strong>전화번호 |</strong> {{ Info[0].Phone }}
                  </div>
                  <div class="betweenLine">
                    <strong>생년월일 |</strong> {{ Info[0].birth }}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- 학력, 경력 등 테이블 -->
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <div class="experience-container">
            <table class="experience-table">
              <thead>
                <tr>
                  <th>항목</th>
                  <th>내용</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>학력</td>
                  <td>{{ Info[0].education }}</td>
                </tr>
                <tr>
                  <td class="sr-only"></td>
                  <td>{{ Info[0].educationTwo }}</td>
                </tr>
                <tr>
                  <td>인턴</td>
                  <td>{{ Info[0].intership }}</td>
                </tr>
                <tr>
                  <td>아르바이트</td>
                  <td>{{ Info[0].partTimeJob }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- 경험 테이블 -->
        <div class="col">
          <div class="result-container">
            <table class="result-table">
              <thead>
                <tr>
                  <th>항목</th>
                  <th>내용</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>입상경력</td>
                  <td>{{ Info[0].awards }}</td>
                </tr>
                <tr>
                  <td>자격증</td>
                  <td>{{ Info[0].certifications }}</td>
                </tr>
                <tr>
                  <td class="sr-only"></td>
                  <td>{{ Info[0].certifications_Sec }}</td>
                </tr>
                <tr>
                  <td class="sr-only"></td>
                  <td>{{ Info[0].certifications_Third }}</td>
                </tr>
                <tr>
                  <td class="sr-only"></td>
                  <td>{{ Info[0].certifications_Four }}</td>
                </tr>
                <tr>
                  <td>어학점수</td>
                  <td>{{ Info[0].languageScores }}</td>
                </tr>
                <tr>
                  <td>기술스택</td>
                  <td>
                    <div v-for="(skill, index) in skills" :key="index">
                      {{ skill.skill }}: {{ skill.level }}%
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- 자기소개서 파트 -->
    <div class="intro-bg">
      <div class="intro_title">
        Introduce
        <div class="Title_line"></div>
      </div>
      <div class="row intro-scope">
        <div class="col">
          <div class="intro-list">
            <article class="message is-warning" v-for="section in sections" :key="section.title">
              <div class="message-header">
                <p>{{ section.title }}</p>
                <button class="delete" aria-label="delete"></button>
              </div>
              <div class="message-body">
                {{ section.content }}
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Lottie from 'lottie-web';
import arrowLtoR from '@/assets/arrowLtoR.json';
import profileImage from '@/assets/profileEdit.png';

export default {
  data() {
    return {
      Info: [
        {
          name: '김다예',
          Email: 'dayeee5@naver.com',
          Phone: '010-2426-9940',
          birth: '2000.02.25',
          education: '불곡고등학교 (2016.03 ~ 2019.01)',
          educationTwo: '가천대학교 컴퓨터공학사 (2022.03 ~ 2026.02)',
          intership: '당근마켓 2025 Summer Tech Intership',
          partTimeJob: '대형 영어학원 조교 (2022.10 ~ 2023.02)',
          awards: 'SW 융합 해커톤 대회 (우수상, 2024)',
          certifications: '정보처리 기사',
          certifications_Sec: '네트워크 관리사 2급',
          certifications_Third: 'OCP(Oracle Certified Professional)',
          certifications_Four: '인터넷 보안 전문가 2급',
          languageScores: 'TOEIC 990',
        },
      ],
      profileImage,
      arrowLtoR,
      skills: [
        { skill: 'Python', level: '90' },
        { skill: 'C', level: '70' },
        { skill: 'C++', level: '80' },
        { skill: 'Java', level: '90' },
        { skill: 'React', level: '90' },
      ],
      sections: [
        {
          title: '성장 과정',
          content:
            '저는 어릴 때부터 호기심 가득한 성격으로 인해 항상 새로운 것을 배우고 탐구하는 것을 즐겼습니다. 성실히 학업에 임하고, 다양한 동아리 활동을 통해 리더십을 기르고 친구들과 협력하는 기회를 가졌습니다.',
        },
        {
          title: '입사 지원 동기',
          content:
            'IT 기업에서의 입사에 대한 동기는 저의 열정과 관련이 깊습니다. 저는 현재의 기술적 흐름을 이해하고, 신기술을 통해 사회와 비즈니스에 기여하고 싶어 합니다. 귀사는 혁신적인 프로젝트와 글로벌 영향력을 가지고 있으며, 이를 통해 제 역량을 향상시키고 성장할 수 있는 최고의 장소라고 생각합니다.',
        },
        {
          title: '포부 및 장래 계획',
          content:
            '저의 포부는 끊임없이 성장하며 문제를 해결하고 혁신적인 솔루션을 개발하는 것입니다. 저의 기술 분야에서의 전문성을 더욱 강화하고, 혁신적인 프로젝트에 참여하며 꾸준히 성장 할 것이고, 사회와 비즈니스에 가치를 창출하는 일에 헌신하고자 합니다.',
        },
        // 다른 섹션들 추가
      ],
    };
  },
  components: {
    Lottie,
  },
};
</script>

<style>
/* 사진 & 기본정보 테이블 관련 CSS */
.resume-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: none;
}
.resume-title {
  font-size: 2rem;
  margin-bottom: 40px;
  font-weight: 900;
  color: coral;
  padding-top: 5%;
  padding-left: 5%;
}

.resume-table {
  width: 91%;
  margin-bottom: 40px;
  border-collapse: collapse;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background-color: bisque;
  margin-left: auto;
  width: 70%;
}

.resume-table th {
  padding: 16px;
  text-align: center;
}
.resume-table td {
  padding: 25px;
  width: 150px;
  text-align: center;
}

.resume-table thead {
  background-color: coral;
}

.resume-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

/* 경험 테이블 관련 CSS */
.experience-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: none;
}

.experience-table {
  width: 100%;
  margin-bottom: 40px;
  border-collapse: collapse;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background-color: bisque;
  
  width: 30%;
}

.experience-table th,
.experience-table td {
  padding: 16px;
  text-align: left;
}

.experience-table thead {
  background-color: coral;
}

.experience-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

/* 결과 테이블 관련 CSS */
.result-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: none;
}

.result-table {
  width: 91%;
  margin-bottom: 40px;
  border-collapse: collapse;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background-color: bisque;
  margin-left: 30;
  margin-top: auto;
  width: 30%;
}

.result-table th,
.result-table td {
  padding: 16px;
  text-align: left;
}

.result-table thead {
  background-color: coral;
}

.result-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.experience-result-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

/* 기타 css */
.profile-image {
  width: 70%;
  border-radius: 0%;
  object-fit: cover;
  object-position: center;
  padding-left: 28%;
}

.profile-info {
  background-color: #f9f9f9;
  column-span: 2;
}
.betweenLine {
  margin-bottom: 30px;
}

.arrowLtoR {
  width: 30%;
  height: 30%;
  padding-left: 10%;
  padding-top: 5%;
}

.intro-bg {
  background-color: cadetblue;
}

.intro_title {
  font-size: 2rem;
  padding-bottom: 5%;
  font-weight: 900;
  color: white;
  padding-top: 5%;
  padding-left: 5%;
}

.intro-list {
  width: 70%;
}

.intro-scope {
  padding-left: 5%;
  padding-bottom: 5%;
  width: 70%;
}

.message-body {
  font-size: x-large;
}

.message-header {
  font-size: x-large;
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
</style>

