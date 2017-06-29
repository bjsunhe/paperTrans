import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './ToggleCard.css';
class ToggleCard extends Component {
  constructor(props){
    super(props)
    this.state={
      cardStatus:`card ${this.props.colorStyle}`
    }
  }


  openCard(){
    this.setState({
      cardStatus:`card ${this.props.colorStyle} flip-step1`,
    })
    let that=this;
    setTimeout(()=>{
      that.setState({
        cardStatus:`card ${this.props.colorStyle} flip-step1 flip-step2` ,
      })
    },200)

    setTimeout(()=>{
      that.setState({
        cardStatus:`card ${this.props.colorStyle} flip-step1 flip-step2 flip-step3`,
      })
    },500)
  }

  closeCard(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      cardStatus:`card ${this.props.colorStyle} flip-step1 flip-step2 `,
    })
    let that=this;
    setTimeout(()=>{
      that.setState({
        cardStatus:`card ${this.props.colorStyle} flip-step1 `,
      })
    },200)

    setTimeout(()=>{
      that.setState({
        cardStatus:`card ${this.props.colorStyle} `,
      })
    },500)
  }



  render() {

    var divStyle = this.props.divStyle;
    var delivcardDefaultData = this.props.delivcardDefaultData;

    return(<div>


              <section  className={this.state.cardStatus}>
                <div className="card__map">
                  <div className="card__map__inner"></div>
                </div>
                <section className="card__part card__part-1" >
                  <div className="card__part__inner">
                    <header className="card__header">
                      <div className="card__header__close-btn"  onClick={this.closeCard.bind(this)}></div>
                      <span className="card__header__id"> {delivcardDefaultData.id}</span>
                      <span className="card__header__price">{delivcardDefaultData.price}</span>
                    </header>
                    <div className="card__stats"   style={divStyle}>
                      <div className="card__stats__item card__stats__item--req">
                        <p className="card__stats__type">Requests</p>
                        <span className="card__stats__value">{delivcardDefaultData.requests}</span>
                      </div>
                      <div className="card__stats__item card__stats__item--pledge">
                        <p className="card__stats__type">Pledge</p>
                        <span className="card__stats__value">{delivcardDefaultData.pledge}</span>
                      </div>
                      <div className="card__stats__item card__stats__item--weight">
                        <p className="card__stats__type">Weight</p>
                        <span className="card__stats__value">{delivcardDefaultData.weight} oz</span>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="card__part card__part-2">
                  <div className="card__part__side m--back"  onClick={this.openCard.bind(this)}>
                    <div className="card__part__inner card__face">
                      <div className="card__face__colored-side"></div>
                      <h3 className="card__face__price">{delivcardDefaultData.price}</h3>
                      <div className="card__face__divider"></div>
                      <div className="card__face__path"></div>
                      <div className="card__face__from-to">
                        <p>{delivcardDefaultData.fromStreet}, {delivcardDefaultData.fromCity}</p>
                        <p>{delivcardDefaultData.toStreet}, {delivcardDefaultData.toCity}</p>
                      </div>
                      <div className="card__face__deliv-date">
                        {delivcardDefaultData.delivDateNoun}
                        <p>{delivcardDefaultData.delivTime}</p>
                      </div>
                      <div className="card__face__stats card__face__stats--req">
                        Requests
                        <p>{delivcardDefaultData.requests}</p>
                      </div>
                      <div className="card__face__stats card__face__stats--pledge">
                        Pledge
                        <p>{delivcardDefaultData.pledge}</p>
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
                        <p className="card__sender__name">{delivcardDefaultData.sender}</p>
                        <p className="card__sender__rating card__sender__rating-5">
                          <span className="card__sender__rating__star">&#9733;</span>
                          <span className="card__sender__rating__star">&#9733;</span>
                          <span className="card__sender__rating__star">&#9733;</span>
                          <span className="card__sender__rating__star">&#9733;</span>
                          <span className="card__sender__rating__star">&#9733;</span>
                          <span className="card__sender__rating__count">({delivcardDefaultData.ratingCount})</span>
                        </p>
                        <p className="card__sender__address">
                          {delivcardDefaultData.fromStreet}, {delivcardDefaultData.fromCity}
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
                            <p className="card__sender__name">{delivcardDefaultData.sender}</p>
                            <p className="card__sender__address">
                              {delivcardDefaultData.toStreet}, {delivcardDefaultData.toCity}
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
                          <p className="card__text__middle">{delivcardDefaultData.fromStreet}</p>
                          <p className="card__text__bottom">{delivcardDefaultData.fromCity}</p>
                        </div>
                        <div className="card__text card__text--right">
                          <p className="card__text__heading">To</p>
                          <p className="card__text__middle">{delivcardDefaultData.toStreet}</p>
                          <p className="card__text__bottom">{delivcardDefaultData.toCity}</p>
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
                              <p className="card__text__middle">{delivcardDefaultData.delivTime}</p>
                              <p className="card__text__bottom">{delivcardDefaultData.delivTime}</p>
                            </div>
                            <div className="card__text card__text--right">
                              <p className="card__text__heading">Request Deadline</p>
                              <p className="card__text__middle">{delivcardDefaultData.reqDl}</p>
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
                            <p className="card__counter">{delivcardDefaultData.requests} people have sent a request</p>
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

export default ToggleCard;
