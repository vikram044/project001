import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useNavigation } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';

function SubTotal () {
    const history = useNavigation();
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="subtotal">
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p>
                  {/* Part of the homework */}
                  Subtotal ({basket.length} items): <strong>{value}</strong>
                </p>
                <small className="subtotal__gift">
                  <input type="checkbox" /> This order contains a gift
                </small>
              </>
            )}
            decimalScale={2}
            // eslint-disable-next-line no-undef
            value={getBasketTotal(basket)} // Part of the homework
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
    
          <button>Proceed to Checkout</button>
        </div>
      );

}

export default SubTotal;
