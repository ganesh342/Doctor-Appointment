// Fully Upgraded AppointmentsListScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setAppointments, Appointment } from '../redux/appointmentsSlice';
import { api } from '../api/axiosInstance';

const { width } = Dimensions.get('window');

const AppointmentsListScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const appointments = useSelector((state: RootState) => state.appointments.list);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/appointments');
        dispatch(setAppointments(response.data));
      } catch (error) {
        console.error('Failed to fetch appointments:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Doctor Appointment Dashboard</Text>
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('AppointmentDetail', { id: item.id })}
          >
            <View style={styles.cardHeader}>
              <Text style={styles.cardName}>{item.name}</Text>
              <Text style={styles.cardTime}>{item.time}</Text>
            </View>
            <Text style={styles.cardInfo}>Age: {item.age}</Text>
            <Text style={styles.cardInfo}>Symptoms: {item.symptoms}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default AppointmentsListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf1f7',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 24,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 30,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  cardName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  cardTime: {
    fontSize: 14,
    color: '#6b7280',
  },
  cardInfo: {
    fontSize: 15,
    color: '#4b5563',
    marginBottom: 4,
  },
});



// // Enhanced AppointmentsListScreen.tsx (with more polished UI)
// import React, { useEffect } from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../redux/store';
// import { setAppointments, Appointment } from '../redux/appointmentsSlice';
// import { api } from '../api/axiosInstance';

// const { width } = Dimensions.get('window');

// const AppointmentsListScreen = () => {
//   const navigation = useNavigation<any>();
//   const dispatch = useDispatch();
//   const appointments = useSelector((state: RootState) => state.appointments.list);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await api.get('/appointments');
//         dispatch(setAppointments(response.data));
//       } catch (error) {
//         console.error('Failed to fetch appointments:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>🩺 Doctor Appointments</Text>
//       <FlatList
//         data={appointments}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={styles.list}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={styles.card}
//             onPress={() => navigation.navigate('AppointmentDetail', { id: item.id })}
//           >
//             <View style={styles.cardTop}>
//               <Text style={styles.name}>{item.name}</Text>
//               <Text style={styles.time}>{item.time}</Text>
//             </View>
//             <Text style={styles.detail}>🧑 Age: {item.age}</Text>
//             <Text style={styles.detail}>🤒 Symptoms: {item.symptoms}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// };

// export default AppointmentsListScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#ecf2ff', padding: 24 },
//   heading: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     color: '#26459a',
//     textAlign: 'center',
//   },
//   list: { paddingBottom: 32 },
//   card: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 16,
//     marginBottom: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 6,
//   },
//   cardTop: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   name: { fontSize: 20, fontWeight: '700', color: '#2c3e50' },
//   detail: { fontSize: 15, color: '#4b4b4b', marginTop: 4 },
//   time: { fontSize: 14, color: '#999' },
// });
