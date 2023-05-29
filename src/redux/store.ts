// redux store

import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { UserState } from "../models";
import usersSlice from "./states/people";

export const store = configureStore<UserState>({
    reducer: {
        users: usersSlice,
        // favs:
    }
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<typeof store.getState> = useSelector;