<template>
  <div class="act1">
    <div class="act1-image">
      <img
        src="@/assets/act1.png"
        alt="Act 1"
        class="act1-image"
      />
    </div>
    <div class="act1-content">
      <h2>IoT 보안 위협 시나리오 공모전</h2>
      <p><strong>진행 기간:</strong> 2024.10 ~ 2024.12</p>
      <p>
              <strong>사용한 기술 스택:</strong> Java, HTTPS
            </p>
            <p>
              <strong>개요:</strong> IoT 디바이스의 증가로 인해 보안 위협도
              증가의 문제를 해결하고자 위협을 탐지하고 대응하는 방법 설계
            </p>
            <p>
              <strong>나의 역할:</strong> IoT 보안 솔루션의 프로토타입을
              개발하고 시연함으로써 제안한 보안 시나리오의 실용성을 입증
            </p>
            <p>
              <strong>강조할 점:</strong> 개발한 시나리오나 솔루션이 실제 보안
              위험을 탐지하고 예방, 테스트 결과나 예시를 통해 효과성을 입증
            </p>
            <p>
              <strong>성과:</strong> 다양한 전문가 및 기업과 연결될 수 있는
              기회를 얻음으로써 네트워크를 확장하고 협력 가능성을 모색
            </p>
    </div>
  </div>
</template>

<style>
.act1 {
  display: flex;
  margin: 20px;
  background-color: #f8f6cf;
  border-radius: 12px;
  overflow: hidden;
  width: 80%;
  align-items: center; /* 세로 중앙 정렬을 위한 스타일 */
}

.act1-image {
  width: 60%; /* 이미지 영역의 너비를 조정 */
  margin-right: 20px;
  display: flex;
  justify-content: center; /* 가로 중앙 정렬을 위한 스타일 */
}

.act1-image img {
  max-width: 100%; /* 이미지 크기 유지하며 조정 */
  height: auto;
}

.act1-content {
  flex-grow: 1; /* 내용 영역이 남은 공간을 차지하도록 설정 */
  padding: 20px;
  color: #696969;
  font-size: x-large;
}

.act1-content h2 {
  color: #ff69b4;
}

.act1-content p {
  line-height: 1.6;
  margin-bottom: 10px;
}
</style>
