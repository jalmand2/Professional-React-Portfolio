import React from 'react';

const Portfolio = () => {
    return (
        <div class="container row container-fluid projectBg " style={{margin: 'auto', alignContent: 'flex-start', justifyContent:'center'}}>
        <div class="card" style={{width: '18rem'}}>
        <img class="card-img-top" src="/images/waves.png" alt="Waves over Work"></img>
        <div class="card-body">
          <h5 class="card-title text-center">Waves over Work</h5>
          <p class="card-text text-center">This was a collaborative, frontend project.</p>
          <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <a href="https://github.com/MariaYConstanza/beach-day" class="btn btn-secondary">Github</a>
          <a href="https://mariayconstanza.github.io/beach-day/" class="btn btn-secondary">Link</a>
          </div>
        </div>
      </div>
      <div class="card" style={{width: '18rem'}}>
        <img class="card-img-top" src="/images/animetracker.png" alt="Anime Tracker"></img>
        <div class="card-body">
          <h5 class="card-title text-center">Anime Tracker</h5>
          <p class="card-text text-center">This was a collaborative, fullstack project. </p>
          <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <a href="https://github.com/Tab-Y/anime-tracker" class="btn btn-secondary">Github</a>
          <a href="https://anime-tracker-11-2022.herokuapp.com/" class="btn btn-secondary">Link</a>
          </div>
        </div>
      </div>
      <div class="card" style={{width: '18rem'}}>
        <img class="card-img-top" src="/images/notetaker.png" alt="Note Taker"></img>
        <div class="card-body">
          <h5 class="card-title text-center">Note Taker</h5>
          <p class="card-text text-center">A backend-focused application using Express.js.</p>
          <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <a href="https://github.com/jalmand2/Note-Taker" class="btn btn-secondary">Github</a>
          <a href="https://murmuring-anchorage-44494.herokuapp.com/" class="btn btn-secondary">Link</a>
          </div>
        </div>
      </div>
      <div class="card" style={{width: '18rem'}}>
        <img class="card-img-top" src="/images/workscheduler.jpg" alt="Work Scheduler"></img>
        <div class="card-body">
          <h5 class="card-title text-center">Work Scheduler</h5>
          <p class="card-text text-center">A calendar application using HTML and CSS via jQuery.</p>
          <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <a href="https://github.com/jalmand2/Work-Day-Scheduler" class="btn btn-secondary">Github</a>
          <a href="https://jalmand2.github.io/Work-Day-Scheduler/" class="btn btn-secondary">Link</a>
          </div>
        </div>
      </div>
      <div class="card" style={{width: '18rem'}}>
        <div class="card-img-top" src="/images/workscheduler.jpeg" alt="Work Scheduler"></div>
        <div class="card-body">
          <h5 class="card-title text-center">App</h5>
          <p class="card-text text-center">A simple calendar application featuring HTML and CSS powered by jQuery.</p>
          <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <a href="https://github.com/Tab-Y/anime-tracker" class="btn btn-secondary">Github</a>
          <a href="https://github.com/Tab-Y/anime-tracker" class="btn btn-secondary">Link</a>
          </div>
        </div>
      </div>
      <div class="card" style={{width: '18rem'}}>
        <div class="card-img-top" src=".../100px180/" alt="Card image cap"></div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="https://github.com/Tab-Y/anime-tracker" class="btn btn-secondary">Github</a>
        </div>
      </div>
      </div>
    );
};

export default Portfolio;