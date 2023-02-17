import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';




function EditForm({ handleEditSubmit, handleCloseEdit, showEdit, currentUser}) {

    
    
        const [newid,setNewid]=useState(currentUser.id);
        const [newname,setNewname]=useState(currentUser.name);
        const [newclassname,setNewclassname]=useState(currentUser.classname);
    

    const handleUpdate = (e) => {

        e.preventDefault();

        let tempObj = {};


        tempObj["id"]=newid;
        tempObj["name"]=newname;
        tempObj["classname"]=newclassname;

        console.log(tempObj);


        // Update()
    }


    return (
        <>

            <Modal
                show={showEdit}
                onHide={handleCloseEdit}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit STUDENT</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleEditSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicId">
                            <Form.Label>ID</Form.Label>
                            <Form.Control type="text" value={newid} onChange={(e)=> setNewid(e.target.value)}  placeholder="Enter id" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" type="text" value={newname} onChange={(e)=> setNewname(e.target.value)}  placeholder="Enter Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCourse">
                            <Form.Label>Course</Form.Label>
                            <Form.Control type="text" value={newclassname} onChange={(e)=> setNewclassname(e.target.value)}  placeholder="Enter Course" />
                        </Form.Group>

                        <Modal.Footer>
                            <Button variant="primary" type="submit" onClick={handleUpdate}>
                                Update
                            </Button>
                            <Button variant="secondary" onClick={handleCloseEdit}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default EditForm;










