import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'bootstrap';
import { deleteVideo, saveHistory } from '../service/allAPI';





function VideoCard({displayData,setDeleteVideoRespone}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    const {caption, youTubeUrl} =displayData
    const localTime = new Date()
    console.log(localTime)
    const formatedDate = localTime.toLocaleString()
    const videoHistory = {caption,youTubeUrl,formatedDate}

    try {
      await saveHistory(videoHistory)
    } catch (error) {
      console.log(error)
    }
    setShow(true);
}

  const handleRemoveVideo=async(videoId)=>{
    try{
      const result = await deleteVideo(videoId)
      console.log(result);
      setDeleteVideoRespone(result.data)
      

    }
    catch(err){
      console.log(err);
      
    }
  }

  return (
    <>
      <Card >
      <Card.Img onClick={handleShow} style={{height:'180px'}} variant="top" src={displayData?.imageUrl} />
      <Card.Body className='d-flex align-items-center justify-content-between '>
        <h5>{displayData?.caption}</h5>
        <button onClick={()=>handleRemoveVideo(displayData?.id)} className='btn'><i className='fa-solid fa-trash' style={{color:'red',fontSize:'20px'}}></i></button>
        
       
       
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="377" src={`${displayData.youTubeUrl}?autoplay=1`}title="Illuminati|Aavesham|Jithu Madhavan|Fahadh Faasil|Sushin Shyam,Dabzee,Vinayak| Nazriya|Anwar Rasheed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
      
      </Modal>
    
    </>
  )
}

export default VideoCard
