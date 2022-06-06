import React , {useState} from 'react'
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import YouTube, { YouTubeProps } from 'react-youtube';



const MovieTrailer = ({trailer}) => {


    const [lgShow, setLgShow] = useState(false);

    console.log("trailer" , trailer)
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,
      },
    };


    return (
      <>
        <Button onClick={() => setLgShow(true)}>Large modal</Button>
  
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Large Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <YouTube videoId={trailer?.data?.results[1]?.key} opts={opts}  />;
          </Modal.Body>
        </Modal>
      </>
    );
  
}

export default MovieTrailer