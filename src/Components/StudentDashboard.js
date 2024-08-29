import React,{useState} from 'react';
import './styles.css';
import { IoMdPerson } from "react-icons/io";
import { RiUser2Fill } from "react-icons/ri";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaBook } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import { FaHospital } from "react-icons/fa";
import Sidebar from './Sidebar';

const StudentDashboard = () =>{
    const [count,setCount]=useState(0);
    const [count1,setCount1]=useState(0);
    const [count2,setCount2]=useState(0);
    const RegEnrollment = () =>{
        setCount(count + 1);
    };

    const RemEnrollment = () =>{
        setCount1(count1 + 1);
    };

    const ClubManagement = () =>{
        setCount2(count2 + 1);
    };
  return (
    <div className='Dashboard'>
        <Sidebar/>
    <div className='RightSide'>
      <div className='Title'>
        <h2>Student Management</h2>
      </div>
      <div className='Content1'>
        <div className='box'>
            <div className='flex'>
                <span><IoMdPerson /></span>
                <p>{count}</p>
            </div>
            <p>Regular Students</p>
        </div>
        <div className='box'>
            <div className='flex'>
                <span><RiUser2Fill /></span>
                <p>{count1}</p>
            </div>
            <p>Remedial Students</p>
        </div>
        <div className='box'>
            <div className='flex'>
                <span><BsPersonWorkspace /></span>
                <p>{count2}</p>
            </div>
            <p>In Paid Clubs</p>
        </div>
      </div>
      <div className='ContentMenu'>
        <h2>Menu</h2>
        <div className='row'>
            <div className='col1' onClick={RegEnrollment}>
                <span><IoMdPerson /></span>
                <p>Regular Enrollment</p>
            </div>
            <div className='col2' onClick={RemEnrollment}>
                <span><FaBook /></span>
                <p>Remedial Enrollment</p>
            </div>
            <div className='col3' onClick={ClubManagement}>
                <span><BsPersonWorkspace /></span>
                <p>Club Management</p>
            </div>
        </div>
        <div className='row'>
            <div className='col1'>
                <span><FaBookReader /></span>
                <p>Classroom Management</p>
            </div>
            <div className='col2'>
                <span><MdEmail /></span>
                <p>SMS/EMAIL</p>
            </div>
            <div className='col3'>
                <span><FaFileAlt /></span>
                <p>Attendance</p>
            </div>
        </div>
        <div className='row'>
            <div className='col1'>
                <span><FaHospital /></span>
            <p>Clinic</p>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default StudentDashboard
