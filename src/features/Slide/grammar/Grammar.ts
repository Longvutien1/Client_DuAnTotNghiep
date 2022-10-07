import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createGrammar, editGrammar, getGrammarDetail, listGrammar, removeGramma } from "../../../api/grammar";
import { GrammarType } from "../../../types/grammar";


export const getListGrammarSlice:any = createAsyncThunk(
    'grammar/getListGrammar', 
    async () => {
        const {data} = await listGrammar();
        return data
    } 
)

export const createGrammarSlice = createAsyncThunk(
    '/grammar/createGrammar',
    async (grammar : GrammarType) => {
        const {data} = await createGrammar(grammar)
        return data
    }
)

export const editGrammarSlice = createAsyncThunk(
    "grammar/editGrammar",
    async (grammar : GrammarType) => {
        const {data} = await editGrammar(grammar);
        return data;
    }
)

export const removeGrammaSlice:any = createAsyncThunk(
    "grammar/deleteGrammar",
    async (id:any) => {
        const {data} = await removeGramma(id);
        return data;
    }
)
export const getGrammarById:any = createAsyncThunk(
    "grammar/getGrammarByid",
    async (id:any) => {
        const {data} = await getGrammarDetail(id);
        return data;
    }
)

const grammarSlice = createSlice({
    name : "grammar",
    initialState:{
        value : [],
        breadcrumb: ""
    }, 
    reducers: {
        changeBreadcrumb(state, action) {
            state.breadcrumb = action.payload
       }
    },
    extraReducers:  (builer) => {
        builer.addCase(getListGrammarSlice.fulfilled, (state: any, action) => {
            state.value = action.payload
       })
        builer.addCase(createGrammarSlice.fulfilled, (state:any, action:any) => {
            state.value = [...state.value, action.payload]
        })
        builer.addCase(editGrammarSlice.fulfilled, (state:any, action) => {
            state.value = state.value.map((item: { _id: any; }) => item._id === action.payload._id ? action.payload : item)
        })
        
        builer.addCase(removeGrammaSlice.fulfilled,  (state:any, action:any) => {
            state.value = state.value.filter((arrow:any) => arrow._id !== action.payload._id);   
        })

        builer.addCase(getGrammarById.fulfilled, (state:any, action:any) => {
            state.value = action.payload;   
        })

    },
})


export const { changeBreadcrumb } = grammarSlice.actions
export default grammarSlice.reducer;