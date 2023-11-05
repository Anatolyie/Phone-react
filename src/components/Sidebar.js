import { BsArrowRight } from 'react-icons/bs'
import { BsArrowLeft } from 'react-icons/bs'
import { IoCloseSharp } from 'react-icons/io5'

function Sidebar({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
        <div className="sidebar">
          <h2 className="sidebar-cart" >Cart
            <IoCloseSharp onClick={onClose} className='card-remove' />
           </h2>
          {
            items.length > 0 ?
           <>
               <div className='sidebar-wrapper'>
              {items.map((obj, index) => (
                <div className="sidebar-item" key={index}>
                  <div className="sidebar-item__img" style={{backgroundImage: `url(${obj.image}`}}></div>
                  <div className='sidebar-info'>
                    <p className='sidebar-descr'>{obj.name}</p>
                    <b>{obj.price}$</b>
                  </div>
                  <IoCloseSharp onClick={() => onRemove(obj.id)}className='card-remove' />
                </div>
              ))}
            </div>
            <div className="sidebar-footer">
              <ul className="sidebar-footer__block">
                  <li>
                    <span>Total</span>
                    <div></div>
                    <b>12345 $</b>
                  </li>
              </ul>
                <button className='btn-green'>Order <BsArrowRight className='btn-green__img'/> </button>
            </div>
           </>
            :
            <div className="cartEmpty sidebar-cart__empty">
                <img src="/img/empty-cart.jpg" alt="" />
                <p>The shopping cart is empty</p>
                <button onClick={onClose} className='btn-green'>Back <BsArrowLeft className='btn-green__img btn-green__img-left'/></button>
              </div>

          }
      </div>
    </div>
  );
}

export default Sidebar;