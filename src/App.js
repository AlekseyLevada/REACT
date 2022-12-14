import React from 'react'
import './App.css'

// Импортируем сам роутер
import Router from './utils/router'

// Импортируем роутер провайдер без которого роутер не будет передавать данные
import { RouterProvider } from 'react-router-dom'

/**
 * Генерирование компонента приложения App
 */

export function App() {
  return(
    <div className="App">
        <RouterProvider router={Router}/>
      </div>
  )
}