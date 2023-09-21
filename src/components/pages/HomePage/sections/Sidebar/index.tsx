import SidebarLinks from "@/components/molecules/SidabarLinks";
import SidebarConnects from "@/components/molecules/SidebarConnects";
import SidebarProposalCard from "@/components/molecules/SidebarProposalCard";

const Sidebar = () => {
  return (
    <aside>
      <SidebarConnects />
      <SidebarProposalCard
        title="Proposals"
        link1="My Proposals"
        link2=""
        paragraph="Looking for work? Browse jobs and get started on a proposal."
        linkShow
      />
      <SidebarProposalCard
        title="Project Catalog"
        link1="My Project Dashboard"
        link2="Create a Catalog project"
        paragraph="for clients to purchase instantly"
        linkShow={false}
      />
      <SidebarLinks />
    </aside>
  );
};

export default Sidebar;
