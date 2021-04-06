'use strict';

const e = React.createElement;



// ES6 isprime function
// https://stackoverflow.com/questions/40200089/number-prime-test-in-javascript

const isPrime = num => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num > 1;
}



// calculate prime function exercise - W3 Resource
// https://www.w3resource.com/javascript-exercises/javascript-math-exercise-43.php

function primeFactorsTo(max) {
  var store = [], i, j, primes = [];
  for (i = 2; i <= max; ++i) {
    if (!store[i]) {
      primes.push(i);
      for (j = i << 1; j <= max; j += i) {
        store[j] = true;
      }
    }
  }
  store = [];
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

const primeContainer1 = document.getElementById('getPrimes100');
ReactDOM.render(e(GetPrimes), primeContainer1);

const primeContainer2 = document.getElementById('getPrimes1000');
ReactDOM.render(e(GetPrimes1000), primeContainer2);

const primeContainer3 = document.getElementById('getPrimes10000');
ReactDOM.render(e(GetPrimes10000), primeContainer3);

const primeContainer4 = document.getElementById('getPrimes100000');
ReactDOM.render(e(GetPrimes100000), primeContainer4);


class CheckPrimeApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  
  handleChange(e) {
    setTimeout(function () {
      if (e.target.value.length < 12) {
        
        console.log(e.target.value);
        if (isPrime(e.target.value) == true) {
          document.getElementById('blob2').innerHTML = '<h4>' + e.target.value + ' <span class=text-success><strong>is prime!</strong></span></h4>';
        } else {
          document.getElementById('blob2').innerHTML = '<h4>' + e.target.value + ' is not prime</h4>';
        }
      } else {
          document.getElementById('blob2').innerHTML = '<h4>too long</h4>';
      }

    }, 400);
  }

  render() {
    return (
      <input id='primeinput' type='number' value={this.state.value} onChange={this.handleChange} />
    )
  }
}

ReactDOM.render(<CheckPrimeApp />, document.getElementById('blob'));


// to run JSX listener
// npm init -y
// npm install babel-cli@6 babel-preset-react-app@3
// npx babel --watch src --out-dir js --presets react-app/prod
