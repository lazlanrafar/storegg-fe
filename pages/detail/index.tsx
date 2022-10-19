import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AtomInputRadio from "../../components/atoms/atom-input-radio";
import AtomInputText from "../../components/atoms/atom-input-text";
import Footer from "../../components/organisms/footer";
import Navbar from "../../components/organisms/navbar";
import DetailGameTitle from "../../components/molecules/detail-game-title";

export default function Detail() {
  return (
    <>
      <Navbar />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
              Top Up
            </h2>
            <p className="text-lg color-palette-1 mb-0">
              Perkuat akun dan jadilah pemenang
            </p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <div className="row align-items-center">
                <div className="col-md-12 col-4">
                  <Image
                    src="/img/Thumbnail-3.png"
                    width="280"
                    height="380"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <DetailGameTitle
                  type="mobile"
                  game="Mobile Legends"
                  typeTopUp="The New Battle 2021"
                  category="Mobile"
                />
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <DetailGameTitle
                type="desktop"
                game="Mobile Legends"
                typeTopUp="The New Battle 2021"
                category="Mobile"
              />
              <hr />
              <form action="./checkout.html" method="POST">
                <div className="pt-md-50 pt-30">
                  <AtomInputText
                    label="Verify ID"
                    placeholder="Enter your ID"
                  />
                </div>
                <div className="pt-md-50 pb-md-50 pt-30 pb-20">
                  <AtomInputRadio
                    label="Nominal Top Up"
                    items={[
                      {
                        name: "125Gold",
                        value: "Rp 3.250.000",
                      },
                      {
                        name: "225Gold",
                        value: "Rp 3.250.000",
                      },
                      {
                        name: "350Gold",
                        value: "Rp 3.250.000",
                      },
                      {
                        name: "550Gold",
                        value: "Rp 3.250.000",
                      },
                      {
                        name: "750Gold",
                        value: "Rp 3.250.000",
                      },
                    ]}
                  />
                </div>
                <div className="pb-md-50 pb-20">
                  <AtomInputRadio
                    label="Payment Method"
                    items={[
                      {
                        name: "Transfer",
                        value: "Worldwide Available",
                      },
                      {
                        name: "VISA",
                        value: "Credit Card",
                      },
                    ]}
                  />
                </div>
                <div className="pb-50">
                  <AtomInputText
                    label="Bank Account Name"
                    placeholder="Enter your Bank Account Name"
                  />
                </div>
                <div className="d-sm-block d-flex flex-column w-100">
                  <Link href={"/checkout"}>
                    <a className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg">
                      Continue
                    </a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
