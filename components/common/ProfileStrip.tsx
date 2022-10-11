import Image from "next/image";
import React from "react";
import { UserProps } from "../../types";

interface ProfileStripProps {
  authorUsername: string;
  name: string;
}
const ProfileStrip = ({ authorUsername, name }: ProfileStripProps) => {
  return (
    <div className="shadow-lg rounded-2xl bg-white dark:bg-gray-800 p-4 mt-4">
      <div className="flex-row gap-4 flex justify-between items-center">
        <div className="flex-shrink-0 flex items-center gap-2">
          <a href="#" className="block relative">
            <Image
              alt="profil"
              src={`https://avatars.dicebear.com/api/micah/${authorUsername}.svg`}
              className="mx-auto object-cover rounded-full h-10 w-10 "
              height={60}
              width={60}
            />
          </a>
          <div className=" flex flex-col">
            <span className="text-gray-600 dark:text-white text-lg font-medium">
              {name}
            </span>
            <span className="text-gray-400 text-xs">{}</span>
          </div>
        </div>
        <button
          type="button"
          className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ProfileStrip;
