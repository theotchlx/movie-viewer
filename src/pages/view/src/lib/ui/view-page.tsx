import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import React from 'react';
import { Link } from 'react-router-dom';
import useViewPageLogic from '../logic/view-page-logic';

const ViewPage: React.FC = () => {
  const { movies } = useViewPageLogic();

  return (
    <div className="p-4">
      <div className="mb-4 text-center">
        <h1 className="text-2xl font-bold">Movies</h1>
      </div>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/view/${movie.id}`}>
            <div className="p-4 bg-white rounded shadow">
              <h2 className="text-xl">{movie.title}</h2>
              <p>{movie.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ViewPage;
