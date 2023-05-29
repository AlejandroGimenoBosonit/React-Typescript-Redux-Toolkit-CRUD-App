import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';
import PersonOffSharpIcon from '@mui/icons-material/PersonOffSharp';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User, UserState } from '../../models';
import { deleteUser, editUser } from '../../redux/states/people';
import './UserTable.scss';

const UserTable = () => {

    // component will recieve redux state
    const reduxUsersState = useSelector((state) => state);
    // console.log(reduxUsersState);
    

    // extract redux state for render
    // const reduxUserState: User[] = useSelector((state: UserState) => state.users);
    // console.log(reduxUserState);
    
    // setting a component local state
    // const [localUserState, setLocalUserState] = useState<User[]>([]);

    // const prevUserState = useRef<User[]>();

    // const dispatch = useDispatch();

    const handleEdit = (userData: User) => {
        // dispatch(editUser(userData));
    };
    const handleDelete = (userData: User) => {
        // dispatch(deleteUser(userData));
    };

    // useEffect(() => {
    //   setLocalUserState(reduxUserState);

    //   prevUserState.current = reduxUserState;
    // },[prevUserState])
    
    
    return (
        <TableContainer className="user-table-container" component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
                <TableRow>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Username</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                    {/* {localUserState.map((user: User) => (
                        <TableRow
                            key={user.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                            {(user.name.firstname +' '+ user.name.lastname)
                            .toLowerCase()
                            .split(' ')
                            .map(function (word) {
                                return (word.charAt(0).toUpperCase() + word.slice(1));
                            }).join(' ')}
                            </TableCell>
                            <TableCell align="right">{user.username}</TableCell>
                            <TableCell align="right">{user.email}</TableCell>
                            <TableCell align="right">{user.phone}</TableCell>
                            <TableCell align="right">{'C/ ' + user.address.street + ', ' + user.address.number  + ', ZIP: ' + user.address.zipcode + ', ' + user.address.city}</TableCell>
                            <TableCell align="right">
                                <div className="action">
                                    <Button 
                                        className='action-buttons' 
                                        variant='contained' 
                                        endIcon={<ManageAccountsSharpIcon />}
                                        onClick={() => handleEdit(user)}
                                    >
                                        Edit User
                                    </Button>
                                    <Button 
                                        className='action-buttons' 
                                        color="error" 
                                        variant='contained' 
                                        endIcon={<PersonOffSharpIcon />}
                                        onClick={() => handleDelete(user)}
                                    >
                                        Delete User
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))} */}
            </TableBody>
            </Table>
        </TableContainer>
        
    )
}

export default UserTable