import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import HomePage from './components/homepage/homepage.jsx'

import App from './App.jsx'
import './index.css'
import AboutPeople from './components/homepage/sidebar/aboutpeople.jsx'
import Sports from './components/homepage/sidebar/sports.jsx'
import History from './components/homepage/sidebar/history.jsx'
import VillageMap from './components/villagemap/villagemap.jsx'


const router = createBrowserRouter([
{
    path:'/',
    element:<App />,
    children:[
        { path:'',element:<HomePage/>,
            children:[
                {path:'/',element:<h1 className='sideg1'>my village</h1>},
                {path:'aboutpeople',element:<AboutPeople/>},
                {path:'sports',element:<Sports/>},
                {path:'history',element:<History/>}
            ]
        },
        {path:'/villages',element:<VillageMap />},
        {},
        {},
        {},
        {}
    ]
}
])

createRoot(document.getElementById('root')).render(
  
   <RouterProvider router={router} />
  
)
