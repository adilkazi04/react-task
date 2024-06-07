import React from 'react'
import '../assets/style/style.css'
import card1 from '../assets/images/course1.png'

const Card = () => {
  return (
<section className="container mt">
  <h3 className="h3 mb" style={{textAlign: 'center'}}>Our Courses</h3>
  <div className="index-main-course">
    <div className="index-course">
      <img src={card1} alt />
      <div className="index-course__content">
        <h4 className="h6">FUNDAMENTAL OF MEMORY</h4>
        <span>Curriculum Includes</span>
        <p className="f">Sequence, Fundamentals Coding Blocks, Loops</p>
        <span className="p">₹ 9,599 /-</span>
        <button className="f">View details</button>
        <button className="f">Book Free trial</button>
      </div>
    </div>
    <div className="index-course">
      <img src={card1} alt />
      <div className="index-course__content">
        <h4 className="h6">FUNDAMENTAL OF MEMORY</h4>
        <span>Curriculum Includes</span>
        <p className="f">Sequence, Fundamentals Coding Blocks, Loops</p>
        <span className="p">₹ 9,599 /-</span>
        <button className="f">View details</button>
        <button className="f">Book Free trial</button>
      </div>
    </div>
    <div className="index-course">
      <img src={card1} alt />
      <div className="index-course__content">
        <h4 className="h6">FUNDAMENTAL OF MEMORY</h4>
        <span>Curriculum Includes</span>
        <p className="f">Sequence, Fundamentals Coding Blocks, Loops</p>
        <span className="p">₹ 9,599 /-</span>
        <button className="f">View details</button>
        <button className="f">Book Free trial</button>
      </div>
    </div>
  </div>
</section>

  )
}

export default Card