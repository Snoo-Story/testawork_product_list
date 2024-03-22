import "./Products.css"

export const Products = () => {
    return (
        <div className="content productsContent">
            <div className="container flex-products">
                <div className="sortedProducts">
                    <p className="targetTitle">Женщинам</p>
                    <div className="column">
                        <a href="#">Одежда</a>
                        <a href="#">Обувь</a>
                        <a href="#">Аксессуары</a>
                        <a href="#">Белье</a>
                        <a href="#">Bra fitting</a>
                    </div>
                </div>
                <div className="sortedProducts">
                    <p className="targetTitle">Мужчинам</p>
                    <div className="column">
                        <a href="#">Одежда</a>
                        <a href="#">Обувь</a>
                        <a href="#">Аксессуары</a>
                        <a href="#">Белье</a>
                    </div>
                </div>
                <div className="sortedProducts">
                    <p className="targetTitle">Детям</p>
                    <div className="column">
                        <a href="#">Одежда</a>
                        <a href="#">Обувь</a>
                        <a href="#">Аксессуары</a>
                        <a href="#">Белье</a>
                        <a href="#">Игрушки</a>
                        <a href="#">Малыши</a>
                    </div>
                </div>
                <div className="sortedProducts">
                    <p className="targetTitle">Виды спорта</p>
                    <div className="column">
                        <a href="#">Велоспорт</a>
                        <a href="#">Туризм</a>
                        <a href="#">Тренажоры и фитнесс</a>
                        <a href="#">Командные виды спорта</a>
                        <a href="#">Самокаты</a>
                    </div>
                </div>
            </div>
        </div>
    )
}