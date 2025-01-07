document.addEventListener("DOMContentLoaded", function () {
    // 버튼 DOM 요소 가져오기
    const backButton = document.getElementById("backButton");
    const closeButton = document.getElementById("closeDreamInterpretation");
    const storyButton = document.getElementById("storyButton");
    const dreamImageButton = document.getElementById("dreamImageButton");

    // 1. back-button 클릭: index.html의 편집 화면으로 전환
    backButton.addEventListener("click", function () {
        // index.html로 이동하면서 URL에 특정 해시(#)를 추가해 편집 화면 활성화
        window.location.href = "index.html#editScreen";
    });

    // 2. close-button 클릭: index.html의 홈 화면으로 전환
    closeButton.addEventListener("click", function () {
        // index.html로 이동하면서 URL에 특정 해시(#)를 추가해 홈 화면 활성화
        window.location.href = "index.html#homeScreen";
    });

    // 3. storyButton 클릭: index2.html로 이동
    storyButton.addEventListener("click", function () {
        // index2.html로 이동
        window.location.href = "index2.html";
    });

    // 4. dreamImageButton 클릭: index3.html로 이동
    dreamImageButton.addEventListener("click", function () {
        // index3.html로 이동
        window.location.href = "index3.html";
    });
});
