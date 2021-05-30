import React from 'react';
import './index.css';

import './PersonCard.scss'


const PersonCard = ({item}) => {
  
    

    
    
    return (
          
        <div >  

                <div class="frame">
                  <div class="center">
                    
                    <div class="profile">
                      <div class="image">
                        <div class="circle-1"></div>
                        <div class="circle-2"></div>
                        <img src="https://image.shutterstock.com/z/stock-vector-template-social-media-instagram-icon-avatar-frame-mockup-dark-circle-with-colorful-frame-for-photo-1519856489.jpg" width="70" height="70" alt="profile"/>
                      </div>
                      
                      <div class="name">{item.name}</div>
                      <div class="job">{item.gender}</div>
                      
                      <div class="actions">
                        <button class="btn">
                              <a target="_blank" href={item.films[0]} >Films</a>
                        </button>
                        <button class="btn">
                              <a target="_blank" href={item.starships[0]} >Starships</a>
                        </button>
                      </div>
                    </div>
                    
                    <div class="stats">
                      <div class="box">
                        <span class="value">{item.birth_year}</span>
                        <span class="parameter">Birth-Year</span>
                      </div>
                      <div class="box">
                        <span class="value">{item.mass}</span>
                        <span class="parameter">Mass</span>
                      </div>
                      <div class="box">
                        <span class="value">{item.height}</span>
                        <span class="parameter">Height</span>
                      </div>
                      
                    </div>
                  </div>
                </div>
           
               

        </div>
    )
}

export default PersonCard;