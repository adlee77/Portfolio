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
                  <li>Optimized Symfony's Sonata package for Content Management Systems (CMS) through the integration of custom features, resulting in a 20% improvement in team efficiency</li>
                  <li>Automated deployment processes using AWS services and tools like AWS Elastic Beanstalk and AWS CodeDeploy to lower deployment time by over 10 minutes</li>
                  <li>Integrated and developed RESTful APIs that utilized webhooks to enable seamless communication and data exchange between 10+ client systems</li>
                  <li> Identified and implemented enhancements to MySQL query performance, resulting in significant increases in performance that reduced querying times from over 30 seconds to less that 1 in some cases</li>
                  <li>Created cron jobs for scheduling backups, reporting, and optimizations to the database without interrupting production performance</li>
                  <li> Reduced latency in our Google Lighthouse score by optimizing redundancies in JavaScript, resulting in a 20% increase and enhanced UX&nbsp;</li>
              </ul>
          </div>
          <div>
            <h3>Gildred Racing Company</h3>
            <p class="info">Freelance React.js Developer<span>•</span> <em class="date">February 2020 - August 2020</em></p>
            <ul class="position-duties">
                <li>Worked on the standalone website for Gildred Racing, featured on Netflix's "Fastest Car," using Typescript, HTML, & CSS/SASS</li>
                <li>Implemented dynamic and visually appealing features, contributing to an engaging online presence for the brand</li>
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
