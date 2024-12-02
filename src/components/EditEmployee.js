import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditEmployee(props) {
  const [show, setShow] = useState(false);
  const [name, setName]= useState(props.name);
  const [role, setRole]= useState(props.role);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Update</button>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>


<form id='editmodal' className="w-full max-w-sm">
  <div className="flex items-center mb-4">
    <label 
      className="w-1/3 text-gray-500 font-bold text-right pr-4" 
      htmlFor="name">
      Full Name
    </label>
    <input 
      className="w-2/3 bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
      id="name" 
      type="text" 
      value={name} 
      onChange={(e)=> {setName(e.target.value)}}
      
    />
  </div>

  {/* Role Field */}
  <div className="flex items-center mb-4">
    <label 
      className="w-1/3 text-gray-500 font-bold text-right pr-4" 
      htmlFor="role">
      Role
    </label>
    <input 
      className="w-2/3 bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
      id="role" 
      type="text" 
      value={role}
      onChange={(e)=> {setRole(e.target.value)}}

/>
  </div>
</form>


        </Modal.Body>
        <Modal.Footer>
          <Button className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">' onClick={handleClose}>
            Close
          </Button>
          <button className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">' form='editmodal'>Update</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;