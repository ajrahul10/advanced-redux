import classes from './CartButton.module.css';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'

const CartButton = (props) => {

  const quantity = useSelector(state => state.updateCart.quantity)
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch({type: "cart/toggleCart"})
  }

  return (
    <button onClick={toggleCart} className={classes.button}>
      <span>My Cart</span>
      {quantity > 0 && <span className={classes.badge}>{quantity}</span>}
    </button>
  );
};

export default CartButton;
