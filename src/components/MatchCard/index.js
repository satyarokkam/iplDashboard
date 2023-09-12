import './index.css'

const MatchCard = props => {
  const {previousMatch} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = previousMatch
  const addWinLossColor = matchStatus === 'Won' ? 'green-text' : 'red-text'
  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        alt={`competing team${competingTeam}`}
        className="logo"
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={addWinLossColor}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
