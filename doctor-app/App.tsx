import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

import AppointmentsListScreen from './src/screens/AppointmentsListScreen';
import AppointmentDetailScreen from './src/screens/AppointmentDetailsScreen';

export type RootStackParamList = {
  AppointmentsList: undefined;
  AppointmentDetail: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AppointmentsList" component={AppointmentsListScreen} options={{headerShown:false}}/>
          <Stack.Screen name="AppointmentDetail" component={AppointmentDetailScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

