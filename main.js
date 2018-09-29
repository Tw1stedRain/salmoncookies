'use strict';

var storeForm = document.getElementById('newStoreForm');

var storeHours = ['Location Name', '6am', '7am', '8am', '9am,', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total Cookies for the Day'];

//constructor for all stores
var Store = function (name, minCustomersPerHour, maxCustomersPerHour, averageCookiesSoldPerCustomer) {
  this.name = name;
  this.min = minCustomersPerHour;
  this.max = maxCustomersPerHour;
  this.avgCookiesPerSale = averageCookiesSoldPerCustomer;
  this.cookiesSoldEachHour = [];
  this.totalSales = 0;
  this.renderAsTableRow();
  locations.push(this.name);
  // allSalmonStores.push(new Store);
};
var allCookiesSold = [];
var locations = [];

//form input
var makeStore = function (newStore) {
  newStore.preventDefault();
  newStore.stopPropagation();
  // if (!newStore.target.storeName.value || !newStore.target.storeMin.value || !newStore.target.storeMax.value ||newStore.target.storeCookieAvg.value){
  //   return alert('Fields cannot be empty');
  // }
  var storeName = newStore.target.name.value;
  var storeMin = parseInt(newStore.target.min.value);
  var storeMax = parseInt(newStore.target.max.value);
  var storeCookieAvg = parseInt(newStore.target.avgCookiesPerSale.value);
  console.log(storeName, storeMin, storeMax, storeCookieAvg);
  new Store(storeName, storeMin, storeMax, storeCookieAvg);
};
storeForm.addEventListener('submit', makeStore);


//all store prototypes:

Store.prototype.calculateCustomersPerHour = function () {
  var randomAmount = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return Math.round(randomAmount * this.avgCookiesPerSale);
};

Store.prototype.calculateCookiesSoldEachHour = function () {
  for (var i = 0; i < 15; i++) {
    this.cookiesSoldEachHour.push(this.calculateCustomersPerHour());
    this.totalSales += this.cookiesSoldEachHour[i];
  }
  allCookiesSold.push(this.cookiesSoldEachHour);
};

console.log(allCookiesSold);

Store.prototype.renderHours = function () {
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
  for (var i in this.cookiesSoldEachHour) {

    //step 2(again)
    var listItemEl = document.createElement('li');
    console.log(listItemEl);

    //step 3(again)
    listItemEl.textContent = this.storeHours[i] + this.cookiesSoldEachHour[i];
    ulEl.appendChild(listItemEl);
  }

  storesContainer.appendChild(ulEl);
};

var renderTableHeader = function () {
  var trEl = document.getElementById('tableHeader');
  var thEl = document.createElement('th');
  for (var i in storeHours) {
    var tdEl = document.createElement('td');
    tdEl.textContent = storeHours[i];
    trEl.appendChild(tdEl);
  }
  trEl.appendChild(thEl);
};

Store.prototype.renderAsTableRow = function () {
  this.calculateCookiesSoldEachHour();
  var tableEl = document.getElementById('storeTable');

  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = this.name;
  trEl.appendChild(thEl);

  //loop to create cookies/hr, append
  var tdEl = document.createElement('td');
  for (var i in this.cookiesSoldEachHour) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesSoldEachHour[i];
    trEl.appendChild(tdEl);
  }
  //total sales
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalSales;
  //append
  trEl.appendChild(tdEl);
  tableEl.appendChild(trEl);
};

// =============================
// Declare Objects
// =============================
var allSalmonStores = [];

// var empty = new Store();
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

//========================================

// footer function
var renderFooterRow = function () {
  var tfEl = document.getElementById('tableFooter');

  var thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  tfEl.appendChild(thEl);

  var tdEl = document.createElement('td');
  for (var i = 0; i < 15; i++){
    var allCooksSold = 0;
    for(var x = 0; x < allSalmonStores.length; x++){
      allCooksSold = allSalmonStores[x].cookiesSoldEachHour[i] + allCooksSold;
    }
    tdEl = document.createElement('td');
    tdEl.textContent = allCooksSold;
    tfEl.appendChild(tdEl);
  }
};

//=============================
// Rendering of Stuffs
//=============================
renderTableHeader();
renderFooterRow();


var renderAllStores = function () {
  pikePlace.renderHours();
  seaTac.renderHours();
  center.renderHours();
  capitol.renderHours();
  alki.renderHours();
};
// renderAllStores();

