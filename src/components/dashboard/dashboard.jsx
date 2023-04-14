import React, { useState } from 'react';
import iconSearch from '../../resources/themes/dashboard-v1/icons/search.svg'
import catPhoto from '../../resources/themes/dashboard-v1/img/cat.png'


const Dashboard = () => {

    const [searchValue, setSearchvalue] = useState('')

    let pets = [
        {
            id: '#43532',
            name: 'brand',
            data: 'Pet date Date for when the Pet joined the shelter ,Date for when the Pet joi... Read more',
            type: 'Cat',
            age: '1 year',
            gender: 'male',
            views: 20
        },
        {
            id: '#43532',
            name: 'brand',
            data: 'Pet date Date for when the Pet joined the shelter ,Date for when the Pet joi... Read more',
            type: 'Cat',
            age: '1 year',
            gender: 'male',
            views: 20
        },
        {
            id: '#43532',
            name: 'brand',
            data: 'Pet date Date for when the Pet joined the shelter ,Date for when the Pet joi... Read more',
            type: 'Cat',
            age: '1 year',
            gender: 'male',
            views: 20
        },
        {
            id: '#43532',
            name: 'brand',
            data: 'Pet date Date for when the Pet joined the shelter ,Date for when the Pet joi... Read more',
            type: 'Cat',
            age: '1 year',
            gender: 'male',
            views: 20
        }
    ]

    return (
        <div className='py-3 px-4 flex-grow-1 flex-shrink-1 bg-lightgray'>

            <div className='d-flex justify-content-between align-items-center mb-4'>
                <h1 className='fw-bold dashboard-title'>Most Viewed Pets</h1>

                <div className="position-relative">
                    <img className='position-absolute position-absolute top-50 start-0 translate-middle-y ps-3' src={iconSearch} alt="search" />
                    <input type="text"
                        className="form-control dashboard-search ps-5 py-3 rounded-2"
                        name="search"
                        placeholder="search by pet name , id..."
                        value={searchValue}
                        onChange={(e) => { setSearchvalue(e.target.value) }}
                        required />
                </div>
            </div>

            <div className='d-flex mb-3'>
                <p className='category selected-category fw-bold text-muted'>Adopted</p>
                <p className='category fw-bold text-muted'>Un-Adopted</p>
                <p className='category fw-bold text-muted'>In Progress</p>
            </div>

            <div className="dashboard-table">
                <table className='dashboard-table w-100'>
                    <thead className='light-black'>
                        <tr>
                            <td className='border-top border-start p-4'>Image</td>
                            <td className='border-top p-4'>Pet ID</td>
                            <td className='border-top p-4'>Pet Name</td>
                            <td className='border-top p-4'>Pet Data</td>
                            <td className='border-top p-4'>Pet Type</td>
                            <td className='border-top p-4'>Pet Age</td>
                            <td className='border-top p-4'>Pet Gender</td>
                            <td className='border-top p-4'>Profiles Views</td>
                            <td className='border-top p-4'>Pet Status</td>
                            <td className='border-top border-end border-top border-end rounded-top p-4'>Pet Profiles</td>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            pets.map(pet => (
                                <tr className='bg-white'>
                                    <td className='p-4'><img src={catPhoto} alt="pet" /></td>
                                    <td className='fw-bold p-4'>{pet.id}</td>
                                    <td className='fw-bold p-4'>{pet.name}</td>
                                    <td className='pet-details fw-bold p-4'>{pet.data}</td>
                                    <td className='text-center fw-bold p-4'>{pet.type}</td>
                                    <td className='text-center fw-bold p-4'>{pet.age}</td>
                                    <td className='text-center fw-bold p-4'>{pet.gender}</td>
                                    <td className='text-center fw-bold p-4'>{pet.views}</td>
                                    <td className='text-center fw-bold text-white p-4'><p className='table-category m-0'>Adopted</p></td>
                                    <td className='p-4'><button className='details-btn'>See details</button></td>
                                </tr>

                            ))
                        } 
                    </tbody>
                </table>
            </div>

            <div className='d-flex justify-content-between align-items-center mt-4'>
                <div className='d-flex align-items-center'>
                    <p className='light-black m-0 me-4'>Rows Display per page</p>
                    <select className='drop-down' name="rows" id="">
                        <option value="06">06</option>
                        <option value="05">05</option>
                        <option value="08">08</option>
                    </select>
                </div>

                <div className='d-flex gap-3'>
                    <button type="button" class="prev-btn fw-bold">Previous</button>
                    <button className='page-number-btn fw-bold'>01</button>
                    <button className='page-number-btn fw-bold'>02</button>
                    <button className='btn btn-primary py-2 px-3 fw-bold'>Next</button>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
