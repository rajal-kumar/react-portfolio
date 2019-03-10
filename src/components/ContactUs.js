import React, { Component } from 'react';

export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
            <h2>Keen to get in touch?</h2>
              <p>
                Whether you would like me to provide web services for you, talk further about what I have been up to with my development, or just say hello feel free to get through to me from any of the following ways below.
              </p>
            </div>
          </div>
          <div className="row">
                  <div className="columns contact-details">
                    <h2>Contact Details</h2>
                    <p className="address">
                    <span>{resumeData.name}</span>
                      <br></br>
                      <span>
                      {resumeData.address}
                      </span>
                      <br></br>
                      <i className="fas fa-envelope fa-2x"></i>
                      <a href="mailto:rajalkumar@protonmail.com" data-rel="external"><span>{resumeData.email} (click to contact)</span></a>
                    </p>
                  </div>
               </div>
        </section>
        );
      }
    }


    
   