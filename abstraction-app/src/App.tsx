import React from 'react';
import logo from './logo.svg';
import './App.css';
import DMart from './classes/DMart';
import Reliance from './classes/Reliance';
import More from './classes/More';

function App() {

let dMartStore = new DMart();
console.log(dMartStore.founded);
console.log(dMartStore.founder);
console.log(dMartStore.noOfStores)
dMartStore.storeFormats()
dMartStore.customerExperience()
dMartStore.productRange()
dMartStore.pricingStrategy()
dMartStore.geographicalReach()


let relianceMart = new Reliance();
console.log(relianceMart.founded);
console.log(relianceMart.founder);
console.log(relianceMart.noOfStores)
relianceMart.storeFormats()
relianceMart.customerExperience()
relianceMart.productRange()
relianceMart.pricingStrategy()
relianceMart.geographicalReach()



let moreStore = new More();
console.log(moreStore.founded);
console.log(moreStore.founder);
console.log(moreStore.noOfStores)
moreStore.storeFormats()
moreStore.customerExperience()
moreStore.productRange()
moreStore.pricingStrategy()
moreStore.geographicalReach()



  return (
    <div className="App">
     
    </div>
  );
}

export default App;
