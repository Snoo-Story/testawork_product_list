import "./Header.css";

export const Header = () => {
    return (
        <div>
            <hr/>
            <header>
                <div className="headerContent">
                    <a href="#">Мои заказы</a>
                    <a href="#">Сотрудники</a>
                    <a href="#">Шаблоны заказов</a>
                    <a href="#">Обращения</a>
                </div>
                <div className="headerContent">
                    <div className="outline">
                        <a href="#" className="blue">Ваш менеджер</a>
                    </div>
                    <div className="outline">
                        <a href="#" className="blue">% Акции</a>
                    </div>
                    <div className="outline">
                        <a href="#" className="blue">Блог</a>
                    </div>
                </div>
            </header>
        <hr/>
        </div>
    )
}