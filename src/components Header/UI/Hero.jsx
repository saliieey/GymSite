import React from 'react'
import heroImg from '../../assets/img/gym-02.png'
import dumbleicon from '../../assets/img/dumble.png'
import '../../styles/hero.css'


const Hero=()=> {
  return(

     <section id='hero'>
        <div className="container">
            <div className="hero__wrapper">

                {/* hero content */}
                <div className="hero__content">
                    <h2 className='section__title'>Exercise is the key to a <span className="highlights">Healthy</span> Lifestyle</h2>
                    <p>Health is wealth and is more important than money.<br/> We should exercise regularly to stay healthy.</p>

                    <div className="hero__btns">
                        <button className="register__btn">Get Started</button>
                        <button className="watch__btn"><span><i class="ri-play-fill"></i></span>Watch Video</button>
                    </div>
                </div>
                {/* hero img */}
                <div className="hero__img">
                    <div className="hero__img-wrapper">
                        <div className="box-01">
                            <div className="box-02">
                                <div className="box-03">
                                    <div className="box__img">
                                        <img src={heroImg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="heart__rate">
                            <h5>Heart Rate</h5>
                            <span><i class="ri-heart-pulse-fill"></i></span>
                            <h5>52567 BPM</h5>
                        </div>



                        <div className="gym__location">
                            <span><i class="ri-map-pin-2-fill"></i></span>
                            <h5>find a new <br/> gym near you </h5>
                        </div>


                        <div className="dumble__icon">
                            <img src={dumbleicon} alt="" />
                        </div>


                    </div>
                </div>
            </div>
        </div>
     </section>

     )
}

export default Hero