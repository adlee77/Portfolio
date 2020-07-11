import React, { Component } from 'react';

class Contact extends Component {
   state={
      Name: '',
      Subject: '',
      Message: '',
   }
   sendEmail = (event) => {
      event.preventDefault()
      window.location.href=`mailto:andrewimg@gmail.com?subject=${this.state.Subject}&body=${this.state.Message}`
   }

   handleChange = (event) => {
     const {name, value} = event.target
     this.setState({
        [name]: value
     })
   }

  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input onChange={this.handleChange} type="text" value={this.state.Name} size="35" id="contactName" name="Name"/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject <span className="required">*</span></label>
						   <input onChange={this.handleChange} type="text" value={this.state.Subject} size="35" id="contactSubject" name="Subject"/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea onChange={this.handleChange} cols="50" rows="15" id="contactMessage" name="Message" value={this.state.Message}></textarea>
                  </div>

                  <div>
                     <button className="submit" onClick={this.sendEmail}>Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning">Error</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </p>
				   </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
