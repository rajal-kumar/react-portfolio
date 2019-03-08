import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

import ContactForm from './ContactForm';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
            <h2>Keen to get in touch?</h2>
              <p className="lead">
                Whether you would like me to provide web services for you, talk further about what I have been up to with my development, or just say hello feel free to get through to me from any of the following ways below.
              </p>
            </div>
            <div className="contact-body">
        <Grid className='contact-grid'>
          <Cell col={6}>
            <h2>Rajal Kumar</h2>
            <img 
            src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_African_Teenager-512.png"
            alt="avatar"
            style={{height: '250px'}}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
              <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                  <i className="fa fa-slack" aria-hidden="true"/>
                  Rajal Kumar
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                  <i className="fas fa-envelope-square" aria-hidden="true"/>
                  rajalkumar@rajalmail.com
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                  <i className="fa fa-linkedin-square" aria-hidden="true"/>
                  Rajal Kumar
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                  <i className="fa fa-github-square" aria-hidden="true"/>
                  rajal-kumar
                </ListItemContent>
              </ListItem>
            </List>
            </div>
          </Cell>
        </Grid>
      </div>
          </div>
          {/* <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>LinkedIn: 
                   {resumeData.linkedinId}
                </h4>
              </div>
            </aside>
          </div> */}
        </section>
        );
  }
}