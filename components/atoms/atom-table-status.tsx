export default function AtomStatusTable(props: {
  status: string;
}): JSX.Element {
  switch (props.status) {
    case "success":
      return (
        <div>
          <span className="float-start icon-status success"></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            Success
          </p>
        </div>
      );
    case "failed":
      return (
        <div>
          <span className="float-start icon-status failed"></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            Failed
          </p>
        </div>
      );
    case "pending":
      return (
        <div>
          <span className="float-start icon-status pending"></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            Pending
          </p>
        </div>
      );
    default:
      return <></>;
  }
}
