import React, { useState } from "react";
// import NavbarHeader2 from "../navbar/NavbarHeader2";
import Home from "../layouts/Home";

import { Row, Col, Container } from "react-bootstrap";
import './pestDetectPage.css';
import back2 from "./all3.png";
import side from "./back.png";
import defaultImage from "./images.png";





const PestDetectionPage=()=> {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    // const image='./pestback.jpg';
    // style={{backgroundColor:URL('../../assets/images/pestPage/pestback.jpg')}}
    return (
       <>
       <div className='side-image'>
        <img src={side}/>
       </div>
       <div className='bg-color'></div>
       
       
        <Container fluid className="pest-container">
            <Row className="row">
            <Col className="col-set">
                    <div  className="section-detect">
                        <h1>Secure Your Field From Pest Attact</h1>
                        <h4>Upload Image here</h4>
                        <input type="file" onChange={handleChange} />
                        {/* <img alt='sample' src={file}  /> */}
   
                    </div>

                   
                </Col>
                <Col>
                    <div  className="bg-cover">
                    {/* <h1>Secure Your Field From Pest Attact</h1> */}
                        <img className="bg-image" width={700} src={back2} />
                        
                    </div>
                </Col>
               
            </Row>
            <Row>
                <Col>
                <h1 style={{display: 'flex',justifyContent: 'center',paddingTop: '90px'}}>Output</h1>
                <div className="results">
                    
                    
                    <img alt='sample' src={!file? defaultImage : file}  width={400} />
                </div>
                    
                </Col>
            </Row>
        </Container>
        {/* // <div>
        //      <div  className="bg-cover"></div>
        //         <div  className="section-detect">
        //             <h2>Add Image:</h2>
        //             <input type="file" onChange={handleChange} />
        //             <img alt='sample' src={file}  />
   
        //     </div>

              
             
        // </div> */}
       </> 
  
    );
}
  
export default PestDetectionPage;