import { CartProvider } from '../components/v3/merch/Cart';
import { policyLinks } from '../lib/fourthwall';

// Every merch page shares one cart and its drawer
export default function MerchLayout({ children }) {
  return <CartProvider policyLinks={policyLinks()}>{children}</CartProvider>;
}
