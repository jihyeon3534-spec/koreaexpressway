document.addEventListener('DOMContentLoaded', () => {
    const fontBtn = document.getElementById('fontBtn');
    const fontDropdown = document.getElementById('fontDropdown');

    // 버튼 클릭 시 드롭다운 토글
    fontBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // 클릭 이벤트 전파 방지
        fontDropdown.classList.toggle('show');
    });

    // 메뉴 외부 클릭 시 드롭다운 닫기
    document.addEventListener('click', (e) => {
        if (!fontDropdown.contains(e.target)) {
            fontDropdown.classList.remove('show');
        }
    });
});