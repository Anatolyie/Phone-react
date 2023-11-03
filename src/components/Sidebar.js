
function Sidebar({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
        <div className="sidebar">
          <h2 className="sidebar-cart" >Cart
           <img 
                onClick={onClose}
                src="/img/btn-remove.svg"
                alt="btn-remove" 
                className='cartRemove' 
                width={30} 
                height={30}
            />
           </h2>
           <>
              {items.map((obj, index) => (
                <div className="sidebar-item" key={index}>
                  <div className="sidebar-item__img"  style={{backgroundImage: `url(${obj.image}`}}></div>
                  <div className='sidebar-info'>
                    <p className='sidebar-descr'>{obj.name}</p>
                    <b>{obj.price}$</b>
                  </div>
                  <img src="/img/btn-remove.svg"
                        alt="btn-remove"
                        className='sidebar-remove'
                        // onClick={() => onRemove(obj.id)}
                    />
                </div>
                ))}
            <div className="sidebar-footer">
              <ul className="sidebar-footer__block">
                  <li>
                    <span>Total</span>
                    <div></div>
                    <b>12345 $</b>
                  </li>
              </ul>
                <button className='btn-green'>Order <img src="/img/arrow.svg" alt="arrow" /></button>
            </div>
           </>
            {/* <div className="cartEmpty">
                <img src="/img/empty-cart.jpg" alt="" />
                <p>The shopping cart is empty</p>
                <button onClick={onClose} className='btn-green'>Back <img src="/img/arrow.svg" alt="arrow" /></button>
            </div> */}
      </div>
    </div>
  );
}

export default Sidebar;