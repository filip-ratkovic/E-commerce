import React from 'react'
import chair from "../photo/chair.png"
import chairy from "../photo/chairy.png"
import sofa from "../photo/sofa.png"


function Home() {
  return (

    <main className="home-main">
      <div className="box-container">
        <div className="box">

        </div>
        <div className="image-conteiner">
<img className="image one" src={chair} alt="blue chair" />
<img className="image two" src={chairy} alt="yellow chair" />
<img className="image tree" src={sofa} alt="sofa" />
</div>
      </div>


    </main>
  )
}

export default Home