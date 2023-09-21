"use client";
import Link from "next/link";
import { StyledLoginFooter } from "./style.js";

const LogInFooter = () => {
  return (
    <StyledLoginFooter>
      <footer>
        <p>
          © 2015 - 2023 Upwork® Global Inc. •{" "}
          <Link href="#">Privacy Policy</Link>
        </p>
      </footer>
    </StyledLoginFooter>
  );
};

export default LogInFooter;
