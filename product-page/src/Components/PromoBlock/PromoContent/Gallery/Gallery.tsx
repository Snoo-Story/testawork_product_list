import "./Gallery.css";
import Card from "/src/Images/card.png"
import Product from "/src/Images/img.png"

export const Gallery = () => {
    return (
        <div className="gallery">
            <img  src={Product} alt="product"/>
            <div className="galleryItem">
                <p className="arrow">{'<'}</p>
                <img src={Card} alt="card" />
                <p className="arrow">{'>'}</p>
            </div>
        </div>
    )
}