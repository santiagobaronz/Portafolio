import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './routes/Root'
import ErrorPage from './routes/ErrorPage'

import { Home } from './routes/pages/Home'
import { About } from './routes/pages/About'
import { Articles } from './routes/pages/Articles'
import { Projects } from './routes/pages/Projects'
import { Article } from './routes/pages/Article'

import './index.css'


const router = createBrowserRouter([
	{
	  path: '/',
	  element: <Root/>,
	  errorElement: <ErrorPage/>,
	  children: [
		{ path: '/', element: <Home/> },
		{ path: '/about', element: <About/> },
		{ path: '/articles', element: <Articles/>},
		{ path: 'articles/:articleName', element: <Article/>},
		{ path: '/projects', element: <Projects/> }
	  ]
	}
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
	<RouterProvider router={router} />
  </React.StrictMode>,
)
