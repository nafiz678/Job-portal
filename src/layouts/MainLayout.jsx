import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import ArrowCursor from '../shared/Cursor/ArrowCursor';
import CanvasCursor from '../shared/Cursor/CanvasCursor';
import FluidCursor from '../shared/Cursor/FluidCursor';
import SpotlightCursor from '../shared/Cursor/SpotlightCursor';
import RippleCursor from '../shared/Cursor/RippleCursor';


const MainLayout = () => {


    return (
        <div className='w-11/12 mx-auto '>
            <Navbar></Navbar>
            <div className='min-h-96'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <div className=''>
                <CanvasCursor></CanvasCursor>
            </div>
        </div>
    );
};

export default MainLayout;