
import React, { useState } from 'react'
import studentdata from '../studentdata.json'
import FormModal from './modal/FormModal';
import { BiSortAlt2 } from "react-icons/bi";
import EditForm from './modal/EditForm';

const StudentTable = () => {
    const [studentinfo, setstudentinfo] = useState(studentdata);

    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);        

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [classname, setClassname] = useState('');
    const [namesort, setNamesort] = useState(false);
    //edit
	const initialFormState = { id: null, name: '', classname: '' }
	const [ currentUser, setCurrentUser ] = useState(initialFormState)

	const [ editing, setEditing ] = useState(false)
    



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const handleShowEdit = () => setShowEdit(true);
    const handleCloseEdit = () => setShowEdit(false);



    
const handleEdit=(user,index)=>{
    
    setEditing(true)

	setCurrentUser({ id: user.id, name: user.name, classname: user.classname })
    
    handleShowEdit();
    // console.log(currentUser,index);


}




    const handleDelete = (id) => {
        setstudentinfo(studentinfo.filter(item => item.id !== id))
        console.log(id)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (id.length > 0 && name.length > 3 && classname.length > 3) {
            setstudentinfo([...studentinfo, { id, name, classname }]);
            setId("");
            setName("");
            setClassname("");
            handleClose();
        }


    }
     const handleEditSubmit=(e)=>{
        e.preventDefault();
        


        
     }
    const sortName = () => {
        if (namesort === false) {
            setNamesort(true);

            const ascsorting = [...studentinfo].sort((a, b) =>
                a.name > b.name ? 1 : -1,
            );
            setstudentinfo(ascsorting);
        }
        else {
            setNamesort(false);
            const descsorting = [...studentinfo].sort((a, b) =>
                a.name > b.name ? -1 : 1,
            );
            setstudentinfo(descsorting);

        }


    }
update()






    return (
        <div>
            <EditForm handleCloseEdit={handleCloseEdit} handleEditSubmit={handleEditSubmit} showEdit={showEdit} currentUser={currentUser} />
            <FormModal handleClose={handleClose} handleSubmit={handleSubmit} show={show} setId={setId} setName={setName} setClassname={setClassname} />
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
                                    <th scope="col" className="d-flex justify-content-between">Name<span onClick={sortName}><BiSortAlt2 /></span></th>
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
                                            <button className='btn btn-outline-primary me-3' onClick={()=> handleEdit(ele,index)}>Edit</button>
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
                    


                </div>
            </div>
        </div>



    )
}

export default StudentTable