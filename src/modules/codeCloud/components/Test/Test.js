import React from 'react';
import ReactDOM from 'react-dom';
import {
  Loading,
  NavBar,
  WordLine,
  Taps,
  MomentsLine,
} from './../../../../common/index.js';
import userModel from './../../models/AbstractModel.js';
import PageManager from './../../core/PageManager.js';
import './Test.css';
class Test extends PageManager {
  constructor(props){
    super(props)

  }
  componentDidMount() {
    console.log(ReactDOM.findDOMNode(this.refs.qrcode));
    new QRCode(ReactDOM.findDOMNode(this.refs.qrcode), "http://www.baidu.com");
  }


  selecterHandler() {
      // console.log(ReactDOM.findDOMNode(this.qrcode));
      // new QRCode(ReactDOM.findDOMNode(this.qrcode), "http://www.baidu.com");
      var self = this;
      var selecter = new ImgSlter();
      selecter.handler = function (data) {
          ReactDOM.findDOMNode(self._imgRef).src = data.img;
          console.log(ReactDOM.findDOMNode(self._imgRef));
      };
      selecter.select();
    }


  render() {
//{ref => (this.qrcode = ref)}


    return(<div>


    <div ref='qrcode'></div>
    <img src="" ref={ref => (this._imgRef = ref)} />
    <div onClick={this.selecterHandler.bind(this)}>图片处理</div>

    </div>)

  }
}

export default Test;
