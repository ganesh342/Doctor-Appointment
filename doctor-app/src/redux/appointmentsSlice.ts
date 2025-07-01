import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Appointment {
  id: string;
  name: string;
  age: number;
  symptoms: string;
  time: string;
  prescription?: {
    medicine: string;
    dosage: string;
    instructions?: string;
  };
}

interface AppointmentsState {
  list: Appointment[];
}

const initialState: AppointmentsState = {
  list: [],
};

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    setAppointments(state, action: PayloadAction<Appointment[]>) {
      state.list = action.payload;
    },
  },
});

export const { setAppointments } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;
export type { Appointment };
