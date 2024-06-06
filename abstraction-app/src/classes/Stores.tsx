abstract class Stores {

constructor(){
    console.log("inside store constructor")
}
abstract founded:number;
abstract founder:string;
abstract noOfStores:number;


storeFormats(){
    console.log("Store Formats : Hypermarkets")
}
customerExperience(){
    console.log("Customer Experience : Focus on self-service")
}
productRange(){
    console.log("Available Products : Groceries, FMCG, apparel, home goods , electronics")
}

abstract pricingStrategy():void;
abstract geographicalReach():void;


}

export default Stores;