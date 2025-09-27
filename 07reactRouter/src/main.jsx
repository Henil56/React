import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,useRouteError} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/user/User.jsx'
import Github, { githubInfoLoader } from './components/github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [{
//       path: "",
//       element:<Home />
//     },{
//       path:"about",
//       element:<About />
//     },{
//       path:"contact",
//       element:<Contact />
//     }]
    
//   }
// ])

function GithubError() {
  const error = useRouteError();
  {error?.statusText || error?.message || "Unknown error occurred"}
  console.error(error)
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black text-red-400">
      <h1 className="text-2xl font-bold">⚠️ Oops! Something went wrong</h1>
      <p className="mt-2">{error.message}</p>
      <p className="mt-2 text-sm text-gray-400">
        Try refreshing the page or check GitHub API limits.
      </p>
    </div>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route
        path='github'
        element={<Github />}
        loader={githubInfoLoader}
        errorElement={<GithubError />}
      />
    </Route>
  )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider 
    router={router}
    />
    
  </StrictMode>,
)
