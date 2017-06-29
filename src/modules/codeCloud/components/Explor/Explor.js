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

  }


  render() {
    var divStyle = {
      backgroundImage: 'url(' + 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-1.jpg' + ')',
    };

    var delivcardDefaultDataArray = [
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


    let toggleCard=[];
    delivcardDefaultDataArray.forEach((i,index)=>{
      let colorStyle='theme-purple';
      if(index%2==0){
        colorStyle='theme-green'
      }else if(index%3==0){
        colorStyle='theme-green'
      }else if(index%4==0){
        colorStyle='theme-orange'
      }else if(index%5==0){
        colorStyle='theme-red'
      }
      let ToggleCardElement={
        divStyle,
        delivcardDefaultData:i,
        colorStyle,
      }
      toggleCard.push(<ToggleCard  {...ToggleCardElement} />)
    })
    return(<div>

              {toggleCard}

    </div>)

  }
}

export default Explor;
