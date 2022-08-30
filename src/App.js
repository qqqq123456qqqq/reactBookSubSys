import React from 'react';
import { useRoutes } from 'react-router-dom'; import routes from './utils/index.jsx';
import './App.less'
export default function App() {
  const elements = useRoutes(routes);
  return (
    <div className='app'>
      {elements}
    </div>
  )
}
