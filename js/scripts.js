'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

// ES6 isprime function
// https://stackoverflow.com/questions/40200089/number-prime-test-in-javascript

var isPrime = function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }return num > 1;
};

// calculate prime function exercise - W3 Resource
// https://www.w3resource.com/javascript-exercises/javascript-math-exercise-43.php

function primeFactorsTo(max) {
  var store = [],
      i,
      j,
      primes = [];
  for (i = 2; i <= max; ++i) {
    if (!store[i]) {
      primes.push(i);
      for (j = i << 1; j <= max; j += i) {
        store[j] = true;
      }
    }
  }
  store = null;
  return primes;
}

function GetPrimes() {
  return primeFactorsTo(100).join(', ');
}

function GetPrimes1000() {
  return primeFactorsTo(1000).join(', ');
}

function GetPrimes10000() {
  return primeFactorsTo(10000).join(', ');
}

function GetPrimes100000() {
  return primeFactorsTo(100000).join(', ');
}

var primeContainer1 = document.getElementById('getPrimes100');
ReactDOM.render(e(GetPrimes), primeContainer1);

var primeContainer2 = document.getElementById('getPrimes1000');
ReactDOM.render(e(GetPrimes1000), primeContainer2);

var primeContainer3 = document.getElementById('getPrimes10000');
ReactDOM.render(e(GetPrimes10000), primeContainer3);

var primeContainer4 = document.getElementById('getPrimes100000');
ReactDOM.render(e(GetPrimes100000), primeContainer4);

// class CheckPrimeApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }


//   handleChange(e) {
//     setTimeout(function () {
//       if (e.target.value.length < 12) {

//         console.log(e.target.value);
//         if (isPrime(e.target.value) == true) {
//           document.getElementById('blob2').innerHTML = '<h4>' + e.target.value + ' <span class=text-success><strong>is prime!</strong></span></h4>';
//         } else {
//           if (e.target.value == '') {
//             document.getElementById('blob2').innerHTML = '<h4>Enter number to check if Prime!</h4>';
//           } else {
//             if (e.target.value == 1 || e.target.value == 0) {
//               document.getElementById('blob2').innerHTML = '<h4>Enter number to check if Prime!</h4>';
//             } else {
//               document.getElementById('blob2').innerHTML = '<h4>' + e.target.value + ' is not prime</h4>';
//             }
//           }
//         }
//       } else {
//         document.getElementById('blob2').innerHTML = '<h4>too long</h4>';
//       }

//     }, 600);
//   }

//   render() {
//     return (
//       <input placeholder='enter number' min='0' id='primeinput' type='number' value={this.state.value} onChange={this.handleChange} />
//     )
//   }
// }

// ReactDOM.render(<CheckPrimeApp />, document.getElementById('blob'));


var CheckPrimeLargeApp = function (_React$Component) {
  _inherits(CheckPrimeLargeApp, _React$Component);

  function CheckPrimeLargeApp(props) {
    _classCallCheck(this, CheckPrimeLargeApp);

    var _this = _possibleConstructorReturn(this, (CheckPrimeLargeApp.__proto__ || Object.getPrototypeOf(CheckPrimeLargeApp)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(CheckPrimeLargeApp, [{
    key: 'handleChange',
    value: function handleChange(e) {
      setTimeout(function () {

        console.log(e.target.value);
        if (isPrime(e.target.value) == true) {
          document.getElementById('largeblob2').innerHTML = '<h4>' + e.target.value + ' <span class=text-success><strong>is prime!</strong></span></h4>';
        } else {
          if (e.target.value == '') {
            document.getElementById('largeblob2').innerHTML = '<h4>Enter number to check if Prime!</h4>';
          } else {
            if (e.target.value == 1 || e.target.value == 0) {
              document.getElementById('largeblob2').innerHTML = '<h4>Enter number to check if Prime!</h4>';
            } else {
              document.getElementById('largeblob2').innerHTML = '<h4>' + e.target.value + ' is not prime</h4>';
            }
          }
        }
      }, 1000);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement('input', { placeholder: 'enter number', min: '0', id: 'largeprimeinput', type: 'number', value: this.state.value, onBlur: this.handleChange });
    }
  }]);

  return CheckPrimeLargeApp;
}(React.Component);

ReactDOM.render(React.createElement(CheckPrimeLargeApp, null), document.getElementById('largeblob'));

// to run JSX listener
// npm init -y
// npm install babel-cli@6 babel-preset-react-app@3
// npx babel --watch src --out-dir js --presets react-app/prod