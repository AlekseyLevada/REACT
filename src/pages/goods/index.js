import React from 'react'
import './style.css'
import { Outlet } from 'react-router-dom'

/**
 * Компонент для генерирования страницы приложения 'Товары'
 */

export function Goods() {
    return(
        <>
            <Outlet/>
        </>
    )
}