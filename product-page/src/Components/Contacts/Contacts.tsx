import "./Contacts.css";
import BrandImage from "/src/Images/Brand.png";

export const Contacts = () => {
  return (
    <div className="content">
      <div className="container flex-content">
        <hr />
        <div className="ContactsBlock">
          <div className="support">
            <a href="#">
              <img src={BrandImage} alt="brand"/>
            </a>
            <div className="supportContacts">
              <p className="contact">8 800 841-95-95</p>
              <p className="job">Служба поддержки</p>
            </div>
            <div className="supportContacts">
              <p className="contact">support@sport.ru</p>
              <p className="job">Служба поддержки</p>
            </div>
          </div>
          <div className="links">
            <div className="outline">
              <a href="#" className="link">
                Вакансии
              </a>
            </div>
            <div className="outline">
              <a href="#" className="link">
                Блог
              </a>
            </div>
            <div className="outline">
              <a href="#" className="link">
                Акции
              </a>
            </div>
            <div className="outline">
              <a href="#" className="link">
                Предложить идею
              </a>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};
