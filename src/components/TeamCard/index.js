import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, teamImageUrl, id} = teamDetails

  return (
    <Link to={`/ipl/${id}`} className="nav-link">
      <li className="list-container">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <h1 className="team-name">{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
