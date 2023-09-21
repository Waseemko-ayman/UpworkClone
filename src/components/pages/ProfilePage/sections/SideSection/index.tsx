/* eslint-disable react/no-children-prop */
import SidebarControlProfile from "@/components/atoms/SidebarControlProfile";
import { StyledFlex } from "@/style/common";
import { StyledAsideProfile } from "./style.js";

const SideSection = () => {
  return (
    <StyledAsideProfile>
      <SidebarControlProfile text="Video introduction" addIcon />
      
      <SidebarControlProfile
        text="Hours per week"
        editIcon
      >
        <p>More than 30 hrs/week</p>
        <span>Open to contract to hire</span>
      </SidebarControlProfile>

      <SidebarControlProfile text="Languages" editIcon addIcon>
        <StyledFlex className="lang">
          <p>English:&nbsp;</p>
          <span>Conversational</span>
        </StyledFlex>
        <StyledFlex className="lang">
          <p>Arabic: &nbsp;</p>
          <span>Native or Bilingual</span>
        </StyledFlex>
      </SidebarControlProfile>

      <p>Verifications</p>
      <SidebarControlProfile text="Military Veteran" addIcon />

      <SidebarControlProfile text="Education" addIcon>
        <SidebarControlProfile
          text="The Islamic University"
          editIcon
          deleteIcon
        >
          <p className="major">
            Bachelor of Computer Science (BCompSc), Software Development
            <br />
            <span>2019-2024 (expected)</span>
          </p>
        </SidebarControlProfile>
      </SidebarControlProfile>
    </StyledAsideProfile>
  );
};

export default SideSection;
