import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Appointment } from '../redux/appointmentsSlice';
import PrescriptionForm from '../components/PrescriptionForm';
import { RootStackParamList } from '../../App';

const AppointmentDetailScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'AppointmentDetail'>>();
  const { id } = route.params;
  const appointment = useSelector((state: RootState) =>
    state.appointments.list.find((a) => a.id === id)
  );

  const [showForm, setShowForm] = useState(false);

  if (!appointment) return <Text>Appointment not found.</Text>;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.heading}>Patient Overview</Text>
          <View style={styles.card}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>{appointment.name}</Text>

            <Text style={styles.label}>Age</Text>
            <Text style={styles.value}>{appointment.age}</Text>

            <Text style={styles.label}>Symptoms</Text>
            <Text style={styles.value}>{appointment.symptoms}</Text>

            <Text style={styles.label}>Scheduled Time</Text>
            <Text style={styles.value}>{appointment.time}</Text>
          </View>

          {(!appointment.prescription || appointment.prescription.medicine === null) && (
            <View style={styles.buttonContainer}>
              <Button title="Generate Prescription" color="#3b82f6" onPress={() => setShowForm(true)} />
            </View>
          )}

          {showForm && (
            <View style={styles.formContainer}>
              <PrescriptionForm appointmentId={appointment.id} setShowForm={setShowForm} />
            </View>
          )}

          {appointment.prescription && (
            <View style={styles.prescriptionBox}>
              <Text style={styles.prescriptionTitle}>Prescription</Text>
              <Text style={styles.prescriptionItem}>Medicine: {appointment.prescription.medicine}</Text>
              <Text style={styles.prescriptionItem}>Dosage: {appointment.prescription.dosage}</Text>
              {appointment.prescription.instructions && (
                <Text style={styles.prescriptionItem}>Instructions: {appointment.prescription.instructions}</Text>
              )}
            </View>
          )}
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default AppointmentDetailScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#f9fafb',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  heading: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 24,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
    marginTop: 12,
  },
  value: {
    fontSize: 16,
    color: '#111827',
    marginTop: 4,
  },
  buttonContainer: {
    marginVertical: 12,
    alignItems: 'center',
  },
  formContainer: {
    marginTop: 20,
    backgroundColor: '#eef2ff',
    borderRadius: 12,
    padding: 16,
  },
  prescriptionBox: {
    backgroundColor: '#e7fbe9',
    borderRadius: 12,
    padding: 20,
    marginTop: 24,
  },
  prescriptionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#047857',
    marginBottom: 12,
  },
  prescriptionItem: {
    fontSize: 16,
    color: '#1f2937',
    marginBottom: 6,
  },
});


