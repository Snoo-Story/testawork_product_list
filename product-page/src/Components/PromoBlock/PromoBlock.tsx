import "./PromoBlock.css";
import { PromoContent } from "./PromoContent/PromoContent";

export const PromoBlock = () => {
    return (
        <div className="position">
            <div className="content">
                <div className="container promoBlock">
                    <div className="filteredProduct">
                        <p>Каталог / Обувь / Кроссовки / Беговые</p>
                        <h2>Кроссовки мужские Skechers Sunny Dale</h2>
                    </div>
                    <PromoContent/>
                </div>
            </div>
        </div>
    )
}