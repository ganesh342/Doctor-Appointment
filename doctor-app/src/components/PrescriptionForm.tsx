import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';
import { Appointment, setAppointments } from '../redux/appointmentsSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { api } from '../api/axiosInstance';

type Props = {
  appointmentId: string;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const PrescriptionForm = ({ appointmentId, setShowForm }: Props) => {
  const [medicine, setMedicine] = useState('');
  const [dosage, setDosage] = useState('');
  const [instructions, setInstructions] = useState('');
  const dispatch = useDispatch();
  const appointments = useSelector((state: RootState) => state.appointments.list);

  const handleSubmit = async () => {
    if (!medicine || !dosage) {
      Alert.alert('Medicine and dosage are required');
      return;
    }

    const res = await api.post(`/appointments/${appointmentId}/prescription`, {
      medicine,
      dosage,
      instructions,
    });

    const updatedAppointments = appointments.map((a) =>
      a.id === appointmentId ? res.data : a
    );
    dispatch(setAppointments(updatedAppointments));
    setShowForm(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.formContainer}>
        <Text style={styles.formHeading}>Fill Prescription</Text>
        <TextInput
          placeholder="Medicine Name"
          value={medicine}
          onChangeText={setMedicine}
          style={styles.input}
        />
        <TextInput
          placeholder="Dosage"
          value={dosage}
          onChangeText={setDosage}
          style={styles.input}
        />
        <TextInput
          placeholder="Instructions (optional)"
          value={instructions}
          onChangeText={setInstructions}
          style={[styles.input, styles.multiLine]}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />
        <Button title="💾 Save Prescription" onPress={handleSubmit} color="#3b82f6" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PrescriptionForm;

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },
  formHeading: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderColor: '#cbd5e1',
    borderWidth: 1,
    padding: 12,
    marginBottom: 16,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: '#f9fafb',
  },
  multiLine: {
    height: 100,
  },
});


// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { Appointment, setAppointments } from '../redux/appointmentsSlice';
// import { useSelector } from 'react-redux';
// import { RootState } from '../redux/store';
// import { api } from '../api/axiosInstance';

// type Props = {
//   appointmentId: string;
//   setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
// };

// const PrescriptionForm = ({ appointmentId, setShowForm }: Props) => {
//   const [medicine, setMedicine] = useState('');
//   const [dosage, setDosage] = useState('');
//   const [instructions, setInstructions] = useState('');
//   const dispatch = useDispatch();
//   const appointments = useSelector((state: RootState) => state.appointments.list);

//   const handleSubmit = async () => {
//     if (!medicine || !dosage) {
//       Alert.alert('Medicine and dosage are required');
//       return;
//     }

//     const res = await api.post(`/appointments/${appointmentId}/prescription`, {
//       medicine,
//       dosage,
//       instructions,
//     });

//     const updatedAppointments = appointments.map((a) =>
//       a.id === appointmentId ? res.data : a
//     );
//     dispatch(setAppointments(updatedAppointments));
//     setShowForm(false);
//   };

//   return (
//     <View style={styles.formContainer}>
//       <Text style={styles.formHeading}>Fill Prescription</Text>
//       <TextInput
//         placeholder="Medicine Name"
//         value={medicine}
//         onChangeText={setMedicine}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Dosage"
//         value={dosage}
//         onChangeText={setDosage}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Instructions (optional)"
//         value={instructions}
//         onChangeText={setInstructions}
//         style={styles.input}
//       />
//       <Button title="💾 Save Prescription" onPress={handleSubmit} color="#3b82f6" />
//     </View>
//   );
// };

// export default PrescriptionForm;

// const styles = StyleSheet.create({
//   formContainer: {
//     backgroundColor: '#ffffff',
//     borderRadius: 16,
//     padding: 20,
//     marginTop: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.08,
//     shadowRadius: 6,
//     elevation: 4,
//   },
//   formHeading: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#1f2937',
//     marginBottom: 16,
//     textAlign: 'center',
//   },
//   input: {
//     borderColor: '#cbd5e1',
//     borderWidth: 1,
//     padding: 12,
//     marginBottom: 16,
//     borderRadius: 10,
//     fontSize: 16,
//     backgroundColor: '#f9fafb',
//   },
// });


