import { createBrowserRouter } from 'react-router-dom';
import Root, {
  loader as rootLoader,
  action as rootAction,
} from './root';
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from './contact';
import Edit, { action as EditAction } from './edit';
import { action as destroyAction } from './destroy';
import Index from './index';
import ErrorPage from '../error-page';

export const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: 'contacts/:contactId',
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: 'contacts/:contactId/edit',
            element: <Edit />,
            loader: contactLoader,
            action: EditAction,
          },
          {
            path: 'contacts/:contactId/destroy',
            action: destroyAction,
          },
          {
            path: 'contacts/:contactId',
            element: <Contact />,
          },
        ],
      },
    ],
  },
]);