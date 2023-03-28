import './index.css'

const MatchCard = props => {
  const {blogData} = props
  const {id, name, teamImageUrl} = blogData

  return (
    <div>
      <li className="team-card-container">
        <img src={teamImageUrl} alt={name} />
        <p>{name}</p>
      </li>
    </div>
  )
}

export default MatchCard
