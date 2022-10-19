import Image from "next/image";
import CardTotalTopup from "../../components/molecules/card-total-topup";
import TrLatestTransaction from "../../components/molecules/tr-latest-transaction";
import MemberSidebar from "../../components/organisms/member-sidebar";

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <MemberSidebar />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
          <div className="top-up-categories mb-30">
            <p className="text-lg fw-medium color-palette-1 mb-14">
              Top Up Categories
            </p>
            <div className="main-content">
              <div className="row">
                <CardTotalTopup
                  title1="Game"
                  title2="Desktop"
                  image="/img/category/il-desktop.svg"
                  total="Rp 18.000.500"
                />
                <CardTotalTopup
                  title1="Game"
                  title2="Mobile"
                  image="/img/category/il-mobile.svg"
                  total="Rp 8.455.000"
                />
                <CardTotalTopup
                  title1="Other"
                  title2="Categories"
                  image="/img/category/il-other.svg"
                  total="Rp 5.000.000"
                />
              </div>
            </div>
          </div>
          <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">
              Latest Transactions
            </p>
            <div className="main-content main-content-table overflow-auto">
              <table className="table table-borderless">
                <thead>
                  <tr className="color-palette-1">
                    <th className="text-start" scope="col">
                      Game
                    </th>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <TrLatestTransaction
                    image="/img/overview-2.png"
                    title="Call of Duty:Modern"
                    type="Dekstop"
                    item="1.000 COD Points"
                    price="Rp 1.000.000"
                    status="pending"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
