"use client";
import { StyledJobSections } from "./style.js";
import JobDetailsSection from "@/components/organism/JobDetailsSection";

const JobDetailsPage = () => {
  return (
    <StyledJobSections width="75%">
      <h1>Job details</h1>
      <JobDetailsSection />
    </StyledJobSections>
  );
};

export default JobDetailsPage;
