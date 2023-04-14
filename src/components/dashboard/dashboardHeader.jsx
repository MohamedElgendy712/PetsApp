import React, { useState } from 'react';
import logoBlack from '../../resources/themes/dashboard-v1/img/logo-black.png';
import iconNotification from '../../resources/themes/dashboard-v1/icons/notification.svg'
import avatar from '../../resources/themes/dashboard-v1/icons/avatar.svg'
import iconArrowDown from '../../resources/themes/dashboard-v1/icons/arrow-down.svg'
import iconSearch from '../../resources/themes/dashboard-v1/icons/search.svg'

const DashboardHeader = () => {

    const [searchValue , setSearchvalue] = useState('')
    return (
        <div className='d-flex align-items-center dashboard-header bg-white'> 
            <div className='dashboard-logo'>
                <img src={logoBlack} alt="logoBlack" />
            </div>

            <div className="position-relative flex-grow-1 flex-shrink-1">
                <img className='position-absolute position-absolute top-50 start-0 translate-middle-y ps-3' src={iconSearch} alt="search" />
                <input type="text"
                       className="form-control ps-5 py-3 rounded-2"
                       name="search"
                       placeholder="Search..."
                       value={searchValue}
                       onChange={(e) => {setSearchvalue(e.target.value)}}
                       required/>
            </div>

            <div className='d-flex align-items-center ms-4'>
                <div className='p-2 me-4 rounded-circle bg-lightgray'>
                    <img src={iconNotification} alt="notification" />
                </div>

                <div className='d-flex align-items-center'>
                    <img className='me-3' src={avatar} alt="avatar" />

                    <div className='me-3'>
                        <p className='fw-bold mb-1'>Mahmoud</p>
                        <p className='text-secondary fs-12 mb-0'>Admin</p>
                    </div>

                    <img src={iconArrowDown} alt="arrow-down" />
                </div>
            </div>
        </div>
    );
}

export default DashboardHeader;
