export default function CartItem({
  item,
  incrementCount,
  decrementCount,
  deleteItem,
}) {
  return (
    <div className="cart-item">
      <img src={item.imageURL} alt="Product" />
      <div className="item-details">
        <h2>{item.title}</h2>
        <h3>{item.selectedSize.label}</h3>
        <h3>{`$${item.price} x ${item.count}`}</h3>
      </div>
      <div className="item-controls">
        <button onClick={() => incrementCount(item)}>+</button>
        <button onClick={() => decrementCount(item)}>-</button>
        <button onClick={() => deleteItem(item)}>Delete</button>
      </div>
    </div>
  );
}
