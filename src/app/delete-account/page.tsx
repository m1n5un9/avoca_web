'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'

export default function DeleteAccountPage() {
    const [email, setEmail] = useState('')
    const [reason, setReason] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        const subject = encodeURIComponent('[계정 삭제 요청]')
        const body = encodeURIComponent(
            `가입 이메일: ${email}\n삭제 사유: ${reason || '선택 안 함'}\n추가 메시지: ${message || '없음'}`
        )
        window.location.href = `mailto:cs@avoca.im?subject=${subject}&body=${body}`
        setSubmitted(true)
    }

    return (
        <div className="legal-page">
            <header className="legal-header">
                <div className="legal-container">
                    <Link href="/" className="legal-logo">Avoca</Link>
                    <h1>계정 삭제 요청</h1>
                    <p className="legal-meta">
                        <span>Avoca 앱의 계정 및 개인정보 삭제를 요청하실 수 있습니다.</span>
                    </p>
                </div>
            </header>

            <main className="legal-body">
                <div className="legal-container">
                    {/* 앱 내 삭제 안내 */}
                    <div className="legal-notice">
                        <p><strong>앱을 사용 중이라면</strong></p>
                        <p>설정 &gt; 계정 관리 &gt; 회원 탈퇴 에서 직접 삭제하실 수 있습니다.</p>
                        <p style={{ marginBottom: 0 }}>
                            <strong>앱이 없거나 로그인할 수 없는 경우</strong>, 아래 양식을 통해 삭제를 요청해 주세요.
                        </p>
                    </div>

                    {/* 삭제되는 데이터 안내 */}
                    <section className="legal-section">
                        <h2>삭제 시 처리되는 데이터</h2>

                        <div className="data-card data-card--danger">
                            <h3>🗑️ 삭제되는 데이터</h3>
                            <ul>
                                <li>계정 정보 (이메일, 닉네임, 프로필)</li>
                                <li>학습 기록 (단어 학습 진행도, 정답률, 점수)</li>
                                <li>게임 기록 (멀티플레이어 전적, ELO 레이팅)</li>
                                <li>메시지 기록</li>
                                <li>친구 목록 및 매칭 기록</li>
                                <li>설정 정보 (언어, 소리, 알림 등)</li>
                            </ul>
                        </div>

                        <div className="data-card data-card--warn">
                            <h3>⚖️ 법적 의무에 따라 보존될 수 있는 데이터</h3>
                            <ul>
                                <li>전자상거래법에 따른 거래/결제 기록: 5년</li>
                                <li>소비자 불만/분쟁 처리 기록: 3년</li>
                                <li>통신비밀보호법에 따른 통신사실 확인자료: 3개월</li>
                            </ul>
                        </div>

                        <div className="data-card data-card--info">
                            <h3>⏱️ 처리 기간</h3>
                            <ul>
                                <li>요청 접수 후 영업일 기준 3일 이내 처리</li>
                                <li>처리 완료 시 입력하신 이메일로 안내 발송</li>
                            </ul>
                        </div>
                    </section>

                    {/* 폼 또는 성공 메시지 */}
                    <section className="legal-section">
                        <h2>삭제 요청 양식</h2>

                        {!submitted ? (
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="delete-email">
                                        이메일 주소 <span className="required">*</span>
                                    </label>
                                    <input
                                        id="delete-email"
                                        type="email"
                                        className="form-input"
                                        placeholder="가입 시 사용한 이메일을 입력하세요"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="delete-reason">
                                        삭제 사유 <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>(선택)</span>
                                    </label>
                                    <select
                                        id="delete-reason"
                                        className="form-select"
                                        value={reason}
                                        onChange={(e) => setReason(e.target.value)}
                                    >
                                        <option value="">선택해 주세요</option>
                                        <option value="더 이상 사용하지 않습니다">더 이상 사용하지 않습니다</option>
                                        <option value="개인정보가 걱정됩니다">개인정보가 걱정됩니다</option>
                                        <option value="다른 서비스를 이용합니다">다른 서비스를 이용합니다</option>
                                        <option value="기타">기타</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="delete-message">
                                        추가 메시지 <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>(선택)</span>
                                    </label>
                                    <textarea
                                        id="delete-message"
                                        className="form-textarea"
                                        placeholder="추가로 전달하고 싶은 내용이 있으시면 적어주세요."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </div>

                                <button type="submit" className="form-submit">
                                    삭제 요청하기
                                </button>
                            </form>
                        ) : (
                            <div className="form-success">
                                <div className="success-icon">✅</div>
                                <h3>삭제 요청이 접수되었습니다</h3>
                                <p>영업일 기준 3일 이내에 처리됩니다.</p>
                                <p>처리 완료 시 입력하신 이메일로 안내 드리겠습니다.</p>
                            </div>
                        )}
                    </section>

                    {/* 하단 연락처 */}
                    <section className="legal-section" style={{ marginTop: '40px' }}>
                        <div className="legal-notice">
                            <p><strong>문의처</strong></p>
                            <p>이메일: cs@avoca.im</p>
                            <p style={{ marginBottom: 0 }}>회사: 주식회사 렙업 (Levup Co., Ltd.)</p>
                        </div>
                    </section>
                </div>
            </main>

            <footer className="legal-footer">
                <div className="legal-container">
                    <p>© 2026 Levup Co., Ltd. All rights reserved.</p>
                    <p>
                        <Link href="/privacy-policy">개인정보 처리방침</Link>
                        <span style={{ margin: '0 8px', color: '#333' }}>|</span>
                        <Link href="/terms">이용약관</Link>
                    </p>
                </div>
            </footer>
        </div>
    )
}
