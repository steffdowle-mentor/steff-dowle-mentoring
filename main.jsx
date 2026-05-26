import React from 'react'
import { createRoot } from 'react-dom/client'
import { ShieldCheck, HeartHandshake, GraduationCap, Compass, Phone, Mail, CheckCircle, Users, Home, ArrowRight } from 'lucide-react'
import './styles.css'

function App() {
  return (
    <div className="site">
      <header className="header">
        <div className="wrap nav">
          <div>
            <h1>Steff Dowle Mentoring</h1>
            <p>Specialist Support for Vulnerable Young People</p>
          </div>
          <nav>
            <a href="#about">About</a>
            <a href="#support">Who I Support</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="button small" href="#contact">Free Consultation</a>
        </div>
      </header>

      <section className="hero">
        <div className="wrap heroGrid">
          <div>
            <p className="eyebrow">Private Youth Mentoring</p>
            <h2>Specialist mentoring for young people who are struggling.</h2>
            <p className="heroText">
              Calm, experienced and professional support for vulnerable young people facing challenges with school, behaviour, emotional wellbeing, confidence, anxiety, SEMH needs or motivation.
            </p>
            <div className="actions">
              <a className="button white" href="#contact">Book a Free Parent Call <ArrowRight size={18} /></a>
              <a className="button outline" href="#services">View Services</a>
            </div>
          </div>

          <div className="glassCard">
            <h3>Support built on trust, structure and understanding.</h3>
            <Feature icon={<ShieldCheck />} text="Safeguarding-led practice" />
            <Feature icon={<GraduationCap />} text="Former specialist Head of School" />
            <Feature icon={<HeartHandshake />} text="Experience with SEMH, SEN and vulnerable learners" />
            <Feature icon={<Compass />} text="Positive role modelling, routine and guidance" />
          </div>
        </div>
      </section>

      <section className="wrap cards3">
        <InfoCard icon={<Users />} title="For Parents" text="Practical, calm support when your child is anxious, disengaged, angry, withdrawn or struggling to cope." />
        <InfoCard icon={<GraduationCap />} title="For Young People" text="Mentoring that builds trust, confidence, emotional regulation, motivation and positive choices." />
        <InfoCard icon={<Home />} title="Flexible Support" text="Sessions can be tailored around home, school, community or transition needs, depending on the young person." />
      </section>

      <section id="about" className="whiteSection">
        <div className="wrap twoCol">
          <div>
            <p className="eyebrow dark">About</p>
            <h2>Experienced support for complex young people and families.</h2>
            <p>I provide specialist private mentoring for young people who may be struggling with behaviour, school attendance, emotional wellbeing, confidence, motivation, anxiety or SEMH-related needs.</p>
            <p>My background combines over 20 years in education, including senior leadership within specialist provision, with a long military career built on leadership, discipline, resilience and mentoring.</p>
            <p>I understand that behaviour is often communication. My role is to build trust, understand the young person’s voice, and help them develop safer, more positive ways to manage challenge and move forward.</p>
          </div>
          <div className="panel">
            <h3>Professional background includes:</h3>
            <ul>
              <ListItem text="Former Head of School in specialist SEMH/SEN education" />
              <ListItem text="Experience supporting young people with EHCPs and complex presentations" />
              <ListItem text="Safeguarding, behaviour, parental liaison and multi-agency working" />
              <ListItem text="British Army senior leadership and mentoring background" />
              <ListItem text="Calm, boundaried and professional support for families" />
            </ul>
          </div>
        </div>
      </section>

      <section id="support" className="wrap support">
        <p className="eyebrow dark">Who I Support</p>
        <h2>Helping young people who are finding life, school or emotions difficult.</h2>
        <p className="lead">Every young person is different. Support is tailored around individual needs, family circumstances and the challenges being faced at home, in school or in the wider community.</p>
        <div className="gridList">
          {[
            "School refusal or reduced attendance",
            "Anxiety, low mood or low confidence",
            "Behavioural difficulties or emotional outbursts",
            "SEMH needs and vulnerability",
            "Young people at risk of exclusion",
            "Disengagement from education",
            "Difficulties with routine, boundaries or motivation",
            "Social isolation or poor self-esteem",
            "Families needing calm, practical guidance"
          ].map(item => <div className="tickCard" key={item}><CheckCircle size={20}/><span>{item}</span></div>)}
        </div>
      </section>

      <section id="services" className="darkSection">
        <div className="wrap">
          <p className="eyebrow">Services</p>
          <h2>Private mentoring shaped around the young person.</h2>
          <p className="lead light">Sessions are designed to build trust first, then develop confidence, emotional regulation, personal responsibility, resilience and positive direction.</p>
          <div className="cards3">
            <ServiceCard title="1:1 Youth Mentoring" text="Regular mentoring sessions focused on trust, confidence, emotional regulation, motivation, choices and personal development." />
            <ServiceCard title="School Re-engagement" text="Support for young people who are avoiding school, disengaged from learning, on reduced timetables or at risk of exclusion." />
            <ServiceCard title="Parent Support" text="Practical guidance for parents who need calm, experienced support in understanding behaviour, boundaries and next steps." />
          </div>
        </div>
      </section>

      <section className="whiteSection">
        <div className="wrap twoCol">
          <div>
            <p className="eyebrow dark">For Parents</p>
            <h2>You do not have to manage this alone.</h2>
            <p>Parenting a young person with emotional, behavioural or school-related difficulties can feel exhausting and isolating. Many parents feel judged, unheard or unsure where to turn next.</p>
            <p>My approach is non-judgemental, practical and grounded in real experience. I work alongside families to understand the young person’s needs, reduce pressure, and create a clearer way forward.</p>
          </div>
          <div className="panel">
            <h3>A free initial call can help us discuss:</h3>
            <ul>
              <ListItem text="What your child is currently struggling with" />
              <ListItem text="What has already been tried" />
              <ListItem text="What support may be suitable" />
              <ListItem text="How mentoring could be structured" />
              <ListItem text="Whether I am the right person to help" />
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="wrap contact">
        <div className="contactBox">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Book a free parent consultation call.</h2>
            <p>A short initial conversation gives you the chance to explain what is happening, ask questions, and decide whether mentoring may be the right support for your child.</p>
          </div>
          <div className="contactCard">
            <p><Phone size={20}/> Telephone: 07XXX XXXXXX</p>
            <p><Mail size={20}/> Email: info@youthmentoring.co.uk</p>
            <a className="button full" href="mailto:info@youthmentoring.co.uk">Send an Enquiry</a>
            <small>Safeguarding, consent, confidentiality and professional boundaries will be discussed before any mentoring work begins.</small>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap footerInner">
          <p>© {new Date().getFullYear()} Steff Dowle Mentoring. All rights reserved.</p>
          <p>Specialist mentoring for vulnerable young people and families.</p>
        </div>
      </footer>
    </div>
  )
}

function Feature({ icon, text }) {
  return <div className="feature">{icon}<span>{text}</span></div>
}

function InfoCard({ icon, title, text }) {
  return <div className="infoCard">{icon}<h3>{title}</h3><p>{text}</p></div>
}

function ListItem({ text }) {
  return <li><CheckCircle size={20}/><span>{text}</span></li>
}

function ServiceCard({ title, text }) {
  return <div className="serviceCard"><h3>{title}</h3><p>{text}</p></div>
}

createRoot(document.getElementById('root')).render(<App />)
