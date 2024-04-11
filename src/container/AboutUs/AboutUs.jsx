import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => { 
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
      <div className='app__aboutus-overlay flex__center'>
        <img src={images.G} alt="g letter" />
      </div>

      <div className='app__aboutus-content flex__center'>
        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt="about_spoon"  className='spoon__img'/>
          <p className='p__opensans'>
            At "On The Rocks Kenya," 
            we're more than just a cocktail bar – we're a destination where passion meets purpose. 
            Founded on the belief that great drinks are made even better when shared with friends, 
            our mission is to craft unforgettable experiences one cocktail at a time. 
          </p>
          <br/>
          <button type='button' className='custom__button'>Know More</button>
        </div>

        <div className='app__aboutus-content_knife flex__center'>
          <img src={images.knife} alt="about_knife" />
        </div>
        <div className='app__aboutus-content_history'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt="about_spoon"  className='spoon__img'/>
          <p className='p__opensans'>
          Cheers to our humble beginnings! Founded in 2019, 'On The Rocks Kenya' sprang to life in Nairobi, where our founder, Douglas Ochami, poured his heart into every concoction. Let's raise a glass to turning drinks into cherished experiences.
          </p>
          <br/>
          <button type='button' className='custom__button'>Know More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
