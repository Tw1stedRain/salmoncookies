'use strict';

//constructor for all stores

var Store = function(name, minCustomersPerHour, maxCustomersPerHour, averageCookiesSoldPerCustomer){
  this.name = name;
  this.min = minCustomersPerHour;
  this.max = maxCustomersPerHour;
  this.avgCookiesPerSale = averageCookiesSoldPerCustomer;
  this.cookiesSoldEachHour = [];
  this.totalSales = 0;
};

//all store prototypes:

Store.prototype.calculateCustomersPerHour = function(){
  var randomAmount = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return Math.round(randomAmount * this.avgCookiesPerSale);
};

Store.prototype.calculateCookiesSoldEachHour = function(){
  for(var i = 0; i < 15; i++){
    this.cookiesSoldEachHour.push(this.calculateCustomersPerHour());
    this.totalSales += this.cookiesSoldEachHour[i];
  }
};

Store.prototype.renderHours = function(){
  this.calculateCookiesSoldEachHour();

  //step 1: reference a container element
  var storesContainer = document.getElementById('stores');
  console.log(storesContainer);

  //step 2: make new element
  var headerEl = document.createElement('h2');
  console.log(headerEl);

  //step 3: give element content
  headerEl.textContent = this.name;

  //step 4
  storesContainer.appendChild(headerEl);

  var ulEl = document.createElement('ul');
  for(var i in this.cookiesSoldEachHour){
    
    //step 2(again)
    var listItemEl = document.createElement('li');
    console.log(listItemEl);

    //step 3(again)
    listItemEl.textContent = this.storeHours[i] + this.cookiesSoldEachHour[i];
    ulEl.appendChild(listItemEl);
  }

  storesContainer.appendChild(ulEl);
};

Store.prototype.renderAsTableRow = function(){
  this.calculateCookiesSoldEachHour();
  var tableEl = document.getElementById('store-table');
  var trEl = document.createElement('tr');

  //S3: give element content, a table row takes in table headers, and table data as content
  //give a table row a table header element
  var thEl = document.createElement('th'); //table header
  thEl.textContent = this.name;
  trEl.appendChild(thEl); //append th to the row

  //loop to create cookies/hr, append
  var tdEl = document.createElement('td');

  for(var i in this.cookiesSoldEachHour){
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesSoldEachHour[i];
    console.log(tdEl);
    trEl.appendChild(tdEl);
  }

  //total sales, append
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalSales;
  trEl.appendChild(tdEl);
  tableEl.appendChild(trEl);

};


// =============================
// Declare Objects
// =============================
var allSalmonStores = [];

var pikePlace = new Store('1st and Pike', 23, 65, 6.3, 0);
console.log(pikePlace);
var seaTac = new Store('SeaTac', 30, 35, 3.14, 0);
console.log(seaTac);
var center = new Store('Seattle Center', 11, 38, 3.7, 0);
console.log(center);
var capitol = new Store('Capitol Hill', 20, 38, 2.3, 0);
console.log(capitol);
var alki = new Store('Alki', 2, 16, 4.6, 0);
console.log(alki);

allSalmonStores.push(pikePlace);
allSalmonStores.push(seaTac);
allSalmonStores.push(center);
allSalmonStores.push(capitol);
allSalmonStores.push(alki);

//=============================
// Render Stores
//=============================

var renderAllStores = function(){
  pikePlace.renderHours();
  seaTac.renderHours();
  center.renderHours();
  capitol.renderHours();
  alki.renderHours();
};

var renderAllStoresAsTableRow = function(){
  pikePlace.renderAsTableRow();
  seaTac.renderAsTableRow();
  center.renderAsTableRow();
  capitol.renderAsTableRow();
  alki.renderAsTableRow();
};



renderAllStoresAsTableRow();

// renderAllStores();
