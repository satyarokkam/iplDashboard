import Loader from 'react-loader-spinner'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    matchDetails: {},
    teamName: '',
    isLoading: false,
    recentMatchesList: [],
  }

  componentDidMount() {
    this.setState({isLoading: true})
    this.getTeamMatchesList()
  }

  getLatestMatch = data => ({
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    date: data.date,
    firstInnings: data.first_innings,
    id: data.id,
    manOfTheMatch: data.man_of_the_match,
    matchStatus: data.match_status,
    result: data.result,
    secondInnings: data.second_innings,
    umpires: data.umpires,
    venue: data.venue,
  })

  getRecentList = recentMatchData =>
    recentMatchData.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      id: each.id,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))

  getTeamMatchesList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const fetchData = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const response = await fetchData.json()
    console.log(response)
    const formattedData = {
      teamBannerUrl: response.team_banner_url,
      latestMatchDetails: this.getLatestMatch(response.latest_match_details),
      recentMatches: this.getRecentList(response.recent_matches),
    }

    this.setState({
      matchDetails: formattedData,
      teamName: id,
      isLoading: false,
      recentMatchesList: formattedData.recentMatches,
    })
  }

  render() {
    const {matchDetails, teamName, isLoading, recentMatchesList} = this.state
    const {teamBannerUrl} = matchDetails
    const teamBgc = `${teamName}-bgc`
    console.log(recentMatchesList)
    return (
      <div>
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className={`team-match-container ${teamBgc}`}>
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team banner"
            />
            <div className="latest-match-container">
              <LatestMatch {...matchDetails.latestMatchDetails} />
              <ul className="unOrder-List-Match-Card">
                {recentMatchesList.map(eachMatch => (
                  <MatchCard previousMatch={eachMatch} key={eachMatch.id} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
