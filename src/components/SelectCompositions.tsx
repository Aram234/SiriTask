import Divider from "@mui/material/Divider";
import { useSelectorsOptionsLoadersContext } from "../hooks";
import { CustomSelect } from "../ui";
import Button from "@mui/material/Button";
import { FC } from "react";
import { FooterProps } from "../ui";

const Footer: FC<FooterProps> = ({ searchValue }) => {
  return (
    <div>
      <Divider />
      <Button fullWidth onClick={() => console.log({ searchValue })}>
        Add
      </Button>
    </div>
  );
};

export function AICRelationsSelector() {
  const loaders = useSelectorsOptionsLoadersContext();
  return (
    <CustomSelect
      isMultiple
      loadOptions={loaders.loadAICRelations}
      Footer={Footer}
    />
  );
}

export function AICPositionsSelector() {
  const loaders = useSelectorsOptionsLoadersContext();
  return (
    <CustomSelect loadOptions={loaders.loadAICPositions} Footer={Footer} />
  );
}
