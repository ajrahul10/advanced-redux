import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux'

const Cart = (props) => {

  const cartItems = useSelector(state => state.cart.items)
  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {totalQuantity > 0 &&
        cartItems.map(item => {
          return (
            <ul key={item.id}>
              <CartItem
                item={item}
              />
            </ul>
          )
        })
      }
      {totalQuantity === 0 && <p>Nothing's here.</p>}
    </Card>
  );
};

export default Cart;
