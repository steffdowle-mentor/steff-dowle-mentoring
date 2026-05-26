
import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <div style={{padding: '40px', fontFamily: 'Arial'}}>
      <h1>Steff Dowle Mentoring</h1>
      <p>
        Private mentoring and support for vulnerable young people,
        specialising in behaviour, SEMH, confidence building,
        education engagement and personal development.
      </p>

      <h2>About</h2>
      <p>
        Led by former Head of School and British Army veteran
        Steff Dowle, offering tailored mentoring for young people
        struggling with school, anxiety, behaviour or motivation.
      </p>

      <h2>Contact</h2>
      <p>Email: info@example.com</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
