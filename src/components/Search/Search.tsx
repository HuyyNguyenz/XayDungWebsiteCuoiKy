import React, { useEffect, useState } from "react";
import {
  faMagnifyingGlass,
  faSpinner,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import SearchResult from "../SearchResult";
import useDebounce from "../../hooks/useDebounce";
import axios from "axios";
import { root } from "../../utils";
import { Course } from "../../interface";

const Search: React.FC = () => {
  const $ = document.querySelector.bind(document);

  const [showResult, setShowResult] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [dataSearch, setDataSearch] = useState<Array<Course>>([]);
  const debouncedValue: string = useDebounce(searchValue, 800);

  useEffect(() => {
    const inputSearch: HTMLInputElement = document.getElementById(
      "search"
    ) as HTMLInputElement;
    const searchBtn: HTMLDivElement = $(".search-btn") as HTMLDivElement;
    const clearBtn: HTMLDivElement = $(".clear-btn") as HTMLDivElement;
    const clearIcon: HTMLOrSVGImageElement = $(
      ".clear-icon"
    ) as HTMLOrSVGImageElement;

    const handleFocus = () => {
      inputSearch.style.borderColor = "#000000";
      searchBtn.style.borderColor = "#000000";
      clearBtn.style.borderColor = "#000000";
      setShowResult(true);
    };

    const handleFocusOut = () => {
      inputSearch.style.borderColor = "#e8e8e8";
      searchBtn.style.borderColor = "#e8e8e8";
      clearBtn.style.borderColor = "#e8e8e8";
    };

    const handleClear = () => {
      setSearchValue("");
      inputSearch.focus();
    };

    inputSearch?.addEventListener("focus", handleFocus);

    inputSearch?.addEventListener("focusout", handleFocusOut);

    clearIcon?.addEventListener("click", handleClear);

    if (searchValue.length > 0) {
      searchBtn.style.color = "#000000";
      clearIcon.style.display = "inline-block";
    } else {
      searchBtn.style.color = "#7c7c7c";
      clearIcon.style.display = "none";
    }

    return () => {
      inputSearch.removeEventListener("focus", handleFocus);
      inputSearch.removeEventListener("focusout", handleFocusOut);
      clearIcon.removeEventListener("click", handleClear);
    };
  }, [searchValue]);

  useEffect(() => {
    if (debouncedValue.length > 1) {
      setLoading(true);
      setTimeout(() => {
        axios
          .post(`${root}/api/search`, { name: debouncedValue })
          .then((res) => {
            const data: Array<Course> =
              res.data.data && setDataSearch(res.data.data);
            return data;
          });
        setLoading(false);
      }, 500);
    } else {
      setDataSearch([]);
    }
  }, [debouncedValue]);

  const handleSpaceText = (searchValue: string) => {
    setSearchValue((prev) => (prev !== "" ? searchValue : searchValue.trim()));
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    <div className="hidden md:block">
      <Tippy
        interactive={true}
        visible={showResult && searchValue.length > 0}
        placement={"bottom"}
        onClickOutside={handleHideResult}
        render={(attrs) => (
          <div
            className="rounded-[0.625rem] bg-white shadow-[0_-4px_32px_rgba(0,0,0,0.2)] overflow-hidden animate-fade"
            tabIndex={-1}
            {...attrs}
          >
            <div className="w-[26.25rem] min-w-[14.375rem] max-h-[35rem] min-h-[3.125rem] py-3 px-6 overflow-y-auto overscroll-contain">
              <div className="flex items-center justify-start text-14 text-text-color-2 pt-[0.375rem]">
                {isLoading ? (
                  <>
                    <div className="mr-2 animate-spin">
                      <FontAwesomeIcon icon={faSpinner} />
                    </div>
                    <span>Tìm '{searchValue}'</span>
                  </>
                ) : (
                  <>
                    <div className="mr-2">
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                    <span>Kết quả cho '{searchValue}'</span>
                  </>
                )}
              </div>

              {dataSearch.length > 0 ? (
                <SearchResult title={"Khoá Học"} data={dataSearch} />
              ) : (
                ""
              )}
            </div>
          </div>
        )}
      >
        <div className="flex items-center justify-center w-[26.25rem] h-10">
          <div className="search-btn h-full border-2 border-solid border-border-color rounded-tl-3xl rounded-bl-3xl border-r-0 py-[0.375rem] px-3 transition-all ease-linear">
            <FontAwesomeIcon
              className="hover:text-title-color transition-all ease-linear"
              icon={faMagnifyingGlass}
            />
          </div>
          <input
            spellCheck={false}
            onChange={(e) => handleSpaceText(e.target.value)}
            value={searchValue}
            className="w-full h-full text-14 text-text-color border-2 border-solid border-border-color border-l-0 border-r-0 py-1 outline-none transition-all ease-linear"
            type="text"
            id="search"
            placeholder="Tìm kiếm khoá học..."
          />
          <div className="clear-btn h-full text-text-color-2 border-2 border-solid border-border-color rounded-tr-3xl rounded-br-3xl border-l-0 py-[0.375rem] px-3 transition-all ease-linear">
            <FontAwesomeIcon
              className="clear-icon hover:text-title-color cursor-pointer transition-all ease-linear"
              icon={faXmark}
            />
          </div>
        </div>
      </Tippy>
    </div>
  );
};

export default Search;
