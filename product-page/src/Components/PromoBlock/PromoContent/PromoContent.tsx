import { Gallery } from "./Gallery/Gallery";
import "./PromoContent.css";
import { PromoInformation } from "./PromoInformation/PromoInformation";

export const PromoContent = () => {
    return (
        <div className="promoContent">
            <Gallery/>
            <PromoInformation/>
        </div>
    )
}