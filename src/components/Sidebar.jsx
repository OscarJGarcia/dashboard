import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {SiShopware} from "react-icons/si";
import {MdOutlineCancel} from "react-icons/md";
import {TooltipComponent} from '@syncfusion/ej2-react-popups';

import {links} from "../data/dummy";
import {useStateContext} from "../contexts/ContextProvider";

const Sidebar = () => {
    const {activeMenu, setActiveMenu, screenSize, currentColor} = useStateContext();
    const handleCloseSideBar = () => {
        if (activeMenu && screenSize <= 900) {
            setActiveMenu(false);
        }
    }
    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
    return (
        <div className="m1-3 h-screen md:overline-hidden overflow-auto md:hover:overflow-auto pb-10">
            {activeMenu && (<>
                <div className="flex justify-between items-center">
                    <Link to="/" onClick={() => handleCloseSideBar()}
                          className="items-center gap-3 ml-3 mt-4 flex text-x1 font-extrabold tracking-tight dark:text-white text-slate-900">
                        <SiShopware></SiShopware>
                        <span>Shoppy</span>
                    </Link>
                    <TooltipComponent content="Menu" position="BottomCenter">
                        <button type="button" onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
                                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
                            <MdOutlineCancel></MdOutlineCancel>
                        </button>
                    </TooltipComponent>
                </div>
                <div className="mt-10">
                    {links.map((link, index) => (
                        <div key={link.title}>
                            <p className="text-gray-400 m-3 mt-4 uppercase">
                                {link.title}
                            </p>
                            {link.links.map(sublink => (
                                <NavLink
                                    to={`/${sublink.name}`}
                                    onClick={() => handleCloseSideBar()}
                                    key={sublink.name}
                                    style={({isActive}) => ({backgroundColor: isActive ? currentColor : ''})}
                                    className={({isActive}) => isActive ? activeLink : normalLink}>
                                    {sublink.icon}
                                    <span className="capitalize">
                                      {sublink.name}
                                    </span>
                                </NavLink>
                            ))}
                        </div>
                    ))}
                </div>
            </>)}
        </div>
    );
};

export default Sidebar;
