import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default class Porfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8888/portfolio/wp-json/wp/v2/projects').then(projects => {
      this.setState({
        projects: projects.data
      })
    })
  }

  render() {
    // let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Work.</h1>
          <p style={{textAlign: "center"}}>I apopogise about this section, I will ensure to get this section up and ready ASAP</p>
          <div>
            {this.state.projects.map(projects => (
              <Link to={`/${projects.slug}`} key={projects.id}>
                <div className="card" key={projects.id}>
                  <div className="cardContent">
                    <h3>{projects.title.rendered}</h3>
                      { projects.excerpt.rendered }
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item, i)=>{
              return(
                <div className="columns portfolio-item" key={i}>
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src={`${item.imgurl}`} className="item-img" alt="+"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div> */}
        </div>
      </div>
  </section>
        );
  }
}