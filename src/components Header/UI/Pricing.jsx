import React from 'react'
import '../../styles/pricing.css'

const Pricing = () => {
  return (
    <section id='price'>
        <div className="container">
            <div className="pricing__top">
                <h2 className="section__title">Gym <span className="highlights">Pricing</span>Plan</h2>
                <p>Opens soon! No contract, no stress.<br/> Join The Gym Group for just £14.99 p/m.<br/> We're with you at The Gym Group with<br/> our low-cost, no-contract gyms.</p>
            </div>

            {/* pricing wrapper */}
        <div className="pricing__wrapper">
            <div className="pricing__item">
                <div className="pricing__card-top">
                    <h2 className='section__title'>Regular Member</h2>
                    <h2 className="pricing">$50 <span>/month</span></h2>
                </div>

                <div className="services">
                    <ul>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> Unlimited access to the gym</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> Customer support</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> Personal Trainer</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> Standard options</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> 5 Classes per week</li>
                    </ul>

                    <button className="register__btn">Join Now</button>
                </div>
            </div>

            <div className="pricing__item pricing__item-02">
                <div className="pricing__card-top">
                    <h2 className='section__title'>Premium Member</h2>
                    <h2 className="pricing">$70 <span>/month</span></h2>
                </div>

                <div className="services">
                    <ul>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> Unlimited access to the gym</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> Customer support</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> Personal Trainer</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> Standard options</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> 5 Classes per week</li>
                    </ul>

                    <button className="register__btn">Join Now</button>
                </div>
            </div>

            <div className="pricing__item">
                <div className="pricing__card-top">
                    <h2 className='section__title'>Standard Member</h2>
                    <h2 className="pricing">$100 <span>/month</span></h2>
                </div>

                <div className="services">
                    <ul>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> Unlimited access to the gym</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> Customer support</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> Personal Trainer</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> Standard options</li>
                        <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> 5 Classes per week</li>
                    </ul>

                    <button className="register__btn">Join Now</button>
                </div>
            </div>
        </div>

        </div>
    </section>
  )
}

export default Pricing