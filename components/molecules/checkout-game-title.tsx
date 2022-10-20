interface Props {
  game: string;
  typeTopUp: string;
  category: string;
  status?: "success" | "pending" | "failed";
}

export default function CheckoutGameTitle(props: Props) {
  return (
    <div className="d-flex flex-row  align-items-center justify-content-between ">
      <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
        <div className="pe-4">
          <div className="cropped">
            <img src="/img/Thumbnail-3.png" className="img-fluid" alt="" />
          </div>
        </div>
        <div>
          <p className="fw-bold text-xl color-palette-1 mb-10">
            {props.game} :
            <br /> {props.typeTopUp}
          </p>
          <p className="color-palette-2 m-0">Category: {props.category}</p>
        </div>
      </div>
      {props.status && <PaymentStatus status={props.status} />}
    </div>
  );
}

const PaymentStatus = (props: { status: string }) => {
  switch (props.status) {
    case "success":
      return (
        <div>
          <p className="fw-medium text-center label pending m-0 rounded-pill">
            Pending
          </p>
        </div>
      );
    case "failed":
      return (
        <div>
          <p className="fw-medium text-center label pending m-0 rounded-pill">
            Pending
          </p>
        </div>
      );
    case "pending":
      return (
        <div>
          <p className="fw-medium text-center label pending m-0 rounded-pill">
            Pending
          </p>
        </div>
      );
    default:
      return <></>;
  }
};
