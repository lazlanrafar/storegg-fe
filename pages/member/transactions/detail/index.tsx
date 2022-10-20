import React from "react";
import CheckoutGameTitle from "../../../../components/molecules/checkout-game-title";
import CheckoutTable from "../../../../components/molecules/checkout-table";
import MemberSidebar from "../../../../components/organisms/member-sidebar";

export default function TransactionDetail() {
  return (
    <section className="transactions-detail overflow-auto">
      <MemberSidebar />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">
            Details #GG001
          </h2>
          <div className="details">
            <div className="main-content main-content-card overflow-auto">
              <section className="checkout mx-auto">
                <CheckoutGameTitle
                  game="Mobile Legends:"
                  typeTopUp="The New Battle 2021"
                  category="Mobile"
                  status="pending"
                />
                <hr />
                <div className="purchase pt-30">
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
                <div className="payment pt-10 pb-10">
                  <CheckoutTable
                    title="Payment Informations"
                    items={[
                      {
                        text: "Your Account Name",
                        value: "Masayoshi Angga Zero",
                      },
                      { text: "Type", value: "Worldwide Transfer" },
                      { text: "Bank Name", value: "Mandiri" },
                      {
                        text: "Bank Account Name",
                        value: "PT Store GG Indonesia",
                      },
                      { text: "Bank Number", value: "1800 - 9090 - 2021" },
                    ]}
                  />
                </div>
                <div className="d-md-block d-flex flex-column w-100">
                  <a
                    className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg"
                    href="#"
                    role="button"
                  >
                    WhatsApp ke Admin
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
