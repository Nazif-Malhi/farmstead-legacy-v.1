import React, { useState } from "react";
import NavbarHeader2 from "../navbar/NavbarHeader2";
import Home from "../layouts/Home";
const PestDetectionPage=()=> {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  
    return (
        <>
             {/* <NavbarHeader2   /> */}
             <div style={{paddingTop:'100px'}}>
                {/* <Container fluid>

                </Container> */}
                <h2>Add Image:</h2>
                <input type="file" onChange={handleChange} />
                <img alt='sample' src={file}  />
  
            </div>
        </>
        
  
    );
}
  
export default PestDetectionPage;