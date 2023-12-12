import React from 'react'
import '../../styles/exercises.css'
import lunges from '../../assets/img/lunges.png'
import yoga from '../../assets/img/yoga-pose.png'
import extended from '../../assets/img/extended.png'

const Exercises=()=> {
  return (
   <section id='schedule'>
    <div className="container exercise__container">
        <div className="exercise__top">
            <h2 className="section__title">Benefits of <span className='highlights'>Excersise</span></h2>
            <p>Exercise is intentional physical activity to enhance or maintain fitness and overall health.<br/>It is performed for various reasons,including weight loss or maintenance,to aid growth<br/>and improve strength, develop muscles and the cardiovascular system, hone athletic skills,<br/> improve health, or simply for enjoyment.</p>
        </div>

        {/* exercises */}

        <div className="exercise__wrapper">
            <div className="exercise__item">
                <span className="exercise__icon"><img src={lunges} alt="" /></span>
                <div className="exercise__content">
                    <h4>Healthy Life</h4>
                    <p>Your health is one of the most important things in your life. It affects your physical, mental, and emotional well-being.</p>
                </div>
            </div>


            <div className="exercise__item">
                <span className="exercise__icon"><img src={yoga} alt="" /></span>
                <div className="exercise__content">
                    <h4>Increased Flexibility</h4>
                    <p>Better flexibility may: Improve your performance in physical activities. Decrease your risk of injuries. Help your joints.</p>
                </div>
            </div>


            <div className="exercise__item">
                <span className="exercise__icon"><img src={extended} alt="" /></span>
                <div className="exercise__content">
                    <h4>Reducing blood prssure</h4>
                    <p>regular physical activity can bring blood pressure down to safer lev that can help walking ,jogging,cycling,swimming dance</p>
                </div>
            </div>

        




        </div>
    </div>
   </section>
  )
}

export default Exercises