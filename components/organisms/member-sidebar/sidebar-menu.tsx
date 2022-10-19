import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SidebarMenu() {
  const [listSidebar, setListSidebar] = useState([
    {
      title: "Overview",
      icon: "/icon/ic-overview.svg",
      href: "/member",
    },
    {
      title: "Transactions",
      icon: "/icon/ic-transactions.svg",
      href: "/member",
    },
    {
      title: "Messages",
      icon: "/icon/ic-messages.svg",
      href: "/member",
    },
    {
      title: "Card",
      icon: "/icon/ic-card.svg",
      href: "/member",
    },
    {
      title: "Rewards",
      icon: "/icon/ic-rewards.svg",
      href: "/member",
    },
    {
      title: "Settings",
      icon: "/icon/ic-settings.svg",
      href: "/member",
    },
    {
      title: "Log Out",
      icon: "/icon/ic-logout.svg",
      href: "/member",
    },
  ]);
  return (
    <div className="menus">
      {listSidebar.map((item, index) => (
        <div className="item mb-30" key={index}>
          <div className="icon me-3">
            <Image src={item.icon} width="25" height="25" alt={item.title} />
          </div>
          <p className="item-title m-0">
            <Link href={item.href}>
              <a className="text-lg text-decoration-none">{item.title}</a>
            </Link>
          </p>
        </div>
      ))}
    </div>
  );
}
