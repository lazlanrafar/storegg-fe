import { useState } from "react";
import MemberSidebar from "../../../components/organisms/member-sidebar";
import classNames from "classnames";
import TrTransaction from "../../../components/molecules/tr-transaction";

export default function Transaction() {
  const [listNav] = useState(["All Trx", "Success", "Pending", "Failed"]);
  const [navActive, setNavActive] = useState("All Trx");

  const NavFilterItem = (props: { item: string }) => {
    const classes = classNames({
      "btn btn-status rounded-pill text-sm  me-3": true,
      "btn-active": navActive === props.item,
    });
    return (
      <a className={classes} onClick={() => setNavActive(props.item)}>
        {props.item}
      </a>
    );
  };

  return (
    <section className="transactions overflow-auto">
      <MemberSidebar />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">
            My Transactions
          </h2>
          <div className="mb-30">
            <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
            <h3 className="text-5xl fw-medium color-palette-1">
              Rp 4.518.000.500
            </h3>
          </div>
          <div className="row mt-30 mb-20">
            <div className="col-lg-12 col-12 main-content">
              <div id="list_status_title">
                {listNav.map((item) => (
                  <NavFilterItem key={item} item={item} />
                ))}
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
                    <th className="" scope="col">
                      Game
                    </th>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody id="list_status_item">
                  <TrTransaction
                    image="/img/overview-3.png"
                    title="Mobile Legends"
                    type="Mobile"
                    item="1.000 Diamonds"
                    price="Rp 1.000.000"
                    status="success"
                    action={true}
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
