import React from "react";
import Input from "../../UI/input";
import Title from "../../UI/title";
import { MdOutlineCancel } from "react-icons/md";
import { ISearchProps } from "@/app/types/header/ISearch";
import OutsideClickHandler from "react-outside-click-handler";
import SearchItem from "../searchItem";
const SearchList: React.FC<ISearchProps> = ({ onClick }) => {
  return (
    <>
      <OutsideClickHandler
        onOutsideClick={() => {
          onClick();
        }}
      >
        <div className="rounded border p-7 bg-white w-full relative animate__animated  animate__backInUp">
          <MdOutlineCancel
            className="text-dark absolute top-2 right-2 text-[22px] "
            onClick={() => onClick()}
          />
          <Title className="text-[2rem] font-dancing font-bold text-dark text-center mb-5 mt-2">
            Search
          </Title>
          <Input className="px-5 py-2 w-full mb-4" />
          <ul>
            <li>
              <SearchItem
                price={50}
                title="Pizza"
                src="https://pizzamizza.az/upload/resize_cache/iblock/05c/254_254_2/05c1187c21bea988b38e31089dfec366.jpg?161761730265933"
              />
            </li>
          </ul>
        </div>
      </OutsideClickHandler>
    </>
  );
};

export default SearchList;
