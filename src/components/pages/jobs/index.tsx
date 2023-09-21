import BasicTabs from "@/components/molecules/Tabs";
import { StyledJobsList } from "./style.js";

const JobsListPage = () => {
  return (
    <StyledJobsList>
      <h3>Jobs you might like</h3>
      <BasicTabs showSearchControl={false} />
    </StyledJobsList>
  );
};

export default JobsListPage;
