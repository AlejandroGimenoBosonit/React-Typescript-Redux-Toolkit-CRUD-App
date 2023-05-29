import { createAsyncThunk, createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { UserState, User } from "../../models";
import { LocalStorageTypes } from "../../models/localstorage";
import { getLocalStorage, setLocalStorage } from "../../utilities/localstorage.utility";
import axios from 'axios';
import { useDispatch } from "react-redux";

// const initialUsersState: User[] = [];
const initialUsersState: UserState = {
    users: [],
    isLoading: true
}
// redux slice
export const usersSlice = createSlice({
    name: LocalStorageTypes.USERS,
    initialState: initialUsersState,
    reducers: {
        setUsers: (state, action) => {

            // store in local storage
            // setLocalStorage(LocalStorageTypes.USERS, action.payload);

            // update state with api response
            return {
                ...state,
                users: [action.payload],
                isLoading: false
            }
        },
        addUser: (state, action) => {
            // state.users.push(action.payload);
            const addNewUser = async(newUser: User) => {
                return await axios
               .post(`http://localhost:8080/users`, newUser)
               .then((response) => {
                console.log(response);
               });

            };

            addNewUser(action.payload);
        },
        editUser: (state, action) => {
            console.log(action.payload);
            
        },
        deleteUser: (state, action) => {
            // console.log(action.payload);
            const deletedUser = async(id: number) => {
               return await axios
               .delete(`http://localhost:8080/users/${id}`)
               .then((response) => true);
            }
            deletedUser(action.payload.id);
            
            // setUsers([...state]);
            
        }
    },
});


// Action creators are generated for each case reducer function
export const { setUsers, addUser, editUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
