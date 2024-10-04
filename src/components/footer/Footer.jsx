import React from 'react'
import "./footer.css"
import { IoEarth } from "react-icons/io5";
import { SlSocialVkontakte } from "react-icons/sl";
const Footer = () => {
    return (
        <div className='bg-slate-100 pt-16 pb-10'>
        <div className='container mx-auto px-4'>
            <div className="flex flex-col md:flex-row gap-12 footer">
            <div className="navbar__logo">
            <p className="logo_name">QPICK</p>
          </div>
                <ul className="footer__collection w-full md:w-1/4 leading-normal flex flex-col gap-3 text3 ml-52 -mt-10">
                    <p className='font-semibold'>Избранное</p>
                    <p className='font-semibold'>Корзина</p>
                    <p className='font-semibold'>Контакты</p>
                </ul>
                <ul className="footer__collection w-full md:w-1/4 leading-normal flex flex-col gap-3 text3 -mt-10">
                    <p className='font-semibold'>Условия сервиса</p>
                    <br />
                    <div className='flex'>
                    <IoEarth className='w-10 h-6'/> <p className='mr-2'>Каз</p> <p className='mr-2'>Рус</p> <p className='mr-2'>Eng</p>
                    </div>
                </ul> 
            </div>
        </div>
    </div>
    
    )
}

export default Footer