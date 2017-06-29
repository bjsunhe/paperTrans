import React from 'react';
import ReactDOM from 'react-dom';
import {
  ToggleCard
} from './../../../../common/index.js';
import userModel from './../../models/AbstractModel.js';
import PageManager from './../../core/PageManager.js';
import './Explor.css';
class Explor extends PageManager {
  constructor(props){
    super(props)
    this.state={
      cardStatus:"card theme-purple"
    }

  }

  openCard(){
    this.setState({
      cardStatus:"card theme-purple flip-step1",
    })
    let that=this;
    setTimeout(()=>{
      that.setState({
        cardStatus:"card theme-purple flip-step1 flip-step2",
      })
    },200)

    setTimeout(()=>{
      that.setState({
        cardStatus:"card theme-purple flip-step1 flip-step2 flip-step3 ",
      })
    },500)
  }

  closeCard(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      cardStatus:"card theme-purple flip-step1 flip-step2",
    })
    let that=this;
    setTimeout(()=>{
      that.setState({
        cardStatus:"card theme-purple flip-step1",
      })
    },200)

    setTimeout(()=>{
      that.setState({
        cardStatus:"card theme-purple",
      })
    },500)
  }

  render() {
    console.log(this.state.cardStatus)
    var divStyle = {
      backgroundImage: 'url(' + 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-1.jpg' + ')',
    };

    var delivcardDefaultData = [
      {id: '2618-3157', price: 25, requests: 5, pledge: 150, weight: 50,
       sender: 'Edward Norton', senderImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-sender.jpg',
       themeColor: 'purple', themeColorHex: '#BA68C8',
       bgImgUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-1.jpg', rating: 5, ratingCount: 26,
       fromStreet: 'W 90th St', fromCity: 'New York, NY 10025',
       toStreet: '46th Ave', toCity: 'Woodside, NY 11101',
       delivTime: '06:30 pm', delivDate: 'May 16, 2015', delivDateNoun: 'Today',
       reqDl: '24 minutes'},
      {id: '2618-3156', price: 37, requests: 7, pledge: 222, weight: 66,
       sender: 'Edward Norton', senderImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-sender.jpg',
       themeColor: 'green', themeColorHex: '#52A43A',
       bgImgUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-2.jpg', rating: 4, ratingCount: 21,
       fromStreet: 'W 85th St', fromCity: 'New York, NY 1025',
       toStreet: 'E 30th Ave', toCity: 'New York, NY 1001',
       delivTime: '07:30 am', delivDate: 'May 16, 2015', delivDateNoun: 'Today',
       reqDl: '33 minutes'},
      {id: '2618-3155', price: 12, requests: 3, pledge: 80, weight: 20,
       sender: 'Edward Norton', senderImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-sender.jpg',
       themeColor: 'orange', themeColorHex: '#F7AA17',
       bgImgUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-3.jpg', rating: 5, ratingCount: 15,
       fromStreet: 'W 79th St', fromCity: 'New York, NY 1024',
       toStreet: 'W 139th Ave', toCity: 'New York, NY 1030',
       delivTime: '09:22 pm', delivDate: 'May 16, 2015', delivDateNoun: 'Today',
       reqDl: '15 minutes'},
      {id: '2618-3154', price: 80, requests: 25, pledge: 550, weight: 250,
       sender: 'Edward Norton', senderImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-sender.jpg',
       themeColor: 'red', themeColorHex: '#EF5350',
       bgImgUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-4.jpg', rating: 5, ratingCount: 66,
       fromStreet: 'W 90th St', fromCity: 'New York, NY 125',
       toStreet: '46th Ave', toCity: 'Woodside, NY 11',
       delivTime: '06:30 pm', delivDate: 'May 16, 2015', delivDateNoun: 'Today',
       reqDl: '24 minutes'},
      {id: '2618-3153', price: 49, requests: 17, pledge: 299, weight: 149,
       sender: 'Edward Norton', senderImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-sender.jpg',
       themeColor: 'purple', themeColorHex: '#BA68C8',
       bgImgUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-5.jpg', rating: 5, ratingCount: 26,
       fromStreet: 'W 90th St', fromCity: 'New York, NY 1025',
       toStreet: '46th Ave', toCity: 'Woodside, NY 11101',
       delivTime: '06:30 pm', delivDate: 'May 16, 2015', delivDateNoun: 'Today',
       reqDl: '24 minutes'},
      {id: '2618-3152', price: 99, requests: 33, pledge: 611, weight: 432,
       sender: 'Edward Norton', senderImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-sender.jpg',
       themeColor: 'green', themeColorHex: '#52A43A',
       bgImgUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-6.jpg', rating: 2, ratingCount: 26,
       fromStreet: 'W 90th St', fromCity: 'New York, NY 1025',
       toStreet: '46th Ave', toCity: 'Woodside, NY 11101',
       delivTime: '06:30 pm', delivDate: 'May 16, 2015', delivDateNoun: 'Today',
       reqDl: '24 minutes'},
      {id: '2618-3151', price: 61, requests: 15, pledge: 318, weight: 130,
       sender: 'Edward Norton', senderImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-sender.jpg',
       themeColor: 'orange', themeColorHex: '#F7AA17',
       bgImgUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-7.jpg', rating: 3, ratingCount: 26,
       fromStreet: 'W 90th St', fromCity: 'New York, NY 10025',
       toStreet: '46th Ave', toCity: 'Woodside, NY 11101',
       delivTime: '06:30 pm', delivDate: 'May 16, 2015', delivDateNoun: 'Today',
       reqDl: '24 minutes'},
      {id: '2618-3150', price: 13, requests: 9, pledge: 231, weight: 55,
       sender: 'Edward Norton', senderImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-sender.jpg',
       themeColor: 'red', themeColorHex: '#EF5350',
       bgImgUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-8.jpg', rating: 4, ratingCount: 26,
       fromStreet: 'W 90th St', fromCity: 'New York, NY 10025',
       toStreet: '46th Ave', toCity: 'Woodside, NY 11101',
       delivTime: '06:30 pm', delivDate: 'May 16, 2015', delivDateNoun: 'Today',
       reqDl: '24 minutes'}
    ];

    return(<div>

              <ToggleCard />
              <section  className={this.state.cardStatus}>
                <div className="card__map">
                  <div className="card__map__inner"></div>
                </div>
                <section className="card__part card__part-1" >
                  <div className="card__part__inner">
                    <header className="card__header">
                      <div className="card__header__close-btn"  onClick={this.closeCard.bind(this)}></div>
                      <span className="card__header__id"> {delivcardDefaultData[0].id}</span>
                      <span className="card__header__price">{delivcardDefaultData[0].price}</span>
                    </header>
                    <div className="card__stats"   style={divStyle}>
                      <div className="card__stats__item card__stats__item--req">
                        <p className="card__stats__type">Requests</p>
                        <span className="card__stats__value">{delivcardDefaultData[0].requests}</span>
                      </div>
                      <div className="card__stats__item card__stats__item--pledge">
                        <p className="card__stats__type">Pledge</p>
                        <span className="card__stats__value">{delivcardDefaultData[0].pledge}</span>
                      </div>
                      <div className="card__stats__item card__stats__item--weight">
                        <p className="card__stats__type">Weight</p>
                        <span className="card__stats__value">{delivcardDefaultData[0].weight} oz</span>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="card__part card__part-2">
                  <div className="card__part__side m--back"  onClick={this.openCard.bind(this)}>
                    <div className="card__part__inner card__face">
                      <div className="card__face__colored-side"></div>
                      <h3 className="card__face__price">{delivcardDefaultData[0].price}</h3>
                      <div className="card__face__divider"></div>
                      <div className="card__face__path"></div>
                      <div className="card__face__from-to">
                        <p>{delivcardDefaultData[0].fromStreet}, {delivcardDefaultData[0].fromCity}</p>
                        <p>{delivcardDefaultData[0].toStreet}, {delivcardDefaultData[0].toCity}</p>
                      </div>
                      <div className="card__face__deliv-date">
                        {delivcardDefaultData[0].delivDateNoun}
                        <p>{delivcardDefaultData[0].delivTime}</p>
                      </div>
                      <div className="card__face__stats card__face__stats--req">
                        Requests
                        <p>{delivcardDefaultData[0].requests}</p>
                      </div>
                      <div className="card__face__stats card__face__stats--pledge">
                        Pledge
                        <p>{delivcardDefaultData[0].pledge}</p>
                      </div>
                      <div className="card__face__stats card__face__stats--weight">
                        Weight
                        <p className="card__face__stats__weight">
                          <span>Light</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card__part__side m--front">
                    <div className="card__sender">
                      <h4 className="card__sender__heading">Sender</h4>
                      <div className="card__sender__img-cont">
                        <div className="card__sender__img-cont__inner">
                          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-sender.jpg" className="card__sender__img" />
                        </div>
                      </div>
                      <div className="card__sender__name-and-rating">
                        <p className="card__sender__name">{delivcardDefaultData[0].sender}</p>
                        <p className="card__sender__rating card__sender__rating-5">
                          <span className="card__sender__rating__star">&#9733;</span>
                          <span className="card__sender__rating__star">&#9733;</span>
                          <span className="card__sender__rating__star">&#9733;</span>
                          <span className="card__sender__rating__star">&#9733;</span>
                          <span className="card__sender__rating__star">&#9733;</span>
                          <span className="card__sender__rating__count">({delivcardDefaultData[0].ratingCount})</span>
                        </p>
                        <p className="card__sender__address">
                          {delivcardDefaultData[0].fromStreet}, {delivcardDefaultData[0].fromCity}
                        </p>
                      </div>
                      <div className="card__receiver">
                        <div className="card__receiver__inner">
                          <div className="card__sender__img-cont">
                            <div className="card__sender__img-cont__inner">
                              <img ng-src="{{card.senderImg}}" className="card__sender__img" />
                            </div>
                          </div>
                          <div className="card__sender__name-and-rating">
                            <p className="card__sender__name">{delivcardDefaultData[0].sender}</p>
                            <p className="card__sender__address">
                              {delivcardDefaultData[0].toStreet}, {delivcardDefaultData[0].toCity}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card__path-big"></div>
                    </div>
                    <div className="card__from-to">
                      <div className="card__from-to__inner">
                        <div className="card__text card__text--left">
                          <p className="card__text__heading">From</p>
                          <p className="card__text__middle">{delivcardDefaultData[0].fromStreet}</p>
                          <p className="card__text__bottom">{delivcardDefaultData[0].fromCity}</p>
                        </div>
                        <div className="card__text card__text--right">
                          <p className="card__text__heading">To</p>
                          <p className="card__text__middle">{delivcardDefaultData[0].toStreet}</p>
                          <p className="card__text__bottom">{delivcardDefaultData[0].toCity}</p>
                        </div>
                      </div>
                    </div>
                    <section className="card__part card__part-3">
                      <div className="card__part__side m--back"></div>
                      <div className="card__part__side m--front">
                        <div className="card__timings">
                          <div className="card__timings__inner">
                            <div className="card__text card__text--left">
                              <p className="card__text__heading">Delivery Date</p>
                              <p className="card__text__middle">{delivcardDefaultData[0].delivTime}</p>
                              <p className="card__text__bottom">{delivcardDefaultData[0].delivTime}</p>
                            </div>
                            <div className="card__text card__text--right">
                              <p className="card__text__heading">Request Deadline</p>
                              <p className="card__text__middle">{delivcardDefaultData[0].reqDl}</p>
                            </div>
                          </div>
                        </div>
                        <div className="card__timer">60 min 00 sec</div>
                        <section className="card__part card__part-4">
                          <div className="card__part__side m--back"></div>
                          <div className="card__part__side m--front">
                            <button type="button" className="card__request-btn">
                              <span className="card__request-btn__text-1">Request</span>
                              <span className="card__request-btn__text-2">Start</span>
                            </button>
                            <p className="card__counter">{delivcardDefaultData[0].requests} people have sent a request</p>
                          </div>
                        </section>
                      </div>
                    </section>
                  </div>
                </section>
              </section>

              <section  className="card theme-green">
                <div className="card__map">
                  <div className="card__map__inner"></div>
                </div>
                <section className="card__part card__part-1" >
                  <div className="card__part__inner">
                    <header className="card__header">
                      <div className="card__header__close-btn"  onClick={this.closeCard.bind(this)}></div>
                      <span className="card__header__id"> {delivcardDefaultData[0].id}</span>
                      <span className="card__header__price">{delivcardDefaultData[0].price}</span>
                    </header>
                    <div className="card__stats"   style={divStyle}>
                      <div className="card__stats__item card__stats__item--req">
                        <p className="card__stats__type">Requests</p>
                        <span className="card__stats__value">{delivcardDefaultData[0].requests}</span>
                      </div>
                      <div className="card__stats__item card__stats__item--pledge">
                        <p className="card__stats__type">Pledge</p>
                        <span className="card__stats__value">{delivcardDefaultData[0].pledge}</span>
                      </div>
                      <div className="card__stats__item card__stats__item--weight">
                        <p className="card__stats__type">Weight</p>
                        <span className="card__stats__value">{delivcardDefaultData[0].weight} oz</span>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="card__part card__part-2">
                  <div className="card__part__side m--back"  onClick={this.openCard.bind(this)}>
                    <div className="card__part__inner card__face">
                      <div className="card__face__colored-side"></div>
                      <h3 className="card__face__price">{delivcardDefaultData[0].price}</h3>
                      <div className="card__face__divider"></div>
                      <div className="card__face__path"></div>
                      <div className="card__face__from-to">
                        <p>{delivcardDefaultData[0].fromStreet}, {delivcardDefaultData[0].fromCity}</p>
                        <p>{delivcardDefaultData[0].toStreet}, {delivcardDefaultData[0].toCity}</p>
                      </div>
                      <div className="card__face__deliv-date">
                        {delivcardDefaultData[0].delivDateNoun}
                        <p>{delivcardDefaultData[0].delivTime}</p>
                      </div>
                      <div className="card__face__stats card__face__stats--req">
                        Requests
                        <p>{delivcardDefaultData[0].requests}</p>
                      </div>
                      <div className="card__face__stats card__face__stats--pledge">
                        Pledge
                        <p>{delivcardDefaultData[0].pledge}</p>
                      </div>
                      <div className="card__face__stats card__face__stats--weight">
                        Weight
                        <p className="card__face__stats__weight">
                          <span>Light</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card__part__side m--front">
                    <div className="card__sender">
                      <h4 className="card__sender__heading">Sender</h4>
                      <div className="card__sender__img-cont">
                        <div className="card__sender__img-cont__inner">
                          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-sender.jpg" className="card__sender__img" />
                        </div>
                      </div>
                      <div className="card__sender__name-and-rating">
                        <p className="card__sender__name">{delivcardDefaultData[0].sender}</p>
                        <p className="card__sender__rating card__sender__rating-5">
                          <span className="card__sender__rating__star">&#9733;</span>
                          <span className="card__sender__rating__star">&#9733;</span>
                          <span className="card__sender__rating__star">&#9733;</span>
                          <span className="card__sender__rating__star">&#9733;</span>
                          <span className="card__sender__rating__star">&#9733;</span>
                          <span className="card__sender__rating__count">({delivcardDefaultData[0].ratingCount})</span>
                        </p>
                        <p className="card__sender__address">
                          {delivcardDefaultData[0].fromStreet}, {delivcardDefaultData[0].fromCity}
                        </p>
                      </div>
                      <div className="card__receiver">
                        <div className="card__receiver__inner">
                          <div className="card__sender__img-cont">
                            <div className="card__sender__img-cont__inner">
                              <img ng-src="{{card.senderImg}}" className="card__sender__img" />
                            </div>
                          </div>
                          <div className="card__sender__name-and-rating">
                            <p className="card__sender__name">{delivcardDefaultData[0].sender}</p>
                            <p className="card__sender__address">
                              {delivcardDefaultData[0].toStreet}, {delivcardDefaultData[0].toCity}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card__path-big"></div>
                    </div>
                    <div className="card__from-to">
                      <div className="card__from-to__inner">
                        <div className="card__text card__text--left">
                          <p className="card__text__heading">From</p>
                          <p className="card__text__middle">{delivcardDefaultData[0].fromStreet}</p>
                          <p className="card__text__bottom">{delivcardDefaultData[0].fromCity}</p>
                        </div>
                        <div className="card__text card__text--right">
                          <p className="card__text__heading">To</p>
                          <p className="card__text__middle">{delivcardDefaultData[0].toStreet}</p>
                          <p className="card__text__bottom">{delivcardDefaultData[0].toCity}</p>
                        </div>
                      </div>
                    </div>
                    <section className="card__part card__part-3">
                      <div className="card__part__side m--back"></div>
                      <div className="card__part__side m--front">
                        <div className="card__timings">
                          <div className="card__timings__inner">
                            <div className="card__text card__text--left">
                              <p className="card__text__heading">Delivery Date</p>
                              <p className="card__text__middle">{delivcardDefaultData[0].delivTime}</p>
                              <p className="card__text__bottom">{delivcardDefaultData[0].delivTime}</p>
                            </div>
                            <div className="card__text card__text--right">
                              <p className="card__text__heading">Request Deadline</p>
                              <p className="card__text__middle">{delivcardDefaultData[0].reqDl}</p>
                            </div>
                          </div>
                        </div>
                        <div className="card__timer">60 min 00 sec</div>
                        <section className="card__part card__part-4">
                          <div className="card__part__side m--back"></div>
                          <div className="card__part__side m--front">
                            <button type="button" className="card__request-btn">
                              <span className="card__request-btn__text-1">Request</span>
                              <span className="card__request-btn__text-2">Start</span>
                            </button>
                            <p className="card__counter">{delivcardDefaultData[0].requests} people have sent a request</p>
                          </div>
                        </section>
                      </div>
                    </section>
                  </div>
                </section>
              </section>

              <section  className="card theme-orange">
                <div className="card__map">
                  <div className="card__map__inner"></div>
                </div>
                <section className="card__part card__part-1" >
                  <div className="card__part__inner">
                    <header className="card__header">
                      <div className="card__header__close-btn"  onClick={this.closeCard.bind(this)}></div>
                      <span className="card__header__id"> {delivcardDefaultData[0].id}</span>
                      <span className="card__header__price">{delivcardDefaultData[0].price}</span>
                    </header>
                    <div className="card__stats"   style={divStyle}>
                      <div className="card__stats__item card__stats__item--req">
                        <p className="card__stats__type">Requests</p>
                        <span className="card__stats__value">{delivcardDefaultData[0].requests}</span>
                      </div>
                      <div className="card__stats__item card__stats__item--pledge">
                        <p className="card__stats__type">Pledge</p>
                        <span className="card__stats__value">{delivcardDefaultData[0].pledge}</span>
                      </div>
                      <div className="card__stats__item card__stats__item--weight">
                        <p className="card__stats__type">Weight</p>
                        <span className="card__stats__value">{delivcardDefaultData[0].weight} oz</span>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="card__part card__part-2">
                  <div className="card__part__side m--back"  onClick={this.openCard.bind(this)}>
                    <div className="card__part__inner card__face">
                      <div className="card__face__colored-side"></div>
                      <h3 className="card__face__price">{delivcardDefaultData[0].price}</h3>
                      <div className="card__face__divider"></div>
                      <div className="card__face__path"></div>
                      <div className="card__face__from-to">
                        <p>{delivcardDefaultData[0].fromStreet}, {delivcardDefaultData[0].fromCity}</p>
                        <p>{delivcardDefaultData[0].toStreet}, {delivcardDefaultData[0].toCity}</p>
                      </div>
                      <div className="card__face__deliv-date">
                        {delivcardDefaultData[0].delivDateNoun}
                        <p>{delivcardDefaultData[0].delivTime}</p>
                      </div>
                      <div className="card__face__stats card__face__stats--req">
                        Requests
                        <p>{delivcardDefaultData[0].requests}</p>
                      </div>
                      <div className="card__face__stats card__face__stats--pledge">
                        Pledge
                        <p>{delivcardDefaultData[0].pledge}</p>
                      </div>
                      <div className="card__face__stats card__face__stats--weight">
                        Weight
                        <p className="card__face__stats__weight">
                          <span>Light</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card__part__side m--front">
                    <div className="card__sender">
                      <h4 className="card__sender__heading">Sender</h4>
                      <div className="card__sender__img-cont">
                        <div className="card__sender__img-cont__inner">
                          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-sender.jpg" className="card__sender__img" />
                        </div>
                      </div>
                      <div className="card__sender__name-and-rating">
                        <p className="card__sender__name">{delivcardDefaultData[0].sender}</p>
                        <p className="card__sender__rating card__sender__rating-5">
                          <span className="card__sender__rating__star">&#9733;</span>
                          <span className="card__sender__rating__star">&#9733;</span>
                          <span className="card__sender__rating__star">&#9733;</span>
                          <span className="card__sender__rating__star">&#9733;</span>
                          <span className="card__sender__rating__star">&#9733;</span>
                          <span className="card__sender__rating__count">({delivcardDefaultData[0].ratingCount})</span>
                        </p>
                        <p className="card__sender__address">
                          {delivcardDefaultData[0].fromStreet}, {delivcardDefaultData[0].fromCity}
                        </p>
                      </div>
                      <div className="card__receiver">
                        <div className="card__receiver__inner">
                          <div className="card__sender__img-cont">
                            <div className="card__sender__img-cont__inner">
                              <img ng-src="{{card.senderImg}}" className="card__sender__img" />
                            </div>
                          </div>
                          <div className="card__sender__name-and-rating">
                            <p className="card__sender__name">{delivcardDefaultData[0].sender}</p>
                            <p className="card__sender__address">
                              {delivcardDefaultData[0].toStreet}, {delivcardDefaultData[0].toCity}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card__path-big"></div>
                    </div>
                    <div className="card__from-to">
                      <div className="card__from-to__inner">
                        <div className="card__text card__text--left">
                          <p className="card__text__heading">From</p>
                          <p className="card__text__middle">{delivcardDefaultData[0].fromStreet}</p>
                          <p className="card__text__bottom">{delivcardDefaultData[0].fromCity}</p>
                        </div>
                        <div className="card__text card__text--right">
                          <p className="card__text__heading">To</p>
                          <p className="card__text__middle">{delivcardDefaultData[0].toStreet}</p>
                          <p className="card__text__bottom">{delivcardDefaultData[0].toCity}</p>
                        </div>
                      </div>
                    </div>
                    <section className="card__part card__part-3">
                      <div className="card__part__side m--back"></div>
                      <div className="card__part__side m--front">
                        <div className="card__timings">
                          <div className="card__timings__inner">
                            <div className="card__text card__text--left">
                              <p className="card__text__heading">Delivery Date</p>
                              <p className="card__text__middle">{delivcardDefaultData[0].delivTime}</p>
                              <p className="card__text__bottom">{delivcardDefaultData[0].delivTime}</p>
                            </div>
                            <div className="card__text card__text--right">
                              <p className="card__text__heading">Request Deadline</p>
                              <p className="card__text__middle">{delivcardDefaultData[0].reqDl}</p>
                            </div>
                          </div>
                        </div>
                        <div className="card__timer">60 min 00 sec</div>
                        <section className="card__part card__part-4">
                          <div className="card__part__side m--back"></div>
                          <div className="card__part__side m--front">
                            <button type="button" className="card__request-btn">
                              <span className="card__request-btn__text-1">Request</span>
                              <span className="card__request-btn__text-2">Start</span>
                            </button>
                            <p className="card__counter">{delivcardDefaultData[0].requests} people have sent a request</p>
                          </div>
                        </section>
                      </div>
                    </section>
                  </div>
                </section>
              </section>

              <section  className="card theme-red">
                <div className="card__map">
                  <div className="card__map__inner"></div>
                </div>
                <section className="card__part card__part-1" >
                  <div className="card__part__inner">
                    <header className="card__header">
                      <div className="card__header__close-btn"  onClick={this.closeCard.bind(this)}></div>
                      <span className="card__header__id"> {delivcardDefaultData[0].id}</span>
                      <span className="card__header__price">{delivcardDefaultData[0].price}</span>
                    </header>
                    <div className="card__stats"   style={divStyle}>
                      <div className="card__stats__item card__stats__item--req">
                        <p className="card__stats__type">Requests</p>
                        <span className="card__stats__value">{delivcardDefaultData[0].requests}</span>
                      </div>
                      <div className="card__stats__item card__stats__item--pledge">
                        <p className="card__stats__type">Pledge</p>
                        <span className="card__stats__value">{delivcardDefaultData[0].pledge}</span>
                      </div>
                      <div className="card__stats__item card__stats__item--weight">
                        <p className="card__stats__type">Weight</p>
                        <span className="card__stats__value">{delivcardDefaultData[0].weight} oz</span>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="card__part card__part-2">
                  <div className="card__part__side m--back"  onClick={this.openCard.bind(this)}>
                    <div className="card__part__inner card__face">
                      <div className="card__face__colored-side"></div>
                      <h3 className="card__face__price">{delivcardDefaultData[0].price}</h3>
                      <div className="card__face__divider"></div>
                      <div className="card__face__path"></div>
                      <div className="card__face__from-to">
                        <p>{delivcardDefaultData[0].fromStreet}, {delivcardDefaultData[0].fromCity}</p>
                        <p>{delivcardDefaultData[0].toStreet}, {delivcardDefaultData[0].toCity}</p>
                      </div>
                      <div className="card__face__deliv-date">
                        {delivcardDefaultData[0].delivDateNoun}
                        <p>{delivcardDefaultData[0].delivTime}</p>
                      </div>
                      <div className="card__face__stats card__face__stats--req">
                        Requests
                        <p>{delivcardDefaultData[0].requests}</p>
                      </div>
                      <div className="card__face__stats card__face__stats--pledge">
                        Pledge
                        <p>{delivcardDefaultData[0].pledge}</p>
                      </div>
                      <div className="card__face__stats card__face__stats--weight">
                        Weight
                        <p className="card__face__stats__weight">
                          <span>Light</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card__part__side m--front">
                    <div className="card__sender">
                      <h4 className="card__sender__heading">Sender</h4>
                      <div className="card__sender__img-cont">
                        <div className="card__sender__img-cont__inner">
                          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-sender.jpg" className="card__sender__img" />
                        </div>
                      </div>
                      <div className="card__sender__name-and-rating">
                        <p className="card__sender__name">{delivcardDefaultData[0].sender}</p>
                        <p className="card__sender__rating card__sender__rating-5">
                          <span className="card__sender__rating__star">&#9733;</span>
                          <span className="card__sender__rating__star">&#9733;</span>
                          <span className="card__sender__rating__star">&#9733;</span>
                          <span className="card__sender__rating__star">&#9733;</span>
                          <span className="card__sender__rating__star">&#9733;</span>
                          <span className="card__sender__rating__count">({delivcardDefaultData[0].ratingCount})</span>
                        </p>
                        <p className="card__sender__address">
                          {delivcardDefaultData[0].fromStreet}, {delivcardDefaultData[0].fromCity}
                        </p>
                      </div>
                      <div className="card__receiver">
                        <div className="card__receiver__inner">
                          <div className="card__sender__img-cont">
                            <div className="card__sender__img-cont__inner">
                              <img ng-src="{{card.senderImg}}" className="card__sender__img" />
                            </div>
                          </div>
                          <div className="card__sender__name-and-rating">
                            <p className="card__sender__name">{delivcardDefaultData[0].sender}</p>
                            <p className="card__sender__address">
                              {delivcardDefaultData[0].toStreet}, {delivcardDefaultData[0].toCity}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card__path-big"></div>
                    </div>
                    <div className="card__from-to">
                      <div className="card__from-to__inner">
                        <div className="card__text card__text--left">
                          <p className="card__text__heading">From</p>
                          <p className="card__text__middle">{delivcardDefaultData[0].fromStreet}</p>
                          <p className="card__text__bottom">{delivcardDefaultData[0].fromCity}</p>
                        </div>
                        <div className="card__text card__text--right">
                          <p className="card__text__heading">To</p>
                          <p className="card__text__middle">{delivcardDefaultData[0].toStreet}</p>
                          <p className="card__text__bottom">{delivcardDefaultData[0].toCity}</p>
                        </div>
                      </div>
                    </div>
                    <section className="card__part card__part-3">
                      <div className="card__part__side m--back"></div>
                      <div className="card__part__side m--front">
                        <div className="card__timings">
                          <div className="card__timings__inner">
                            <div className="card__text card__text--left">
                              <p className="card__text__heading">Delivery Date</p>
                              <p className="card__text__middle">{delivcardDefaultData[0].delivTime}</p>
                              <p className="card__text__bottom">{delivcardDefaultData[0].delivTime}</p>
                            </div>
                            <div className="card__text card__text--right">
                              <p className="card__text__heading">Request Deadline</p>
                              <p className="card__text__middle">{delivcardDefaultData[0].reqDl}</p>
                            </div>
                          </div>
                        </div>
                        <div className="card__timer">60 min 00 sec</div>
                        <section className="card__part card__part-4">
                          <div className="card__part__side m--back"></div>
                          <div className="card__part__side m--front">
                            <button type="button" className="card__request-btn">
                              <span className="card__request-btn__text-1">Request</span>
                              <span className="card__request-btn__text-2">Start</span>
                            </button>
                            <p className="card__counter">{delivcardDefaultData[0].requests} people have sent a request</p>
                          </div>
                        </section>
                      </div>
                    </section>
                  </div>
                </section>
              </section>
    </div>)

  }
}

export default Explor;
