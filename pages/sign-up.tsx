import Image from "next/image";
import Link from "next/link";
import React from "react";
import AtomInputText from "../components/atoms/atom-input-text";

export default function SignUp() {
  return (
    <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
      <div className="container mx-auto">
        <form action="">
          <div className="pb-50">
            <Link href={"/"}>
              <a className="navbar-brand">
                <Image src="/logo.svg" width={60} height={60} alt="Logo" />
              </a>
            </Link>
          </div>
          <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
          <p className="text-lg color-palette-1 m-0">
            Daftar dan bergabung dengan kami
          </p>
          <div className="pt-50">
            <AtomInputText label="Full Name" placeholder="Enter your name" />
          </div>
          <div className="pt-30">
            <AtomInputText
              label="Email Address"
              placeholder="Enter your email address"
              type="email"
            />
          </div>
          <div className="pt-30">
            <AtomInputText
              label="Password"
              placeholder="Your password"
              type="password"
            />
          </div>
          <div className="button-group d-flex flex-column mx-auto pt-50">
            <Link href={"/sign-up-photo"}>
              <a
                className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
                role="button"
              >
                Continue
              </a>
            </Link>

            <Link href={"/sign-in"}>
              <a
                className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
                role="button"
              >
                Sign In
              </a>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
