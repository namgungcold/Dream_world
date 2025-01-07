// 뒤로가기 버튼 클릭 이벤트
document.getElementById("backFromImage").addEventListener("click", function () {
  window.location.href = "index2.html"; // index2.html로 이동
  // 뒤로가기 기능을 여기에 추가하세요.
});

// 닫기 버튼 클릭 이벤트
document.getElementById("closeImage").addEventListener("click", function () {
  window.location.href = "index.html"; // index.html로 이동
});

// 이미지 생성 버튼 클릭 이벤트
document.getElementById("generateImage").addEventListener("click", function () {
  // 로딩중 화면 표시
  document.getElementById("storyText").innerText = "로딩중...";

  // 이미지 생성 로직 (예: API 호출)
  setTimeout(function () {
    // 로딩 완료 후 이미지 화면으로 이동
    window.location.href = "image.html";
  }, 2000); // 2초 후에 이동
});

// 꿈 이미지 생성 버튼 클릭 이벤트
document
  .getElementById("regenerateImage")
  .addEventListener("click", function () {
    // 여기에 꿈 이미지 생성 로직을 추가하세요
    alert("꿈 이미지 생성 기능이 호출되었습니다!");
  });

// 공유 버튼 클릭 이벤트
document
  .getElementById("shareDreamImage")
  .addEventListener("click", function () {
    // 여기에 공유 기능 로직을 추가하세요
    alert("공유 기능이 호출되었습니다!");
  });
