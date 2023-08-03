export default function CartItem({
  item,
  incrementCount,
  decrementCount,
  deleteItem,
}) {
  return (
    <div className="cart-item">
      <div className="cart-details">
        <img src={item.imageURL} alt="Product" />
        <div className="item-details">
          <h2>{item.title}</h2>
          <h3>{`${item.count} x $${item.price.toFixed(2)}`}</h3>
          <h3>Size: {item.selectedSize.label}</h3>
        </div>
      </div>
      <div className="item-controls">
        <button onClick={() => incrementCount(item)}>+</button>
        <button onClick={() => decrementCount(item)}>-</button>
        <button onClick={() => deleteItem(item)} className="delete">
          x
        </button>
      </div>
    </div>
  );
}
