import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '개인정보 처리방침 | Avoca',
  description: '주식회사 렙업(Levup Co., Ltd.)이 제공하는 Avoca 서비스의 개인정보 처리방침입니다.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="legal-page">
      <header className="legal-header">
        <div className="legal-container">
          <Link href="/" className="legal-logo">Avoca</Link>
          <h1>개인정보 처리방침</h1>
          <p className="legal-meta">
            <span>시행일: 2026년 3월 1일</span>
            <span>|</span>
            <span>주식회사 렙업 (Levup Co., Ltd.)</span>
          </p>
        </div>
      </header>

      <main className="legal-body">
        <div className="legal-container">
          <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>
            주식회사 렙업(이하 &quot;회사&quot;)은 「개인정보 보호법」에 따라 이용자의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
          </p>

          <section className="legal-section">
            <h2>제1조 (개인정보의 수집 항목 및 수집 방법)</h2>
            <p>회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다.</p>

            <h3>1. 회원가입 시 수집 항목</h3>
            <ul>
              <li>이메일 주소, 비밀번호(이메일 가입 시)</li>
              <li>닉네임(표시 이름)</li>
              <li>소셜 로그인 시: 소셜 계정 식별자, 이메일, 프로필 이름</li>
            </ul>

            <h3>2. 서비스 이용 중 자동 수집 항목</h3>
            <ul>
              <li>학습 기록 (단어 학습 진행도, 점수, 정답률)</li>
              <li>게임 기록 (멀티플레이어 전적, ELO 레이팅)</li>
              <li>기기 정보 (OS 종류, 앱 버전)</li>
              <li>서비스 이용 기록 (접속 시간, 이용 패턴)</li>
            </ul>

            <h3>3. 수집 방법</h3>
            <ul>
              <li>회원가입, 서비스 이용 과정에서 이용자가 직접 입력</li>
              <li>소셜 로그인(Google, Apple, 네이버, 카카오) 연동 시 자동 수집</li>
              <li>서비스 이용 중 자동 생성·수집</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>제2조 (개인정보의 수집 및 이용 목적)</h2>
            <ul>
              <li>회원 식별 및 회원 관리</li>
              <li>영어 학습 서비스 제공 (단어 학습, 게임, 학습 진도 관리)</li>
              <li>멀티플레이어 매칭 및 리더보드 운영</li>
              <li>1:1 메시지, 친구 기능 등 소셜 기능 제공</li>
              <li>서비스 개선 및 신규 콘텐츠 개발</li>
              <li>고객 문의 대응 및 공지사항 전달</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>제3조 (개인정보의 보유 및 이용 기간)</h2>
            <p>
              회사는 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관련 법령에 따라 보존할 필요가 있는 경우 해당 기간 동안 보관합니다.
            </p>
            <ul>
              <li>회원 탈퇴 시: 즉시 파기</li>
              <li>전자상거래법에 따른 계약·거래 기록: 5년</li>
              <li>전자상거래법에 따른 소비자 불만·분쟁 처리 기록: 3년</li>
              <li>통신비밀보호법에 따른 통신사실 확인자료: 3개월</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>제4조 (개인정보의 파기)</h2>
            <p>
              회사는 개인정보 보유 기간의 경과, 처리 목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.
            </p>
            <ul>
              <li>전자적 파일: 복구 불가능한 방법으로 영구 삭제</li>
              <li>종이 문서: 분쇄기로 분쇄하거나 소각</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>제5조 (개인정보의 제3자 제공)</h2>
            <p>
              회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
            </p>
            <ul>
              <li>이용자가 사전에 동의한 경우</li>
              <li>법령의 규정에 의하거나 수사 목적으로 법령에 정해진 절차에 따라 요청이 있는 경우</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>제6조 (개인정보 처리의 위탁)</h2>
            <p>회사는 원활한 서비스 제공을 위해 다음과 같이 개인정보 처리 업무를 위탁하고 있습니다.</p>
            <table className="legal-table">
              <thead>
                <tr>
                  <th>수탁업체</th>
                  <th>위탁 업무</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Supabase Inc.</td>
                  <td>데이터베이스 호스팅 및 인증 서비스</td>
                </tr>
                <tr>
                  <td>Google LLC</td>
                  <td>소셜 로그인, 앱 배포(Google Play)</td>
                </tr>
                <tr>
                  <td>Apple Inc.</td>
                  <td>소셜 로그인, 앱 배포(App Store)</td>
                </tr>
                <tr>
                  <td>네이버 주식회사</td>
                  <td>소셜 로그인</td>
                </tr>
                <tr>
                  <td>주식회사 카카오</td>
                  <td>소셜 로그인</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="legal-section">
            <h2>제7조 (이용자의 권리와 행사 방법)</h2>
            <p>이용자는 언제든지 다음의 권리를 행사할 수 있습니다.</p>
            <ul>
              <li>개인정보 열람 요구</li>
              <li>오류 등이 있을 경우 정정 요구</li>
              <li>삭제 요구 (앱 내 &quot;설정 &gt; 회원 탈퇴&quot; 기능을 통해 직접 삭제 가능)</li>
              <li>처리 정지 요구</li>
            </ul>
            <p>
              위 요구사항은 앱 내 설정 또는 아래 연락처를 통해 행사하실 수 있으며, 회사는 이에 대해 지체 없이 조치하겠습니다.
            </p>
          </section>

          <section className="legal-section">
            <h2>제8조 (만 14세 미만 아동의 개인정보 보호)</h2>
            <p>
              회사는 만 14세 미만 아동의 개인정보를 수집하는 경우 법정대리인의 동의를 받습니다. 만 14세 미만 아동의 법정대리인은 아동의 개인정보 열람, 정정, 삭제, 처리정지를 요구할 수 있습니다.
            </p>
          </section>

          <section className="legal-section">
            <h2>제9조 (개인정보의 안전성 확보 조치)</h2>
            <p>회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
            <ul>
              <li>비밀번호의 암호화 저장 및 관리</li>
              <li>해킹 등에 대비한 기술적 대책 (SSL/TLS 암호화 통신)</li>
              <li>개인정보 접근 권한 제한</li>
              <li>Row Level Security(RLS) 정책을 통한 데이터 접근 제어</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>제10조 (개인정보보호 책임자)</h2>
            <p>
              회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 이용자의 불만 처리 및 피해 구제를 위하여 아래와 같이 개인정보보호 책임자를 지정하고 있습니다.
            </p>
            <div className="legal-notice">
              <p><strong>▶ 개인정보보호 책임자</strong></p>
              <p>회사명: 주식회사 렙업 (Levup Co., Ltd.)</p>
              <p>이메일: cs@avoca.im</p>
            </div>
          </section>

          <section className="legal-section">
            <h2>제11조 (개인정보 처리방침의 변경)</h2>
            <p>
              이 개인정보 처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경 내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
            </p>
          </section>

          <section className="legal-section">
            <h2>제12조 (권익 침해 구제 방법)</h2>
            <p>개인정보 침해에 대한 신고나 상담이 필요하신 경우 아래 기관에 문의하시기 바랍니다.</p>
            <ul>
              <li>개인정보침해신고센터: (국번없이) 118</li>
              <li>개인정보분쟁조정위원회: 1833-6972</li>
              <li>대검찰청 사이버수사과: (국번없이) 1301</li>
              <li>경찰청 사이버안전국: (국번없이) 182</li>
            </ul>
          </section>
        </div>
      </main>

      <footer className="legal-footer">
        <div className="legal-container">
          <p>© 2026 Levup Co., Ltd. All rights reserved.</p>
          <p>
            <Link href="/terms">이용약관</Link>
            <span style={{ margin: '0 8px', color: '#333' }}>|</span>
            <Link href="/delete-account">계정 삭제 요청</Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
