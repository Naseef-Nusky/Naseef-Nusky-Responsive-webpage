import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div>
        <div className='container1'>
          <img
            src='/Images/Logo.png'
            alt='Logo'
            className='Logo'
          />
          <br/>
        </div>
        <div className="text">
          <p>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
        </div>
        </div>
        <div className='container2'>
            <h1>Our Technologies</h1>
            <ul>
                <li>ReactJS</li>
                <li>Gatsby</li>
                <li>NextJS</li>
                <li>NodeJS</li>
                <li>GraphQL</li>
                <li>Laravel</li>
            </ul>
        </div>
        <div className='container3'>
        <h1>Our Services</h1>
            <ul>
                <li>Social media Marketing</li>
                <li>Web & Mobile App Development</li>
                <li>Data & Analytics</li>
                <li>Google Marketing solutions</li>
                <li>Search Engine Optimization</li>
            </ul>
        </div>
    </div>
    

  )
}

export default Footer