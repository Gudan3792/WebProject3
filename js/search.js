$(document).ready(function() {
    $('.header_Object').click(function() {
      // 메뉴바가 열려 있으면 닫기
      if ($('.menu-bar').is(':visible')) {
        $('.menu-bar').slideUp();
      }
      $('.search-bar').slideToggle(); // 검색창 토글
      $('.search-bar input').focus(); // 검색창 열릴 때 입력창에 포커스
    });
  
    $('.hamburger').click(function() {
      // 검색창이 열려 있으면 닫기
      if ($('.search-bar').is(':visible')) {
        $('.search-bar').slideUp();
      }
      $('.menu-bar').slideToggle(); // 메뉴바 토글
    });
  });

  // index.js
document.getElementById('search-btn').addEventListener('click', function() {
  const keyword = document.getElementById('search-input').value.trim();
  if (keyword) {
      // 검색어를 세션스토리지에 저장
      sessionStorage.setItem('searchKeyword', keyword);
      // search.html로 이동
      window.location.href = 'search.html';
  }
});


// search.js
window.addEventListener('DOMContentLoaded', function() {
  // 검색어 불러오기
  const keyword = sessionStorage.getItem('searchKeyword') || '';
  // 모든 .search-keyword에 값 넣기
  document.querySelectorAll('.search-keyword').forEach(el => {
    el.textContent = keyword ? keyword : '검색어 없음';
  });

  // 결과 수는 임시로 0건 (DB 없으므로)
  document.querySelectorAll('.search-count').forEach(el => {
    el.textContent = '0';
  });
});



// 모든 탭 버튼을 선택
const tabs = document.querySelectorAll('.search-category-tabs .tab');

tabs.forEach(tab => {
  tab.addEventListener('click', function() {
    // 모든 탭에서 active 제거
    tabs.forEach(btn => btn.classList.remove('active'));
    // 클릭한 탭에 active 추가
    this.classList.add('active');
  });
});
