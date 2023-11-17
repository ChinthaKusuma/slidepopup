// Write your code here
import Popup from 'reactjs-popup'

import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {item} = props
  const {thumbnailUrl, videoUrl} = item
  //   console.log(thumbnailUrl)
  return (
    <div>
      <Popup
        modal
        trigger={
          <img
            src={thumbnailUrl}
            alt="action"
            className="img123"
            alt="thumbnail"
          />
        }
        className="popup-content"
      >
        {close => (
          <>
            {/* <h1>one</h1> */}
            <button className="icon" onClick={close} data-testid="closeButton">
              <IoMdClose />
            </button>
            <ReactPlayer url={videoUrl} />
          </>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
