import Image from 'next/image'

export default function Home() {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Coming Soon Section */}
            <section className="hero section" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="container hero-content text-center">
                    <h1 className="hero-title" style={{ fontSize: '5rem', marginBottom: '10px' }}>
                        <span className="title-gradient">Avoca</span>
                    </h1>
                    <p className="hero-subtitle" style={{ fontSize: '1.8rem', color: 'var(--text-primary)', fontWeight: '500', marginBottom: '20px' }}>
                        The Next Generation Language Education Game
                    </p>
                    <div style={{
                        display: 'inline-block',
                        padding: '10px 30px',
                        borderRadius: '100px',
                        background: 'rgba(0, 255, 136, 0.1)',
                        border: '1px solid var(--primary-color)',
                        color: 'var(--primary-color)',
                        fontWeight: 'bold',
                        letterSpacing: '0.2em',
                        marginTop: '20px'
                    }}>
                        COMING SOON
                    </div>
                </div>
            </section>

            {/* Footer (Important for Corporate Info) */}
            <footer className="footer" style={{ background: '#020205', padding: '60px 0 40px' }}>
                <div className="container">
                    <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                        <div className="footer-brand" style={{ marginBottom: '20px' }}>
                            <span className="footer-logo">Avoca</span>
                            <p>Language Education Game</p>
                        </div>

                        <div className="corporate-info">
                            <h3 style={{ fontSize: '1rem', color: 'white', marginBottom: '15px' }}>Corporate Information</h3>
                            <p><strong>Company Name:</strong> Levup Co., Ltd.</p>
                            <p><strong>Contact:</strong> support@avoca.im</p>
                        </div>
                    </div>
                    <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: '0.8rem', opacity: 0.5 }}>
                        <p className="copyright">© 2026 Levup Co., Ltd. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </main>
    )
}
