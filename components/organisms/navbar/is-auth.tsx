import Image from "next/image";
import Link from "next/link";

interface Props {
  isAuth: boolean;
}

export default function IsAuth(props: Props) {
  if (props.isAuth) {
    interface PropsItemDropdown {
      title: string;
      href: string;
    }

    const ItemDropdown = (item: PropsItemDropdown) => {
      return (
        <li>
          <Link href={item.href}>
            <a className="dropdown-item text-lg color-palette-2">
              {item.title}
            </a>
          </Link>
        </li>
      );
    };

    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none"></div>
        <div>
          <a
            className="dropdown-toggle ms-lg-40"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <Image
              src={"/img/avatar-1.png"}
              className="rounded-circle"
              width={40}
              height={40}
              alt={"Avatar"}
            />
          </a>

          <ul
            className="dropdown-menu border-0"
            aria-labelledby="dropdownMenuLink"
          >
            <ItemDropdown title="My Profile" href="/member" />
            <ItemDropdown title="Wallet" href="/member" />
            <ItemDropdown title="Account Settings" href="/member" />
            <ItemDropdown title="Log Out" href="/sign-in" />
          </ul>
        </div>
      </li>
    );
  } else {
    return (
      <li className="nav-item my-auto">
        <Link href={"/sign-in"}>
          <a
            className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
            role="button"
          >
            Sign In
          </a>
        </Link>
      </li>
    );
  }
}
