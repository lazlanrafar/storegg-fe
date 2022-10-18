import classnames from "classnames";
import Link from "next/link";

interface Props {
  title: string;
  isActive?: boolean;
  href: string;
}

export default function NavItem(props: Props) {
  const classNavLink = classnames({
    "nav-link": true,
    active: props.isActive,
  });

  return (
    <li className="nav-item my-auto">
      <Link href={props.href}>
        <a className={classNavLink}>{props.title}</a>
      </Link>
    </li>
  );
}
