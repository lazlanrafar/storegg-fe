import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  type: string;
  image: string;
  item: string;
  price: string;
  status: "success" | "failed" | "pending";
}
export default function TrLatestTransaction(props: Props) {
  return (
    <tr className="align-middle text-center">
      <th scope="row">
        <div className="float-start me-3 mb-lg-0 mb-3">
          <Image src={props.image} width="80" height="60" alt="" />
        </div>
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {props.title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {props.type}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">{props.item}</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">
          {props.price}
        </p>
      </td>
      <td>
        <StatusTransaction status={props.status} />
      </td>
    </tr>
  );
}

function StatusTransaction(props: { status: string }): JSX.Element {
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
