import React from 'react';
import ReactDOM from 'react-dom';
import {
  CommentCard,
  SwiperCard,
  CompanyCard,
} from './../../../../common/index.js';
import userModel from './../../models/AbstractModel.js';
import PageManager from './../../core/PageManager.js';
import './Components.css';
class Components extends PageManager {
  constructor(props){
    super(props)

  }


  render() {

    return(<div>

        <CommentCard />
        <SwiperCard />
        <CompanyCard />
{/*        <div className="row">
          <div className="example-1 card">
            <div className="wrapper">
              <div className="date">
                <span className="day">12</span>
                <span className="month">Aug</span>
                <span className="year">2016</span>
              </div>
              <div className="data">
                <div className="content">
                  <span className="author">Jane Doe</span>
                  <h1 className="title"><a href="#">Everything You Need to Know About Gold Medals</a></h1>
                  <p className="text">Olympic gold medals contain only about 1.34 percent gold, with the rest composed of sterling silver.</p>
                  <label for="show-menu" className="menu-button"><span></span></label>
                </div>
                <input type="checkbox" id="show-menu" />
                <ul className="menu-content">
                  <li>
                    <a href="#" className="fa fa-bookmark-o"></a>
                  </li>
                  <li><a href="#" className="fa fa-heart-o"><span>47</span></a></li>
                  <li><a href="#" className="fa fa-comment-o"><span>8</span></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="example-2 card">
            <div className="wrapper">
              <div className="header">
                <div className="date">
                  <span className="day">12</span>
                  <span className="month">Aug</span>
                  <span className="year">2016</span>
                </div>
                <ul className="menu-content">
                  <li>
                    <a href="#" className="fa fa-bookmark-o"></a>
                  </li>
                  <li><a href="#" className="fa fa-heart-o"><span>18</span></a></li>
                  <li><a href="#" className="fa fa-comment-o"><span>3</span></a></li>
                </ul>
              </div>
              <div className="data">
                <div className="content">
                  <span className="author">Jane Doe</span>
                  <h1 className="title"><a href="#">Stranger Things: The sound of the Upside Down</a></h1>
                  <p className="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
                  <a href="#" className="button">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>*/}

        <aside className="profile-card">
          <header>
            <a target="_blank" href="#">
              <img src="http://lorempixel.com/150/150/people/" className="hoverZoomLink"/>
            </a>

            <h1>
                    John Doe
                  </h1>

            <h2>
                    Better Visuals
                  </h2>

          </header>

          <div className="profile-bio">

            <p>
              It takes monumental improvement for us to change how we live our lives. Design is the way we access that improvement.
            </p>

          </div>

          <ul className="profile-social-links">
            <li>
              <a target="_blank" href="https://www.facebook.com/creativedonut">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/dropyourbass">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/vipulsaxena">
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.behance.net/vipulsaxena">

                <i className="fa fa-behance"></i>
              </a>
            </li>
          </ul>
        </aside>
    </div>)

  }
}

export default Components;
