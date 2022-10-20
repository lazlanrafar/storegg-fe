import Image from "next/image";
import Link from "next/link";
import AtomStatusTable from "../atoms/atom-table-status";

interface Props {
  title: string;
  image: string;
  type: string;
  item: string;
  price: string;
  status: "success" | "pending" | "failed";
  action: boolean;
}

export default function TrTransaction(props: Props) {
  return (
    <tr data-category="pending" className="align-middle">
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
        <p className="fw-medium color-palette-1 m-0">{props.item}</p>
      </td>
      <td>
        <p className="fw-medium color-palette-1 m-0">{props.price}</p>
      </td>
      <td>
        <AtomStatusTable status={props.status} />
      </td>
      {props.action && (
        <td>
          <Link href={"/member/transactions/detail/"}>
            <a className="btn btn-status rounded-pill text-sm">Details</a>
          </Link>
        </td>
      )}
    </tr>
  );
}
