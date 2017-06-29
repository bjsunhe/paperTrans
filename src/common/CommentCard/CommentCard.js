import React, { Component } from 'react';
import './CommentCard.css';
class CommentCard  extends Component {
  constructor(props){
    super(props)

  }

  render() {


    return (
      <section>
        <div id="poster">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-1.jpg" alt="© Kamil Czujowski // @kamilczujowski " />

          <a id="love"></a>
        </div>
        <div id="add">
          <p>
            2
            <span>
              Comments
            </span>
          </p>

          <a  id="comment"></a>
        </div>
        <hr />
        <div id="comments">
          <section>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-sender.jpg" alt="© Kamil Czujowski // @kamilczujowski " />
            <article>
              <h1>
                Jannik Paare
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
              </p>
            </article>

            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-sender.jpg" alt="© Kamil Czujowski // @kamilczujowski " />
            <article>
              <h1>
                Kamil Czujowski
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
              </p>
            </article>
          </section>
        </div>
      </section>
    )
  }
}

export default CommentCard;
