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
  cookiesPerHour:[],
  cusPerHour:[],
  randomCustomer: function (min, max) {
    for (var i = 0; i < 15; i++) {
      var customers = Math.floor(Math.random() * (max - min + 1)) + min;
      this.cusPerHour.push(customers);
      console.log(customers);
    }
  },
  totalCookiePerHour: function(){
    for (var i  =0; i<15; i++){
      var cookies = Math.floor(this.cusPerHour[i] * this.avgCookies);
      this.cookiesPerHour.push(cookies);
      console.log('cookies per hour :' + cookies);
    }
  }
};


var seaTac = {
  location: 'SeaTac Airport',
  min: 3,
  max: 65,
  avgCookies: 1.2,
  cookiesPerHour:[],
  cusPerHour:[],
  randomCustomer: function (min, max) {
    for (var i = 0; i < 15; i++) {
      var customers = Math.floor(Math.random() * (max - min + 1)) + min;
      this.cusPerHour.push(customers);
      console.log(customers);
    }
  },
  totalCookiePerHour: function(){
    for (var i  =0; i<15; i++){
      var cookies = Math.floor(this.cusPerHour[i] * this.avgCookies);
      this.cookiesPerHour.push(cookies);
      console.log('cookies per hour :' + cookies);
    }
  }
};

var seattle = {
  location: 'Seattle Center',
  min: 11,
  max: 38,
  avgCookies: 3.7,
  cookiesPerHour:[],
  cusPerHour:[],
  randomCustomer: function (min, max) {
    for (var i = 0; i < 15; i++) {
      var customers = Math.floor(Math.random() * (max - min + 1)) + min;
      this.cusPerHour.push(customers);
      console.log(customers);
    }
  },
  totalCookiePerHour: function(){
    for (var i  =0; i<15; i++){
      var cookies = Math.floor(this.cusPerHour[i] * this.avgCookies);
      this.cookiesPerHour.push(cookies);
      console.log('cookies per hour :' + cookies);
    }
  }
};

var capitol = {
  location: 'Capitol Hill',
  min: 20,
  max: 38,
  avgCookies: 2.3,
  cookiesPerHour:[],
  cusPerHour:[],
  randomCustomer: function (min, max) {
    for (var i = 0; i < 15; i++) {
      var customers = Math.floor(Math.random() * (max - min + 1)) + min;
      this.cusPerHour.push(customers);
      console.log(customers);
    }
  },
  totalCookiePerHour: function(){
    for (var i  =0; i<15; i++){
      var cookies = Math.floor(this.cusPerHour[i] * this.avgCookies);
      this.cookiesPerHour.push(cookies);
      console.log('cookies per hour :' + cookies);
    }
  }
};

var alki = {
  location: 'Alki',
  min: 2,
  max: 16,
  avgCookies: 4.6,
  cookiesPerHour:[],
  cusPerHour:[],
  randomCustomer: function (min, max) {
    for (var i = 0; i < 15; i++) {
      var customers = Math.floor(Math.random() * (max - min + 1)) + min;
      this.cusPerHour.push(customers);
      console.log(customers);
    }
  },
  totalCookiePerHour: function(){
    for (var i  =0; i<15; i++){
      var cookies = Math.floor(this.cusPerHour[i] * this.avgCookies);
      this.cookiesPerHour.push(cookies);
      console.log('cookies per hour :' + cookies);
    }
  }
};
