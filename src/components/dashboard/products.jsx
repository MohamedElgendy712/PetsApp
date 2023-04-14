import React from 'react'
import ArrowDown from '../../resources/themes/dashboard-v1/icons/arrow-down.svg'

function products() {
    return (
        <div className='products py-3 px-4 flex-grow-1 flex-shrink-1 bg-lightgray'>
            <div>
                <span className='fw-bold dashboard-title'>Add new Product</span>
                <div className='path fw-semibold'>
                    <span>Dashboard&gt;</span>
                    <span>Products&gt;</span>
                    <span>Add new product</span>
                </div>
            </div>
            <div className='inputs-container bg-white'>
                <div className='product-info d-flex flex-column gap-4'>
                    <span className='product-info-title'>PRODUCT INFO</span>
                    <div className='d-flex'>
                        <div className='d-flex flex-column gap-1 input-container'>
                            <label className='fw-semibold'>Product Name</label>
                            <input type="text" placeholder='product name...' />
                        </div>
                        <div className='d-flex flex-column gap-1 input-container'>
                            <label className='fw-semibold'>Brand Name</label>
                            <input type="text" placeholder='brand name...' />
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className='d-flex flex-column gap-1 input-container'>
                            <label className='fw-semibold'>Category</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected disabled>Category...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                        </div>
                        <div className='d-flex flex-column gap-1 input-container'>
                            <label className='fw-semibold'>Sub Category <span className='fw-normal'>(optional)</span></label>
                            <select class="form-select " aria-label="Default select example">
                                <option selected disabled>Sub Category...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className='d-flex flex-column gap-1 input-container'>
                            <label className='fw-semibold'>Pet Options</label>
                                <select class="form-select" aria-label="Default select example" >
                                    <option selected disabled>Pet Options...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                        </div>
                        <div className='d-flex flex-column gap-1 input-container'>
                            <label className='fw-semibold'>Pet Age Range</label>
                            <select class="form-select " aria-label="Default select example">
                                <option selected disabled>00:01 year</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className='d-flex flex-column gap-1 input-container'>
                            <label className='fw-semibold'>Product Colors</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected disabled>Product Colors...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                        </div>
                        <div className='d-flex flex-column gap-1 input-container'>
                            <label className='fw-semibold'>Product Flavors</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected disabled>Ex: Orange</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className='fw-semibold'> Nutrition Facts</label>
                        <input type="text" placeholder='EX: 234 Calories...'/>
                    </div>
                    <div>
                        <label className='fw-semibold'> Preparation instructions</label>
                        <input type="text" placeholder='Preparation instructions...'/>
                    </div>
                </div>

                <hr />

                <div className='price-variation'>
                    <p className='product-info-title m-0 mb-4'>Product  PRICE & Variations</p>

                    <div className='variations'>
                        <span>Variation 01</span>
                        <span>Variation 02</span>
                        <span>+ Add new Variation</span>
                    </div>

                    <div className='d-flex flex-column gap-3 inputs-container'>
                        <div className='d-flex gap-1'>
                            <div className='d-flex flex-column gap-1 input-container'>
                                <label className='fw-semibold'>Product Price</label>
                                <input type="text" placeholder='EX: $999' />
                            </div>
                            <div className='d-flex flex-column gap-1 input-container'>
                                <label className='fw-semibold'>Procurement cost<span className='fw-normal'>(optional)</span></label>
                                <input type="text" placeholder='EX: $999' />
                            </div>
                            <div className='d-flex flex-column gap-1 input-container'>
                                <label className='fw-semibold'>Tax Enabled</label>
                                <select class="form-select" aria-label="Default select example" >
                                    <option selected disabled>EX: True</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className='d-flex gap-1'>
                            <div className='d-flex flex-column gap-1 input-container'>
                            <label className='fw-semibold'>Product Unit<span className='fw-normal'>(optional)</span></label>
                                <select class="form-select" aria-label="Default select example" >
                                    <option selected disabled>EX: 300</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className='d-flex flex-column gap-1 input-container'>
                                <label className='fw-semibold'>Product Stock<span className='fw-normal'>(optional)</span></label>
                                <input type="text" placeholder='EX: 100' />
                            </div>
                            <div className='d-flex flex-column gap-1 input-container'>
                                <label className='fw-semibold'>Alert Quantity<span className='fw-normal'>(optional)</span></label>
                                <input type="text" placeholder='EX: 50' />
                            </div>
                        </div>
                        <div className='d-flex gap-1'>
                            <div className='d-flex flex-column gap-1 input-container'>
                            <label className='fw-semibold'>Offer Applied</label>
                                <select class="form-select" aria-label="Default select example" >
                                    <option selected disabled>EX: True</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className='d-flex flex-column gap-1 input-container'>
                            <label className='fw-semibold'>Offer Details</label>
                                <select class="form-select" aria-label="Default select example" >
                                    <option selected disabled>EX: Discount by :</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className='d-flex flex-column gap-1 input-container'>
                            <label className='fw-semibold'>Offer Duration</label>
                                <select class="form-select" aria-label="Default select example" >
                                    <option selected disabled>EX: 72h</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-end gap-3 btn-containers'>
                        <button>Cancel</button>
                        <button>Duplicate</button>
                        <button>Save</button>
                    </div>
                </div>
                
            </div>
        </div>
    )   
}

export default products