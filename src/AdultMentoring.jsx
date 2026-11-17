import React, { useEffect } from 'react'
import logo from './logo.png.png'

export default function AdultMentoringPage() {
  useEffect(() => {
    document.title = 'Adult Mentoring in South East England | Pathway Mentoring'

    const setMeta = (selector, value) => {
      const element = document.querySelector(selector)
      if (element) element.setAttribute('content', value)
    }
    setMeta('meta[name="description"]', 'Practical one-to-one adult mentoring across South East England and online. Support with routines, confidence, motivation and accountability.')
    setMeta('meta[property="og:title"]', 'Adult Mentoring in South East England | Pathway Mentoring')
    setMeta('meta[property="og:description"]', 'Supportive, practical adult mentoring across South East England and online, with the Pathway mentoring team.')
    setMeta('meta[property="og:url"]', 'https://www.youthmentoring.co.uk/adult-mentoring/')

    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', 'https://www.youthmentoring.co.uk/adult-mentoring/')
  }, [])

  return (
    <div className="site adultPage">
      <header className="hero heroImage adultHero">
        <nav className="nav">
          <a className="logoWrap" href="/" aria-label="Pathway Youth Mentoring home">
            <img src={logo} alt="Pathway Youth Mentoring" className="siteLogo" />
            <div>
              <div className="brand">Pathway Mentoring</div>
              <p className="tagline">Support. Empower. Inspire. Futures.</p>
            </div>
          </a>
          <div className="navLinks">
            <a href="/">Youth Mentoring</a>
            <a href="#approach">Our Approach</a>
            <a href="#team">Our Mentors</a>
            <a href="#faq">FAQs</a>
            <a href="/?service=adult#contact">Contact</a>
          </div>
        </nav>

        <section className="heroContent">
          <div>
            <p className="eyebrow dark">Pathway Adult Mentoring</p>
            <h1>Adult Mentoring in South East England</h1>
            <p className="intro">Practical, one-to-one support for adults who want more structure, confidence and consistency in everyday life.</p>
            <p className="adultHeroDetail">Face-to-face mentoring across South East England, with online sessions also available.</p>
            <div className="heroButtons">
              <a className="button primary" href="/?service=adult#contact">Enquire about adult mentoring</a>
              <a className="button secondaryDark" href="#approach">How mentoring works</a>
            </div>
          </div>
          <div className="profileCard">
            <img src="/steff.png" alt="Steff Dowle, founder and lead mentor" />
            <h3>Support that moves at your pace</h3>
            <p>Clear goals, regular reflection and encouragement from the Pathway mentoring team.</p>
          </div>
        </section>
      </header>

      <main>
        <section id="about" className="section light">
          <p className="eyebrow dark">A practical way forward</p>
          <h2>Support to help you make changes that last.</h2>
          <p>When routines slip, motivation is low or there is a lot to manage, it can be hard to know where to begin. Adult mentoring offers a regular space to talk things through, set realistic goals and take steady steps forward.</p>
          <p>We work with you as an individual. Together, we focus on what matters to you and agree practical steps at a pace that feels manageable.</p>
          <div className="grid">
            <div className="card"><h3>Build a routine</h3><p>Develop daily or weekly routines that support your priorities and fit your circumstances.</p></div>
            <div className="card"><h3>Grow confidence and motivation</h3><p>Recognise your strengths, build self-belief and find manageable ways to get started.</p></div>
            <div className="card"><h3>Stay accountable to your goals</h3><p>Agree clear next steps and review progress honestly with a mentor who will encourage and challenge you.</p></div>
            <div className="card"><h3>Find direction</h3><p>Break larger challenges into smaller actions and work through changes one step at a time.</p></div>
          </div>
        </section>

        <section id="approach" className="section">
          <p className="eyebrow dark">Our approach</p>
          <h2>Encouraging, honest and direct.</h2>
          <p>Your mentor will listen, help you recognise progress and be direct when a conversation or a thoughtful challenge could help. The relationship is supportive, purposeful and built around goals you choose.</p>
          <div className="steps">
            <div><span>01</span><h3>Start with a conversation</h3><p>Arrange a free introductory chat by telephone or Teams. You can explain what you are looking for and ask questions.</p></div>
            <div><span>02</span><h3>Choose practical goals</h3><p>In your first session, agree what you want to work on and identify clear, manageable next steps.</p></div>
            <div><span>03</span><h3>Review progress together</h3><p>Reflect on what is working, talk honestly about setbacks and adjust goals when circumstances change.</p></div>
          </div>
          <div className="adultAccountability">
            <h3>Accountability without judgement</h3>
            <p>If you repeatedly miss a goal, your mentor will not simply overlook it. Together, you will look at what got in the way, whether the goal still feels realistic and what you want to do next. The aim is to help you build routines and confidence that work in your own life.</p>
          </div>
        </section>

        <section id="team" className="section light">
          <p className="eyebrow dark">Meet your mentors</p>
          <h2>The same Pathway team, supporting adults and young people.</h2>
          <p className="adultTeamIntro">Adult mentoring is offered by the same team who support young people through Pathway Youth Mentoring. We will discuss your priorities with you and help identify a mentor who may be a good fit.</p>
          <div className="adultMentorGrid">
            <article className="adultMentorCard"><img src="/steff.png" alt="Steff Dowle" /><div><h3>Steff Dowle</h3><p>Founder and lead mentor, with experience in education leadership, specialist school support and the British Army.</p></div></article>
            <article className="adultMentorCard"><img src="/Beth.jpg" alt="Beth" /><div><h3>Beth</h3><p>Mentor with extensive education experience and a qualification in life coaching.</p></div></article>
            <article className="adultMentorCard"><img src="/mark.jpg.jpeg" alt="Mark" /><div><h3>Mark</h3><p>Mentor and qualified counsellor with a military background; his Pathway work is mentoring, not counselling.</p></div></article>
            <article className="adultMentorCard"><img src="/Neil.jpg" alt="Neil" /><div><h3>Neil</h3><p>Mentor with experience in public service, fitness and personal development.</p></div></article>
            <article className="adultMentorCard"><img src="/Jenny.png" alt="Jenny" /><div><h3>Jenny</h3><p>Mentor with experience in education, youth justice and additional needs, and a person-centred approach.</p></div></article>
            <article className="adultMentorCard"><img src="/hollie.jpg" alt="Hollie" /><div><h3>Hollie</h3><p>Mentor and Higher Level Teaching Assistant, with particular experience in online mentoring and one-to-one support.</p></div></article>
          </div>
          <p className="adultTeamLink"><a href="/#team">Read the full Pathway mentor profiles</a></p>
        </section>

        <section className="section adultAreas">
          <p className="eyebrow dark">Where we work</p>
          <h2>Face-to-face across South East England.</h2>
          <p>We offer face-to-face adult mentoring across South East England, as well as online sessions. Contact us to talk about your location, availability and the format that may suit you.</p>
        </section>

        <section className="section light adultBoundaries">
          <p className="eyebrow dark">Safe and professional support</p>
          <h2>Clear boundaries and respect for your privacy.</h2>
          <p>We treat conversations with professionalism, sensitivity and respect. Mentoring has clear professional boundaries, including appropriate action if there is a concern about someone’s safety or wellbeing.</p>
          <p>Mentoring is practical and goal-focused. It is not counselling, therapy or a crisis service.</p>
          <a href="/#safeguarding">Read about our safeguarding and professional standards</a>
        </section>

        <section id="faq" className="section">
          <p className="eyebrow dark">Questions</p>
          <h2>Frequently asked questions</h2>
          <div className="adultFaqList">
            <details><summary>Do I need to know exactly what I want to work on?</summary><p>No. We can start with a conversation about what has been difficult or what you would like to be different, then work out initial goals together.</p></details>
            <details><summary>Can I have online sessions?</summary><p>Yes. Online sessions are available where they are suitable for your needs.</p></details>
            <details><summary>How much does mentoring cost?</summary><p>Please contact us for current pricing. We can discuss the available options during your introductory conversation.</p></details>
            <details><summary>Is adult mentoring counselling or therapy?</summary><p>No. Mentoring is practical and goal-focused. It does not provide counselling, therapy or crisis support.</p></details>
          </div>
        </section>

        <section className="contact adultContact">
          <div>
            <p className="eyebrow">Take the first step</p>
            <h2>Let’s talk about what you need.</h2>
            <p>You do not need to have everything worked out before getting in touch. Start with a conversation and ask us anything you would like to know.</p>
            <p>Use the enquiry form and select <strong>Adult mentoring</strong>. Please contact us for pricing.</p>
            <a className="button secondaryDark" href="/?service=adult#contact">Contact Pathway</a>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Pathway Youth Mentoring. Adult mentoring across South East England and online.</p>
        <p><a href="/">Youth Mentoring</a> · <a href="/#safeguarding">Safeguarding</a> · <a href="/?service=adult#contact">Contact</a></p>
      </footer>
    </div>
  )
}
