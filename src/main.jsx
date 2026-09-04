import logo from './logo.png.png'
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import '../styles.css'
function App() {

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://app.trysoro.com/api/embed/b553c465-9609-4d47-87c9-ecd1c0561729'
    script.defer = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="site">
      <header className="hero heroImage">
       <nav className="nav">
  <div className="logoWrap">

   <img src={logo} alt="Pathway Youth Mentoring" className="siteLogo" />
    <div>
      <div className="brand">
        Pathway Youth Mentoring
      </div>

      <p className="tagline">
        Support. Empower. Inspire. Futures.
      </p>
    </div>

  </div>

  <div className="navLinks">
    <a href="#about">About</a>
    <a href="#support">Support</a>
    <a href="#approach">Approach</a>
    <a href="#safeguarding">Safeguarding</a>
    <a href="#blog">Blog</a>
           <a href="#contact">Contact</a>
  
  </div>

</nav>

        <section className="heroContent">
          <div>
            <p className="eyebrow dark">Private mentoring for young people</p>

            <h1>Calm, experienced support for young people who are struggling.</h1>

            <p className="intro">
              One-to-one mentoring for young people experiencing challenges with school,
              behaviour, confidence, anxiety, motivation or emotional regulation.
            </p>

            <div className="heroButtons">
              <a className="button primary" href="tel:07348235199">Call Steff</a>
              <a className="button secondaryDark" href="mailto:info@youthmentoring.co.uk">Email Enquiry</a>
            </div>
          </div>
          <div className="profileCard">
  <img src="/steff.png" alt="Steff Dowle" />
  <h3>Steff Dowle</h3>
           
            <p>Led by Former Head of School • SEMH Experience • British Army Veteran</p>
          </div>
        </section>
      </header>

      <main>
       
   <section id="team" className="section teamSection">

  <p className="eyebrow dark">Meet the Pathway Team</p>

  <h2>Experienced people. Individual support.</h2>

  <p className="teamIntro">
    Our team brings together extensive experience from education, counselling,
    coaching, the military, public service, fitness and personal development.
    What connects us is a shared commitment to helping young people feel heard,
    supported and able to move forward with confidence.
  </p>

  <div className="teamFounder">
    <img src="/steff.png" alt="Steff Dowle" />

    <div className="teamFounderContent">
      <h3>Steff Dowle</h3>
      <h4>Founder & Lead Mentor</h4>

      <p>
        Steff is a former Head of School with over 20 years of experience
        supporting young people with behavioural, emotional and mental health needs.
      </p>

      <p>
        His background combines senior education leadership, specialist school
        experience and 24 years of military service. This enables him to bring
        structure, patience, challenge and compassion to his mentoring work.
      </p>
    </div>
  </div>

  <div className="teamGrid">

    <div className="teamCard">
      <img src="/Beth.jpg" alt="Beth" />
      <div className="teamCardContent">
        <h3>Beth</h3>
        <h4>Mentor</h4>

        <p>
          Beth has worked in education for nearly 20 years, both as a one-to-one
          private tutor and as a classroom teacher across East Kent. Her work is
          driven by a genuine passion for supporting young people and helping them
          reach their potential with the right guidance and encouragement.
        </p>

        <p>
          As a qualified Life Coach, Beth has supported a wide range of clients,
          including career starters and university graduates, providing a safe,
          professional and non-judgemental space in which they can explore their
          options, build confidence and identify their next steps.
        </p>

        <p>
          Alongside her professional experience, Beth is a mother of three young
          adults, giving her valuable lived experience of the challenges faced by
          children, teenagers and young adults in today's world.
        </p>
      </div>
    </div>

    <div className="teamCard">
      <img src="/mark.jpg.jpeg" alt="Mark" />
      <div className="teamCardContent">
        <h3>Mark</h3>
        <h4>Mentor</h4>

        <p>
          Mark is a qualified counsellor with experience supporting young people
          through emotional, behavioural and social challenges. Although his work
          with Pathway focuses on mentoring rather than counselling, his professional
          training brings strong skills in listening, rapport-building and helping
          young people feel safe, understood and confident.
        </p>

        <p>
          Mark also has a military background, which has shaped his approach to
          structure, consistency and calm leadership. This combination of professional
          insight and disciplined support enables him to help young people develop
          resilience, establish clear boundaries and build greater stability and confidence.
        </p>
      </div>
    </div>

    <div className="teamCard">
      <img src="/Neil.jpg" alt="Neil" />
      <div className="teamCardContent">
        <h3>Neil</h3>
        <h4>Mentor</h4>

        <p>
          Neil brings more than 21 years of experience as a National Highways
          Traffic Officer, alongside over 32 years of involvement in fitness and
          personal development.
        </p>

        <p>
          As a Personal Trainer, he has a strong passion for health, fitness,
          resilience and helping people become the best version of themselves.
          He has continually challenged himself physically and mentally, including
          climbing the Brecon Beacons, Ben Nevis and Snowdon, as well as completing
          the demanding SAS Fan Dance.
        </p>

        <p>
          These experiences have reinforced his belief in discipline, perseverance,
          overcoming setbacks and recognising that we are often capable of far more
          than we initially believe.
        </p>

        <p>
          Through his mentoring role with Pathway, Neil uses his professional and
          life experience to encourage and motivate others, helping them recognise
          their strengths, build confidence and make positive changes in their lives.
        </p>
      </div>
    </div>

  </div>

</section>      
<section class="mentor-section">
  <div class="mentor-container">
    <h2>What Does a Mentor Do?</h2>
    <p>
      A mentor provides guidance, encouragement, and practical support to help young people overcome challenges and reach their potential.
      Through regular one-to-one sessions, a mentor can help build confidence, improve motivation, develop positive routines, manage behaviour,
      strengthen communication skills, and support emotional wellbeing.
    </p>
    <p>
      Mentoring offers a trusted relationship where young people feel listened to, understood, and empowered to make positive choices for their future.
    </p>
  </div>

        <section className="section light">
  <p className="eyebrow dark">Testimonials</p>

  <h2>What parents and young people say.</h2>

  <div className="grid">
    <div className="card">
      <p>
        “I will always hold the utmost respect and gratitude for the incredible impact he has had on my daughter’s life and the outstanding outcomes that she achieved thanks to his incredible encouragement, understanding and support..”
      </p>
      <h3>Parent testimonial</h3>
    </div>

    <div className="card">
      <p>
        “The mentoring helped improve confidence, routine and communication at home and school.”
      </p>
      <h3>Parent testimonial</h3>
    </div>

    <div className="card">
      <p>
        “Steff’s approach was firm, fair and reassuring. He understood the behaviour without judging it.”
      </p>
      <h3>Parent testimonial</h3>
    </div>
  </div>
    </section>      

        <section id="support" className="section light">
          <p className="eyebrow dark">How we can help</p>

          <h2>Practical mentoring support for real challenges.</h2>

          <div className="supportGrid">
            <div className="card">
              <h3>School difficulties</h3>
              <p>Support with attendance, engagement, behaviour, routine and rebuilding confidence in education.</p>
            </div>

            <div className="card">
              <h3>Social Emotional & Mental Health support</h3>
              <p>Calm support for emotional regulation, anxiety, low mood, frustration and difficult presentation.</p>
            </div>

            <div className="card">
              <h3>Confidence & motivation</h3>
              <p>Helping young people build self-belief, personal responsibility, resilience and positive direction.</p>
            </div>

            <div className="card">
              <h3>Parent guidance</h3>
              <p>Working with parents to understand what is happening and identify practical next steps.</p>
            </div>

            <div className="card">
              <h3>Behaviour support</h3>
              <p>Helping young people understand choices, consequences, triggers and better ways to respond.</p>
            </div>
<div className="card">
  <h3>Support for Young People who are NEET</h3>

  <p>
    Helping young people who are NEET (Not in Education, Employment or Training)
to rebuild confidence, motivation, routine and positive future direction.
  </p>
</div>
            <div className="card">
              <h3>Positive routine</h3>
              <p>Structured support to improve daily routine, motivation, confidence and personal organisation.</p>
            </div>
          </div>
        </section>
<div className="card">
  
  
</div>
        <section id="approach" className="section">
          <p className="eyebrow dark">Our approach</p>

          <h2>Firm, fair, compassionate and practical.</h2>

          <p>
            Our mentoring is relationship-led but purposeful. We aim to build trust first, then help
            the young person understand their choices, recognise their strengths and develop better
            ways to manage challenge.
          </p>

          <div className="steps">
            <div>
              <span>01</span>
              <h3>Initial conversation</h3>
              <p>We discuss the concerns, background, current challenges and whether mentoring may be suitable.</p>
            </div>

            <div>
              <span>02</span>
              <h3>Mentoring plan</h3>
              <p>We agree clear aims around school, behaviour, confidence, routine or personal development.</p>
            </div>

            <div>
              <span>03</span>
              <h3>Regular support</h3>
              <p>Structured one-to-one sessions with practical support, reflection and clear next steps.</p>
            </div>
          </div>
        </section>

        <section id="safeguarding" className="section light">
          <p className="eyebrow dark">Safeguarding & standards</p>

          <h2>Safe, professional and accountable support.</h2>

          <p>
            Mentoring is delivered with a strong safeguarding mindset, clear professional boundaries
            and a commitment to the welfare, voice and needs of the young person.
          </p>

          <div className="grid">
            <div className="card">
              <h3>Professional boundaries</h3>
              <p>Clear expectations, respectful communication and safe working practices.</p>
            </div>
<div className="card">
  <h3>Confidentiality</h3>

  <p>
    Building trust is central to effective mentoring. Conversations are treated with professionalism, sensitivity and respect, while always maintaining appropriate safeguarding responsibilities where safety or wellbeing may be at risk.
  </p>
</div>
            <div className="card">
              <h3>Young person centred</h3>
              <p>Support that listens to the voice of the young person and understands behaviour as communication.</p>
            </div>

            <div className="card">
              <h3>Parent communication</h3>
              <p>Calm, practical feedback to help parents understand progress and next steps.</p>
            </div>
          </div>
        </section>

  <p className="eyebrow dark">Areas Served</p>

  <h2>Supporting families and young people across Kent and the South East.</h2>

<div className="card">
  <h3>Areas Served</h3>

  <p>
    Folkestone, Hythe, Ashford,
    Canterbury, Dover, Deal and the wider Kent and South East region.
  </p>

  <p>
    One-to-one mentoring, SEMH support, behavioural guidance, confidence building
    and parent support delivered with calm, consistent and experienced leadership.
  </p>
</div>
</section>
  <section className="section light">
  <p className="eyebrow dark">Support Options</p>

  <h2>Flexible support tailored to individual needs.</h2>

  <div className="card">
    <p>
      Support is tailored to the individual needs of each young person and family.
    </p>

    <p>
      Sessions, mentoring packages and ongoing support options are discussed
      following an initial conversation to ensure the right level of support is provided.
    </p>

    <p>
      Please get in touch to discuss availability, support options and pricing.
    </p>

    <p>
      <strong>Free initial consultation call available.</strong>
    </p>
  </div>
</section>
 <section id="blog" className="section light">
  <div className="blogHeader">

    <p className="eyebrow dark">PATHWAY INSIGHTS</p>

    <h2>Advice, Guidance & Support</h2>

    <p className="blogIntro">
      Practical advice for parents, carers and young people covering
      confidence, behaviour, school attendance, emotional wellbeing and
      building brighter futures.
    </p>

  </div>

  <div className="blogWrapper">
      <div id="soro-blog"></div>
  </div>
</section>
 <section id="contact" className="section">
  <p className="eyebrow dark">Contact</p>

  <h2>Get in touch.</h2>

  <div className="contactBox">
    <form
      action="https://formsubmit.co/info@youthmentoring.co.uk"
      method="POST"
      className="contactForm"
    >
      <input type="text" name="name" placeholder="Parent / Guardian Name" required />
      <input type="email" name="email" placeholder="Email Address" required />
      <input type="tel" name="phone" placeholder="Phone Number" />
      <textarea
        name="message"
        placeholder="Please tell me briefly how I may be able to help."
        rows="6"
        required
      ></textarea>

      <button type="submit" className="button primary">
        Send Enquiry
      </button>
    </form>
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
