import React from 'react'
import '../../styles/start.css'
import trainerImg from '../../assets/img/trainer.png'

const Start =()=> {
  return (
   <section id='classes'>
    <div className="container">
        <div className="start__wrapper">
            <div className="start__img">
                <img src={trainerImg} alt="" />
            </div>

            <div className="start__content">
                <h2 className="section__title">
                    Ready to make a <span className='highlights'>change?</span>
                </h2>
                <p>Do you wish you could change something about your life right now? I'm here to argue that change can happen in an instant.I believe, that through fitness you can change not only your body but your whole life! Let's do it together!</p>

                <button className="register__btn">Get Started</button>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Start