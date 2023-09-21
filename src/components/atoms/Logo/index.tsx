/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { StyledLogo } from "./style.js"
import { PATHS } from "@/constants/path";

const Logo = () => {
  return (
    <StyledLogo>
      <Link href={PATHS.HOME}>
        <img src="/assets/upwork-logo.png" alt="upwork logo" className="logo" />
      </Link>
    </StyledLogo>
  );
};

export default Logo;
