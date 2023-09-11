import './index.css'

const LatestMatch = props => {
  const {latestMatchDetailsInfo} = props
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
  } = latestMatchDetailsInfo

  return (
    <div className="latest-match-details-container">
      <div className="match-details">
        <p>{competingTeam}</p>
        <h1>{date}</h1>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img src={competingTeamLogo} alt="Example response" />
      <div>
        <h1>First Innings</h1>
        <p>{firstInnings}</p>
        <h1>Second Innings</h1>
        <p>{secondInnings}</p>
        <h1>Man Of The Match</h1>
        <p>{manOfTheMatch}</p>
        <h1>Umpires</h1>
        <p>{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
