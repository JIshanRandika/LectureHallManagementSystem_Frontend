import React, {useContext} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LecHallsScreen from '../screens/LecHallsScreen';
import TimeSlotsScreen from '../screens/TimeSlotsScreen';
import BookingScreen from '../screens/bookingScreen';
import {AuthContext} from '../context/AuthContext';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

const Navigation = (navigation) => {
  const {userInfo, splashLoading, logout} = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {splashLoading ? (
          <Stack.Screen
            name="Splash Screen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        ) : userInfo.message ? (
          // <Stack.Screen name="Home" component={HomeScreen} />
            <>
                <Stack.Screen
                    name="LecHalls"
                    options={{
                        title: 'Lecture Halls',
                        headerStyle: {
                            backgroundColor: '#531253',
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign:'center',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerRight: () => (

                            <TouchableOpacity
                                style={{
                                    backgroundColor: "#33032F",
                                    borderRadius:5,
                                    padding:10
                                }}
                                onPress={logout}
                            >
                                <Text style={{fontSize: 10, fontWeight:"bold", textAlign:"center",color:"#ffffff"}}>Logout</Text>
                            </TouchableOpacity>
                        ),
                    }}
                    component={LecHallsScreen}
                />
                <Stack.Screen
                    name="Bookings"
                    options={{
                        title: 'Booking',
                        headerStyle: {
                            backgroundColor: '#531253',
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign:'center',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerRight: () => (

                            <TouchableOpacity
                                style={{
                                    backgroundColor: "#33032F",
                                    borderRadius:5,
                                    padding:10
                                }}
                                onPress={logout}
                            >
                                <Text style={{fontSize: 10, fontWeight:"bold", textAlign:"center",color:"#ffffff"}}>Logout</Text>
                            </TouchableOpacity>
                        ),
                    }}
                    component={BookingScreen}
                />
                <Stack.Screen
                    name="TimeSlots"
                    options={{
                        title: 'Time Slots',
                        headerStyle: {
                            backgroundColor: '#531253',
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign:'center',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerRight: () => (

                            <TouchableOpacity
                                style={{
                                    backgroundColor: "#33032F",
                                    borderRadius:5,
                                    padding:10
                                }}
                                onPress={logout}
                            >
                                <Text style={{fontSize: 10, fontWeight:"bold", textAlign:"center",color:"#ffffff"}}>Logout</Text>
                            </TouchableOpacity>
                        ),
                    }}
                    component={TimeSlotsScreen}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{headerShown: false}}
                />
            </>

        ) : (
          <>
              <Stack.Screen
                  name="LecHalls"
                  options={{
                      title: 'Lecture Halls',
                      headerStyle: {
                          backgroundColor: '#531253',
                      },
                      headerTintColor: '#fff',
                      headerTitleAlign:'center',
                      headerTitleStyle: {
                          fontWeight: 'bold',
                      },

                  }}
                  component={LecHallsScreen}
              />
              <Stack.Screen
                  name="Login"
                  component={LoginScreen}
                  options={{headerShown: false}}
              />
              <Stack.Screen
                  name="Register"
                  component={RegisterScreen}
                  options={{headerShown: false}}
              />
              <Stack.Screen
                  name="Bookings"
                  options={{
                      title: 'Booking',
                      headerStyle: {
                          backgroundColor: '#531253',
                      },
                      headerTintColor: '#fff',
                      headerTitleAlign:'center',
                      headerTitleStyle: {
                          fontWeight: 'bold',
                      },

                  }}
                  component={BookingScreen}
              />
              <Stack.Screen
                  name="TimeSlots"
                  options={{
                      title: 'Time Slots',
                      headerStyle: {
                          backgroundColor: '#531253',
                      },
                      headerTintColor: '#fff',
                      headerTitleAlign:'center',
                      headerTitleStyle: {
                          fontWeight: 'bold',
                      },

                  }}
                  component={TimeSlotsScreen}
              />

          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
