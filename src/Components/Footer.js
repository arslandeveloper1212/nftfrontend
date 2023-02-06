import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'
import SendIcon from '@mui/icons-material/Send';

const Footer = () => {
  return (
    <div className="footer_background">
      <footer className="w-100 py-4 flex-shrink-0 custom_footer">
        <div className="container py-4">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6">
              <h5 className="h1 text-white">NFT.</h5>
              <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>

            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3">Social Media</h5>
              <ul className="list-unstyled text-muted">
                <li><Link to="#" className='text-white text-muted text-decoration-none'>Facebook</Link></li>
                <li><Link to="#" className='text-white text-muted text-decoration-none'>Behance</Link></li>
                <li><Link to="#" className='text-white text-muted text-decoration-none'>Github</Link></li>
                <li><Link to="#" className='text-white text-muted text-decoration-none'>NFT collection</Link></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3">Quick links</h5>
              <ul className="list-unstyled text-muted">
                <li><Link to="#" className='text-white text-muted text-decoration-none'>Home</Link></li>
                <li><Link to="#" className='text-white text-muted text-decoration-none'>Collection</Link></li>
                <li><Link to="#" className='text-white  text-muted text-decoration-none'>RoadMap</Link></li>
                <li><Link to="#" className='text-white text-muted text-decoration-none'>Community</Link></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5 className="text-white mb-3">Newsletter</h5>
              <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
              <form action="#">
                <div className="input-group mb-3">
                  <input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <button className="btn_1_sendicon"  id="button-addon2" type="button"><SendIcon /></button>
                </div>
              </form>
            </div>
            <p className="small text-muted mb-0 text-center">&copy; Copyrights. All rights reserved. <Link className="text-white text-decoration-none" to="">Arslandeveloper.com</Link></p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
