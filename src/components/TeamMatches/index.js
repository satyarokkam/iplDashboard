import Loader from 'react-loader-spinner'
import {Component} from 'react'

import LatestMatch from '../LatestMatch'

import './index.css'

class TeamMatches extends Component {
  state = {
    matchDetails: {},
    teamName: '',
    isLoading: false,
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

  getTeamMatchesList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const fetchData = await fetch(` https://apis.ccbp.in/ipl/${id}`)
    const response = await fetchData.json()
    console.log(response)
    const formattedData = {
      teamBannerUrl: response.team_banner_url,
      latestMatchDetails: this.getLatestMatch(response.latest_match_details),
      recentMatches: response.recent_matches,
    }
    this.setState({matchDetails: formattedData, teamName: id, isLoading: false})
  }

  render() {
    const {matchDetails, teamName, isLoading} = this.state
    const {teamBannerUrl} = matchDetails
    console.log(matchDetails)
    const teamBgc = `${teamName}-bgc`
    console.log(teamBgc)
    return (
      <div>
        {isLoading ? (
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        ) : (
          <div className={`team-match-container ${teamBgc}`}>
            <img src={teamBannerUrl} alt="team banner" className="banner" />
            <div className="latest-match-container">
              <p className="description">Latest Match</p>
              <LatestMatch
                latestDetailsMatch={matchDetails.latestMatchDetails}
              />
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
