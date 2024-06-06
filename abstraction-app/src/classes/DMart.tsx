import Stores from "./Stores";

class DMart extends Stores{
    
   
    pricingStrategy(): void {
       console.log("Pricing Strategy : Everyday Low Prices")
    }
    geographicalReach(): void {
       console.log(" Geographical Reach : Primarily urban areas")
    }
    noOfStores: number= 300
    founder: string = "Radhakishan Damani"
    founded: number = 2002

    

}

export default DMart;