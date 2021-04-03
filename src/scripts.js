'use strict';

const e = React.createElement;



class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return e(
        'button',
        {
          onClick: () => {
            this.setState({ liked: false }),
            console.log('click me')
          }
        },
        'liked'
      );
    } else {
      return e(
        'button',
        { 
          onClick: () => {
            this.setState({ liked: true }),
            console.log('jsx works')
          }
        },
        'click me'
      );
    }
  }
}


const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);


// to run JSX listener
// npm init -y
// npm install babel-cli@6 babel-preset-react-app@3
// npx babel --watch src --out-dir js --presets react-app/prod
