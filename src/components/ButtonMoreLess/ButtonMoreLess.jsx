import './ButtonMoreLess.css'
import { FaMinus, FaPlus } from "react-icons/fa";


export const ButtonMoreLess = ({producto, count, setCount}) => {
    const handleClickUp = () => {
        if (count < producto.stock ){
            setCount(prevCount => prevCount + 1)
        }
    }
    const handleClickDown = () => {
        if(count > 0 ){
            setCount(prevCount => prevCount -1)
        }
    }
    return(
        <div className='buttonmoreless'>
            <button onClick={handleClickDown} type='button' className='btn-left'><FaMinus /></button>
            <p className='count'>{count}</p>
            <button onClick={handleClickUp} type='button' className='btn-rigth'><FaPlus /></button>
        </div>
    )
}