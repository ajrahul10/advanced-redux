import classes from './CartButton.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {

  const quantity = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart())
  }

  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      {quantity > 0 && <span className={classes.badge}>{quantity}</span>}
    </button>
  );
};

export default CartButton;
