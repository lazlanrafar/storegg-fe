import Image from "next/image";
import Link from "next/link";
import FooterList from "./footer-list";

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <Link href={"/"}>
                <a className="mb-30">
                  <Image src="/logo.svg" width="60" height="60" alt="" />
                </a>
              </Link>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br /> untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <FooterList
                  title="Company"
                  links={[
                    {
                      label: "About Us",
                      href: "/",
                    },
                    {
                      label: "Press Release",
                      href: "/",
                    },
                    {
                      label: "Terms of Use",
                      href: "/",
                    },
                    {
                      label: "Privacy & Policy",
                      href: "/",
                    },
                  ]}
                />
                <FooterList
                  title="Support"
                  links={[
                    {
                      label: "Refund Policy",
                      href: "/",
                    },
                    {
                      label: "Unlock Rewards",
                      href: "/",
                    },
                    {
                      label: "Live Chatting",
                      href: "/",
                    },
                  ]}
                />
                <FooterList
                  title="Connect"
                  links={[
                    {
                      label: "hi@store.gg",
                      href: "mailto: hi@store.gg",
                    },
                    {
                      label: "team@store.gg",
                      href: "mailto: hi@store.gg",
                    },
                    {
                      label: "Pasific 12, Jakarta Selatan",
                      href: "http://maps.google.com/?q=Pasific 12,Jakarta Selatan",
                    },
                    {
                      label: "021 - 1122 - 9090",
                      href: "tel: 02111229090",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
