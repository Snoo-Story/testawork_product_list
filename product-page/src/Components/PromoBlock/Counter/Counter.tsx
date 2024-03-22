import { useState } from "react"
import "./Counter.css"

export const Counter = () => {
    const [counter, setCounter] = useState<number>(0)

    const addProduct = () => {
        setCounter(1)
    }

    return (
        <div className={`counter ${counter === 0 ? 'blue-background' : 'white-background'}`}>
            {
                counter === 0 ? 
                <div>
                    <button onClick={addProduct} className="cart">В корзину</button>
                </div> : 
                <div className="counterControl">
                    <button onClick={() => setCounter((counter) => counter -1)}>-</button>
                    <p>{counter} шт.</p>
                    <button onClick={() => setCounter((counter) => counter + 1)}>+</button>
                </div>
            }
        </div>
    )
}