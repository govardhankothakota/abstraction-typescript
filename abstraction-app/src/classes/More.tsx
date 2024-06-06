import Stores from "./Stores";

class More extends Stores{
    pricingStrategy(): void {
        console.log("Pricing Strategy :Competitive Pricing")
     }
     geographicalReach(): void {
        console.log(" Geographical Reach : Major cities and towns")
     }
    noOfStores: number= 600
    founder: string = "Aditya Birla Group (now owned by Amazon and Samara Capital)"
    founded: number = 2007

}

export default More;