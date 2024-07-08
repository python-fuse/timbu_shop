import CartContent from "../../components/CartContent";
import Summary from "../../components/Summary";

const CartPage = () => {
  return (
    <div className="p-2 flex flex-col min-h-screen">
      <h2 className="text-5xl">Cart</h2>

      <div className="flex flex-col space-y-4 lg:flex-row">
        <CartContent />
        <div className="right lg:w-1/4 lg:fixed right-3 bottom-3">
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
