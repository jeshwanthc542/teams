import {Component} from 'react'

import MatchCard from '../MatchCard'

export default class TeamCard extends Component {
  state: {blogsData: []}

  componentDidMount() {
    this.getMatchesData()
  }

  getMatchesData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const result = {
      name: data.name,
      id: data.id,
      teamImageUrl: data.team_image_url,
    }
    this.setState({blogsData: result})
  }

  render() {
    const {blogsData} = this.state

    return (
      <div className="container">
        {blogsData.map(item => (
          <MatchCard blogData={item} key={item.id} />
        ))}
      </div>
    )
  }
}
