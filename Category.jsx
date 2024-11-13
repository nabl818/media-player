import React, { useEffect } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, getAllCategory } from '../service/allAPI';





function Category() {

  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName]=useState("")
  const[allCategory,setAllCategory]=useState([])
  console.log(categoryName);
  console.log(allCategory);
  


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getCategory()
    
  }, [])
  

  const handleAddCategory = async () => {
    if (categoryName) {
      // api call

      try {
        await addCategory({ categoryName, allVideos:[] })
        handleClose()
        getCategory()
      } catch (error) {
        console.log(error);
      }

    }

      else{
         toast.warning("Enter the category name")
      } 

      
      
      }

      const getCategory=async()=>{
        try{
          const result=await getAllCategory()
          setAllCategory(result.data)
        }
        catch(error){
          console.log(error);
          
        }
      }
    
    
    return (

      <>

        <div className='d-flex justify-content-around'>
          <h3 className='text-info'>All Categories</h3>
          <button onClick={handleShow} className='btn btn-warning fs-5 rounded-circle ms-3 fw-bolder'>+</button>
        </div>
          
         {
          allCategory.length>0?
           allCategory.map(category=>(

            <div className='container-fluid mt-3'>

            <div className='border border-light border-3 rounded p-3 mb-3'>
              <div className='d-flex justify-content-between'>
                <h5>{category.categoryName}</h5>
                <button className='btn'><i class="fa-solid fa-trash" style={{color:'red'}}></i></button>

              </div>

            </div>

           
          </div>

           ))
           :
           <div className='text-danger fw-bold fs-3'>Category not added yet</div>
          }

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title className='text-warning'>Category Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='p-3 border border-3 border-dark rounded'>
              <FloatingLabel controlId="CategoryName" label="Category">
                <Form.Control onChange={(e)=>setCategoryName(e.target.value)} type="text" placeholder="Category" />
              </FloatingLabel>

            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary"onClick={handleClose}>
              Cancel
            </Button>
            <Button  variant="info" onClick={handleAddCategory}>Add</Button>
          </Modal.Footer>
        </Modal>
        <ToastContainer position="top-right" autoClose={3000} theme="colred"/>

      </>
    
    )
  }

export default Category




