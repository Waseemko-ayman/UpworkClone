/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import LinearProgressWithLabel from "@/components/atoms/Progress";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { IconButton } from "@mui/material";
import SidebarDetaileCard from "@/components/molecules/SidebarDetaileCard";
import { StyledSidebarConnects } from "./style.js"
import { PATHS } from "@/constants/path";
import useAuth from "@/hook/useAuth";

const SidebarConnects = () => {
  const { user } = useAuth();
  
  return (
    <StyledSidebarConnects>
      <section className="title">
        <Link href={PATHS.PROFILE}>
          <img src="/assets/account-image.jpg" alt="account-image" />
        </Link>
        {/* <Link href={PATHS.PROFILE}>Wasim A.</Link> */}
        <Link href={PATHS.PROFILE}>{user?.name}</Link>
        <p>Front-End Developer</p>
      </section>
      <section className="completeness">
        <section className="prores">
          <h4>Profile Completeness:</h4>
          <LinearProgressWithLabel />
        </section>
        <section className="content">
          <p>Ways to stand out to clients right now...</p>
          <section className="box">
            <p>Add your past work so clients know you’re a pro (+%).</p>
            <Link href="#">Add work</Link>
            <IconButton sx={{ color: "white", backgroundColor: "green" }}>
              <KeyboardArrowRightIcon />
            </IconButton>
          </section>
        </section>
      </section>
      <section className="connects">
        <Link href="#">78 Available Connects</Link>
      </section>
      <section className="available_section">
        <SidebarDetaileCard
          text="Availability Badge"
          detaile=""
          available
        />
        <SidebarDetaileCard
          text="Hours per week"
          detaile="More than 30 hrs/week"
        />
        <SidebarDetaileCard
          text="Profile Visibility"
          detaile="Public"
        />
        <SidebarDetaileCard
          text="Job Preference"
          detaile="Open to contract-to-hire roles"
        />
      </section>
      <section className="category">
        <SidebarDetaileCard text="My Categories" detaile="" />
        <div>
          <Link href={PATHS.SEARCH}>Web Development</Link>
          <Link href={PATHS.SEARCH}>Web & Mobile Design</Link>
        </div>
      </section>
    </StyledSidebarConnects>
  )
}

export default SidebarConnects