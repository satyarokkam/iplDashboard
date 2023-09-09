import {Component} from 'react'

import LatestMatch from '../LatestMatch'

import './index.css'

class TeamMatches extends Component {
  state = {
    matchDetails: {},
    teamName: '',
  }

  componentDidMount() {
    this.getTeamMatchesList()
  }

  getTeamMatchesList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const fetchData = await fetch(` https://apis.ccbp.in/ipl/${id}`)
    const response = await fetchData.json()
    console.log(response)
    const formattedData = {
      teamBannerUrl: response.team_banner_url,
      latestMatchDetails: {
        competingTeam: response.latest_match_details.competing_team,
        competingTeamLogo: response.latest_match_details.competing_team_logo,
        date: response.latest_match_details.date,
        firstInnings: response.latest_match_details.first_innings,
        id: response.latest_match_details.id,
        manOfTheMatch: response.latest_match_details.man_of_the_match,
        matchStatus: response.latest_match_details.match_status,
        result: response.latest_match_details.result,
        secondInnings: response.latest_match_details.second_innings,
        umpires: response.latest_match_details.umpires,
        venue: response.latest_match_details.venue,
      },
      recentMatches: response.recent_matches,
    }
    this.setState({matchDetails: formattedData, teamName: id})
  }

  render() {
    const {matchDetails, teamName} = this.state
    const {teamBannerUrl} = matchDetails
    console.log(matchDetails)
    const teamBgc = `${teamName}-bgc`
    console.log(teamBgc)
    return (
      <div className={`team-match-container ${teamBgc}`}>
        <img src={teamBannerUrl} alt="team banner" className="banner" />
        <div className="latest-match-container">
          <p className="description">Latest Match</p>
          <LatestMatch latestMatchInfo={matchDetails.latestMatchDetails} />
        </div>
      </div>
    )
  }
}

export default TeamMatches
