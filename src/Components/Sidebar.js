import React from 'react';
import './styles.css';
import Hicetlogo from './Assets/Hicetlogo.png';
import { FaUserGroup } from "react-icons/fa6";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { TbCircleDashedPercentage } from "react-icons/tb";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaFileAlt } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { IoMdExit } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className='main'>
        <div className='logo'>
            <img src={Hicetlogo}></img>
        </div>
        <div className='menu'>
            <FaUserGroup />
            <h3>Student Management</h3>
            <HiMiniComputerDesktop />
            <h3>Financial Management</h3>
            <TbCircleDashedPercentage />
            <h3>Quality Control</h3>
            <BiSolidCategoryAlt />
            <h3>Report Delivery</h3>
            <FaFileAlt />
            <h3>Attendance</h3>
        </div>
        <div className='settings'>
            <IoIosHelpCircle />
            <IoMdSettings />
            <IoMdExit />
        </div>
    </div>
  )
}

export default Sidebar
