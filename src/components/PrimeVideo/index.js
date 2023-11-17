// Write your code here
import {Component} from 'react'
import MovieSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  state = {list1: [], list2: []}

  componentDidMount() {
    this.slider()
  }

  slider = () => {
    const {moviesList} = this.props
    this.setState({
      list1: moviesList.filter(each => each.categoryId === 'ACTION'),
      list2: moviesList.filter(each => each.categoryId === 'COMEDY'),
    })
  }

  render() {
    const {list1, list2} = this.state

    return (
      <div className="bgContainer1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          className="img1"
          alt=" prime video"
        />
        <div className="con1">
          <h1 className="h11">Action Movies</h1>
          <MovieSlider items={list1} />
        </div>
        <div className="con1">
          <h1 className="h11">Comedy Movies</h1>
          <MovieSlider items={list2} />
        </div>
      </div>
    )
  }
}
export default PrimeVideo
