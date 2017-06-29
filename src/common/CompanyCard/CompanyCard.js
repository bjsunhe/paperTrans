import React, { Component } from 'react';
import './CompanyCard.css';
class CompanyCard  extends Component {
  constructor(props){
    super(props)

  }

  render() {

//https://codepen.io/mikun/pen/vOZNbQ
    return (
      <div className="full-width">

          <div className='cf'>
            <div className="Switch card">
              <div className="Toggle"></div>
              <span className="on"><i className="fa fa-th"></i></span>
              <span className="off"><i className="fa fa-th-list"></i></span>
            </div>
          </div>

          <div className="col-md-3">

            <div className="card-view">
                <div className='bg'>
                  <img src="https://s4.postimg.org/ysci5cbcd/com1.jpg" alt="company image" />
                </div>
              <div className="container">
                <a href='#'><div className="tag_name red">work / life balance</div></a>
                <div className="company">
                  <div className="c_logo">
                    <a href="#"><img src="https://s10.postimg.org/k7scmco79/focuslab.jpg" alt="Focus Lab" /></a>
                  </div>
                  <div className="c_info">
                    <a href="#" className="c_name">Focus Lab</a><br/>
                    <span className="c_industry">Digital Media</span><br/>
                    <span id="c_stars" data-star="3.5"></span>
                    <div className="c_num">3.5</div >
                  </div>
                  <div className="c_content">
                    <a href='#' className="title"><p>The most br/iliant company that I’ve ever worked for</p></a>
                    <p className="review">Amazing opportunities for any person. The projects we are given always stress new and innovating ideas that constantly challenge ourselves to improve our ...</p>
                  </div>
                </div>

                <div className="user">
                  <div className="user_avatar">
                    <img src="https://s4.postimg.org/la5lt1z6x/image.jpg" alt="Bill Kenny"/>
                  </div>
                  <div className="user_info">
                    <a href="#" className="user_name orange">Bill Kenny</a> • May 30, 2015<br/>Current br/and Director
                  </div>
                </div>
              </div>
            </div>

            <div className="card-view">
              <div className="container">
                <a href='#'><div className="tag_name blue">Salary &amp; Benefit</div></a>
                <div className="company">
                  <div className="c_logo">
                    <a href="#"><img src="https://s24.postimg.org/a4jaok74x/lo2.jpg" alt="SSS"/></a>
                  </div>
                  <div className="c_info">
                    <a href="#" className="c_name">Silicon Straits Saigon</a><br/>
                    <span className="c_industry">Information Technology</span><br/>
                    <span id="c_stars" data-star="4"></span>
                    <div className="c_num">4.0</div >
                  </div>
                  <div className="c_content">
                    <a href='#' className="title"><p>Enjoying myself so much I no longer call it work</p></a>
                    <p className="review">Because we all love our job, were a super passionate team and we always look out for each other. That passion really shows, from the general way our business is ...</p>
                  </div>
                </div>
                <div className="user">
                  <div className="user_avatar">
                    <img src="https://s1.postimg.org/48vr8yjaz/image.gif" alt="Kent Nguyen"/>
                  </div>
                  <div className="user_info">
                    <a href="#" className="user_name orange">Kent nguyen</a> • May 30, 2015<br/>Current CEO
                  </div>
                </div>
              </div>
            </div>

            <div className="card-view">
                <div className='bg'>
                  <img src="https://s18.postimg.org/4m9u2dlqx/com3.jpg" alt="company image"/>
                </div>
              <div className="container">
                <a href='#'><div className="tag_name yellow">Company Culture</div></a>
                <div className="company">
                  <div className="c_logo">
                    <a href="#"><img src="https://s18.postimg.org/er3we7exh/lo3.jpg" alt="Dribbble"/></a>
                  </div>
                  <div className="c_info">
                    <a href="#" className="c_name">Dribbble</a><br/>
                    <span className="c_industry">Design Community</span><br/>
                    <span id="c_stars" data-star="3.5"></span>
                    <div className="c_num">3.5</div >
                  </div>
                  <div className="c_content">
                    <a href='#' className="title"><p>The most br/iliant company that I’ve ever worked for</p></a>
                    <p className="review">Amazing opportunities for any person. The projects we are given always stress new and innovating ideas that constantly challenge ourselves to improve our ...</p>
                  </div>
                </div>

                <div className="user">
                  <div className="user_avatar">
                    <img src="https://s18.postimg.org/r36srp2s5/image.jpg" alt="Danis Jack"/>
                  </div>
                  <div className="user_info">
                    <a href="#" className="user_name orange">Danis Jack</a> • May 30, 2015<br/>Current br/and Director
                  </div>
                </div>
              </div>
            </div>

            <div className="card-view">
                <div className='bg'>
                  <img src="https://s18.postimg.org/som2jid09/com4.jpg" alt="company image"/>
                </div>
              <div className="container">
                <a href='#'><div className="tag_name green">Senior Management</div></a>
                <div className="company">
                  <div className="c_logo">
                    <a href="#"><img src="https://s18.postimg.org/8rg5aju51/lo4.gif" alt="W&amp;S"/></a>
                  </div>
                  <div className="c_info">
                    <a href="#" className="c_name">W&amp;S Group</a><br/>
                    <span className="c_industry">Research Community</span><br/>
                    <span id="c_stars" data-star="4.5"></span>
                    <div className="c_num">4.5</div >
                  </div>
                  <div className="c_content">
                    <a href='#' className="title"><p>My boss my hero</p></a>
                    <p className="review">Amazing opportunities for any person. The projects we are given always stress new and innovating ideas that constantly challenge ourselves to improve our ...</p>
                  </div>
                </div>

                <div className="user">
                  <div className="user_avatar">
                    <img src="https://s18.postimg.org/pa3w3dhlh/image.jpg" alt="Karmi Phuc"/>
                  </div>
                  <div className="user_info">
                    <a href="#" className="user_name orange">Karmi Phuc</a> • May 30, 2015<br/>Current Project Manager
                  </div>
                </div>
              </div>
            </div>

            <div className="card-view">
                <div className='bg'>
                  <img src="https://s18.postimg.org/4wcr7zazd/com5.jpg" alt="company image"/>
                </div>
              <div className="container">
                <a href='#'><div className="tag_name cyan">Organization</div></a>
                <div className="company">
                  <div className="c_logo">
                    <a href="#"><img src="https://s18.postimg.org/fs453bvx1/lo5.gif" alt="Medium"/></a>
                  </div>
                  <div className="c_info">
                    <a href="#" className="c_name">Medium</a><br/>
                    <span className="c_industry">Digital Media</span><br/>
                    <span id="c_stars" data-star="5"></span>
                    <div className="c_num">5.0</div >
                  </div>
                  <div className="c_content">
                    <a href='#' className="title"><p>The most br/iliant company that I’ve ever worked for</p></a>
                    <p className="review">Amazing opportunities for any person. The projects we are given always stress new and innovating ideas that constantly challenge ourselves to improve our ...</p>
                  </div>
                </div>

                <div className="user">
                  <div className="user_avatar">
                    <img src="https://s18.postimg.org/thyoc4j11/image.gif" alt="Ev Williams"/>
                  </div>
                  <div className="user_info">
                    <a href="#" className="user_name orange">Evan Williams</a> • May 30, 2015<br/>Current br/and Director
                  </div>
                </div>
              </div>
            </div>

            <div className="card-view">
              <div className="container">
                <a href='#'><div className="tag_name red">work / life balance</div></a>
                <div className="company">
                  <div className="c_logo">
                    <a href="#"><img src="https://s18.postimg.org/3l4zzifdh/lo6.jpg" alt="Linkedin"/></a>
                  </div>
                  <div className="c_info">
                    <a href="#" className="c_name">Linkedin</a><br/>
                    <span className="c_industry">Information Technology</span><br/>
                    <span id="c_stars" data-star="3"></span>
                    <div className="c_num">3.0</div >
                  </div>
                  <div className="c_content">
                    <a href='#' className="title"><p>Fantastic organisation to work</p></a>
                    <p className="review">True adherence to non discrimination policy. If you are young then rest assure that you will not finish up on the retrenchment list in the later age because of ...</p>
                  </div>
                </div>
                <div className="user">
                  <div className="user_avatar">
                    <img src="https://s18.postimg.org/9xk59cifp/image.gifhttp://imgur.com/R6qhkWo.gif" alt="Yukino Kinoshita"/>
                  </div>
                  <div className="user_info">
                    <a href="#" className="user_name orange">Yukino Kinoshita</a> • May 30, 2015<br/>Current br/and Director
                  </div>
                </div>
              </div>
            </div>

          </div>
      </div>

    )
  }
}

export default CompanyCard;
