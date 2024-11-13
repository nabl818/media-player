import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getAllVideos } from '../service/allAPI'



function View({addVideoResponse}) {

  const [allVideos, setAllVideos] = useState([])
  const [deleteVideoResponse,setDeleteVideoRespone]=useState("")


  useEffect(() => {

    getVideos()

  }, [addVideoResponse,deleteVideoResponse])



  console.log(allVideos);


  const getVideos = async () => {

    try {
      const result = await getAllVideos()
      console.log(result.data);
      setAllVideos(result.data)

    }
    catch (err) {
      console.log(err);

    }
  }



  return (
    <>


      <Row className="border border-3 p-3 ms-2" >
        {
          allVideos.length > 0 ?

            allVideos?.map(video => (
              <Col key={video?.id} lg={4} md={6} sm={12}>



                <VideoCard displayData={video} setDeleteVideoRespone={setDeleteVideoRespone} />

              </Col>
            ))
            :
            <div className='text-danger fs-3 fw-bold'>Nothing To Display</div>
        }


      </Row>


    </>


  )
}

export default View