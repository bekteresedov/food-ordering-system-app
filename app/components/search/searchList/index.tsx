import React from "react";
import Input from "../../UI/input";
import Title from "../../UI/title";
import { MdOutlineCancel } from "react-icons/md";
import { ISearchProps } from "@/app/types/header/ISearch";
import OutsideClickHandler from "react-outside-click-handler";
const SearchList: React.FC<ISearchProps> = ({ onClick }) => {
  return (
    <>
      <OutsideClickHandler
        onOutsideClick={() => {
          onClick();
        }}
      >
        <div className="rounded border p-7 bg-white w-full relative">
          <MdOutlineCancel
            className="text-dark absolute top-2 right-2 text-[22px]"
            onClick={() => onClick()}
          />
          <Title className="text-[1.8rem] font-dancing font-bold text-dark text-center mb-5 mt-2">
            Search
          </Title>
          <Input className="px-5 py-2 w-full" />
        </div>
      </OutsideClickHandler>
    </>
  );
};

export default SearchList;
