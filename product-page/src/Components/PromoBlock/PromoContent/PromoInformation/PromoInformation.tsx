import { Counter } from "../../Counter/Counter";
import "./PromoInformation.css";

export const PromoInformation = () => {
  return (
    <div className="promoInformation">
      <div className="informationColumn">
        <div>
          <div className="columnInfo">
            <div className="descriptionBlock">
                <p className="discount">166 534.00 цена без скидки</p>
                <div className="descriptionItem">
                    <p className="price">122 566 ₽</p>
                    <p className="discountMark">-15%</p>
                </div>
                <div className="checkBoxBlock">
                    <p className="checkboxDescription">12 штук в уп.</p>
                    <div className="checkboxForm">
                        <input type="checkbox" />
                        <p className="checkboxP">Заказ упаковкой</p>
                    </div>
                </div>
            </div>
            <div className="purchaseInfo">
                <div className="purchaseFullInfo">
                    <p className="infoMark">Завтра</p>
                    <p className="type">Доставка</p>
                </div>
                <div className="purchaseFullInfo">
                    <p className="infoMark">7 шт.</p>
                    <p className="type">Тарасовка</p>
                </div>
                <div className="purchaseFullInfo">
                    <p className="infoMark">7 шт.</p>
                    <p className="type">Тарасовка</p>
                </div>
            </div>
            <Counter/>
          </div>
        </div>
        <div className="productStats">
            <p className="statsTitle">Характеристики</p>
            <div className="statsColumns">
                <div className="firstColumn columnFlex">
                    <div className="statsFlex">
                        <p className="statsCode">ELC00696</p>
                        <p className="statsText">Код поставщика</p>
                    </div>
                    <div  className="statsFlex">
                        <p className="statsCode">ELC00696</p>
                        <p className="statsText">Код РАЭК</p>
                    </div>
                    <div  className="statsFlex">
                        <p className="statsCode">Electric used</p>
                        <p className="statsText">Брэнд</p>
                    </div>
                    <div className="statsFlex">
                        <p className="statsCode">ELC0200000696</p>
                        <p className="statsText">Код производителя</p>
                    </div>
                </div>
                <div className="secondColumn columnFlex">
                    <div className="statsFlex">
                        <p className="statsCode">ELC0200000696</p>
                        <p className="statsText">Артикул</p>
                    </div>
                    <div className="statsFlex">
                        <p className="statsCode">ELC00696</p>
                        <p className="statsText">Код ЕТМ</p>
                    </div>
                    <div className="statsFlex">
                        <p className="statsCode">ELC00696</p>
                        <p className="statsText">Серия</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="productsFullInfo">
        <h5 className="productDescriptionTitle">Описание товара</h5>
        <p className="productDescriptionParagraph">
          Создание приверженного покупателя специфицирует неопровержимый
          комплексный анализ ситуации. CTR существенно индуцирует из ряда вон
          выходящий SWOT-анализ. Воздействие на потребителя определяет
          возрастающий интеграл по поверхности, что известно даже школьникам.
          Отсюда естественно следует, что коммуникация уравновешивает косвенный
          фактор коммуникации. Поле направлений естественно допускает
          экспериментальный скачок функции, таким образом сбылась мечта идиота -
          утверждение полностью доказано. Арифметическая прогрессия притягивает
          линейно зависимый пул лояльных изданий.
        </p>
      </div>
    </div>
  );
};
