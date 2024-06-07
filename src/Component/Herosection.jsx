
import React from 'react'
import timetbale from "../assets/images/timetable.png"
import heroimg from "../assets/images/hero.png"
import graph from '../assets/images/graph.png'
const Herosection = () => {

  return (
    <>
<section className="index-hero-bg">
<div className='container'>
<div className="index-hero-grid">
      <div>
        <h3 className="h3">Online Education Courses</h3>
        <h2 className="h4">''For Everyone''</h2>
        <img src={timetbale} alt="time table"/>
      </div>
      <div>
        <img src={heroimg } alt />
      </div>
    </div>
</div>
  </section>

  <section className="index-main-bg">
  <div className="container">
    <div className="index-main">
      <img src={graph} alt />
      <div>
        <h2 className="h3 mb"> How do we prepare our kids for the better future ?</h2>
        <hr />
        <p className="p">Here is a better way to build the mindsets of our kids to lead businesses of the future. This course
          has been carefully designed to enrich students with the skills needed for them to thrive as creative
          thinkers, great leaders, public speakers and leading life like “Entrepreneurs”.</p>
        <br />
        <p className="p">Each module of the course contains fun &amp; engaging assignments that help our students learn the
          subject matter better through practical implementation. This also helps schools and parents assess
          improvement and see tangible results of the student’s learning.</p>
      </div>
    </div>
  </div>
</section>





  </>
  )


}

export default Herosection