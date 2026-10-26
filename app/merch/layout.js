import { CartProvider } from '../components/v3/merch/Cart';

// Every merch page shares one cart and its drawer
export default function MerchLayout({ children }) {
  return <CartProvider>{children}</CartProvider>;
}
