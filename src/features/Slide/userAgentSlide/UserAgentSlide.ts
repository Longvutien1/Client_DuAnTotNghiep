import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addUserAgent, getUserAgent, listUserAgent, editUserAgent, removeUserAgent } from '../../../api/userAgent'
import { UserAgentType } from '../../../types/userAgent'



export const getListUserAgent = createAsyncThunk(
    "users/getListUserAgent",
    async () => {
        const { data } = await listUserAgent()
        return data
    }
)

export const addUserAgentSlide = createAsyncThunk(
    "users/addUserAgent",
    async (userAgent: UserAgentType) => {
        const { data } = await addUserAgent(userAgent)
        return data
    }
)

export const editUserAgentSlide = createAsyncThunk(
    "users/editUserAgent",
    async (userAgent: UserAgentType) => {
        const { data } = await editUserAgent(userAgent)
        return data
    }
)

export const removeUserAgentSlide = createAsyncThunk(
    "users/removeUserAgent",


    async (arr: any) => {
        if (Array.isArray(arr)) {
            console.log("arr > 0", arr);

            let dataRemove: UserAgentType[] = []
            for (let i = 0; i < arr.length; i++) {
                const { data } = await removeUserAgent(arr[i].id)
                dataRemove.push(data)
            }
            console.log("dataRemove", dataRemove);
            return dataRemove
        } else {
            console.log("arr", arr);


            const { data } = await removeUserAgent(arr)
            return data

        }
    }
)

const userAgentSlide = createSlice({
    name: "userQuizs",
    initialState: {
        value: [],
        breadcrumb: ""
    },
    reducers: {
        changeBreadcrumb(state, action) {
            state.breadcrumb = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(getListUserAgent.fulfilled, (state, action) => {
            state.value = action.payload
        })
        builder.addCase(addUserAgentSlide.fulfilled, (state: any, action) => {
            state.value = [...state.value, action.payload]

        })
        builder.addCase(editUserAgentSlide.fulfilled, (state: any, action) => {
            state.value = state.value.map(item => item._id === action.payload._id ? action.payload : item)
        })
        builder.addCase(removeUserAgentSlide.fulfilled, (state: any, action) => {
            console.log("action.payload._id", action.payload);
            if (Array.isArray(action.payload)) {
                const payload = {
                    excludeIds: action.payload.map(item => {
                        return item._id
                    })
                }
                console.log("payload", payload);
                state.value = state.value.filter(item => !payload.excludeIds.includes(item._id))
                console.log("state.value", state.value);
            } else {
                state.value = state.value.filter(item => item._id !== action.payload._id)
            }
        })
    },
})

export const { changeBreadcrumb } = userAgentSlide.actions

export default userAgentSlide.reducer