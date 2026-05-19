import React from 'react'

const Header = () => {
    return (
        <header>
            <nav className='border border-[#E5E7EB]'>
                <div className="container">

                    <div className='flex items-center '>
                        <img src="/ShopHub.svg" alt="" />
                        <ul className='flex ml-8 gap-[31.19px]'>
                            <li className='list-item'>Home</li>
                            <li className='list-item'>Catagories</li>
                            <li className='list-item'>Deals</li>
                            <li className='list-item'>About</li>

                        </ul>
                        <input className='search-input' type="text" placeholder='Search products...' />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
