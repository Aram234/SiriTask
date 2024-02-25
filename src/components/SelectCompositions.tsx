import { useSelectorsOptionsLoadersContext } from "../hooks";
import { CustomSelect } from "../ui";

export function AICRelationsSelector() {
  const loaders = useSelectorsOptionsLoadersContext();
  return <CustomSelect loadOptions={loaders.loadAICRelations} />;
}

export function AICPositionsSelector() {
  const loaders = useSelectorsOptionsLoadersContext();
  return <CustomSelect loadOptions={loaders.loadAICPositions} />;
}
