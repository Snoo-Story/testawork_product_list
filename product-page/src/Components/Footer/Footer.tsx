import "./Footer.css";
import FooterImage from "/src/Images/footer.png";

export const Footer = () => {
    return (
        <div className="content">
            <footer className="container footerBlock">
                <div className="footerLinks">
                    <a href="#">PDF презентации</a>
                    <a href="#">Видео инструкция</a>
                    <a href="#">FAQ</a>
                    <a href="#">Мы на YouTube</a>
                    <a href="#">Политика конфиденциальности</a>
                    <a href="#">Лицензионное соглашение</a>
                </div>
                <p>
                    Настоящая Политика обработки персональных данных разработана в соответствии с Конституцией Российской Федерации, Трудовым кодексом Российской Федерации, Гражданским кодексом Российской Федерации, Федеральным законом от 27 июля 2006 года 149-ФЗ "Об информации, информационных технологиях и о защите информации",
                </p>
                <div className="companyLogo">
                    <a href="#">
                        <img src={FooterImage} alt="footer"/>
                    </a>
                    <a href="#">
                        Разработка платформы
                    </a>
                </div>
            </footer>
        </div>
    )
}