import Link from "next/link";

interface Props {
  title: string;
  links: Link[];
}

interface Link {
  label: string;
  href: string;
}

export default function FooterList(props: Props) {
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">{props.title}</p>
      <ul className="list-unstyled">
        {props.links.map((link) => (
          <li className="mb-6" key={link.label}>
            <Link href={link.href}>
              <a className="text-lg color-palette-1 text-decoration-none">
                {link.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
