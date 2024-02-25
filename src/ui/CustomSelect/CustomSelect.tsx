import useAutocomplete from "@mui/material/useAutocomplete";
import { CustomSelectComponents } from "./components";
import { InfiniteScroll } from "../InfiniteScroll";
import { useCallback, useState } from "react";
import Typography from "@mui/material/Typography";

export type SelectProps<T extends TagOption> = {
  loadOptions: LoadFn<T>;
};

export function CustomSelect<T extends TagOption>({
  loadOptions: _loadOptions,
}: SelectProps<T>) {
  const [state, setState] = useState<LoaderResult<T>>({
    items: [],
    hasMore: true,
    nextPage: 1,
  });

  const {
    getRootProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions: _groupedOptions,
    inputValue,
    popupOpen,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "customized-hook-demo",
    defaultValue: [],
    multiple: true,
    options: state.items,
    disableCloseOnSelect: true,
    clearOnEscape: true,
    getOptionLabel: (o) => o.id, // this is the key for each menu item
  });

  const groupedOptions = _groupedOptions as T[];

  const loadOptions = useCallback(async () => {
    const result = await _loadOptions({
      nextPage: state.nextPage,
      searchValue: inputValue,
    });

    setState((prev) => ({
      hasMore: result.hasMore,
      nextPage: result.nextPage,
      items: [...prev.items, ...result.items],
    }));
  }, [_loadOptions, inputValue, state.nextPage]);

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

      {popupOpen && (
        <CustomSelectComponents.Listbox {...getListboxProps()}>
          <InfiniteScroll hasMore={state.hasMore} onLoadMore={loadOptions}>
            {groupedOptions.map((option, index) => (
              <li {...getOptionProps({ option, index })}>
                <CustomSelectComponents.Tag
                  option={option}
                  {...getTagProps({ index })}
                />
              </li>
            ))}
          </InfiniteScroll>

          {!groupedOptions.length && !state.hasMore && (
            <Typography
              color="grey"
              p="10px"
              textAlign="center"
              variant="h4"
              component="h4"
            >
              No Options
            </Typography>
          )}
        </CustomSelectComponents.Listbox>
      )}
    </CustomSelectComponents.Root>
  );
}
