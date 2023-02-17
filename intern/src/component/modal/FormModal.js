import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';




function FormModal({ handleSubmit, handleClose, show,setId,setName,setClassname}) {
    


    return (
        <>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>NEW STUDENT</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicId">
                            <Form.Label>ID</Form.Label>
                            <Form.Control type="text" placeholder="Enter id" onChange={(e)=> setId(e.target.value)}  />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" onChange={(e)=> setName(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCourse">
                            <Form.Label>Course</Form.Label>
                            <Form.Control type="text" placeholder="Enter Course" onChange={(e)=> setClassname(e.target.value)}/>
                        </Form.Group>

                        <Modal.Footer>
                            <Button variant="primary" type="submit">
                                Save
                            </Button>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default FormModal;

































// import React from 'react'

// const FormModal = ({handleClose}) => {
//   return (
//     <div>
//         <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
//                 aria-hidden="true">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="exampleModalLabel">Add New Student</h5>
//                             <button type="button" onClick={handleClose} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div className="modal-body">
//                             <form id="formone">
//                                 <div className="mb-3 input-icon">
//                                     <label htmlFor="recipient-id" className="col-form-label">ID</label>
//                                     <input type="number" className="form-control" id="recipient-id" placeholder="Enter ID"/>
//                                     <span id="id-error" className="error"></span>

//                                 </div>
//                                 <div className="mb-3 input-icon">
//                                     <label htmlFor="recipient-name" className="col-form-label">Name</label>
//                                     <input type="text" className="form-control" id="recipient-name"
//                                         placeholder="Enter Name"/>
//                                     <span id="name-error" className="error"></span>

//                                 </div>
//                                 <div className="mb-3 input-icon">
//                                     <label htmlFor="recipient-course" className="col-form-label">Course Name</label>
//                                     <input type="text" className="form-control" id="recipient-course"
//                                         placeholder="Enter Course Name"/>
//                                     <span id="course-error" className="error"></span>

//                                 </div>

//                             </form>
//                         </div>
//                         <div className="modal-footer">
//                             <button type="button" onClick={handleClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                             <button type="button" onClick={handleClose} className="btn btn-primary" data-bs-dismiss="modal" id="addme">Add
//                                 Me</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//     </div>
//   )
// }

// export default FormModal