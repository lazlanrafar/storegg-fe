import Image from "next/image";

interface Props {
  label: string;
  items: Item[];
}

interface Item {
  name: string;
  value: string;
}

export default function AtomInputRadio(props: Props) {
  return (
    <>
      <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
        {props.label}
      </p>
      <fieldset id={props.label}>
        <div className="row justify-content-between">
          {props.items.map((item) => (
            <label
              className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
              htmlFor={item.name}
              key={item.name}
            >
              <input
                className="d-none"
                type="radio"
                id={item.name}
                name={props.label}
                value={item.name}
              />
              <div className="detail-card">
                <div className="d-flex justify-content-between">
                  <p className="text-3xl color-palette-1 fw-medium m-0">
                    {item.name}
                  </p>
                  <Image
                    src="/icon/ic-check.svg"
                    width={20}
                    height={20}
                    alt="Icon Check"
                    id="icon-check"
                  />
                </div>
                <p className="text-lg color-palette-1 m-0">{item.value}</p>
              </div>
            </label>
          ))}
          <div className="col-lg-4 col-sm-6">{/* <!-- Blank --> */}</div>
        </div>
      </fieldset>
    </>
  );
}
