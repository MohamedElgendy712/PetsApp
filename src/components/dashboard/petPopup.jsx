import React from 'react';
import photo from '../../resources/themes/dashboard-v1/img/carouselPhoto.png'
import next from '../../resources/themes/dashboard-v1/icons/arrow-right.svg'
import previous from '../../resources/themes/dashboard-v1/icons/arrow-left.svg'
const PetPopup = () => {
    return (
        <div className='popup'>
            <div>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button  type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active indicator" aria-current="true" aria-label="Slide 1"></button>
                        <button className='indicator' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button className='indicator' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={photo} class="d-block w-100" alt="photo"/>
                        </div>
                        <div class="carousel-item">
                            <img src={photo} class="d-block w-100" alt="photo"/>
                        </div>
                        <div class="carousel-item">
                            <img src={photo} class="d-block w-100" alt="photo"/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <img src={previous} alt="previous" />   
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <img src={next} alt="next" />
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className='py-3 px-4'>

                <div className='d-flex justify-content-between align-items-center border-bottom pb-4'>
                    <div className='d-flex flex-column gap-1'>
                        <span className='fs-4 fw-bold'>Pet Name</span>
                        <span className='ligth-black'>ID:#4232092 • Female ♀</span>
                    </div>

                    <span className='table-category fw-bold text-white'>Adopted</span>
                </div>

                <div className='border-bottom py-4 d-flex flex-column gap-4 '>
                    <span className='fw-bold fs-5'>Cat’s details</span>

                    <div className='d-flex justify-content-between'>
                        <div className='d-flex flex-column'>
                            <span className='details-title light-black mb-1'>PET NAME</span>
                            <span>Possy</span>
                        </div>
                        <div className='d-flex flex-column'>
                            <span className='details-title light-black mb-1'>PET GENDER</span>
                            <span>Female</span>
                        </div>
                        <div className='d-flex flex-column'>
                            <span className='details-title light-black mb-1'>PET BIRTHDATE</span>
                            <span>20/04/2020</span>
                        </div>
                    </div>

                    <div className='d-flex flex-column'>
                        <span className='details-title light-black mb-1'>PET SIZES</span>
                        <span>Weight : 3 Kg, Height : 25 cm, Length : 45 cm</span>
                    </div>
                </div>

                <div className='pt-4 d-flex flex-column gap-4 '>
                    <span className='fw-bold fs-5'>Cat’s health record</span>

                    <div className='d-flex justify-content-between'>
                        <div className='d-flex flex-column'>
                            <span className='details-title light-black mb-1'>Last Vaccine date</span>
                            <span>20/04/2020</span>
                        </div>
                        <div className='d-flex flex-column'>
                            <span className='details-title light-black mb-1'>next Vaccine date</span>
                            <span>20/04/2020</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PetPopup;
