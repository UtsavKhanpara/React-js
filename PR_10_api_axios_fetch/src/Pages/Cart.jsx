import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../redux/Action/CartAction";
import './Cart.css'; // For animations and custom styles

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.cart);

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center text-dark fw-bold mb-5 display-6">
        🛒 Your Premium Cart Overview
      </h2>

      {cartData?.length > 0 ? (
        <div className="row gy-5">
          {cartData.map((cart) => (
            <div className="col-12 col-md-6" key={cart.id}>
              <div className="card cart-premium shadow-lg rounded-4 fade-in border-0">
                
                {/* Header */}
                <div className="bg-gradient-primary text-white py-3 px-4 rounded-top">
                  <h5 className="mb-0">Cart ID: #{cart.id} &nbsp; | &nbsp; User ID: {cart.userId}</h5>
                </div>

                {/* Body */}
                <div className="card-body bg-white p-4">
                  <div className="mb-3">
                    <div className="d-flex flex-wrap justify-content-between text-secondary">
                      <span><strong>Total:</strong> ${cart.total}</span>
                      <span><strong>Discounted:</strong> ${cart.discountedTotal}</span>
                      <span><strong>Items:</strong> {cart.totalProducts}</span>
                      <span><strong>Qty:</strong> {cart.totalQuantity}</span>
                    </div>
                  </div>

                  <h6 className="text-dark mt-3 mb-3 fw-bold">📦 Products:</h6>

                  {/* Product List */}
                  <div className="row gy-4">
                    {cart.products.map((product) => (
                      <div className="col-12" key={product.id}>
                        <div className="card product-card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                          <div className="product-image-wrapper">
                            <img
                              src={product.thumbnail}
                              alt={product.title}
                              className="w-100"
                            />
                          </div>
                          <div className="card-body">
                            <h6 className="fw-bold text-dark">{product.title}</h6>
                            <p className="text-muted mb-1"><strong>Qty:</strong> {product.quantity}</p>
                            <p className="text-muted mb-0"><strong>Price:</strong> ${product.price}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-5">
          <h4 className="text-muted">No Cart Data Found</h4>
        </div>
      )}
    </div>
  );
};

export default Cart;
