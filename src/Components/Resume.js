import React, { Component } from 'react';
import "./Resume.css";

class Resume extends Component {

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          <div>
              <h3>LabRoots</h3>
              <p class="info">Full Stack Developer<span>•</span> <em class="date">September 2020 - Present</em></p>
              <ul class="position-duties">
                  <li>Develop and implement features for the company's website, backend admin portal (Symfony &amp; MySQL), and maintain existing code.</li>
                  <li>Integrate 3rd party APIs for import and export of registrant data, and extend website functionality.</li>
                  <li>Utilize a variety of AWS services, including S3, RDS, and
                      EC2 instances.</li>
                  <li>Refactor and debug older code.</li>
                  <li>Collaborate with a team of 4 devs using Git, BitBucket and
                      AWS CodeCommit.</li>
                  <li>Work primarily in the LEMP stack environment.&nbsp;</li>
              </ul>
          </div>
          <div>
            <h3>Gildred Racing Company</h3>
            <p class="info">Freelance React.js Developer<span>•</span> <em class="date">February 2020 - August 2020</em></p>
            <ul class="position-duties">
                <li>Worked with a team of three graphic designers to create a car configurator app for Super Mini Coopers using React.js</li>
                <li>Utilized the MERN Stack</li>
            </ul>
          </div>
        </div>
    </div>



      <div className="row skill">
        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>
        <div className="row">
          <div className="one columns">
            <ul id="list-col1">
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React.js</li>
              <li>AWS</li>
              <li>Git</li>
            </ul>
          </div>
          <div className="col">
            <ul id="list-col2">
              <li>Symfony</li>
              <li>Laravel</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Node.js</li>
              <li>PHP</li>
            </ul>
          </div>
        </div>
      </div>
   </section>
    );
  }
}

export default Resume;
