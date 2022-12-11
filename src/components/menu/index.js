import './style.css'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


import { MenuItemShape } from '../../shapes/MenuItemShape'

/**
 * Класс для генерирования компонента 'Меню' приложения 
 */

class Menu extends React.Component {
    constructor() {
        super()
    }

    render() {
        const { menu } = this.props
        return (
            <div className='container__menu menu'>
                <ul className='menu__list'>
                    {
                        menu.map((menuElement, index) => {
                            return (
                                <li className='menu__item' key={index}>
                                    <Link className='menu__link' to={menuElement.link}>
                                        {menuElement.text}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

// Проверка входящих в компонент типов
Menu.propTypes = {
    menu: PropTypes.arrayOf(
        MenuItemShape
    )
}

export default Menu