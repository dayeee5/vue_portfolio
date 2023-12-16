<template>
  <div class="act3">
    <div class="act3-image">
      <img
        src="@/assets/act3.png"
        alt="Act 3"
        class="act3-image"
      />
    </div>
    <div class="act3-content">
      <h2>SW 융합 해커톤 대회</h2>
      <p>
        <strong>진행 기간:</strong> 2024.08.25 ~ 08.27
      </p>
      <p>
        <strong>사용한 기술 스택:</strong> Node.js, HTML, CSS, JavaScript, React
      </p>
      <p>
        <strong>개요:</strong> 무박 3일 동안 디지털 신기술 기반 SW융합
        제품 또는 서비스 개발, 사회문제 해결을 위한 SW융합 제품 서비스
        개발, 선박 운항 데이터를 활용한 신서비스 기획 및 서비스 개발
      </p>
      <p>
        <strong>나의 역할:</strong> UI/UX 디자인을 개선하여 서비스의
        친화성을 향상, 서비스의 품질을 보증하기 위해 테스트 전략을
        개발하고 실행
      </p>
      <p>
        <strong>강조할 점:</strong> 디지털 융합을 통해 지역 디지털
        생태계에 이바지
      </p>
      <p>
        <strong>성과:</strong> 우수상 입상
      </p>
    </div>
  </div>
</template>

<style>
.act3 {
  display: flex;
  margin: 20px;
  background-color: #f8f6cf;
  border-radius: 12px;
  overflow: hidden;
  width: 80%;
  align-items: center; /* 세로 중앙 정렬을 위한 스타일 */
}

.act3-image {
  width: 80%; /* 이미지 영역의 너비를 조정 */
  margin-right: 20px;
  display: flex;
  justify-content: center; /* 가로 중앙 정렬을 위한 스타일 */
}

.act3-image img {
  max-width: 100%; /* 이미지 크기 유지하며 조정 */
  height: auto;
}

.act3-content {
  flex-grow: 1; /* 내용 영역이 남은 공간을 차지하도록 설정 */
  padding: 20px;
  color: #696969;
  font-size: x-large;
}

.act3-content h2 {
  color: #ff69b4;
}

.act3-content p {
  line-height: 1.6;
  margin-bottom: 10px;
}
</style>
