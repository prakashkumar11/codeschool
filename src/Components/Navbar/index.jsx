
import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css';

const menus = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Teachers',
        href: '/teachers'
    },
    {
        label: 'Holidays',
        href: '/holidays'
    },
    {
        label: 'Contact-us',
        href: '/contactus'
    }
]

const Navbar = () => {
  return (
    <div className='sticky top-0 left-0 z-10'>
        <nav className='sticky top-0 left-0 z-10' 
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '8px 48px',
            boxShadow: '0 8px 8px 0 rgba(0,0,0,0.2)',
            background: 'white'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }}>
                <img 
                src="./images/logo.png" 
                width='60'
                />
                <h1 className='text-2xl font-semibold'>Codeschool</h1>
            </div>

            <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                gap: 32
            }}>
                {
                    menus.map(function(menu) {
                        return (
                            <li style={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <Link to={menu.href} style={{
                                    textDecoration: 'none',
                                    color: '#323232',
                                    fontSize: 17,
                                }}> {menu.label} </Link>
                            </li>
                        )
                    })
                }
                
                
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;