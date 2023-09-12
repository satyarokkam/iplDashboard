import './index.css'

const LatestMatch = props => {
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = props

  return (
    <div className="latest-match-details-container">
      <p className="description">Latest Match</p>
      <div className="match-details">
        <div className="match-info">
          <p className="competing-team">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result"> {result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-logo"
        />
        <div className="previous-match-info">
          <p className="headings">First Innings</p>
          <p className="innings">{firstInnings}</p>
          <p className="headings">Second Innings</p>
          <p className="innings">{secondInnings}</p>
          <p className="headings">Man Of The Match</p>
          <p className="innings">{manOfTheMatch}</p>
          <p className="headings">Umpires</p>
          <p className="innings">{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
