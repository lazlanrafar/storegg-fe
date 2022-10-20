import Image from "next/image";
import React from "react";
import AtomInputText from "../../components/atoms/atom-input-text";
import MemberSidebar from "../../components/organisms/member-sidebar";

export default function TransactionEditProfile() {
  return (
    <section className="edit-profile overflow-auto">
      <MemberSidebar />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="">
              <div className="photo d-flex">
                <div className="position-relative me-20">
                  <Image
                    src="/img/avatar-1.png"
                    width="90"
                    height="90"
                    className="avatar img-fluid"
                    alt="avatar"
                  />
                  <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                    <Image
                      src="/img/il-image-upload.svg"
                      width={24}
                      height={24}
                      alt="Il Image Upload"
                    />
                  </div>
                </div>
                <div className="image-upload">
                  <label htmlFor="avatar">
                    <Image
                      src="/img/il-image-upload.svg"
                      width={90}
                      height={90}
                      alt="Il Image Upload"
                    />
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                  />
                </div>
              </div>
              <div className="pt-30">
                <AtomInputText label="Full Name" placeholder="Your Full Name" />
              </div>
              <div className="pt-30">
                <AtomInputText
                  label="Email"
                  placeholder="Your Email"
                  type="email"
                />
              </div>
              <div className="pt-30">
                <AtomInputText label="Phone Number" placeholder="Your Phone" />
              </div>
              <div className="button-group d-flex flex-column pt-50">
                <button
                  type="submit"
                  className="btn btn-save fw-medium text-lg text-white rounded-pill"
                  role="button"
                >
                  Save My Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
}
