import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  profileLoading: false,
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setUser(state, action) 
    {
      console.log("In slices",action.payload)
      state.user = action.payload
    },
    setProfileLoading(state, value) {
      state.profileLoading = value.payload
    },
  }
})

export const { setUser, setProfileLoading } = profileSlice.actions
export default profileSlice.reducer
