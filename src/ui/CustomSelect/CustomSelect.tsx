import useAutocomplete from "@mui/material/useAutocomplete";
import { CustomSelectComponents } from "./components";
import { InfiniteScroll } from "../InfiniteScroll";

export type SelectProps<T extends TagOption> = {
  options: T[];
};

export function CustomSelect<T extends TagOption>({ options }: SelectProps<T>) {
  const {
    getRootProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "customized-hook-demo",
    defaultValue: [],
    multiple: true,
    open: true,
    options,
    getOptionLabel: (o) => o.id, // this is the key for each menu item
  });

  return (
    <CustomSelectComponents.Root>
      <div {...getRootProps()}>
        <CustomSelectComponents.InputWrapper
          ref={setAnchorEl}
          className={focused ? "focused" : ""}
        >
          {value.map((option, index: number) => (
            <CustomSelectComponents.Tag
              isSelected={true}
              option={option}
              {...getTagProps({ index })}
            />
          ))}
          <input {...getInputProps()} />
        </CustomSelectComponents.InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        <CustomSelectComponents.Listbox {...getListboxProps()}>
          <InfiniteScroll
            hasMore
            onLoadMore={() => {
              return new Promise((resolve) => {
                setTimeout(() => resolve(5), 5000);
              });
            }}
          >
            {(groupedOptions as typeof options).map((option, index) => (
              <li {...getOptionProps({ option, index })}>
                <CustomSelectComponents.Tag
                  option={option}
                  {...getTagProps({ index })}
                />
              </li>
            ))}
          </InfiniteScroll>
        </CustomSelectComponents.Listbox>
      ) : null}
    </CustomSelectComponents.Root>
  );
}
