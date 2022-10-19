import SidebarFooter from "./sidebar-footer";
import SidebarMenu from "./sidebar-menu";
import SidebarUserProfile from "./sidebar-user-profile";

export default function MemberSidebar() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <SidebarUserProfile />
        <SidebarMenu />
        <SidebarFooter />
      </div>
    </section>
  );
}
