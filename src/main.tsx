import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  type RouteObject,
  type LoaderFunction,
  type ActionFunction,
} from 'react-router-dom';
import RootLayout from './routes/RootLayout';
import Posts, { loader as postsLoader } from './routes/Posts';
import NewPost, { action as newPostAction } from './routes/NewPost/NewPost';
import PostDetails, { loader as postDetailsLoader } from './routes/PostDetails/PostDetails';
import './index.css';

const typedPostsLoader: LoaderFunction = postsLoader;
const typedPostDetailsLoader: LoaderFunction = postDetailsLoader;
const typedNewPostAction: ActionFunction = newPostAction;

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: typedPostsLoader,
        children: [
          {
            path: '/create-post',
            element: <NewPost />,
            action: typedNewPostAction,
          },
          {
            path: '/:id',
            element: <PostDetails />,
            loader: typedPostDetailsLoader,
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

const root = document.getElementById('root');
if (!root) {
  throw new Error("Root element not found. Make sure index.html has <div id='root'></div>");
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);