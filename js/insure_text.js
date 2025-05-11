window.addEventListener('DOMContentLoaded', function() {
    // 1. URL 파라미터가 있으면 그 값을 우선 사용
    const params = new URLSearchParams(window.location.search);
    let keyword = params.get('keyword');
    if (!keyword) {
      // 없으면 sessionStorage에서 가져옴
      keyword = sessionStorage.getItem('insureKeyword') || '';
    }
  
    // 2. 보험사별 제목
    const contentTitle = {
      '미래안심보험': `<div class="company_logo"><img src="img/incom1.png" alt="미래안심보험 로고"></div>`,
      '해피라이프손해보험': '<div class="company_logo"><img src="img/incom2.png" alt="해피라이프손해보험 로고"></div>',
      '온유케어보험': '<div class="company_logo"><img src="img/incom3.png" alt="온유케어보험 로고"></div>',
      '블루스카이보험': '<div class="company_logo"><img src="img/incom4.png" alt="블루스카이보험 로고"></div>',
      '드림가드보험': '<div class="company_logo"><img src="img/incom5.png" alt="드림가드보험 로고"></div>',
      '자동차보험': '　',
      '실손의료비보험': '　',
      '여행자보험': '　',
      '어린이보험': '　',
      '보험료비교기본': '　'
    };
  
    document.getElementById('insure-title').innerHTML = contentTitle[keyword] || `<h2>보험 안내</h2>`;
  
    // 3. 보험사별 안내문
    const contentMap = {
      '미래안심보험': `
        <div class="main-layout">
    <!-- 왼쪽: 상품 정보 및 혜택 -->
    <section class="product-info-panel">
      <h2>미래안심보험</h2>
      <div class="subtitle">인터넷으로 스마트하게, 할인에 할인을 더하다</div>
      <div class="product-list-grid">
  <div class="product-item">
    <div class="product-icon">🚗</div>
    <div class="product-title">자동차보험</div>
    <div class="product-desc">자동차 사고로 인한 다양한 피해를 종합적으로 보장하는 필수 보험</div>
  </div>
  <div class="product-item">
    <div class="product-icon">🧒</div>
    <div class="product-title">어린이보험</div>
    <div class="product-desc">자녀의 성장 단계별 위험(질병·상해·입원 등)을 폭넓게 보장</div>
  </div>
  <div class="product-item">
    <div class="product-icon">💊</div>
    <div class="product-title">실손의료비보험</div>
    <div class="product-desc">입원·통원 치료 시 실제 부담한 의료비를 보장하는 대표 건강보험</div>
  </div>
  <div class="product-item">
    <div class="product-icon">🌏</div>
    <div class="product-title">여행자보험</div>
    <div class="product-desc">여행 중 사고·질병·휴대품 손해 등 다양한 위험에 대비</div>
  </div>
  <div class="product-item">
    <div class="product-icon">👴</div>
    <div class="product-title">유병자보험</div>
    <div class="product-desc">기존 질환이 있어도 가입 가능한 맞춤형 보험</div>
  </div>
  <div class="product-item">
    <div class="product-icon">🏥</div>
    <div class="product-title">암보험</div>
    <div class="product-desc">암 진단·치료 등 암 관련 위험을 집중 보장</div>
  </div>
</div>

      <div class="notice">
        ※ 각 할인은 조건 충족 시 적용되며, 보험사 및 상품에 따라 세부 조건과 할인율이 다를 수 있습니다.<br>
        자세한 내용은 상담을 통해 확인해 주세요.
      </div>
    </section>
    <!-- 오른쪽: 가입자 정보 입력 폼 -->
    <aside class="product-form-panel">
      <form class="form-step">
        <div class="step-badge">01</div>
        <h3>가입자(피보험자) 정보를 입력하세요.</h3>
        <div class="form-group">
          <label for="owner-name">이름</label>
          <input type="text" id="owner-name" name="owner-name" placeholder="이름을 입력하세요" required>
        </div>
        <div class="form-group">
          <label for="owner-rrn">주민등록번호</label>
          <div class="input-row">
            <input type="text" id="owner-rrn1" name="owner-rrn1" maxlength="6" placeholder="앞자리" required>
            <span style="align-self:center;">-</span>
            <input type="password" id="owner-rrn2" name="owner-rrn2" maxlength="7" placeholder="뒷자리" required>
          </div>
        </div>
        <div class="form-group">
          <label for="owner-phone">연락 받으실 번호</label>
          <input type="tel" id="owner-phone" name="owner-phone" placeholder="010-1234-5678" required>
        </div>
        <div class="form-check">
          <input type="checkbox" id="agree" required>
          <label for="agree">
            개인정보 수집 및 이용에 동의합니다.
          </label>
        </div>
        <div class="form-notice">
          보험료 계산 및 가입을 위해 고객님의 정보가 필요합니다.<br>
          입력하신 정보는 보험료 산출 외의 목적으로 사용되지 않습니다.
        </div>
        <button type="submit" class="form-btn">보험료 설계 내용 확인하기</button>
      </form>
    </aside>
  </div>
      `,
      '해피라이프손해보험': `<div class="happylife-layout">
  <section class="happylife-info-panel">
    <h2 class="happylife-title">해피라이프손해보험</h2>
    <div class="happylife-subtitle">행복을 지키는 든든한 보장, 해피라이프와 함께</div>
    <div class="happylife-product-list">
      <div class="happylife-product">
        <div class="happylife-icon">🚗</div>
        <div class="happylife-product-title">자동차보험</div>
        <div class="happylife-product-desc">교통사고, 대인·대물 피해, 자기차량손해까지 폭넓게 보장</div>
      </div>
      <div class="happylife-product">
        <div class="happylife-icon">🧒</div>
        <div class="happylife-product-title">어린이보험</div>
        <div class="happylife-product-desc">성장기 자녀의 질병·상해·입원 등 다양한 위험에 대비</div>
        
      </div>
      <div class="happylife-product">
        <div class="happylife-icon">💊</div>
        <div class="happylife-product-title">실손의료비보험</div>
        <div class="happylife-product-desc">입원·통원 치료 시 실제 부담한 의료비를 보장</div>
        
      </div>
      <div class="happylife-product">
        <div class="happylife-icon">🌏</div>
        <div class="happylife-product-title">여행자보험</div>
        <div class="happylife-product-desc">여행 중 사고·질병·휴대품 손해 등 다양한 위험에 대비</div>
        
      </div>
      <div class="happylife-product">
        <div class="happylife-icon">👴</div>
        <div class="happylife-product-title">유병자보험</div>
        <div class="happylife-product-desc">기존 질환이 있어도 가입 가능한 맞춤형 보험</div>
        
      </div>
      <div class="happylife-product">
        <div class="happylife-icon">🏥</div>
        <div class="happylife-product-title">암보험</div>
        <div class="happylife-product-desc">암 진단·치료 등 암 관련 위험을 집중 보장</div>
        
      </div>
    </div>
    <div class="happylife-notice">
      ※ 해피라이프손해보험의 모든 상품은 고객의 행복과 안전을 최우선으로 설계되었습니다.<br>
      상품별 상세 조건 및 보장 내용은 상담을 통해 확인해 주세요.
    </div>
  </section>
  <aside class="happylife-form-panel">
    <form class="happylife-form-step">
      <div class="happylife-step-badge">01</div>
      <h3>가입자(피보험자) 정보를 입력하세요.</h3>
      <div class="happylife-form-group">
        <label for="owner-name">이름</label>
        <input type="text" id="owner-name" name="owner-name" placeholder="이름을 입력하세요" required>
      </div>
      <div class="happylife-form-group">
        <label for="owner-rrn">주민등록번호</label>
        <div class="happylife-input-row">
          <input type="text" id="owner-rrn1" name="owner-rrn1" maxlength="6" placeholder="앞자리" required>
          <span style="align-self:center;">-</span>
          <input type="password" id="owner-rrn2" name="owner-rrn2" maxlength="7" placeholder="뒷자리" required>
        </div>
      </div>
      <div class="happylife-form-group">
        <label for="owner-phone">연락 받으실 번호</label>
        <input type="tel" id="owner-phone" name="owner-phone" placeholder="010-1234-5678" required>
      </div>
      <div class="happylife-form-check">
        <input type="checkbox" id="agree" required>
        <label for="agree">
          개인정보 수집 및 이용에 동의합니다.
        </label>
      </div>
      <div class="happylife-form-notice">
        보험료 계산 및 가입을 위해 고객님의 정보가 필요합니다.<br>
        입력하신 정보는 보험료 산출 외의 목적으로 사용되지 않습니다.
      </div>
      <button type="submit" class="happylife-form-btn">보험료 설계 내용 확인하기</button>
    </form>
  </aside>
</div>
`,
      '온유케어보험': `<div class="onyoucare-layout">
  <section class="onyoucare-info-panel">
    <div class="onyoucare-logo-title">
      <span class="onyoucare-title">온유케어보험</span>
    </div>
    <div class="onyoucare-subtitle">따뜻한 보살핌, 건강한 미래</div>
    <div class="onyoucare-product-list">
      <div class="onyoucare-product">
        <div class="onyoucare-icon">🚗</div>
        <div class="onyoucare-product-title">자동차보험</div>
        <div class="onyoucare-product-desc">자동차 사고로 인한 다양한 피해를 종합적으로 보장</div>
        
      </div>
      <div class="onyoucare-product">
        <div class="onyoucare-icon">🧒</div>
        <div class="onyoucare-product-title">어린이보험</div>
        <div class="onyoucare-product-desc">자녀의 성장 단계별 위험(질병·상해·입원 등)을 폭넓게 보장</div>
        
      </div>
      <div class="onyoucare-product">
        <div class="onyoucare-icon">💊</div>
        <div class="onyoucare-product-title">실손의료비보험</div>
        <div class="onyoucare-product-desc">입원·통원 치료 시 실제 부담한 의료비를 보장</div>
        
      </div>
      <div class="onyoucare-product">
        <div class="onyoucare-icon">🌏</div>
        <div class="onyoucare-product-title">여행자보험</div>
        <div class="onyoucare-product-desc">여행 중 사고·질병·휴대품 손해 등 다양한 위험에 대비</div>
        
      </div>
    </div>
    <div class="onyoucare-notice">
      ※ 온유케어보험은 따뜻함과 신뢰를 바탕으로 고객의 건강을 지켜드립니다.<br>
      상품별 상세 조건 및 보장 내용은 상담을 통해 확인해 주세요.
    </div>
  </section>
  <aside class="onyoucare-form-panel">
    <form class="onyoucare-form-step">
      <div class="onyoucare-step-badge">01</div>
      <h3>가입자(피보험자) 정보를 입력하세요.</h3>
      <div class="onyoucare-form-group">
        <label for="owner-name">이름</label>
        <input type="text" id="owner-name" name="owner-name" placeholder="이름을 입력하세요" required>
      </div>
      <div class="onyoucare-form-group">
        <label for="owner-rrn">주민등록번호</label>
        <div class="onyoucare-input-row">
          <input type="text" id="owner-rrn1" name="owner-rrn1" maxlength="6" placeholder="앞자리" required>
          <span style="align-self:center;">-</span>
          <input type="password" id="owner-rrn2" name="owner-rrn2" maxlength="7" placeholder="뒷자리" required>
        </div>
      </div>
      <div class="onyoucare-form-group">
        <label for="owner-phone">연락 받으실 번호</label>
        <input type="tel" id="owner-phone" name="owner-phone" placeholder="010-1234-5678" required>
      </div>
      <div class="onyoucare-form-check">
        <input type="checkbox" id="agree" required>
        <label for="agree">개인정보 수집 및 이용에 동의합니다.</label>
      </div>
      <div class="onyoucare-form-notice">
        보험료 계산 및 가입을 위해 고객님의 정보가 필요합니다.<br>
        입력하신 정보는 보험료 산출 외의 목적으로 사용되지 않습니다.
      </div>
      <button type="submit" class="onyoucare-form-btn">보험료 설계 내용 확인하기</button>
    </form>
  </aside>
</div>

`,
      '블루스카이보험': `<div class="bluesky-layout">
  <section class="bluesky-info-panel">
    <div class="bluesky-logo-title">
      
      <span class="bluesky-title">블루스카이보험</span>
    </div>
    <div class="bluesky-subtitle">푸른 하늘처럼 맑고 든든한 보장</div>
    <div class="bluesky-product-list">
      <div class="bluesky-product">
        <div class="bluesky-icon">🚗</div>
        <div class="bluesky-product-title">자동차보험</div>
        <div class="bluesky-product-desc">자동차 사고, 대인·대물, 자기차량 등 폭넓은 보장</div>
        
      </div>
      <div class="bluesky-product">
        <div class="bluesky-icon">🧒</div>
        <div class="bluesky-product-title">어린이보험</div>
        <div class="bluesky-product-desc">자녀의 성장, 질병·상해·입원 등 다양한 위험 대비</div>
        
      </div>
      <div class="bluesky-product">
        <div class="bluesky-icon">💊</div>
        <div class="bluesky-product-title">실손의료비보험</div>
        <div class="bluesky-product-desc">입원·통원 치료 시 실제 부담 의료비 보장</div>
        
      </div>
      <div class="bluesky-product">
        <div class="bluesky-icon">🌏</div>
        <div class="bluesky-product-title">여행자보험</div>
        <div class="bluesky-product-desc">여행 중 사고·질병·휴대품 손해 등 다양한 위험 대비</div>
        
      </div>
    </div>
    <div class="bluesky-notice">
      ※ 블루스카이보험은 푸른 신뢰와 투명한 보장으로 고객의 미래를 지켜드립니다.<br>
      상품별 상세 조건 및 보장 내용은 상담을 통해 확인해 주세요.
    </div>
  </section>
  <aside class="bluesky-form-panel">
    <form class="bluesky-form-step">
      <div class="bluesky-step-badge">01</div>
      <h3>가입자(피보험자) 정보를 입력하세요.</h3>
      <div class="bluesky-form-group">
        <label for="owner-name">이름</label>
        <input type="text" id="owner-name" name="owner-name" placeholder="이름을 입력하세요" required>
      </div>
      <div class="bluesky-form-group">
        <label for="owner-rrn">주민등록번호</label>
        <div class="bluesky-input-row">
          <input type="text" id="owner-rrn1" name="owner-rrn1" maxlength="6" placeholder="앞자리" required>
          <span style="align-self:center;">-</span>
          <input type="password" id="owner-rrn2" name="owner-rrn2" maxlength="7" placeholder="뒷자리" required>
        </div>
      </div>
      <div class="bluesky-form-group">
        <label for="owner-phone">연락 받으실 번호</label>
        <input type="tel" id="owner-phone" name="owner-phone" placeholder="010-1234-5678" required>
      </div>
      <div class="bluesky-form-check">
        <input type="checkbox" id="agree" required>
        <label for="agree">개인정보 수집 및 이용에 동의합니다.</label>
      </div>
      <div class="bluesky-form-notice">
        보험료 계산 및 가입을 위해 고객님의 정보가 필요합니다.<br>
        입력하신 정보는 보험료 산출 외의 목적으로 사용되지 않습니다.
      </div>
      <button type="submit" class="bluesky-form-btn">보험료 설계 내용 확인하기</button>
    </form>
  </aside>
</div>
`,
      '드림가드보험': `<div class="dreamguard-layout">
  <section class="dreamguard-info-panel">
    <div class="dreamguard-logo-title">
      
      <span class="dreamguard-title">드림가드보험</span>
    </div>
    <div class="dreamguard-subtitle">든든하게, 꿈을 지키는 보험</div>
    <div class="dreamguard-product-list">
      <div class="dreamguard-product">
        <div class="dreamguard-icon">🚗</div>
        <div class="dreamguard-product-title">자동차보험</div>
        <div class="dreamguard-product-desc">자동차 사고, 대인·대물, 자기차량 등 폭넓은 보장</div>
        
      </div>
      <div class="dreamguard-product">
        <div class="dreamguard-icon">🧒</div>
        <div class="dreamguard-product-title">어린이보험</div>
        <div class="dreamguard-product-desc">성장기 자녀의 다양한 위험을 폭넓게 보장</div>
        
      </div>
      <div class="dreamguard-product">
        <div class="dreamguard-icon">💊</div>
        <div class="dreamguard-product-title">실손의료비보험</div>
        <div class="dreamguard-product-desc">입원·통원 치료 시 실제 부담 의료비 보장</div>
        
      </div>
      <div class="dreamguard-product">
        <div class="dreamguard-icon">🌏</div>
        <div class="dreamguard-product-title">여행자보험</div>
        <div class="dreamguard-product-desc">여행 중 사고·질병·휴대품 손해 등 다양한 위험 대비</div>
        
      </div>
    </div>
    <div class="dreamguard-notice">
      ※ 드림가드보험은 든든한 보장으로 당신의 꿈을 지켜드립니다.<br>
      상품별 상세 조건 및 보장 내용은 상담을 통해 확인해 주세요.
    </div>
  </section>
  <aside class="dreamguard-form-panel">
    <form class="dreamguard-form-step">
      <div class="dreamguard-step-badge">01</div>
      <h3>가입자(피보험자) 정보를 입력하세요.</h3>
      <div class="dreamguard-form-group">
        <label for="owner-name">이름</label>
        <input type="text" id="owner-name" name="owner-name" placeholder="이름을 입력하세요" required>
      </div>
      <div class="dreamguard-form-group">
        <label for="owner-rrn">주민등록번호</label>
        <div class="dreamguard-input-row">
          <input type="text" id="owner-rrn1" name="owner-rrn1" maxlength="6" placeholder="앞자리" required>
          <span style="align-self:center;">-</span>
          <input type="password" id="owner-rrn2" name="owner-rrn2" maxlength="7" placeholder="뒷자리" required>
        </div>
      </div>
      <div class="dreamguard-form-group">
        <label for="owner-phone">연락 받으실 번호</label>
        <input type="tel" id="owner-phone" name="owner-phone" placeholder="010-1234-5678" required>
      </div>
      <div class="dreamguard-form-check">
        <input type="checkbox" id="agree" required>
        <label for="agree">개인정보 수집 및 이용에 동의합니다.</label>
      </div>
      <div class="dreamguard-form-notice">
        보험료 계산 및 가입을 위해 고객님의 정보가 필요합니다.<br>
        입력하신 정보는 보험료 산출 외의 목적으로 사용되지 않습니다.
      </div>
      <button type="submit" class="dreamguard-form-btn">보험료 설계 내용 확인하기</button>
    </form>
  </aside>
</div>
`,
      '자동차보험': `<div class="compare-layout">
    <!-- 왼쪽: 개인정보 입력 -->
    <section class="compare-form-panel">
      <form class="compare-form-step" id="compareForm" method="POST" autocomplete="off">
        <div class="compare-step-badge">01</div>
        <h3>자동차보험 비교를 위한 정보를 입력하세요.</h3>
        <div class="compare-form-group">
          <label for="owner-name">이름</label>
          <input type="text" id="owner-name" name="owner-name" placeholder="이름을 입력하세요" required>
        </div>
        <div class="compare-form-group">
          <label for="owner-rrn">주민등록번호</label>
          <div class="compare-input-row">
            <input type="text" id="owner-rrn1" name="owner-rrn1" maxlength="6" placeholder="앞자리" required>
            <span style="align-self:center;">-</span>
            <input type="password" id="owner-rrn2" name="owner-rrn2" maxlength="7" placeholder="뒷자리" required>
          </div>
        </div>
        <div class="compare-form-group">
          <label for="owner-phone">연락 받으실 번호</label>
          <input type="tel" id="owner-phone" name="owner-phone" placeholder="010-1234-5678" required>
        </div>
        <div class="compare-form-check">
          <input type="checkbox" id="agree" required>
          <label for="agree">개인정보 수집 및 이용에 동의합니다.</label>
        </div>
        <div class="compare-form-notice">
          보험료 비교를 위해 고객님의 정보가 필요합니다.<br>
          입력하신 정보는 보험료 산출 외의 목적으로 사용되지 않습니다.
        </div>
        <button type="button" class="compare-form-btn" id="compareBtn">비교하기</button>
      </form>
    </section>
    <!-- 오른쪽: 보험사별 자동차보험료 비교 결과 -->
    <aside class="compare-result-panel">
      <div class="compare-result-title">보험사별 자동차보험료 비교</div>
      <div class="compare-result-list" id="compareResultList">
        <div class="compare-result-card">
          <img src="img/incom1.png" alt="미래안심보험 로고" class="result-logo">
          <div class="result-company">미래안심보험</div>
          <div class="result-desc">자동차보험료</div>
          <div class="result-price" data-company="미래안심보험">0원</div>
        </div>
        <div class="compare-result-card">
          <img src="img/incom2.png" alt="해피라이프손해보험 로고" class="result-logo">
          <div class="result-company">해피라이프손해보험</div>
          <div class="result-desc">자동차보험료</div>
          <div class="result-price" data-company="해피라이프손해보험">0원</div>
        </div>
        <div class="compare-result-card">
          <img src="img/incom3.png" alt="온유케어보험 로고" class="result-logo">
          <div class="result-company">온유케어보험</div>
          <div class="result-desc">자동차보험료</div>
          <div class="result-price" data-company="온유케어보험">0원</div>
        </div>
        <div class="compare-result-card">
          <img src="img/incom4.png" alt="블루스카이보험 로고" class="result-logo">
          <div class="result-company">블루스카이보험</div>
          <div class="result-desc">자동차보험료</div>
          <div class="result-price" data-company="블루스카이보험">0원</div>
        </div>
        <div class="compare-result-card">
          <img src="img/incom5.png" alt="드림가드보험 로고" class="result-logo">
          <div class="result-company">드림가드보험</div>
          <div class="result-desc">자동차보험료</div>
          <div class="result-price" data-company="드림가드보험">0원</div>
        </div>
      </div>
    </aside>
  </div>`,
      '실손의료비보험': `<div class="compare-layout">
  <!-- 왼쪽: 개인정보 입력 -->
  <section class="compare-form-panel">
    <form class="compare-form-step" id="compareForm" method="POST" autocomplete="off">
      <div class="compare-step-badge">01</div>
      <h3>실손의료비보험 비교를 위한 정보를 입력하세요.</h3>
      <div class="compare-form-group">
        <label for="owner-name">이름</label>
        <input type="text" id="owner-name" name="owner-name" placeholder="이름을 입력하세요" required>
      </div>
      <div class="compare-form-group">
        <label for="owner-rrn">주민등록번호</label>
        <div class="compare-input-row">
          <input type="text" id="owner-rrn1" name="owner-rrn1" maxlength="6" placeholder="앞자리" required>
          <span style="align-self:center;">-</span>
          <input type="password" id="owner-rrn2" name="owner-rrn2" maxlength="7" placeholder="뒷자리" required>
        </div>
      </div>
      <div class="compare-form-group">
        <label for="owner-phone">연락 받으실 번호</label>
        <input type="tel" id="owner-phone" name="owner-phone" placeholder="010-1234-5678" required>
      </div>
      <div class="compare-form-check">
        <input type="checkbox" id="agree" required>
        <label for="agree">개인정보 수집 및 이용에 동의합니다.</label>
      </div>
      <div class="compare-form-notice">
        실손의료비보험료 비교를 위해 고객님의 정보가 필요합니다.<br>
        입력하신 정보는 보험료 산출 외의 목적으로 사용되지 않습니다.
      </div>
      <button type="button" class="compare-form-btn" id="compareBtn">비교하기</button>
    </form>
  </section>
  <!-- 오른쪽: 보험사별 실손의료비보험료 비교 결과 -->
  <aside class="compare-result-panel">
    <div class="compare-result-title">보험사별 실손의료비보험료 비교</div>
    <div class="compare-result-list" id="compareResultList">
      <div class="compare-result-card">
        <img src="img/incom1.png" alt="미래안심보험 로고" class="result-logo">
        <div class="result-company">미래안심보험</div>
        <div class="result-desc">실손의료비보험료</div>
        <div class="result-price" data-company="미래안심보험">0원</div>
      </div>
      <div class="compare-result-card">
        <img src="img/incom2.png" alt="해피라이프손해보험 로고" class="result-logo">
        <div class="result-company">해피라이프손해보험</div>
        <div class="result-desc">실손의료비보험료</div>
        <div class="result-price" data-company="해피라이프손해보험">0원</div>
      </div>
      <div class="compare-result-card">
        <img src="img/incom3.png" alt="온유케어보험 로고" class="result-logo">
        <div class="result-company">온유케어보험</div>
        <div class="result-desc">실손의료비보험료</div>
        <div class="result-price" data-company="온유케어보험">0원</div>
      </div>
      <div class="compare-result-card">
        <img src="img/incom4.png" alt="블루스카이보험 로고" class="result-logo">
        <div class="result-company">블루스카이보험</div>
        <div class="result-desc">실손의료비보험료</div>
        <div class="result-price" data-company="블루스카이보험">0원</div>
      </div>
      <div class="compare-result-card">
        <img src="img/incom5.png" alt="드림가드보험 로고" class="result-logo">
        <div class="result-company">드림가드보험</div>
        <div class="result-desc">실손의료비보험료</div>
        <div class="result-price" data-company="드림가드보험">0원</div>
      </div>
    </div>
  </aside>
</div>
`,
      '여행자보험': `<div class="compare-layout">
  <!-- 왼쪽: 개인정보 입력 -->
  <section class="compare-form-panel">
    <form class="compare-form-step" id="compareForm" method="POST" autocomplete="off">
      <div class="compare-step-badge">01</div>
      <h3>여행자보험 비교를 위한 정보를 입력하세요.</h3>
      <div class="compare-form-group">
        <label for="owner-name">이름</label>
        <input type="text" id="owner-name" name="owner-name" placeholder="이름을 입력하세요" required>
      </div>
      <div class="compare-form-group">
        <label for="owner-rrn">주민등록번호</label>
        <div class="compare-input-row">
          <input type="text" id="owner-rrn1" name="owner-rrn1" maxlength="6" placeholder="앞자리" required>
          <span style="align-self:center;">-</span>
          <input type="password" id="owner-rrn2" name="owner-rrn2" maxlength="7" placeholder="뒷자리" required>
        </div>
      </div>
      <div class="compare-form-group">
        <label for="owner-phone">연락 받으실 번호</label>
        <input type="tel" id="owner-phone" name="owner-phone" placeholder="010-1234-5678" required>
      </div>
      <div class="compare-form-check">
        <input type="checkbox" id="agree" required>
        <label for="agree">개인정보 수집 및 이용에 동의합니다.</label>
      </div>
      <div class="compare-form-notice">
        여행자보험료 비교를 위해 고객님의 정보가 필요합니다.<br>
        입력하신 정보는 보험료 산출 외의 목적으로 사용되지 않습니다.
      </div>
      <button type="button" class="compare-form-btn" id="compareBtn">비교하기</button>
    </form>
  </section>
  <!-- 오른쪽: 보험사별 여행자보험료 비교 결과 -->
  <aside class="compare-result-panel">
    <div class="compare-result-title">보험사별 여행자보험료 비교</div>
    <div class="compare-result-list" id="compareResultList">
      <div class="compare-result-card">
        <img src="img/incom1.png" alt="미래안심보험 로고" class="result-logo">
        <div class="result-company">미래안심보험</div>
        <div class="result-desc">여행자보험료</div>
        <div class="result-price" data-company="미래안심보험">0원</div>
      </div>
      <div class="compare-result-card">
        <img src="img/incom2.png" alt="해피라이프손해보험 로고" class="result-logo">
        <div class="result-company">해피라이프손해보험</div>
        <div class="result-desc">여행자보험료</div>
        <div class="result-price" data-company="해피라이프손해보험">0원</div>
      </div>
      <div class="compare-result-card">
        <img src="img/incom3.png" alt="온유케어보험 로고" class="result-logo">
        <div class="result-company">온유케어보험</div>
        <div class="result-desc">여행자보험료</div>
        <div class="result-price" data-company="온유케어보험">0원</div>
      </div>
      <div class="compare-result-card">
        <img src="img/incom4.png" alt="블루스카이보험 로고" class="result-logo">
        <div class="result-company">블루스카이보험</div>
        <div class="result-desc">여행자보험료</div>
        <div class="result-price" data-company="블루스카이보험">0원</div>
      </div>
      <div class="compare-result-card">
        <img src="img/incom5.png" alt="드림가드보험 로고" class="result-logo">
        <div class="result-company">드림가드보험</div>
        <div class="result-desc">여행자보험료</div>
        <div class="result-price" data-company="드림가드보험">0원</div>
      </div>
    </div>
  </aside>
</div>
`,
      '어린이보험': `<div class="compare-layout">
  <!-- 왼쪽: 개인정보 입력 -->
  <section class="compare-form-panel">
    <form class="compare-form-step" id="compareForm" method="POST" autocomplete="off">
      <div class="compare-step-badge">01</div>
      <h3>어린이보험 비교를 위한 정보를 입력하세요.</h3>
      <div class="compare-form-group">
        <label for="owner-name">이름</label>
        <input type="text" id="owner-name" name="owner-name" placeholder="이름을 입력하세요" required>
      </div>
      <div class="compare-form-group">
        <label for="owner-rrn">주민등록번호</label>
        <div class="compare-input-row">
          <input type="text" id="owner-rrn1" name="owner-rrn1" maxlength="6" placeholder="앞자리" required>
          <span style="align-self:center;">-</span>
          <input type="password" id="owner-rrn2" name="owner-rrn2" maxlength="7" placeholder="뒷자리" required>
        </div>
      </div>
      <div class="compare-form-group">
        <label for="owner-phone">연락 받으실 번호</label>
        <input type="tel" id="owner-phone" name="owner-phone" placeholder="010-1234-5678" required>
      </div>
      <div class="compare-form-check">
        <input type="checkbox" id="agree" required>
        <label for="agree">개인정보 수집 및 이용에 동의합니다.</label>
      </div>
      <div class="compare-form-notice">
        어린이보험료 비교를 위해 고객님의 정보가 필요합니다.<br>
        입력하신 정보는 보험료 산출 외의 목적으로 사용되지 않습니다.
      </div>
      <button type="button" class="compare-form-btn" id="compareBtn">비교하기</button>
    </form>
  </section>
  <!-- 오른쪽: 보험사별 어린이보험료 비교 결과 -->
  <aside class="compare-result-panel">
    <div class="compare-result-title">보험사별 어린이보험료 비교</div>
    <div class="compare-result-list" id="compareResultList">
      <div class="compare-result-card">
        <img src="img/incom1.png" alt="미래안심보험 로고" class="result-logo">
        <div class="result-company">미래안심보험</div>
        <div class="result-desc">어린이보험료</div>
        <div class="result-price" data-company="미래안심보험">0원</div>
      </div>
      <div class="compare-result-card">
        <img src="img/incom2.png" alt="해피라이프손해보험 로고" class="result-logo">
        <div class="result-company">해피라이프손해보험</div>
        <div class="result-desc">어린이보험료</div>
        <div class="result-price" data-company="해피라이프손해보험">0원</div>
      </div>
      <div class="compare-result-card">
        <img src="img/incom3.png" alt="온유케어보험 로고" class="result-logo">
        <div class="result-company">온유케어보험</div>
        <div class="result-desc">어린이보험료</div>
        <div class="result-price" data-company="온유케어보험">0원</div>
      </div>
      <div class="compare-result-card">
        <img src="img/incom4.png" alt="블루스카이보험 로고" class="result-logo">
        <div class="result-company">블루스카이보험</div>
        <div class="result-desc">어린이보험료</div>
        <div class="result-price" data-company="블루스카이보험">0원</div>
      </div>
      <div class="compare-result-card">
        <img src="img/incom5.png" alt="드림가드보험 로고" class="result-logo">
        <div class="result-company">드림가드보험</div>
        <div class="result-desc">어린이보험료</div>
        <div class="result-price" data-company="드림가드보험">0원</div>
      </div>
    </div>
  </aside>
</div>`,
      '보험료비교기본': `
      <div class="compare-main-header">
  <h1>
    <span class="compare-main-brand">트러스트플랜</span>에서 제공하는<br>
    <span class="compare-main-title">보험료 비교하기</span>
  </h1>
  <p class="compare-main-desc">
    한 번의 입력으로 자동차보험, 실손의료비보험, 여행자보험, 어린이보험까지<br>
    다양한 보험료를 쉽고 빠르게 비교해 보세요!
  </p>
</div>

      <div class="compare-btn-grid">
    <button class="compare-btn-card" data-keyword="자동차보험">
      <div>
        <div class="card-title">자동차보험료</div>
        <span class="card-sub">비교하기</span>
        <div class="card-desc">주행거리, 블랙박스, 자녀 등 다양한 특약 할인!</div>
      </div>
      <div class="card-icon"><i class="fas fa-car-side"></i></div>
    </button>
    <button class="compare-btn-card" data-keyword="실손의료비보험">
      <div>
        <div class="card-title">실손의료비보험료</div>
        <span class="card-sub">비교하기</span>
        <div class="card-desc">실제 부담 의료비를 보장하는 건강보험</div>
      </div>
      <div class="card-icon"><i class="fas fa-notes-medical"></i></div>
    </button>
    <button class="compare-btn-card" data-keyword="여행자보험">
      <div>
        <div class="card-title">여행자보험료</div>
        <span class="card-sub">비교하기</span>
        <div class="card-desc">여행 중 사고·질병·휴대품 손해 등 보장</div>
      </div>
      <div class="card-icon"><i class="fas fa-plane-departure"></i></div>
    </button>
    <button class="compare-btn-card" data-keyword="어린이보험">
      <div>
        <div class="card-title">어린이보험료</div>
        <span class="card-sub">비교하기</span>
        <div class="card-desc">성장기 자녀의 다양한 위험에 대비</div>
      </div>
      <div class="card-icon"><i class="fas fa-baby-carriage"></i></div>
    </button>
  </div>
  <div class="compare-warning-section">
  <h3 class="compare-warning-title">※ 꼭 확인하세요</h3>
  <ul class="compare-warning-list">
    <li>보험료 비교 결과는 입력하신 정보와 각 보험사 제공 기준에 따라 산출된 예시 금액입니다.</li>
    <li>실제 가입 시 보험사 심사, 가입조건, 특약 선택 등에 따라 보험료가 달라질 수 있습니다.</li>
    <li>상품별 주요 보장내용, 면책사항, 가입제한, 보장기간, 해지환급금 등은 반드시 약관을 확인하시기 바랍니다.</li>
    <li>본 비교 서비스는 보험상품에 대한 정보 제공 및 비교를 목적으로 하며, 보험계약 체결을 대행하지 않습니다.</li>
    <li>가입 전 반드시 상품설명서 및 약관을 읽어보시고, 궁금한 점은 각 보험사 또는 전문가와 상담하시기 바랍니다.</li>
    <li>본 서비스는 최신 정보를 제공하기 위해 노력하고 있으나, 일부 정보의 지연 또는 오류가 발생할 수 있습니다.</li>
  </ul>
  <div class="compare-disclaimer">
    ※ 본 비교 결과는 참고용이며, 실제 보험료 및 보장내용은 보험사 심사 및 약관에 따라 달라질 수 있습니다.<br>
    ※ 자세한 사항은 각 보험사 홈페이지 또는 고객센터를 통해 확인하시기 바랍니다.
  </div>
</div>

  `
    };
  
    document.getElementById('insure-content').innerHTML =
      contentMap[keyword] || '해당 보험에 대한 정보가 없습니다.';
  });
  

 
  
  document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(e) {
      // id가 compareBtn인 버튼이 클릭됐을 때만 실행
      if (e.target && e.target.id === 'compareBtn') {
        const form = document.getElementById('compareForm');
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }
        const resultList = document.getElementById('compareResultList');
        resultList.classList.add('active');
        resultList.querySelectorAll('.result-price').forEach(function(el) {
          el.textContent = '10,000원';
        });
      }
    });
  });
  
  document.addEventListener('click', function(event) {
    var btn = event.target.closest('.compare-btn-card');
    if (btn) {
      var keyword = btn.getAttribute('data-keyword');
      if (keyword) {
        sessionStorage.setItem('insureKeyword', keyword);
        window.location.href = 'insure_join.html';
      }
    }
  });
  
  
  
  