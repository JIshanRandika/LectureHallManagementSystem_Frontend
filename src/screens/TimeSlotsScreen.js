import React, {useContext, useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';
import {BASE_URL} from '../config';
import { Root, Popup } from 'react-native-popup-confirm-toast'

const TimeSlotsScreen = ({ route, navigation }) => {
    const {userInfo, logout} = useContext(AuthContext);
    const { hallName, lecDate } = route.params;
    const [isLoading, setLoading] = useState(true);

    const [dataSlot1, setDataSlot1] = useState([]);
    const [dataSlot2, setDataSlot2] = useState([]);
    const [dataSlot3, setDataSlot3] = useState([]);
    const [dataSlot4, setDataSlot4] = useState([]);

    useEffect(() => {

        fetch(`${BASE_URL}/timeSlots1InLecHallInDay`,{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                hallName: hallName,
                lecDate:lecDate.toDateString()

            }),
        })
            .then((response) => response.json())
            .then((json) => setDataSlot1(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));

        fetch(`${BASE_URL}/timeSlots2InLecHallInDay`,{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                hallName: hallName,
                lecDate:lecDate.toDateString()

            }),
        })
            .then((response) => response.json())
            .then((json) => setDataSlot2(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));


        fetch(`${BASE_URL}/timeSlots3InLecHallInDay`,{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                hallName: hallName,
                lecDate:lecDate.toDateString()

            }),
        })
            .then((response) => response.json())
            .then((json) => setDataSlot3(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));


        fetch(`${BASE_URL}/timeSlots4InLecHallInDay`,{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                hallName: hallName,
                lecDate:lecDate.toDateString()

            }),
        })
            .then((response) => response.json())
            .then((json) => setDataSlot4(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));

    }, []);

    const reload = () => {
        fetch(`${BASE_URL}/timeSlots1InLecHallInDay`,{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                hallName: hallName,
                lecDate:lecDate.toDateString()

            }),
        })
            .then((response) => response.json())
            .then((json) => setDataSlot1(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));

        fetch(`${BASE_URL}/timeSlots2InLecHallInDay`,{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                hallName: hallName,
                lecDate:lecDate.toDateString()

            }),
        })
            .then((response) => response.json())
            .then((json) => setDataSlot2(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));


        fetch(`${BASE_URL}/timeSlots3InLecHallInDay`,{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                hallName: hallName,
                lecDate:lecDate.toDateString()

            }),
        })
            .then((response) => response.json())
            .then((json) => setDataSlot3(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));


        fetch(`${BASE_URL}/timeSlots4InLecHallInDay`,{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                hallName: hallName,
                lecDate:lecDate.toDateString()

            }),
        })
            .then((response) => response.json())
            .then((json) => setDataSlot4(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));

    }
    const updateTimeSlot = (timeSlotID,status) => {
        Alert.alert('Are you sure?', 'If you change status you cannot change it. ', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {text: 'OK', onPress: () =>
                    fetch(`${BASE_URL}/updateTimeSlotsInLecHallInDay`, {
                        method: 'PUT',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },

                        body: JSON.stringify({
                            hallName: hallName,
                            lecDate:lecDate.toDateString(),
                            timeSlotID:timeSlotID,
                            status:status

                        }),
                    }).finally(() => reload())
            },
        ]);


    }
    return (

        <View style={styles.container}>
            <Spinner visible={isLoading} />
            <View style={{flexDirection:'column'}}>
                <Text style={{fontSize: 15, fontWeight:"bold", textAlign:"left",color:"#00ff0d"}}>LecHall : {hallName}</Text>
                <Text style={{fontSize: 15, fontWeight:"bold", textAlign:"left",color:"#00dbff"}}>lecDate : {lecDate.toDateString()}</Text>
            </View>

            <View>
                <TouchableOpacity

                    onPress={() => {userInfo.name && dataSlot1.length===0 && (navigation.navigate('Bookings',{
                        hallName: hallName,
                        lecDate: lecDate,
                        timeSlotID:'1'

                    }))}}

                    style={{
                        // flex: 1,
                        marginTop:"3%",
                        alignSelf: 'center',
                        width: "100%",
                        // height: 37,
                        paddingLeft:10,
                        paddingRight:10,
                        paddingTop:10,
                        paddingBottom:10,
                        backgroundColor: "#31c1b0",
                        borderRadius:10,
                        shadowColor: "#0090ff",
                        shadowOffset: {
                            width: 0,
                            height: 5,
                        },
                        shadowOpacity: 0.34,
                        shadowRadius: 6.27,

                        elevation: 10,
                    }}

                >


                    <View style={{flexDirection:'column'}}>
                        <Text style={{fontSize: 15, fontWeight:"bold", textAlign:"left",color:"#ffffff"}}>8.30am-10.30am</Text>

                        {dataSlot1.map((item) => (
                            <>
                                <Text style={{fontSize: 15, fontWeight: "bold", textAlign: "left", color: "#5800ff"}}>
                                    Lecturer Name: {item.lecturerName}
                                </Text>
                                <Text style={{fontSize: 15, fontWeight: "bold", textAlign: "left", color: "#5800ff"}}>
                                    Subject Name: {item.subjectName}
                                </Text>
                                <Text style={{fontSize: 15, fontWeight: "bold", textAlign: "left", color: "#5800ff"}}>
                                    Subject Code: {item.subjectID}
                                </Text>
                                <Text style={{fontSize: 15, fontWeight: "bold", textAlign: "left", color: "#5800ff"}}>
                                    Status: {item.status}
                                </Text>
                                {userInfo.name === item.lecturerName && (
                                    <>
                                        {item.status === "Booked" && (
                                            <TouchableOpacity
                                                style={{
                                                    height:50,
                                                    backgroundColor: "#2b1153",
                                                    borderRadius:20,
                                                    padding:10
                                                }}
                                                onPress={() => updateTimeSlot("1","Going on")}
                                            >
                                                <Text style={{fontSize: 18, fontWeight:"bold", textAlign:"center",color:"#ffffff"}}>Start</Text>
                                            </TouchableOpacity>
                                        )}

                                        {item.status === "Going on" && (
                                            <TouchableOpacity
                                                style={{
                                                    height:50,
                                                    backgroundColor: "#2b1153",
                                                    borderRadius:20,
                                                    padding:10
                                                }}
                                                onPress={() => updateTimeSlot("1","Finished")}
                                            >
                                                <Text style={{fontSize: 18, fontWeight:"bold", textAlign:"center",color:"#ffffff"}}>End</Text>
                                            </TouchableOpacity>
                                        )}


                                    </>
                                )}
                            </>


                        ))}
                    </View>




                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {userInfo.name && dataSlot2.length===0 && (navigation.navigate('Bookings',{
                        hallName: hallName,
                        lecDate: lecDate,
                        timeSlotID:'2'

                    }))}}
                    style={{
                        // flex: 1,
                        marginTop:"3%",
                        alignSelf: 'center',
                        width: "100%",
                        // height: 37,
                        paddingLeft:10,
                        paddingRight:10,
                        paddingTop:10,
                        paddingBottom:10,
                        backgroundColor: "#31c1b0",
                        borderRadius:10,
                        shadowColor: "#0090ff",
                        shadowOffset: {
                            width: 0,
                            height: 5,
                        },
                        shadowOpacity: 0.34,
                        shadowRadius: 6.27,

                        elevation: 10,
                    }}

                >


                    <View style={{flexDirection:'column'}}>
                        <Text style={{fontSize: 15, fontWeight:"bold", textAlign:"left",color:"#ffffff"}}>10.30am-12.30am</Text>
                        {dataSlot2.map((item) => (
                            <>
                                <Text style={{fontSize: 15, fontWeight: "bold", textAlign: "left", color: "#5800ff"}}>
                                    Lecturer Name: {item.lecturerName}
                                </Text>
                                <Text style={{fontSize: 15, fontWeight: "bold", textAlign: "left", color: "#5800ff"}}>
                                    Subject Name: {item.subjectName}
                                </Text>
                                <Text style={{fontSize: 15, fontWeight: "bold", textAlign: "left", color: "#5800ff"}}>
                                    Subject Code: {item.subjectID}
                                </Text>
                                <Text style={{fontSize: 15, fontWeight: "bold", textAlign: "left", color: "#5800ff"}}>
                                    Status: {item.status}
                                </Text>

                                {userInfo.name === item.lecturerName && (
                                    <>
                                        {item.status === "Booked" && (
                                            <TouchableOpacity
                                                style={{
                                                    height:50,
                                                    backgroundColor: "#2b1153",
                                                    borderRadius:20,
                                                    padding:10
                                                }}
                                                onPress={() => updateTimeSlot("2","Going on")}
                                            >
                                                <Text style={{fontSize: 18, fontWeight:"bold", textAlign:"center",color:"#ffffff"}}>Start</Text>
                                            </TouchableOpacity>
                                        )}

                                        {item.status === "Going on" && (
                                            <TouchableOpacity
                                                style={{
                                                    height:50,
                                                    backgroundColor: "#2b1153",
                                                    borderRadius:20,
                                                    padding:10
                                                }}
                                                onPress={() => updateTimeSlot("2","Finished")}
                                            >
                                                <Text style={{fontSize: 18, fontWeight:"bold", textAlign:"center",color:"#ffffff"}}>End</Text>
                                            </TouchableOpacity>
                                        )}

                                    </>
                                )}

                            </>
                        ))}
                    </View>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {userInfo.name && dataSlot3.length===0 && (navigation.navigate('Bookings',{
                        hallName: hallName,
                        lecDate: lecDate,
                        timeSlotID:'3'

                    }))}}
                    style={{
                        // flex: 1,
                        marginTop:"3%",
                        alignSelf: 'center',
                        width: "100%",
                        // height: 37,
                        paddingLeft:10,
                        paddingRight:10,
                        paddingTop:10,
                        paddingBottom:10,
                        backgroundColor: "#31c1b0",
                        borderRadius:10,
                        shadowColor: "#0090ff",
                        shadowOffset: {
                            width: 0,
                            height: 5,
                        },
                        shadowOpacity: 0.34,
                        shadowRadius: 6.27,

                        elevation: 10,
                    }}

                >


                    <View style={{flexDirection:'column'}}>
                        <Text style={{fontSize: 15, fontWeight:"bold", textAlign:"left",color:"#ffffff"}}>1.30pm-3.30pm</Text>
                        {dataSlot3.map((item) => (
                            <>
                                <Text style={{fontSize: 15, fontWeight: "bold", textAlign: "left", color: "#5800ff"}}>
                                    Lecturer Name: {item.lecturerName}
                                </Text>
                                <Text style={{fontSize: 15, fontWeight: "bold", textAlign: "left", color: "#5800ff"}}>
                                    Subject Name: {item.subjectName}
                                </Text>
                                <Text style={{fontSize: 15, fontWeight: "bold", textAlign: "left", color: "#5800ff"}}>
                                    Subject Code: {item.subjectID}
                                </Text>
                                <Text style={{fontSize: 15, fontWeight: "bold", textAlign: "left", color: "#5800ff"}}>
                                    Status: {item.status}
                                </Text>
                                {userInfo.name === item.lecturerName && (
                                    <>
                                        {item.status === "Booked" && (
                                            <TouchableOpacity
                                                style={{
                                                    height:50,
                                                    backgroundColor: "#2b1153",
                                                    borderRadius:20,
                                                    padding:10
                                                }}
                                                onPress={() => updateTimeSlot("3","Going on")}
                                            >
                                                <Text style={{fontSize: 18, fontWeight:"bold", textAlign:"center",color:"#ffffff"}}>Start</Text>
                                            </TouchableOpacity>
                                        )}

                                        {item.status === "Going on" && (
                                            <TouchableOpacity
                                                style={{
                                                    height:50,
                                                    backgroundColor: "#2b1153",
                                                    borderRadius:20,
                                                    padding:10
                                                }}
                                                onPress={() => updateTimeSlot("3","Finished")}
                                            >
                                                <Text style={{fontSize: 18, fontWeight:"bold", textAlign:"center",color:"#ffffff"}}>End</Text>
                                            </TouchableOpacity>
                                        )}


                                    </>
                                )}
                            </>
                        ))}
                    </View>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {userInfo.name && dataSlot4.length===0 && (navigation.navigate('Bookings',{
                        hallName: hallName,
                        lecDate: lecDate,
                        timeSlotID:'4'

                    }))}}
                    style={{
                        // flex: 1,
                        marginTop:"3%",
                        alignSelf: 'center',
                        width: "100%",
                        // height: 37,
                        paddingLeft:10,
                        paddingRight:10,
                        paddingTop:10,
                        paddingBottom:10,
                        backgroundColor: "#31c1b0",
                        borderRadius:10,
                        shadowColor: "#0090ff",
                        shadowOffset: {
                            width: 0,
                            height: 5,
                        },
                        shadowOpacity: 0.34,
                        shadowRadius: 6.27,

                        elevation: 10,
                    }}

                >


                    <View style={{flexDirection:'column'}}>
                        <Text style={{fontSize: 15, fontWeight:"bold", textAlign:"left",color:"#ffffff"}}>3.30pm-5.30pm</Text>
                        {dataSlot4.map((item) => (
                            <>
                                <Text style={{fontSize: 15, fontWeight: "bold", textAlign: "left", color: "#5800ff"}}>
                                    Lecturer Name: {item.lecturerName}
                                </Text>
                                <Text style={{fontSize: 15, fontWeight: "bold", textAlign: "left", color: "#5800ff"}}>
                                    Subject Name: {item.subjectName}
                                </Text>
                                <Text style={{fontSize: 15, fontWeight: "bold", textAlign: "left", color: "#5800ff"}}>
                                    Subject Code: {item.subjectID}
                                </Text>
                                <Text style={{fontSize: 15, fontWeight: "bold", textAlign: "left", color: "#5800ff"}}>
                                    Status: {item.status}
                                </Text>

                                {userInfo.name === item.lecturerName && (
                                    <>
                                        {item.status === "Booked" && (
                                            <TouchableOpacity
                                                style={{
                                                    height:50,
                                                    backgroundColor: "#2b1153",
                                                    borderRadius:20,
                                                    padding:10
                                                }}
                                                onPress={() => updateTimeSlot("4","Going on")}
                                            >
                                                <Text style={{fontSize: 18, fontWeight:"bold", textAlign:"center",color:"#ffffff"}}>Start</Text>
                                            </TouchableOpacity>
                                        )}

                                        {item.status === "Going on" && (
                                            <TouchableOpacity
                                                style={{
                                                    height:50,
                                                    backgroundColor: "#2b1153",
                                                    borderRadius:20,
                                                    padding:10
                                                }}
                                                onPress={() => updateTimeSlot("4","Finished")}
                                            >
                                                <Text style={{fontSize: 18, fontWeight:"bold", textAlign:"center",color:"#ffffff"}}>End</Text>
                                            </TouchableOpacity>
                                        )}


                                    </>
                                )}
                            </>
                        ))}
                    </View>

                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcome: {
        fontSize: 18,
        marginBottom: 8,
    },
});

export default TimeSlotsScreen;
