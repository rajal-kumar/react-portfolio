import React from 'react'

class Services extends React.Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
        <section id="services">
          <h1>Services</h1>
              <div id="services" className="text-center">
                {
                  resumeData.services && resumeData.services.map((item, i) => {
                    return (
                      <ul className="services-container">
                        <li className="service-item">
                          <img src={`${item.servicePic}`} className="item-img" alt="+" />
                          <div className="service-description">
                            <h5>{item.serviceName}</h5>
                          </div>
                        </li>
                      </ul>
                    )
                  })
                }
              </div>
        </section>
    )
  }
}

export default Services