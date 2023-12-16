<template>
  <div class="act2">
    <div class="act2-image">
      <img
        src="@/assets/act2.png"
        alt="Act 2"
        class="act2-image"
      />
    </div>
    <div class="act2-content">
      <h2>구글코리아 머신러닝 부트캠프</h2>
      <p>
        <strong>진행 기간:</strong> 2025.6 ~ 2025.08
      </p>
      <p>
        <strong>개요:</strong> AI 분야 머신러닝 개발자 양성 프로그램,
        대학생과 현직 개발자에게 교육과 취업 기회를 제공
      </p>
      <p>
        <strong>프로그램 내용:</strong> 온라인 인공지능 경진 플랫폼 ‘캐글’
        참여, 현직 머신러닝 전문가 및 IT 기업과의 만남, 커리어 및 이력서
        작성 멘토링
      </p>
      <p>
        <strong>나의 활동:</strong> 이미지 분류 프로젝트에서 합성곱
        신경망(CNN)을 사용하여 이미지를 분류
      </p>
      <p>
        <strong>후기:</strong> 다양한 전문가 및 기업과 연결될 수 있는
        기회를 얻음으로써 네트워크를 확장하고 협력 가능성을 모색
      </p>
    </div>
  </div>
</template>

<style>
.act2 {
  display: flex;
  margin: 20px;
  background-color: #f8f6cf;
  border-radius: 12px;
  overflow: hidden;
  width: 80%;
  align-items: center; /* 세로 중앙 정렬을 위한 스타일 */
}

.act2-image {
  width: 70%; /* 이미지 영역의 너비를 조정 */
  margin-right: 20px;
  display: flex;
  justify-content: center; /* 가로 중앙 정렬을 위한 스타일 */
}

.act2-image img {
  max-width: 100%; /* 이미지 크기 유지하며 조정 */
  height: auto;
}

.act2-content {
  flex-grow: 1; /* 내용 영역이 남은 공간을 차지하도록 설정 */
  padding: 20px;
  color: #696969;
  font-size: x-large;
}

.act2-content h2 {
  color: #ff69b4;
}

.act2-content p {
  line-height: 1.6;
  margin-bottom: 10px;
}
</style>

