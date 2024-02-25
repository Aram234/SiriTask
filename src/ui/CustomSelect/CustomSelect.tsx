import useAutocomplete from "@mui/material/useAutocomplete";
import { CustomSelectComponents } from "./components";
import { InfiniteScroll } from "../InfiniteScroll";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import Typography from "@mui/material/Typography";
import { usePrevious } from "../../hooks";
import { debounce } from "@mui/material/utils";

export type FooterProps = { searchValue: string };

export type SelectProps<T extends TagOption> = {
  isMultiple?: boolean;
  loadOptions: LoadFn<T>;
  Footer?: FC<FooterProps>;
};

const getOptionLabel = () => "";
const getOptionKey = <T extends TagOption>(o: T) => o.id;
const EmptyFooter: FC<FooterProps> = () => null;

export function CustomSelect<T extends TagOption>({
  loadOptions,
  isMultiple,
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
    multiple: isMultiple,
    options: state.items,
    disableCloseOnSelect: isMultiple,
    getOptionLabel,
    getOptionKey,
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
        const items =
          result.searchValue === prev.searchValue
            ? [...prev.items, ...result.items]
            : result.items;

        return { ...result, items };
      });
    },
    [loadOptions, state.nextPage, state.searchValue]
  );

  const isEmpty = !state.items.length && !state.hasMore;

  const prevInputValue = usePrevious(inputValue);

  const onLoadMore = useMemo(() => debounce(_onLoadMore, 300), [_onLoadMore]);

  useEffect(() => {
    if (typeof prevInputValue === "string" && prevInputValue !== inputValue) {
      onLoadMore(inputValue);
    }
  }, [inputValue, onLoadMore, prevInputValue]);

  const renderSelectedTag = useCallback(
    (option: T, index: number) => (
      <CustomSelectComponents.Tag
        isSelected={isMultiple}
        option={option}
        {...getTagProps({ index })}
      />
    ),
    [getTagProps, isMultiple]
  );

  const valueJSX = useMemo(() => {
    if (Array.isArray(value)) {
      return value.length ? value.map(renderSelectedTag) : null;
    }

    return value ? renderSelectedTag(value, 0) : null;
  }, [renderSelectedTag, value]);

  return (
    <CustomSelectComponents.Root>
      <div {...getRootProps()}>
        <CustomSelectComponents.InputWrapper
          ref={setAnchorEl}
          className={focused ? "focused" : ""}
        >
          {valueJSX}

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
