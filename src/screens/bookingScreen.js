import React, {useContext} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, TextInput} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';
import {BASE_URL} from '../config';

const BookingScreen = ({ route, navigation }) => {
    const {userInfo, isLoading, logout} = useContext(AuthContext);
    const { hallName, lecDate, timeSlotID } = route.params;

    const [lecName, setLecName] = React.useState('');
    const [subName, setSubName] = React.useState('');
    const [subID, setSubID] = React.useState('');

    const submitBooking = () => {

        fetch(`${BASE_URL}/addATimeSlot`, {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                hallName: hallName,
                lecDate: lecDate.toDateString(),
                timeSlotID: timeSlotID,
                lecturerName: userInfo.name,
                subjectName: subName,
                subjectID:subID,
                status: "Booked",

            }),
        }).then(alert('Successfully Completed'))
            .finally(() => navigation.navigate('LecHalls',{
                hallName: hallName,
                lecDate: lecDate,}));
    }

    return (
        <View style={styles.container}>
            <Spinner visible={isLoading} />
            <View style={{flexDirection:'column', flex:1,alignItems:'center',marginTop:20}}>
                <Text style={{fontSize: 15, fontWeight:"bold", textAlign:"left",color:"#33032F"}}>Selected Lecture Hall : {hallName}</Text>
                <Text style={{fontSize: 15, fontWeight:"bold", textAlign:"left",color:"#33032F"}}>Selected Date : {lecDate.toDateString()}</Text>
                {timeSlotID ==='1'&&(
                    <Text style={{fontSize: 15, fontWeight:"bold", textAlign:"left",color:"#33032F"}}>Time: 8.30am - 10.30am</Text>
                )}
                {timeSlotID ==='2'&&(
                    <Text style={{fontSize: 15, fontWeight:"bold", textAlign:"left",color:"#33032F"}}>Time: 10.30am - 12.30pm</Text>
                )}
                {timeSlotID ==='3'&&(
                    <Text style={{fontSize: 15, fontWeight:"bold", textAlign:"left",color:"#33032F"}}>Time: 1.30am - 3.30pm</Text>
                )}
                {timeSlotID ==='4'&&(
                    <Text style={{fontSize: 15, fontWeight:"bold", textAlign:"left",color:"#33032F"}}>Time: 3.30am - 5.30pm</Text>
                )}

            </View>


            <View style={{flex:5}}>
                <SafeAreaView>
                    {/*<TextInput*/}
                    {/*    style={styles.input}*/}
                    {/*    onChangeText={setLecName}*/}
                    {/*    // value={text}*/}
                    {/*    placeholder="Lecturer Name"*/}
                    {/*/>*/}
                    <TextInput
                        style={styles.input}
                        onChangeText={setSubName}
                        // value={text}
                        placeholder="Subject Name"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setSubID}
                        // value={text}
                        placeholder="Subject Code"
                    />

                    <TouchableOpacity
                        style={{
                            marginTop:10,
                            backgroundColor: "#33032F",
                            borderRadius:10,
                            paddingVertical:10,
                            paddingHorizontal:'27%'
                        }}
                        onPress={()=>submitBooking()}
                    >
                        <Text style={{fontSize: 15, fontWeight:"bold", textAlign:"center",color:"#ffffff"}}>Submit</Text>
                    </TouchableOpacity>
                </SafeAreaView>

            </View>



        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:10
    },
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

export default BookingScreen;
