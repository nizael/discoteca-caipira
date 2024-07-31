import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import AlbumViewPage from "../pages/album-view/AlbumViewPage";
import CreateAlbumPage from "../pages/create-album/CreateAlbumPage";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/album-view/:id',
    element: <AlbumViewPage props={{}} />
  },
  {
    path: '/create-album',
    element: <CreateAlbumPage  />
  }
])