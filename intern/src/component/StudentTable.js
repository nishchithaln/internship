
import React, { useState } from 'react'
import studentdata from '../studentdata.json'
import FormModal from './modal/FormModal';

const StudentTable = () => {
    const [studentinfo, setstudentinfo] = useState(studentdata);

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const handleSave = ()=> {

    }

    const handleDelete = (id) => {
        setstudentinfo(studentinfo.filter(item => item.id !== id))
        console.log(id)
    }






    return (
        <div> 
            <FormModal handleClose={handleClose} handleSave={handleSave} show={show} />
            <div className="container my-5 card">
                <div className="row mt-5 studentlist">
                    <div className="d-flex justify-content-between">
                        <h2>List of Student</h2>

                        <button type="button" onClick={handleShow} className="btn btn-primary  text-center newbtn" data-bs-toggle="modal"
                            data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap"><span className="me-1 fw-bold">+</span>
                            New Student</button>
                    </div>

                </div>

                <div className="row">
                    <div className="d-flex justify-content-between">
                        <div>
                            <label htmlFor='showentry'>Show</label>
                            <select id='showentry' name='number'>
                                <option value='one'>1</option>
                                <option value='two'>2</option>
                                <option value='three'>3</option>
                                <option value='four'>4</option>
                                <option value='five'>5</option>
                                <option value='six'>6</option>
                                <option value='seven'>7</option>
                                <option value='eight'>8</option>
                                <option value='nine'>9</option>
                                <option value='ten' selected="selected">10</option>
                            </select>
                            <label htmlFor='showentry'>Entries</label>


                        </div>
                        <div className="">
                            <label htmlFor="serach">search</label>
                            <input type="text" id="txtFind" placeholder="ex:name" />

                        </div>
                    </div>
                    <div className="col-lg-12 col-md-8 card-1 mt-3">
                        <table className="table table-bordered text-center" id="tableid">
                            <thead>
                                <tr>
                                    <th scope="col">UUID </th>
                                    <th scope="col">ID </th>
                                    <th scope="col" className="d-flex justify-content-between">Name<span><i
                                        className="bi bi-sort-alpha-down" id="sorticon"></i></span></th>
                                    <th scope="col" className="justify-content-between">Course Name<span><i
                                        className="bi bi-sort-alpha-down"></i></span></th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody id="tabledata">
                                {studentinfo.map((ele, index) => {
                                    return <tr className='text-success' key={ele.id}>
                                        <td>{index + 1}</td>
                                        <td>{ele.id}</td>
                                        <td>{ele.name}</td>
                                        <td>{ele.classname}</td>
                                        <td>
                                            <button className='btn btn-outline-primary me-3'>Edit</button>
                                            <button className='btn btn-outline-danger' id='studentdelete' onClick={() => handleDelete(ele.id)}>Delete</button>

                                        </td>
                                    </tr>
                                })}

                            </tbody>
                        </table>
                    </div>


                    <div className="row mt-2 mb-4">
                        <div className="d-flex justify-content-between">
                            <p>Showing 1 to 2 of 2 entries</p>
                            <div className="d-flex justify-content-space-between">

                                <button id="back" className="me-1 btn btn-sm btn-info px-3">Back</button>
                                <button id="pagenumber" className="fw-bold px-2 bg-light border border-1">1</button>
                                <button id="next" className="ms-1 btn btn-sm btn-info px-3">Next</button>
                            </div>

                        </div>

                    </div>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Add New Student</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form id="formone">
                                        <div className="mb-3 input-icon">
                                            <label htmlFor="recipient-id" className="col-form-label">ID</label>
                                            <input type="number" className="form-control" id="recipient-id" placeholder="Enter ID" />
                                            <span id="id-error" className="error"></span>

                                        </div>
                                        <div className="mb-3 input-icon">
                                            <label htmlFor="recipient-name" className="col-form-label">Name</label>
                                            <input type="text" className="form-control" id="recipient-name"
                                                placeholder="Enter Name" />
                                            <span id="name-error" className="error"></span>

                                        </div>
                                        <div className="mb-3 input-icon">
                                            <label htmlFor="recipient-course" className="col-form-label">Course Name</label>
                                            <input type="text" className="form-control" id="recipient-course"
                                                placeholder="Enter Course Name" />
                                            <span id="course-error" className="error"></span>

                                        </div>

                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" id="addme">Add
                                        Me</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>



    )
}

export default StudentTable