import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/index';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import Home from './routes/home';
import About from './routes/about';
import Contact from './routes/contact';
import ErrorPage from './routes/error-page';
import PostIndex, {loader as postsLoader} from './routes/postindex';
import Posts from './routes/posts';
import Post, {loader as postLoader} from './routes/post';
import Todo, {
  loader as todoLoader,
  action as todoAction,
} from './routes/todo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'posts',
        element: <Posts />,
        errorElement: <ErrorPage/>,
        children:[
          {
            index: true,
            element: <PostIndex />,
            loader: postsLoader,

          },
          {
            path: ':postId',
            element: <Post />,
            loader: postLoader,
            errorElement: <ErrorPage/>,
          },
        ],
      },
      {
        path: 'todo',
        element: <Todo />,
        loader: todoLoader,
        action: todoAction,
      },
    ],
  },
]);

const root = 
ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);