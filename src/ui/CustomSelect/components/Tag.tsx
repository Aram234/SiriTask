import { styled } from "@mui/material/styles";
import { AutocompleteGetTagProps } from "@mui/material/useAutocomplete";
import CloseIcon from "@mui/icons-material/Close";

export type TagBaseOption = {
  id: string;
  title: string;
};

export interface TagProps<T extends TagBaseOption = TagBaseOption>
  extends ReturnType<AutocompleteGetTagProps> {
  option: T;
  isSelected?: boolean;
}

function TagBase<T extends TagBaseOption>(props: TagProps<T>) {
  const { option, isSelected, onDelete, ...other } = props;

  return (
    <div {...other}>
      <span>{option.title}</span>
      {isSelected && <CloseIcon onClick={onDelete} />}
    </div>
  );
}

export const Tag = styled(TagBase)(
  ({ theme }) => `
    display: flex;
    align-items: center;
    height: 24px;
    margin: 2px;
    line-height: 22px;
    background-color: ${
      theme.palette.mode === "dark" ? "rgba(255,255,255,0.08)" : "#fafafa"
    };
    border: 1px solid ${theme.palette.mode === "dark" ? "#303030" : "#e8e8e8"};
    border-radius: 2px;
    box-sizing: content-box;
    padding: 0 4px 0 10px;
    outline: 0;
    overflow: hidden;
  
    &:focus {
      border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
      background-color: ${
        theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"
      };
    }
  
    & span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  
    & svg {
      font-size: 12px;
      cursor: pointer;
      padding: 4px;
    }
  `
) as typeof TagBase;
