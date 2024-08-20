import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import React from 'react';
import { Link } from 'react-router-dom';
import useViewPageLogic from '../logic/view-page-logic';

const ViewPage: React.FC = () => {
  const { movies } = useViewPageLogic();

  return (
    <div className="p-4">
      <div className="mb-4 text-center">
        <h1 className="text-2xl font-bold">Movie-Viewer Overview Hub Thingy-thing</h1>
      </div>

      <div className="flex mb-4">
        <Menubar className="flex w-full">
          <MenubarMenu>
            <MenubarTrigger>Horror</MenubarTrigger>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>History</MenubarTrigger>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>Ghiblis-like</MenubarTrigger>
          </MenubarMenu>
        </Menubar>

        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Settings</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Dark/light mode</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/view/${movie.id}`}>
            <div className="p-4 bg-white rounded-lg shadow">
              <h2 className="text-xl">{movie.title}</h2>
              <p className="text-sm text-gray-600">{movie.category}</p>
              <p className="mt-1">{movie.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ViewPage;
