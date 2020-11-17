import React from "react";
import "./Order.css";
// Moment is used to pass date time
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

// Destructure props to get order
function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      {/* Time of the order */}
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      {/* Order id  */}
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {/* Loops */}
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
