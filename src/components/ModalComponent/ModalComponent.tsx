import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { User, ModalProps } from '../../models';
import './ModalComponent.scss';

const style = {
  color: 'black',
  borderRadius: '50px',
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderColor: ' transparent',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

// form state
const initialForm: User = {
  name: {
    firstname: '',
    lastname: ''
  },
  username: '',
  email: '',
  password: '',
  phone: '',
  address: {
    city: '',
    street: '',
    number: '',
    zipcode: ''
  }
};


const ModalComponent = ({openProp, setModalOpen}: ModalProps) => {  

  const [formState, setFormState] = useState<User>(initialForm);
  
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formState);

    // form with default values
    setFormState(initialForm);
  };

  return (
    <Modal
      className='modal'
      open={openProp}
      onClose={setModalOpen}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={{ ...style, width: 600 }}>
        <h2 className="parent-modal-title">ADD A NEW USER</h2>
        {/* form */}
        <form onSubmit={handleSubmit} className='modal-form'>
          <div className="modal-form-name">
            <h2>Name: </h2>
            <div className="container">
              <input
                type="text"
                value={formState.name.firstname}
                onChange={(e) => setFormState(previous => ({
                  ...previous,
                  name:{
                    ...previous.name,
                    firstname: e.target.value
                  }
                }))}
              />
              <input
                type="text"
                value={formState.name.lastname}
                onChange={(e) => setFormState(previous => ({
                  ...previous,
                  name:{
                    ...previous.name,
                    lastname: e.target.value
                  }
                }))}
              />
            </div>
            
            
          </div>
          <div className="modal-form-credentials">
            <h2>Credentials: </h2>
            <div className="container">
              <input
                type="text"
                value={formState.username}
                onChange={(e) => setFormState({...formState, username : e.target.value})}
              />

              <input
                type="email"
                value={formState.email}
                onChange={(e) => setFormState({...formState, email : e.target.value})}
              />

              <input
                type="password"
                value={formState.password}
                onChange={(e) => setFormState({...formState, password : e.target.value})}
              />

              <input
                type="text"
                value={formState.phone}
                onChange={(e) => setFormState({...formState, phone : e.target.value})}
              />
            </div>
          </div>

          <div className="modal-form-address">
            <h2>Address: </h2>
            <div className="container">
              <input
                type="text"
                value={formState.address.city}
                onChange={(e) => setFormState(previous => ({
                  ...previous,
                  address:{
                    ...previous.address,
                    city: e.target.value
                  }
                }))}

              />
              <input
                type="text"
                value={formState.address.street}
                onChange={(e) => setFormState(previous => ({
                  ...previous,
                  address:{
                    ...previous.address,
                    street: e.target.value
                  }
                }))}

              />

              <input
                type="text"
                value={formState.address.number}
                onChange={(e) => setFormState((previous) => ({
                  ...previous,
                  address:{
                    ...previous.address,
                    number: e.target.value
                  }
                }))}

              />
              
              <input
                type="text"
                value={formState.address.zipcode}
                onChange={(e) => setFormState(previous => ({
                  ...previous,
                  address:{
                    ...previous.address,
                    zipcode: e.target.value
                  }
                }))}

              />
            </div>            
          </div>

          <div className="modal-buttons">
            <div className="container">

            </div>
            <Button
              type="submit"
              variant="contained" 
              color="success" 
              endIcon={<SendIcon />}
              onClick={() => handleSubmit}
            >
              Add User
            </Button>
          </div>
        </form>
      </Box>
    </Modal>
  )
}

export default ModalComponent;