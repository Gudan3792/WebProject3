document.querySelectorAll('.insurance-btn_1, .insurance-btn_2, .insurance-btn_3, .insurance-btn_4, .insur_banner_btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const keyword = this.dataset.keyword;
      sessionStorage.setItem('insureKeyword', keyword);
      window.location.href = 'insure_join.html';
    });
  });
  
