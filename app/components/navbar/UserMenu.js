"use client"
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import RegisterModal from "../modals/RegisterModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";

const UserMenu = () => {
  const registerModal = useRegisterModal()
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () =>{
    setIsOpen((value)=>!value)
  } 

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="
              hidden
              md:block
              text-sm 
              font-semibold 
              py-3 
              px-4 
              rounded-full 
              hover:bg-neutral-100 
              transition 
              cursor-pointer
            "
        >
          Airbnb your home
        </div>
        <div
          onClick={handleClick}
          className="
            p-4
            md:py-1
            md:px-2
            border-[1px] 
            border-neutral-200 
            flex 
            flex-row 
            items-center 
            gap-3 
            rounded-full 
            cursor-pointer 
            hover:shadow-md 
            transition
            "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
              absolute 
              rounded-xl 
              shadow-md
              w-[40vw]
              md:w-3/4 
              bg-white 
              overflow-hidden 
              right-0 
              top-12 
              text-sm
            "
        >
          <div className="flex flex-col cursor-pointer">
            {false ? (
              <>
                <MenuItem label="My trips" />
                <MenuItem label="My favorites" />
                <MenuItem label="My reservations" />
                <MenuItem label="My properties" />
                <MenuItem label="Airbnb your home" />
                <hr />
                <MenuItem label="Logout" />
              </>
            ) : (
              <>
                <MenuItem label="Login" />
                <MenuItem onClick={registerModal.onOpen} label="Sign up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
