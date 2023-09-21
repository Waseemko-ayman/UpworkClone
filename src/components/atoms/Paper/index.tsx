/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { StyledPaper } from "./style.js";

const Paper = () => {
  return (
    <StyledPaper className="paper">
      <div className="text">
        <h1>Get 80 Connects each month</h1>
        <p>
          Join Freelancer Plus to start each month fresh with 80 Connects. Yo
          will get a lot of other perks too! Join now to unlock new features to
          help you grow your network and market your skills.
        </p>
        <Link href="#">Learn more</Link>
      </div>
      <img
        src="https://www.upwork.com/static/assets/FreelancerProfileNuxt/img/social-account-linking.aaaba03.svg"
        alt="image"
      />
    </StyledPaper>
  );
};

export default Paper;
