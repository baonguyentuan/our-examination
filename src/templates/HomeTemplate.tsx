import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderTitle from '../components/Header/HeaderTitle';
import HeaderNavbar from '../components/Header/HeaderNavbar';
import HomeFooter from '../components/Footer/HomeFooter';
type Props = {}

export default function HomeTemplate({ }: Props) {
    return (

        <div>
            <header className='bg-white'>
                <HeaderTitle />
                <HeaderNavbar />
            </header>
            <Outlet />
            <footer><HomeFooter/></footer>
        </div>

    )
}