import TeamCard from './components/TeamCard'

import './App.css'

const App = () => (
  <div className="bg-container">
    <div className="logo-dashboard">
      <div className="logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          alt="ipl logo"
          className="ipl"
        />
      </div>
      <div>
        <h1>IPL Dashboard</h1>
      </div>
      <TeamCard />
    </div>
  </div>
)

export default App
