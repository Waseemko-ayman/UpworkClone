import { StyledBetweenAlignFlex } from "@/style/common";
import CloseIcon from "@mui/icons-material/Close";
import Input from "../Input";
import { Button } from "@mui/material";
import { useState } from "react";
import { StyledSavePopupContent } from "./style.js";

const SaveSearchButtonPopupContent = () => {
  const [disabled, setDisabled] = useState<boolean>(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      setDisabled(false);
    }
  };

  return (
    <StyledSavePopupContent>
      <StyledBetweenAlignFlex margin="0 0 15px">
        <p>Save search as</p>
        <CloseIcon />
      </StyledBetweenAlignFlex>
      <form>
        <Input
          type="search"
          placeholder="Search Name"
          name="searchName"
          onChange={handleChange}
          imageHidden
        />
        <Button disabled={disabled}>Save</Button>
        <p>
          Saving this search will save the query and all the filters that are
          currently applied. Results from your saved searches will appear in My
          Feed
        </p>
      </form>
    </StyledSavePopupContent>
  );
};

export default SaveSearchButtonPopupContent;
