import React from 'react'
import '../../styles/footer.css'
import logo from '../../assets/img/dumble.png'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className='footer'>
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__box">
                <div className="logo">
                    <div className="logo__img"><img src={logo} alt="" /></div>
                    <h2>FitnessFirst</h2>
                </div>
                <p>mprove your brain health, help manage weight,<br/> reduce the risk of disease, strengthen bones and muscles,<br/> and improve your ability to do everyday activities.</p>
                </div>

                <div className="footer__box">
                    <h4 className="footer__title">Company</h4>

                    <ul className='footer__links'>
                        <li><a href="#">Our Programs</a></li>
                        <li><a href="#">Our Plans</a></li>
                        <li><a href="#">Become a member</a></li>
                    </ul>
                </div>

                
                <div className="footer__box">
                    <h4 className="footer__title">Quick Links</h4>

                    <ul className='footer__links'>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>

                <div className="footer__box">
                    <h4 className="footer__title">Quick Links</h4>

                    <ul className='footer__links'>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
            </div>
            <p className='copyright'>Copyright - {year} Developed by Saliieey. All right Reserved.  </p>
        </div>
    </footer>
  )
}

export default Footer