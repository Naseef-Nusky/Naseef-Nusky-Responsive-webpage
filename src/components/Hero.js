import React from 'react'

const Hero = () => {
  return (
    <div>
    <div className='hero-container'>
      <img
        src='/Images/Hero Image.png'
        alt='Image1'
        className='hero-image'
      />
        <div className='hero-content'>
        <div className='content-box'>
          <h1>We crush your competitors, goals, and sales records - without the B.S.</h1>
          <button>GET FREE CONSULTATION</button>
        </div>
      </div>
    </div>
    <div className='content-box2 md:flex md:items-center'>
        <div>
          <img
            src='/Images/image 2.png'
            alt='Image2'
            className='image 2'
          />
        </div>
        <div className="text ">
          <h1>Web & Mobile App Development</h1>
          <p>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks that tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
          <button>GET FREE CONSULTATION</button>
        </div>
      </div>
      <div className='content-box2 md:flex md:items-center'>
        <div className="text">
          <h1>Digital Strategy Consulting</h1>
          <p>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
          </p>
          <button>LEARN MORE</button>
        </div>
        <div>
          <img
            src='/Images/image 1.png'
            alt='Image2'
            className='image 2'
          />
        </div>
      </div>
    </div>
  );
}

export default Hero