import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <div className='container mt-5 w-100' style={{ height: '300px' }}>

            <div className="row">
                <div className='col-lg-5'>
                    <h5> <i class="fa-solid fa-music"></i>
                        Media Player</h5>

                    <p className='mt-5' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae totam distinctio, fugit atque iste nisi mollitia. Quisquam voluptatem est sequi distinctio! Esse deserunt error animi magni, officia nostrum officiis aut?</p>
                    <p>code is licenced by Luminar</p>
                    <p>currently v5</p>

                </div>
                <div className='col-lg-2 text-center'>
                    
                    <h5 className='mb-5'>Links</h5>
                    <div><Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing</Link></div>
                   <div><Link to={'home'} style={{textDecoration:'none',color:'white'}}>Home</Link></div>
                   <div><Link to={'history'} style={{textDecoration:'none',color:'white'}}>Watch history</Link></div>


                </div>
                <div className='col-lg-2'>
                    <h5 className='mb-5'>Guides</h5>

                    <div><Link to={'/'} style={{textDecoration:'none',color:'white'}}>React</Link></div>
                   <div><Link to={'home'} style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link></div>
                   <div><Link to={'history'} style={{textDecoration:'none',color:'white'}}>React Router</Link></div>

                </div>
                <div className='col-lg-3'>
                          <h5>Contact us</h5>
                          <div className='d-flex justify-content-between'>
                          <input className='form-control' type="text" placeholder='enter email'/>
                          <button className='btn btn-info ms-3'><i class="fa-solid fa-arrow-right"></i></button>
    
                     </div>
                     <div className='d-flex justify-content-between '>
                         <a href="" style={{fontSize:'20px',color:'white'}}><i class="fa-brands fa-facebook"></i></a>
                         <a href="" style={{fontSize:'20px',color:'white'}}><i class="fa-brands fa-twitter"></i></a>
                         <a href="" style={{fontSize:'20px',color:'white'}}><i class="fa-brands fa-instagram"></i></a>
                         <a href="" style={{fontSize:'20px',color:'white'}}><i class="fa-brands fa-linkedin"></i></a>
                         <a href="" style={{fontSize:'20px',color:'white'}}><i class="fa-brands fa-github"></i></a>
                         <a href="" style={{fontSize:'20px',color:'white'}}><i class="fa-solid fa-phone"></i></a>

                     </div>
                </div>

            </div>
            <p className='text-center mt-4'>CpoyRight @july 2024 Batch,media Player.Build with react</p>

        </div>
    )
}

export default Footer