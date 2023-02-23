import React, {useContext, useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';
import {BASE_URL} from '../config';
import RNDateTimePicker from '@react-native-community/datetimepicker';

function LecHallsScreen  ({ navigation }) {
    const {userInfo, logout} = useContext(AuthContext);
    const [isLoading, setLoading] = useState(true);

    const [data, setData] = useState([]);
    const [lecDate, setLecDate] = useState(new Date());
    const [datePickerShow, setDatePickerShow] = useState('F');

    useEffect(() => {

        fetch(`${BASE_URL}/getLecHalls`,{
            method:'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

        })
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));



    }, []);

    const showDatePicker = () => {
        setDatePickerShow('T');
    }

    const onChangeDatePicker = (event, selectedDate) => {

        setDatePickerShow('F');
        setLecDate(selectedDate);

    }

    const Item = ({ item }) => (



        <>
            <TouchableOpacity
                onPress={() => navigation.navigate('TimeSlots',{
                    hallName: item.hallName,
                    lecDate: lecDate
                })}
                // onPress={()=>{{
                //     // setUserToken(item.userToken);
                // }}
                // }
                style={{
                    // flex: 1,

                    marginTop:"3%",
                    alignSelf: 'center',
                    width: "100%",
                    // height: 37,
                    paddingHorizontal:150,
                    paddingTop:10,
                    paddingBottom:10,
                    backgroundColor: "#97D8B2",
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


                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize: 15, fontWeight:"bold", textAlign:"left",color:"#531253"}}>{item.hallName}</Text>
                </View>

            </TouchableOpacity>


        </>
    );
    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
            />
        );
    };

    return (
        <View style={styles.container}>
            {/*<Spinner visible={isLoading} />*/}
            <View style={{flexDirection:'column'}}>
                {/*<Text style={{fontSize:15,backgroundColor:'#531253',paddingHorizontal:'30%', borderRadius:50,color:'white'}}>*/}
                {/*    {lecDate.toDateString()}*/}
                {/*</Text>*/}
                <TouchableOpacity
                    style={{
                        height:42,
                        backgroundColor: "#33032F",
                        borderRadius:20,
                        padding:10,
                        paddingHorizontal:'30%',
                        marginTop:10
                    }}
                    onPress={()=>showDatePicker()}
                >
                    <Text style={{fontSize: 15, fontWeight:"bold", textAlign:"center",color:"#ffffff"}}>{lecDate.toDateString()}</Text>
                </TouchableOpacity>
            </View>


            {datePickerShow ==='T' && (
                <RNDateTimePicker
                    testID = 'dateTimePicker'
                    value = {lecDate}
                    mode = {'date'}
                    in24Hour={false}
                    display='default'
                    onChange = {onChangeDatePicker}
                />
            )}
            <View style={{flex:12}}>
                {/*<Spinner visible={isLoading} />*/}


                {isLoading ? <Text style={{color:'black'}}>Loading...</Text> :(
                    <View style={{
                        flex: 12,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width:'100%'
                    }}>

                        {/*<Text style={{justifyContent:'center'}}>Loaded</Text>*/}
                        <View style={{width:'100%'}}>

                            <SafeAreaView style={{width:'100%'}}>
                                {data.length === 0 && (
                                    <Text style={{color:'black',margin:50}}>No previously saved routes</Text>

                                )}
                                <FlatList
                                    style={{height:"90%", width:'100%'}}
                                    data={data}
                                    renderItem={renderItem}
                                    keyExtractor={(data) => data._id}
                                />

                            </SafeAreaView>
                        </View>
                    </View>
                )}

            </View>
            <View style={{flex:1}}>
                {userInfo.name==null && (
                <TouchableOpacity
                    style={{
                        marginTop:-45,
                        backgroundColor: "#33032F",
                        borderRadius:10,
                        padding:10,
                        paddingHorizontal:'30%'
                    }}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={{fontSize: 15, fontWeight:"bold", textAlign:"center",color:"#ffffff"}}>Login as Lecturer</Text>
                </TouchableOpacity>
                )}


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

export default LecHallsScreen;
