import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./Slice/UserSlice";
import { Player2 } from "./Slice/Player2";




const store = configureStore({
    reducer : {
        users : UserSlice.reducer,
        player2 : Player2.reducer,
       

    }
})
export default store;