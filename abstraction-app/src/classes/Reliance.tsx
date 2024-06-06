import Stores from "./Stores";

class Reliance extends Stores{
    pricingStrategy(): void {
        console.log("Pricing Strategy :Competitive Pricing, Wide Range")
     }
     geographicalReach(): void {
        console.log(" Geographical Reach :Pan-India, including rural areas")
     }
    noOfStores: number= 12000
    founder: string ="Mukesh Ambani"
    founded: number = 2006

}

export default Reliance;