import Image from "next/image";

interface Props {
  title1: string;
  title2: string;
  image: string;
  total: string;
}

export default function CardTotalTopup(props: Props) {
  return (
    <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
      <div className="categories-card">
        <div className="d-flex align-items-center mb-24">
          <Image src={props.image} width="60" height="60" alt="Desktop" />
          <p className="color-palette-1 mb-0 ms-12">
            {props.title1} <br /> {props.title2}
          </p>
        </div>
        <div>
          <p className="text-sm color-palette-2 mb-1">Total Spent</p>
          <p className="text-2xl color-palette-1 fw-medium m-0">
            {props.total}
          </p>
        </div>
      </div>
    </div>
  );
}
