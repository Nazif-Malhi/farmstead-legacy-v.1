import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
// GrFacebookOption
import { GrFacebookOption} from 'react-icons/gr';
import { SiTwitter,SiGoogle} from 'react-icons/si';
import { FiInstagram} from 'react-icons/fi';


export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted' style={{ paddingTop:'1px'}}>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                FarmStead
              </h6>
              <p>
              Farming isn’t something that can be taught. Each plant tells its own story that has to be read repeatedly.
              </p>
              <section className='d-flex justify-content-center justify-content-lg-between p-4 border-top'>
                <div>
                    <a href='#!' className='me-4 text-reset'>
                        <GrFacebookOption/>
                    </a>
                    <a href='#!' className='me-4 text-reset'>
                        <SiTwitter/>
                    </a>
                    <a href='#!' className='me-4 text-reset'>
                        <SiGoogle />
                    </a>
                    <a href='#!' className='me-4 text-reset'>
                        <FiInstagram />
                    </a>
                    
                    </div>
                </section>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Fertilizer
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Pesticides
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Watering Recommendation
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Crop Diseases Detection
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                KARACHI,  POSTAL CODE 74500, PAKISTAN
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@farmstead.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 92 000 000 00
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 92 000 000 00
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center  p-4' style={{ backgroundColor: 'rgb(32 158 46)',color: 'white',opacity: 0.83 }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          FarmStead.com
        </a>
      </div>
    </MDBFooter>
  );
}