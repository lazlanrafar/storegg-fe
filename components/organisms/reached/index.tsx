import React from "react";

export default function Reached() {
  const [reachedState, setReachedState] = React.useState([
    {
      text: "Players Top Up",
      value: "290M+",
    },
    {
      text: "Games Available",
      value: "12.500",
    },
    {
      text: "Happy Players",
      value: "99,9%",
    },
    {
      text: "Rating Worldwide",
      value: "4.7",
    },
  ]);
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          {reachedState.map((item, index) => (
            <>
              <div className="me-lg-35">
                <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
                  {item.value}
                </p>
                <p className="text-lg text-lg-start text-center color-palette-2 m-0">
                  {item.text}
                </p>
              </div>
              {index !== reachedState.length - 1 && (
                <>
                  <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
                  <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
                </>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
