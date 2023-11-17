// Write your code here
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MovieSlider = props => {
  const {items} = props
  //   console.log(items)

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
  }

  return (
    <>
      <Slider {...settings}>
        {items.map(each => (
          <MovieItem item={each} key={each.id} />
        ))}
      </Slider>
    </>
  )
}
export default MovieSlider
