
import React from 'react'
import ReactDOM from 'react-dom/client'
import '../styles.css'
import steffPhoto from './steff.png'
function App() {
  return (
    <div className="site">
      <header className="hero heroImage">
        <nav className="nav">
          <div className="brand">Steff Dowle Mentoring</div>
          <div className="navLinks">
            <a href="#about">About</a>
            <a href="#support">Support</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="heroContent">
          <div>
            <p className="eyebrow">Private mentoring for young people</p>
            <h1>Calm, experienced support for young people who are struggling.</h1>
            <p className="intro">
              One-to-one mentoring for vulnerable young people experiencing difficulties with school,
              behaviour, confidence, anxiety, motivation or emotional regulation.
            </p>

            <div className="heroButtons">
              <a className="button primary" href="tel:07951321233">Call Steff</a>
              <a className="button secondary" href="mailto:info@youthmentor.co.uk">Email Enquiry</a>
            </div>
          </div>

        <div className="profileCard">
  <img src={steffPhoto} alt="Steff Dowle" />
  <h3>Steff Dowle</h3>
  <p>
    Former Head of School • SEMH Experience • British Army Veteran
  </p>
</div>
        </section>
      </header>

      <main>
        <section id="about" className="section">
          <p className="eyebrow dark">About Steff</p>
          <h2>Trusted guidance for parents and young people.</h2>
          <p>
            I am Steff Dowle, a former Head of School with extensive experience supporting young
            people with behavioural, emotional and mental health needs. I understand that behaviour
            is often a form of communication, and that many young people need calm, consistent,
            trusted adult support to help them re-engage and move forward.
          </p>
          <p>
            My background combines senior education leadership, specialist school experience and
            24 years of military service. This allows me to bring structure, patience, challenge and
            compassion to my mentoring work.
          </p>
        </section>

        <section id="support" className="section light">
          <p className="eyebrow dark">Who I support</p>
          <h2>Mentoring can help with:</h2>

          <div className="grid">
            <div className="card">
              <h3>School difficulties</h3>
              <p>Support for young people struggling with attendance, engagement, behaviour or confidence in school.</p>
            </div>
            <div className="card">
              <h3>SEMH needs</h3>
              <p>Calm support for emotional regulation, low mood, anxiety, frustration and difficult presentation.</p>
            </div>
            <div className="card">
              <h3>Confidence & motivation</h3>
              <p>Helping young people build self-belief, routine, personal responsibility and positive direction.</p>
            </div>
            <div className="card">
              <h3>Parent support</h3>
              <p>Working with parents to understand what is happening and identify practical next steps.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <p className="eyebrow dark">My approach</p>
          <h2>Firm, fair, compassionate and practical.</h2>
          <p>
            My mentoring is relationship-led but purposeful. I aim to build trust first, then help
            the young person understand their choices, recognise their strengths and develop better
            ways to manage challenge.
          </p>

          <div className="steps">
            <div>
              <span>01</span>
              <h3>Initial conversation</h3>
              <p>We discuss the concerns, background and what support may be suitable.</p>
            </div>
            <div>
              <span>02</span>
              <h3>Mentoring plan</h3>
              <p>We agree clear aims around school, behaviour, confidence or personal development.</p>
            </div>
            <div>
              <span>03</span>
              <h3>Regular support</h3>
              <p>Structured one-to-one sessions with clear feedback and practical progress.</p>
            </div>
          </div>
        </section>

        <section className="section light">
          <p className="eyebrow dark">Safeguarding</p>
          <h2>Safe, professional and accountable support.</h2>
          <p>
            Mentoring is delivered with a strong safeguarding mindset, clear professional boundaries
            and a commitment to the welfare, voice and needs of the young person.
          </p>
        </section>

        <section id="contact" className="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Speak to Steff about mentoring support.</h2>
            <p>
              If your child is struggling and you would like to discuss private mentoring support,
              please contact me directly.
            </p>
          </div>

          <div className="contactBox">
            <p><strong>Phone:</strong> <a href="tel:07951321233">07951 321233</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@youthmentor.co.uk">info@youthmentor.co.uk</a></p>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Steff Dowle Mentoring. Private mentoring for young people and families.</p>
      </footer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
