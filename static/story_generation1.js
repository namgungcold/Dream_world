// 옵션 버튼 활성화/비활성화 (중복 활성화 방지 + 활성화 취소 기능 추가)
document.querySelectorAll(".button-group").forEach((group) => {
    group.querySelectorAll(".option-btn").forEach((button) => {
        button.addEventListener("click", () => {
            if (button.classList.contains("active")) {
                // 이미 활성화된 버튼을 다시 클릭하면 비활성화
                button.classList.remove("active");
            } else {
                // 같은 그룹의 모든 버튼 비활성화
                group.querySelectorAll(".option-btn").forEach((btn) => btn.classList.remove("active"));
                // 현재 버튼 활성화
                button.classList.add("active");
            }
        });
    });
});


// 홈 화면으로 돌아가는 기능 추가
document.getElementById("closeToHome").addEventListener("click", function () {
    window.location.href = "index.html"; // index.html로 이동
});

document.getElementById("goBack").addEventListener("click", function () {
    if (document.referrer) {
        // 이전 페이지가 있는 경우
        window.location.href = document.referrer;
    } else {
        // 이전 페이지가 없는 경우 (대체 URL로 이동)
        window.location.href = "index.html"; // 홈으로 이동
    }
});
