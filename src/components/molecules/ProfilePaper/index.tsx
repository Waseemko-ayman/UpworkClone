/* eslint-disable @next/next/no-img-element */
import { StyledAdsContainer } from "./style.js";
import { Button } from "@mui/material";

const ProfilePaper = () => {
  return (
    <StyledAdsContainer margin="10px 0" padding="25px 35px">
      <div>
        <h1>Introducing the new Github Profile integration</h1>
        <p>
          Increase your chances of getting hired by showing Clients your past
          work! Link your Github and Stackoverflow account to get a head start
          towards your first job.
        </p>
        <Button>View linked account</Button>
      </div>
      <img
        src="https://www.upwork.com/static/assets/FreelancerProfileNuxt/img/social-account-linking.aaaba03.svg"
        alt="image"
      />
    </StyledAdsContainer>
  );
};

export default ProfilePaper;
