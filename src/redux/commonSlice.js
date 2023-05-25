import { createSlice } from '@reduxjs/toolkit'

const initialValue = {
    isLogged: false,
    user: {},
    //  organisation_id: null,
    token: null,
    organisation_id: null,
    organisation_name: "",
    employee_id: null,
    employee_photo: "",
    logo_url: "",
    candidate_id: null,
    interview_id: null,
    position_id: null,
    departmentArr: [],
    genderArr: [],
    candidateStatus: "",
    newRoleDepartment: null,
    budjetList:[],
    videList:[],
    currentDynamicPaedata:{}
}
export const commonSlice = createSlice({
    name: 'common',
    initialState: initialValue,
    reducers: {
        updateState: (state, action) => {
            assignValueInState(action.payload, state)
        },
        resetState: (state) => {
            assignValueInState(initialValue, state)
        },
    },
})

const assignValueInState = (obj, state) => {
    for (const key in obj) { state[key] = obj[key] }
}

export const { updateState, resetState } = commonSlice.actions
export default commonSlice.reducer


// dispatch(updateState({ value: 25 }))
// dispatch(resetState())

// const commonReducer = useSelector((state) => state.commonReducer);
