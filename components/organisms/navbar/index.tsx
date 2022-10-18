import Image from "next/image";
import Link from "next/link";
import NavItem from "./nav-item";

export default function Navbar() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <Link href={"/"}>
            <a className="navbar-brand">
              <Image
                src={"/logo.svg"}
                alt="Logo StoreGG"
                width={60}
                height={60}
              />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <NavItem title={"Home"} href={"/"} isActive={true} />
              <NavItem title={"Games"} href={"/"} />
              <NavItem title={"Rewards"} href={"/"} />
              <NavItem title={"Discover"} href={"/"} />
              <NavItem title={"Global Rank"} href={"/"} />
              <li className="nav-item my-auto">
                <a
                  className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
                  href="./src/sign-in.html"
                  role="button"
                >
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
