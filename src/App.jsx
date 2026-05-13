import './App.css'

const outcomes = [
  'A first impression that feels considered before you say a word.',
  'A clear story for what you do, who it is for, and why it matters.',
  'A launch-ready presence that gives momentum to the next conversation.',
]

const process = [
  ['01', 'Shape the signal', 'We clarify the audience, offer, and emotional tone so the site has a point of view.'],
  ['02', 'Design the moment', 'We build a polished visual system around trust, motion, hierarchy, and speed.'],
  ['03', 'Launch with confidence', 'We refine, test, and publish the experience while the energy is still fresh.'],
]

function App() {
  return (
    <main className="site-shell">
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="nav">
          <a className="brand" href="#top" aria-label="Your Website Today home">
            <span className="brand-mark">YWT</span>
            <span>Your Website Today</span>
          </a>
          <a className="nav-cta" href="#start">Start today</a>
        </div>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Modern websites, launched with urgency</p>
            <h1 id="hero-title">Your online presence should feel as ambitious as the work behind it.</h1>
            <p className="hero-lede">
              Premium websites for startups, creators, entrepreneurs, and growing businesses that need to look credible, sharp, and ready now.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#start">Build my website</a>
              <a className="secondary-button" href="#identity">See the shift</a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="orbital orbital-one"></div>
            <div className="orbital orbital-two"></div>
            <div className="browser-frame">
              <div className="browser-top">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="screen-stage">
                <div className="launch-chip">Live in motion</div>
                <div className="mock-headline"></div>
                <div className="mock-copy"></div>
                <div className="mock-grid">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="metric-panel">
              <span>Presence score</span>
              <strong>Premium</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="identity-section" id="identity" aria-labelledby="identity-title">
        <div className="section-kicker">For people building what matters</div>
        <div className="split">
          <h2 id="identity-title">You do not need more noise. You need a site that makes people lean in.</h2>
          <div className="identity-copy">
            <p>
              Your audience is already deciding whether you feel real, capable, and worth their attention. A rushed template can make a strong idea feel smaller than it is.
            </p>
            <p>
              Your Website Today turns that early spark into a polished digital presence with the clarity, taste, and momentum modern buyers expect.
            </p>
          </div>
        </div>
      </section>

      <section className="transformation-section" aria-labelledby="outcomes-title">
        <div className="outcomes-header">
          <p className="eyebrow">From invisible to undeniable</p>
          <h2 id="outcomes-title">The right homepage changes the temperature of every opportunity.</h2>
        </div>
        <div className="outcome-list">
          {outcomes.map((outcome) => (
            <article className="outcome" key={outcome}>
              <span className="outcome-marker"></span>
              <p>{outcome}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section" aria-labelledby="process-title">
        <div>
          <p className="eyebrow">A focused path</p>
          <h2 id="process-title">Move from idea to launch without losing the magic.</h2>
        </div>
        <div className="process-steps">
          {process.map(([number, title, body]) => (
            <article className="process-step" key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta" id="start" aria-labelledby="cta-title">
        <div className="cta-panel">
          <p className="eyebrow">Your website today</p>
          <h2 id="cta-title">Launch the version of your brand people can believe in.</h2>
          <p>
            Bring the idea, the ambition, or the half-finished page. We will shape it into a premium web presence that feels current, confident, and ready for the next move.
          </p>
          <a className="primary-button" href="mailto:hello@yourwebsitetoday.com">Start the conversation</a>
        </div>
      </section>

      <footer className="footer">
        <span>Your Website Today</span>
        <span>Modern websites for people moving fast.</span>
      </footer>
    </main>
  )
}

export default App
