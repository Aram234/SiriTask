import useAutocomplete from "@mui/material/useAutocomplete";
import { CustomSelectComponents } from "./components";
import { InfiniteScroll } from "../InfiniteScroll";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import Typography from "@mui/material/Typography";
import { usePrevious } from "../../hooks";
import { debounce } from "@mui/material/utils";

export type FooterProps = { searchValue: string };

export type SelectProps<T extends TagOption> = {
  loadOptions: LoadFn<T>;
  Footer?: FC<FooterProps>;
};

const getOptionLabel = <T extends TagOption>(o: T) => o.id;
const EmptyFooter: FC<FooterProps> = () => null;

export function CustomSelect<T extends TagOption>({
  loadOptions,
  Footer = EmptyFooter,
}: SelectProps<T>) {
  const [state, setState] = useState<LoaderResult<T>>(() => ({
    items: [],
    hasMore: true,
    searchValue: "",
    nextPage: 1,
  }));

  const {
    getRootProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    inputValue,
    popupOpen,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    multiple: true,
    options: state.items,
    disableCloseOnSelect: true,
    getOptionLabel, // this is the key for each menu item
  });

  const _onLoadMore = useCallback(
    async (searchTerm?: string) => {
      const searchValue = searchTerm ?? state.searchValue;

      const isSearchValueChanged = searchValue !== state.searchValue;

      const result = await loadOptions({
        nextPage: isSearchValueChanged ? 1 : state.nextPage,
        searchValue,
      });

      setState((prev) => {
        if (result.searchValue === prev.searchValue) {
          return {
            hasMore: result.hasMore,
            nextPage: result.nextPage,
            searchValue: result.searchValue,
            items: [...prev.items, ...result.items],
          };
        }

        return {
          hasMore: result.hasMore,
          nextPage: result.nextPage,
          searchValue: result.searchValue,
          items: result.items,
        };
      });
    },
    [loadOptions, state.nextPage, state.searchValue]
  );

  const isEmpty = !state.items.length && !state.hasMore;

  const prevInputValue = usePrevious(inputValue);

  const onLoadMore = useMemo(() => debounce(_onLoadMore, 300), [_onLoadMore]);

  useEffect(() => {
    if (prevInputValue !== inputValue) {
      onLoadMore(inputValue);
    }
  }, [inputValue, onLoadMore, prevInputValue]);

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
          <div style={{ maxHeight: 200, overflow: "auto" }}>
            <InfiniteScroll hasMore={state.hasMore} onLoadMore={onLoadMore}>
              {state.items.map((option, index) => (
                <li {...getOptionProps({ option, index })}>
                  <CustomSelectComponents.Tag
                    option={option}
                    {...getTagProps({ index })}
                  />
                </li>
              ))}
            </InfiniteScroll>
          </div>

          {isEmpty && (
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

          <Footer searchValue={inputValue} />
        </CustomSelectComponents.Listbox>
      )}
    </CustomSelectComponents.Root>
  );
}
