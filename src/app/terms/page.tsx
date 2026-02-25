import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: '서비스 이용약관 | Avoca',
    description: '주식회사 렙업(Levup Co., Ltd.)이 제공하는 Avoca 서비스의 이용약관입니다.',
}

export default function TermsPage() {
    return (
        <div className="legal-page">
            <header className="legal-header">
                <div className="legal-container">
                    <Link href="/" className="legal-logo">Avoca</Link>
                    <h1>서비스 이용약관</h1>
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
                        본 약관은 주식회사 렙업(이하 &quot;회사&quot;)이 제공하는 Avoca 서비스(이하 &quot;서비스&quot;)의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
                    </p>

                    <section className="legal-section">
                        <h2>제1조 (목적)</h2>
                        <p>
                            본 약관은 회사가 제공하는 영어 학습 앱 서비스의 이용 조건 및 절차, 회사와 이용자의 권리·의무·책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>제2조 (정의)</h2>
                        <p>본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
                        <ol>
                            <li>&quot;서비스&quot;란 회사가 제공하는 Avoca 영어 학습 앱 및 관련 서비스를 말합니다.</li>
                            <li>&quot;이용자&quot;란 본 약관에 동의하고 서비스를 이용하는 자를 말합니다.</li>
                            <li>&quot;회원&quot;이란 서비스에 가입하여 계정을 생성한 이용자를 말합니다.</li>
                            <li>&quot;콘텐츠&quot;란 서비스 내에서 제공되는 단어, 예문, 학습 자료 등을 말합니다.</li>
                        </ol>
                    </section>

                    <section className="legal-section">
                        <h2>제3조 (약관의 효력 및 변경)</h2>
                        <ol>
                            <li>본 약관은 서비스 화면에 게시하거나 기타 방법으로 이용자에게 공지함으로써 효력이 발생합니다.</li>
                            <li>회사는 관련 법령에 위배되지 않는 범위에서 약관을 개정할 수 있습니다.</li>
                            <li>약관 변경 시 시행일 7일 전부터 앱 내 공지사항을 통해 고지합니다.</li>
                            <li>변경된 약관에 동의하지 않을 경우 서비스 이용을 중단하고 탈퇴할 수 있습니다.</li>
                        </ol>
                    </section>

                    <section className="legal-section">
                        <h2>제4조 (회원가입 및 계정)</h2>
                        <ol>
                            <li>이용자는 이메일 또는 소셜 로그인(Google, Apple, 네이버, 카카오)을 통해 회원가입할 수 있습니다.</li>
                            <li>회원은 정확한 정보를 제공해야 하며, 타인의 정보를 도용해서는 안 됩니다.</li>
                            <li>회원은 자신의 계정을 타인에게 양도하거나 공유해서는 안 됩니다.</li>
                            <li>회사는 다음의 경우 회원가입을 거절하거나 사후 해지할 수 있습니다.
                                <ul>
                                    <li>타인의 명의를 이용한 경우</li>
                                    <li>허위 정보를 기재한 경우</li>
                                    <li>기타 회원으로 등록하는 것이 서비스 운영에 현저한 지장을 초래하는 경우</li>
                                </ul>
                            </li>
                        </ol>
                    </section>

                    <section className="legal-section">
                        <h2>제5조 (서비스의 제공)</h2>
                        <p>회사가 제공하는 서비스는 다음과 같습니다.</p>
                        <ul>
                            <li>영어 단어 학습 및 퀴즈 서비스</li>
                            <li>멀티플레이어 대전 게임</li>
                            <li>타임어택 챌린지</li>
                            <li>학습 진도 관리 및 통계</li>
                            <li>리더보드 및 랭킹 시스템</li>
                            <li>1:1 메시지 및 친구 기능</li>
                            <li>기타 회사가 추가 개발하는 서비스</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>제6조 (서비스 이용 시간)</h2>
                        <ol>
                            <li>서비스는 연중무휴 24시간 제공함을 원칙으로 합니다.</li>
                            <li>다만, 시스템 점검이나 기술적 필요에 의한 서비스 중단 시 사전 공지합니다.</li>
                            <li>천재지변 등 불가항력적 사유에 의한 서비스 중단에 대해서는 사전 공지가 어려울 수 있습니다.</li>
                        </ol>
                    </section>

                    <section className="legal-section">
                        <h2>제7조 (이용자의 의무)</h2>
                        <p>이용자는 다음의 행위를 해서는 안 됩니다.</p>
                        <ul>
                            <li>타인의 개인정보를 수집, 저장, 공개하는 행위</li>
                            <li>서비스의 운영을 방해하는 행위</li>
                            <li>비정상적인 방법으로 서비스를 이용하거나 시스템에 접근하는 행위</li>
                            <li>타인을 비방하거나 불쾌감을 주는 행위</li>
                            <li>욕설, 음란, 혐오 표현 등을 사용하는 행위</li>
                            <li>회사의 동의 없이 서비스를 영리 목적으로 이용하는 행위</li>
                            <li>기타 관련 법령에 위반되는 행위</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>제8조 (지식재산권)</h2>
                        <ol>
                            <li>서비스 내 콘텐츠(단어, 예문, 이미지, 음원 등)에 대한 저작권은 회사에 귀속됩니다.</li>
                            <li>이용자는 서비스를 통해 얻은 정보를 회사의 사전 동의 없이 복제, 전송, 출판, 배포 등의 방법으로 이용하거나 제3자에게 이용하게 해서는 안 됩니다.</li>
                        </ol>
                    </section>

                    <section className="legal-section">
                        <h2>제9조 (유료 서비스 및 결제)</h2>
                        <ol>
                            <li>회사는 일부 서비스를 유료로 제공할 수 있으며, 유료 서비스 이용 시 해당 요금을 결제해야 합니다.</li>
                            <li>유료 서비스의 결제는 앱 내 구매(In-App Purchase)를 통해 이루어지며, Apple App Store 또는 Google Play Store의 결제 정책을 따릅니다.</li>
                            <li>구독 서비스의 경우 자동 갱신되며, 갱신일 최소 24시간 전에 해지해야 다음 결제를 방지할 수 있습니다.</li>
                            <li>환불은 각 앱 스토어의 환불 정책에 따릅니다.</li>
                        </ol>
                    </section>

                    <section className="legal-section">
                        <h2>제10조 (서비스 이용 제한)</h2>
                        <p>
                            회사는 이용자가 본 약관의 의무를 위반하거나 서비스의 정상적인 운영을 방해한 경우, 다음과 같은 조치를 취할 수 있습니다.
                        </p>
                        <ul>
                            <li>경고</li>
                            <li>일시적 이용 정지</li>
                            <li>영구 이용 정지 및 계정 해지</li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>제11조 (계약 해지 및 회원 탈퇴)</h2>
                        <ol>
                            <li>회원은 언제든지 앱 내 설정 메뉴를 통해 회원 탈퇴를 요청할 수 있습니다.</li>
                            <li>탈퇴 시 회원의 모든 학습 데이터, 게임 기록, 매칭 기록, 메시지 기록이 영구적으로 삭제됩니다.</li>
                            <li>유료 서비스 이용 중 탈퇴할 경우, 남은 이용 기간에 대한 환불은 각 앱 스토어의 환불 정책에 따릅니다.</li>
                        </ol>
                    </section>

                    <section className="legal-section">
                        <h2>제12조 (면책 조항)</h2>
                        <ol>
                            <li>회사는 천재지변 등 불가항력적 사유로 서비스를 제공할 수 없는 경우 책임이 면제됩니다.</li>
                            <li>회사는 이용자의 귀책사유로 인한 서비스 이용 장애에 대해 책임을 지지 않습니다.</li>
                            <li>회사는 이용자가 서비스 내에서 게시 또는 전송한 정보의 신뢰도, 정확성에 대해 책임을 지지 않습니다.</li>
                        </ol>
                    </section>

                    <section className="legal-section">
                        <h2>제13조 (분쟁 해결)</h2>
                        <ol>
                            <li>서비스 이용과 관련하여 분쟁이 발생한 경우, 회사와 이용자는 분쟁 해결을 위해 성실히 협의합니다.</li>
                            <li>협의에 의해 해결되지 않는 경우, 관할 법원은 회사 소재지의 법원으로 합니다.</li>
                        </ol>
                    </section>

                    <section className="legal-section">
                        <h2>부칙</h2>
                        <p>본 약관은 2026년 3월 1일부터 시행합니다.</p>
                    </section>
                </div>
            </main>

            <footer className="legal-footer">
                <div className="legal-container">
                    <p>© 2026 Levup Co., Ltd. All rights reserved.</p>
                    <p>
                        <Link href="/privacy-policy">개인정보 처리방침</Link>
                        <span style={{ margin: '0 8px', color: '#333' }}>|</span>
                        <Link href="/delete-account">계정 삭제 요청</Link>
                    </p>
                </div>
            </footer>
        </div>
    )
}
