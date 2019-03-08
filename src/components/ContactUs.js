import React, { Component } from 'react';

import ContactForm from './ContactForm';

export default class ContactUs extends Component {
  render() {
    // let resumeData = this.props.resumeData;
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
          <div className="social-links">
              
          </div>
        </section>
        );
      }
    }


    
    {/* <aside className="eigth columns footer-widgets">
      <div className="widget">
        <h4>Email: </h4>
          {resumeData.email}
      </div>
    </aside> */}