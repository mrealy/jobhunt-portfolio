import React from 'react';

const About = () => (
    <div className="container">
        <h2 id="about-header"> About me </h2>  
        <div className="row about-tile">           
            <div className="col-sm-6">
                <img className="cellist-scale" src="/img/cellist.jpg" alt="cellist" />  
            </div>
            <div className="col-sm-6">
                <p className="about-text"> In addition to being a developer, I'm a <a href="https://soundcloud.com/mike-realy" target="blank">musician </a>
                and private music instructor.  I'm tuning up my database skills to develop a large-scale website that will assist in lesson-planning.</p>
                <p className="about-text"> I listen to podcasts daily, my favs: <a href="https://www.codenewbie.org/podcast" target="blank">CodeNewbie</a>, <a href="https://spec.fm/podcasts/developer-tea" target="blank">Developer Tea</a>, <a href="http://frontendhappyhour.com/" target="blank">Front End Happy Hour</a>, <a href="http://www.fullstackradio.com/" target="blank">Full Stack Radio</a>, & <a href="https://learntocodewith.me/podcast/" target="blank">Learn to Code with Me</a>.</p>            
                <p className="about-text"> I grew up building my own computers and playing video games. Before getting into the web, I wanted to be a game coder.</p>            
            </div>
        </div>
    </div>
)

export default About