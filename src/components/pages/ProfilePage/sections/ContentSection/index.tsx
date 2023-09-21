import SidebarControlProfile from "@/components/atoms/SidebarControlProfile";
import {
  StyledAlignFlex,
  StyledBetweenAlignFlex,
  StyledBetweenFlexStart,
  StyledGrid150,
} from "@/style/common";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import LinkIcon from "@mui/icons-material/Link";
import { Button } from "@mui/material";
import { SKILLS } from "@/mock/skills";
import ToolButton from "@/components/atoms/ToolButton";
import { StyledContentProfile } from "./style.js";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import ProfileProjectCard from "@/components/molecules/ProfileProjectCard";
import { PROFILE_PROJECTS } from "@/mock/profileProjects";
import Pagination from "@mui/material/Pagination";
import EditTitleDialog from "@/components/molecules/EditTitleDialog";
import HoursPerWeekDialog from "@/components/molecules/HoursPerWeekDialog";
import OverviewDialog from "@/components/molecules/OverviewDialog";
import EditSkillsDialog from "@/components/molecules/EditSkillsDialog";
import { PATHS } from "@/constants/path";

const ContentSection = () => {
  return (
    <StyledContentProfile>
      <article className="info">
        <StyledBetweenAlignFlex>
          <EditTitleDialog />
          <HoursPerWeekDialog />
        </StyledBetweenAlignFlex>
        <OverviewDialog />
      </article>

      <article>
        <h3>Work History</h3>
        <p>
          No work yet. Once you start getting hired on Upwork, your work with
          clients will show up here.
          <Link href={PATHS.SEARCH}>Start your search</Link>
        </p>
      </article>

      <article>
        <StyledAlignFlex gap="10px">
          <h3>Portfolio (7)</h3>
          <ToolButton>
            <AddIcon fontSize="medium" />
          </ToolButton>
          <ToolButton>
            <SwapVertIcon />
          </ToolButton>
        </StyledAlignFlex>
        <StyledGrid150 gap="15px" margin="20px 0">
          {PROFILE_PROJECTS.map(({ id, title, src }) => (
            <ProfileProjectCard key={id} imageSrc={src} titleProject={title} />
          ))}
        </StyledGrid150>
        <Pagination count={10} color="primary" />
      </article>

      <article>
        <EditSkillsDialog />
        <div className="skills">
          {SKILLS.map((skill, index) => {
            return (
              <Button key={index} className="skill-btn">
                {skill}
              </Button>
            );
          })}
        </div>
      </article>

      <article>
        <StyledBetweenAlignFlex gap="10px">
          <h3>Your Project Catalog</h3>
          <Button>Manage Projects</Button>
        </StyledBetweenAlignFlex>
        <p>
          Projects are a new way to earn on Upwork that helps you do more of the
          work you love to do. Create project offerings that highlight your
          strengths and attract more clients.
        </p>
      </article>
    </StyledContentProfile>
  );
};

export default ContentSection;
