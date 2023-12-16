<template>
    <div class="proj1">
      <img
        src="@/assets/proj1.png" 
        alt="Project1"
        class="proj1-image"
      />
      <div class="proj1-content">
        <h2>헬스 케어 앱 개발</h2>
        <p>
          <strong>진행 기간:</strong> 2024.12 ~ 2025.04
        </p>
        <p>
          <strong>사용한 기술 스택:</strong> HTML, CSS, JavaScript, React
        </p>
        <p>
          <strong>개요:</strong> 개인의 건강과 의료에 관한 정보, 의료 기기,
          시스템 및 플랫폼을 다루는 IT 의료 서비스로서 집에서 쉽게 건강을 관리할
          수 있도록 운동 프로그램과 식단표, 통증 처치 및 약물 복용 시간 등을
          알림과 함께 제공
        </p>
        <p>
          <strong>나의 역할:</strong> 블루투스 통신에 관한 프로토콜 정의문서를
          숙지하여 BLE 프로토콜, GATT 프로토콜을 따름
        </p>
        <p>
          <strong>강조할 점:</strong> 상급 종합병원과 함께 수행한 임상시험을
          바탕으로 정보를 제공하여 신뢰성을 높이고, 고령자의 스마트폰 활용
          능력과 시력도 고려해 폰트 크기와 디자인도 고려
        </p>
        <p>
          <strong>성과:</strong> 헬스케어 어플리케이션을 사용하여 사용자들이 더
          건강한 라이프스타일을 채택하여 건강 향상에 도움을 줌
        </p>
      </div>
    </div>
</template>

<style>
.proj1 {
  background-color: #ffe4b5; /* 미색(베이지) */
  border: 2px solid #f08080; /* 연한 적색 */
  border-radius: 12px;
  overflow: hidden; /* 이미지를 카드에 맞게 잘라주는 속성 */
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 추가 */
}

.proj1-image {
  width: 100%;
  height: auto;
}

.proj1-content {
  padding: 20px;
  font-size: x-large;
}

.proj1 h2 {
  color: #ff6347; /* 토마토 */
}

.proj1 p {
  color: #696969; /* 짙은 회색 */
  line-height: 1.6;
}
</style>