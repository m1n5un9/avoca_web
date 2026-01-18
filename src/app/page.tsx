import Image from 'next/image'

export default function Home() {
    return (
        <main>
            {/* 1. Hook (Hero) */}
            <section className="hero section">
                <div className="container hero-content">
                    <h1 className="hero-title">
                        왜 <span className="title-gradient">작심삼일</span>일까?
                    </h1>
                    <p className="hero-subtitle">
                        의지 문제가 아닙니다. <br />
                        뇌가 심심했을 뿐입니다.
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px' }}>
                        <button className="btn btn-store">App Store</button>
                        <button className="btn btn-store">Google Play</button>
                    </div>

                    <div style={{ marginTop: '40px', opacity: 0.5, animation: 'bounce 2s infinite' }}>
                        <p style={{ fontSize: '0.9rem', marginBottom: '10px' }}>답을 확인하세요</p>
                        <div style={{ fontSize: '2rem' }}>↓</div>
                    </div>
                </div>
            </section>

            {/* 2. Story (Epiphany Bridge) */}
            <section className="section" style={{ background: '#0a0a0f' }}>
                <div className="container">
                    {/* Phase 1 */}
                    <div className="story-phase" style={{ margin: '0 auto 80px' }}>
                        <span className="phase-tag">The Struggle</span>
                        <h2>매년 반복되는 실패</h2>
                        <p>"우리는 매년 새해 목표로 영어를 다짐하고, 단어장을 사고, 인강을 결제합니다."</p>
                        <p>하지만 지루한 암기와 외로운 싸움에 지쳐 결국 포기하고, <br />'나는 끈기가 없나 봐'라며 자책합니다.</p>
                    </div>

                    {/* Phase 2 */}
                    <div className="story-phase" style={{ margin: '0 auto 80px' }}>
                        <span className="phase-tag">The Epiphany</span>
                        <h2><span className="title-gradient">사실 문제는 '방법'이었습니다.</span></h2>
                        <p>의지력은 소모되지만, <strong>'재미'와 '승부욕'은 지치지 않습니다.</strong></p>
                        <p>억지로 암기하며 버티는 것이 아니라,<br />이기기 위해 스스로 단어를 찾게 되는 <strong>몰입(Flow)</strong>.<br />그것이 Avoca가 만드는 지속 가능한 성장의 핵심입니다.</p>
                    </div>

                    {/* Phase 3 */}
                    <div className="story-phase" style={{ margin: '0 auto' }}>
                        <span className="phase-tag">The Solution</span>
                        <h2>Vocabulary First</h2>
                        <p>모든 승부의 무기는 '단어'입니다.<br />Reading, Speaking, Writing... <strong>단어를 모르면 싸울 수 없습니다.</strong></p>

                        <div style={{ margin: '40px 0', padding: '100px 0', background: 'rgba(0, 255, 136, 0.05)', borderRadius: '10px', border: '1px solid rgba(0, 255, 136, 0.2)' }}>
                            <p style={{ color: 'var(--primary-color)' }}>[Battle Scene Video Placeholder]</p>
                        </div>

                        <p>친구와 경쟁하고, 티어를 올리고, 승리의 쾌감을 느끼는 순간,<br />영어는 학습이 아니라 본능이 됩니다.</p>
                    </div>
                </div>
            </section>

            {/* 3. Logic (Comparison) */}
            <section className="section">
                <div className="container">
                    <span className="phase-tag">Why Premium?</span>
                    <h2>무엇이 다른가?</h2>
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th style={{ width: '30%' }}>기능 (Feature)</th>
                                <th style={{ width: '30%' }}>Basic (9,900원)</th>
                                <th className="highlight-col" style={{ width: '40%' }}>Premium (12,900원 -&gt; YOU)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="cell-feature">제공 언어 (7개국)</td>
                                <td>지원</td>
                                <td className="highlight-col">🇺🇸🇬🇧🇨🇳🇯🇵🇫🇷🇩🇪🇪🇸🇻🇳<br /><strong>전체 지원</strong></td>
                            </tr>
                            <tr>
                                <td className="cell-feature">콘텐츠</td>
                                <td>300+권, 5만+ 문장</td>
                                <td className="highlight-col"><strong>무제한 학습</strong></td>
                            </tr>
                            <tr>
                                <td className="cell-feature">멀티 플레이</td>
                                <td>실시간 배틀</td>
                                <td className="highlight-col">실시간 배틀 (최대 6인)</td>
                            </tr>
                            <tr>
                                <td className="cell-feature">Speak 모드</td>
                                <td>X</td>
                                <td className="highlight-col"><strong>무제한 (Native Feedback)</strong></td>
                            </tr>
                            <tr>
                                <td className="cell-feature">나만의 단어장</td>
                                <td>3권</td>
                                <td className="highlight-col"><strong>무제한 (촬영 후 자동 생성)</strong></td>
                            </tr>
                        </tbody>
                    </table>
                    <p style={{ marginTop: '20px', color: 'var(--primary-color)' }}>"원래는 이 모든 혜택을 누리려면 월 12,900원을 내야 합니다."</p>
                </div>
            </section>

            {/* 4. Offer */}
            <section className="section">
                <div className="container">
                    <div className="offer-card">
                        <span className="phase-tag">Limited Offer</span>
                        <h2>"Premium Experience at Basic Price"</h2>
                        <p>지금 <strong>9,900원(Basic)</strong>으로 시작하세요.<br />평생 Premium 혜택을 드립니다.</p>

                        <div className="checklist">
                            <div className="checklist-item">
                                <span className="check-icon">✓</span>
                                <div><strong>Lifetime Price Lock</strong><br />물가 상승에도 요금은 영원히 9,900원 고정</div>
                            </div>
                            <div className="checklist-item">
                                <span className="check-icon">✓</span>
                                <div><strong>Lifetime Upgrade</strong><br />요금은 Basic, 혜택은 Premium</div>
                            </div>
                            <div className="checklist-item">
                                <span className="check-icon">✓</span>
                                <div><strong>Founder Badge</strong><br />오직 지금 시작하는 분들에게만 부여</div>
                            </div>
                        </div>

                        <p style={{ color: '#ff6b6b', marginBottom: '30px', fontWeight: 'bold' }}>정식 런칭 후에는 이 혜택이 영원히 사라집니다.</p>

                        <button className="btn btn-primary">
                            월 9,900원으로 평생 가격 고정하기
                        </button>

                        <div style={{ marginTop: '20px', fontSize: '0.9rem', color: '#666' }}>
                            구독 결제 후 앱 로그인 시 즉시 적용됩니다
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-brand">
                            <span className="footer-logo">Avoca</span>
                            <p>The Gamified Language Battle</p>
                        </div>

                        <div className="corporate-info">
                            <h3 style={{ fontSize: '1rem', color: 'white', marginBottom: '15px' }}>Corporate Information</h3>
                            <p><strong>Company Name:</strong> Levup Co., Ltd.</p>
                            <p><strong>Contact:</strong> support@levup.co.kr</p>
                        </div>
                    </div>
                    <p className="copyright">© 2026 Levup Co., Ltd. All rights reserved.</p>
                </div>
            </footer>
        </main>
    )
}
