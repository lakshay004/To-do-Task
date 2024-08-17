import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Login from './components/Login';
import { FiSearch, FiGrid, FiMoon, FiMenu } from 'react-icons/fi';
import { BiTask} from 'react-icons/bi';
import { MdOutlineCalendarToday } from "react-icons/md";
import { CiStar , CiMap } from "react-icons/ci";
import { FaHospitalUser } from "react-icons/fa6";
import './styles.css';

const App = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <>
        {isAuthenticated ? (
            <div className={darkMode ? 'container dark-mode' : 'container'}>
                    <div className="navbar">
                        <div className="navbar-left">
                            <FiMenu className="icon menu-icon" />
                            <h1 className="logo">DoIt</h1>
                        </div>
                        <div className="navbar-right">
                            <FiSearch className="icon" />
                            <FiGrid className="icon" />
                            <FiMoon className="icon" onClick={toggleDarkMode} />
                        </div>
                    </div>
                    <div className='main'>
                        <div className='profile-content'>
                            <div className='profile_img-container'>
                                <img className='profile_img' src='/images/profile_img.png' alt='profile' />
                            </div>
                            <div className='task-category'>
                                <div className='task-item'>
                                    <BiTask className="icon"/>
                                    <span>All Tasks</span>
                                </div>
                                <div className='task-item'>
                                    <MdOutlineCalendarToday className="icon"/>
                                    <span>Today</span>
                                </div>
                                <div className='task-item'>
                                    <CiStar className="icon"/>
                                    <span>Important</span>
                                </div>
                                <div className='task-item'>
                                    <CiMap className="icon"/>
                                    <span>Planned</span>
                                </div>
                                <div className='task-item'>
                                    <FaHospitalUser className="icon"/>
                                    <span>Assigned to me</span>
                                </div>
                            </div>
                            <div className='task-addition'></div>
                            <div className='task-chart'></div>
                        </div>
                        <div className="main-content">
                            <TaskInput />
                            <TaskList />
                        </div>
                    </div>
                    </div>
            ) : (
            <Login />
        )}
        </>
    );
};

export default App;
