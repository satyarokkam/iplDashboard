import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    teamsList: [],
    isLoading: false,
  }

  componentDidMount() {
    this.setState({isLoading: true})
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const fetchData = await fetch('https://apis.ccbp.in/ipl')
    const responseData = await fetchData.json()
    const updatedList = responseData.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    console.log(updatedList)
    this.setState({teamsList: updatedList, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <div className="main-container">
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <div className="ipl-dashboard-container">
              <img
                className="ipl-logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1 className="main-heading">IPL Dashboard</h1>
            </div>
            <ul className="teams-container">
              {teamsList.map(eachTeam => (
                <TeamCard teamDetails={eachTeam} key={eachTeam.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
