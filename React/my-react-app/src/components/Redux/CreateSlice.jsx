import {} from 'redux'

const initialState = {
    isLogin: false
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        login
    }
})