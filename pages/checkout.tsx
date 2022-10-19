import Image from "next/image";
import Link from "next/link";
import CheckoutGameTitle from "../components/molecules/checkout-game-title";
import CheckoutTable from "../components/molecules/checkout-table";

export default function Checkout() {
  return (
    <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
      <div className="container-fluid">
        <div className="logo text-md-center text-start pb-50">
          <a className="" href="#">
            <Image src="/logo.svg" width="60" height="60" alt="logo" />
          </a>
        </div>
        <div className="title-text pt-md-50 pt-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
          <p className="text-lg color-palette-1 mb-0">
            Waktunya meningkatkan cara bermain
          </p>
        </div>
        <CheckoutGameTitle
          game="Mobile Legends:"
          typeTopUp="The New Battle 2021"
          category="Mobile"
        />
        <hr />
        <div className="purchase pt-md-50 pt-30">
          <CheckoutTable
            title="Purchase Details"
            items={[
              { text: "Your Game ID", value: "masayoshizero" },
              { text: "Order ID", value: "#GG001" },
              { text: "Item", value: "250 Diamonds" },
              { text: "Price", value: "Rp 42.280.500" },
              { text: "Tax (10%)", value: "Rp 4.228.000" },
              { text: "Total", value: "Rp 55.000.600", color: "blue" },
            ]}
          />
        </div>
        <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
          <CheckoutTable
            title="Payment Informations"
            items={[
              { text: "Your Account Name", value: "Masayoshi Angga Zero" },
              { text: "Type", value: "Worldwide Transfer" },
              { text: "Bank Name", value: "Mandiri" },
              { text: "Bank Account Name", value: "PT Store GG Indonesia" },
              { text: "Bank Number", value: "1800 - 9090 - 2021" },
            ]}
          />
        </div>
        <label className="checkbox-label text-lg color-palette-1">
          I have transferred the money
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <div className="d-md-block d-flex flex-column w-100 pt-50">
          <Link href="/checkout-complete">
            <a className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg">
              Confirm Payment
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
