'use strict';

// function randomCustomer(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   console.log(Math.floor(Math.random() * (max - min + 1)) + min);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

var pike_1st = {
  location: '1st and Pike',
  min: 23,
  max: 65,
  avgCookies: 6.3,
  randomCustomer: function(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    var customers = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(customers);
  }
};



var seaTac = {
  location: 'SeaTac Airport',
  min: 3,
  max: 24,
  avgCookies: 1.2
};

var seattle = {
  location: 'Seattle Center',
  min: 11,
  max: 38,
  avgCookies: 3.7
};

var capitol = {
  location: 'Capitol Hill',
  min: 20,
  max: 38,
  avgCookies: 2.3,
};

var alki = {
  location: 'Alki',
  min: 2,
  max: 16,
  avgCookies: 4.6,
};
