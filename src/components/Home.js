import React from 'react'
import  image1  from './about picture.png';
import image2 from './G.png';

const Home = () => {
  return (
    <div className='main'>
        <div className='content'>
       <img src={image1} width="450px" height='650px' /> 
       <div className='text'>
       WHY US?
       <div className='b-text'>We are the best company for your visit</div>
       <div>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
       </div>
      <div className='number'>
      
        <ul>
            <li className='year'>20+</li>
            <li>Years</li>
            <li>Experience</li>
        </ul>
       
       <div>
        <ul>
            <li className='year'>100+</li>
            <li>Happy</li>
            <li>Customer</li>
        </ul>
       </div>
       <div>
        <ul>
            <li className='year'>15+</li>
            <li>Choice</li>
            <li>of Sevices</li>
        </ul>
       </div>
       <div>
        <ul>
            <li className='year'>10+</li>
            <li>Professional</li>
            <li>Guides</li>
        </ul>
       </div>
       </div>
      </div>
    </div>
    <div className='slider'>
        Trending Destination
        <div className='circle'>
            <div className='pic1'></div>
            <div className='pic2'></div>
            <div className='pic3'></div>
            <div className='pic4'></div>
        </div>
    </div>
    <div className='landing'>
        <div className='green'>
            <div className='box'>
                <div className='word1'>Get Special Offers for Organizations</div>
                <div className='word2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                <div  className='btn'><button>Contact Us</button></div>
            </div>
            <div className='girl'>
                <img src={image2} width='840px' height='573px'/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home