'use strict';

const e = React.createElement;

// ES6 isprime function
// https://stackoverflow.com/questions/40200089/number-prime-test-in-javascript
//
// bogging out on large numbers, have to limit input to 7 digits for now (see below)

const isPrime = num => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num > 1;
}


// function isPrime(n) {

//   if (n === 1) {
//     return false;
//   }
//   else if (n === 2) {
//     return true;
//   } else {
//     for (var x = 2; x < n; x++) {
//       if (n % x === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
// };

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
  return primes;
}

function getPrimes(nums = 0) {
  return primeFactorsTo(nums).join(', ');
}

function getPrimeContainer(id) {
  return document.getElementById('getPrimes' + id);
}
// self invoking iterate through ID's and render React
(function setReacts(id) {
  let idlist = [100, 1000, 10000, 100000];
  for (let xx of idlist) {
    ReactDOM.render(getPrimes(xx), getPrimeContainer(xx));
  }
})();

class CheckPrimeApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // TODO: cleanup strings into reusable variables, remove inline html
  // TODO: fix large number issue, new formula for calculating?

  handleChange(e) {
    let el = document.getElementById('primeblob2');

    if (e.target.value.length < 63) {
      if (isPrime(e.target.value) == true) {
        el.innerHTML = '<h4>' + e.target.value + ' <span class=text-success><strong>is prime!</strong></span></h4>';
      } else {
        if (e.target.value == '') {
          el.innerHTML = '<h4>Enter number to check if Prime!</h4>';
        } else {
          if (e.target.value == 1 || e.target.value == 0) {
            el.innerHTML = '<h4>Enter number to check if Prime!</h4>';
          } else {
            el.innerHTML = '<h4>' + e.target.value + ' is not prime</h4>';
          }
        }
      }
    } else {
      el = '<h4>value too large</h4>';
    }
  }
  render() {
    return (
      <input placeholder='enter number' min='0' id='largeprimeinput' type='number' value={this.state.value} onChange={this.handleChange} />
    )
  }
}


const erender = document.getElementById('primeblob');
ReactDOM.render(e(CheckPrimeApp), erender);




// to run JSX listener
// npm init -y
// npm install babel-cli@6 babel-preset-react-app@3
// npx babel --watch src --out-dir js --presets react-app/prod