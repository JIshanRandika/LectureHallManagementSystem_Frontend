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


                <View style={{flexDirection:'column'}}>
                    <Text style={{fontSize: 15, fontWeight:"bold", textAlign:"left",color:"#68189a"}}>LecHall {hallName}</Text>
                    <Text style={{fontSize: 15, fontWeight:"bold", textAlign:"left",color:"#183897"}}>lecDate {lecDate.toDateString()}</Text>
                    <Text style={{fontSize: 15, fontWeight:"bold", textAlign:"left",color:"#c78535"}}>slot {timeSlotID}</Text>
                </View>
            <View>
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
                </SafeAreaView>
            </View>
            <View style={{flex:2}}>
                <TouchableOpacity
                    style={{
                        height:50,
                        backgroundColor: "#2b1153",
                        borderRadius:20,
                        padding:10
                    }}
                    onPress={()=>submitBooking()}
                >
                    <Text style={{fontSize: 18, fontWeight:"bold", textAlign:"center",color:"#ffffff"}}>Submit</Text>
                </TouchableOpacity>
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
