'use strict';

//constructor for all stores

var Store = function(name, minCustomersPerHour, maxCustomersPerHour, averageCookiesSoldPerCustomer){
  this.name = name;
  this.min = minCustomersPerHour;
  this.max = maxCustomersPerHour;
  this.avgCookiesPerSale = averageCookiesSoldPerCustomer;
  this.cookiesSoldEachHour = [];
};


Store.prototype.calculateCustomersPerHour = function(){
  var randomAmount = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return Math.round(randomAmount * this.avgCookiesPerSale);
};

//Pike Place
var pikePlace = new Store('1st and Pike', 23, 65, 6.3);
console.log(pikePlace);

//SeaTac Store
var seaTac = new Store('SeaTac', 30, 35, 3.14);
console.log(seaTac);

//Seattle Center Store
var center = new Store('Seattle Center', 11, 38, 3.7);
console.log(center);

//Capitol Hill Store
var capitol = new Store('Capitol Hill', 20, 38, 2.3);
console.log(capitol);

//Alki Store
var alki = new Store('Alki', 2, 16, 4.6);
console.log(alki);

Store.prototype.calculateCustomersPerHour = function(){
  var randomAmount = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return Math.round(randomAmount * this.avgCookiesPerSale);
};

Store.prototype.calculateCookiesSoldEachHour = function(){
  for(var i = 0; i < 15; i++){
    this.cookiesSoldEachHour.push(this.calculateCustomersPerHour());
  }
};

Store.prototype.renderHours = function(){
  this.calculateCookiesSoldEachHour();

  var storesContainer = document.getElementById('stores');
  console.log(storesContainer);
  var headerEl = document.createElement('h2');
  console.log(headerEl);


  headerEl.textContent = this.name;
  storesContainer.appendChild(headerEl);

  var ulEl = document.createElement('ul');
  for(var i in this.cookiesSoldEachHour){
    var listItemEl = document.createElement('li');
    console.log(listItemEl);
    listItemEl.textContent = this.cookiesSoldEachHour[i];
    ulEl.appendChild(listItemEl);
  }

  storesContainer.appendChild(ulEl);
};

pikePlace.renderHours();
seaTac.renderHours();
center.renderHours();
capitol.renderHours();
alki.renderHours();
