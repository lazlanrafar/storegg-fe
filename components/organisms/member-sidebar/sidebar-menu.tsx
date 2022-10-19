import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import classNames from "classnames";

export default function SidebarMenu() {
  const router = useRouter();

  const [listSidebar] = useState([
    {
      title: "Overview",
      icon: "/icon/ic-overview.svg",
      href: "/member",
    },
    {
      title: "Transactions",
      icon: "/icon/ic-transactions.svg",
      href: "/member/transactions",
    },
    {
      title: "Messages",
      icon: "/icon/ic-messages.svg",
      href: "/member/messages",
    },
    {
      title: "Card",
      icon: "/icon/ic-card.svg",
      href: "/member/card",
    },
    {
      title: "Rewards",
      icon: "/icon/ic-rewards.svg",
      href: "/member/rewards",
    },
    {
      title: "Settings",
      icon: "/icon/ic-settings.svg",
      href: "/member/edit-profile",
    },
    {
      title: "Log Out",
      icon: "/icon/ic-logout.svg",
      href: "/login",
    },
  ]);

  interface Item {
    title: string;
    icon: string;
    href: string;
  }

  const SidebarItem = (item: Item) => {
    const classes = classNames({
      "item mb-30": true,
      active: router.pathname === item.href,
    });
    return (
      <div className={classes}>
        <div className="icon me-3">
          <Image src={item.icon} width="25" height="25" alt={item.title} />
        </div>
        <p className="item-title m-0">
          <Link href={item.href}>
            <a className="text-lg text-decoration-none">{item.title}</a>
          </Link>
        </p>
      </div>
    );
  };

  return (
    <div className="menus">
      {listSidebar.map((item, index) => (
        <SidebarItem
          key={index}
          icon={item.icon}
          title={item.title}
          href={item.href}
        />
      ))}
    </div>
  );
}
