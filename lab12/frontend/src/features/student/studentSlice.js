import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import axios from 'axios';

export const submitStudent = createAsyncThunk(
    'student/submitStudent',
    async (formData)=>{
        const res = await axios.post('http://localhost:4000/students', formData);
        return res.data;
    }
);

const studentSlice = createSlice({
    name: 'student',
    initialState: {
        name : "",
        class : "",
        rollno : "",
        subjects : [{subjects:"", marks:""}],
        status : 'idle',
        error : null
    },
    reducers: {
        updateField : (state, action) =>{
            state[action.payload.field] = action.payload.value;
        },
        updateSubject : (state, action) =>{
            const {index, field, value} = action.payload;
            state.subjects[index][field] = value;
        },
        addSubject : (state) =>{
            state.subjects.push({subject:"", marks:""});
        },
        removeSubject : (state, action) =>{
            state.subjects.splice(action.payload, 1);
        }
    },
    extraReducers : (builder) =>{
        builder
        .addCase(submitStudent.pending, (state) =>{
            state.status = 'loading';
        })
        .addCase(submitStudent.fulfilled, (state) =>{
            state.status = 'succeeded';
        })
        .addCase(submitStudent.rejected, (state, action) =>{
            state.status = 'failed';
            state.error = action.error.message;
        });
    }
});

export const { updateField, addSubject, removeSubject, updateSubject}= studentSlice.actions;
export default studentSlice.reducer;
