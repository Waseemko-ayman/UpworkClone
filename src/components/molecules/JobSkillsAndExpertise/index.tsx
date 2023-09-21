import { StyledAlignFlex } from "@/style/common";
import Link from "next/link";
import { StyledJobSkills } from "./style.js";

const JobSkillsAndExpertise = () => {
  return (
    <StyledJobSkills className="skills">
      <h3>Skills and Expertise</h3>
      <StyledAlignFlex gap="8px">
        <Link href="#">Wix</Link>
        <Link href="#">Web Design</Link>
        <Link href="#">Graphic Design</Link>
        <Link href="#">Web Development</Link>
      </StyledAlignFlex>
    </StyledJobSkills>
  );
};

export default JobSkillsAndExpertise;
