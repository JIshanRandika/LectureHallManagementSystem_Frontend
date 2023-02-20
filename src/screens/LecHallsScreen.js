import React, {useContext, useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';
import {BASE_URL} from '../config';

function LecHallsScreen  ({ navigation }) {
    const {userInfo, logout} = useContext(AuthContext);
    const [isLoading, setLoading] = useState(true);

    const [data, setData] = useState([]);

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

    const Item = ({ item }) => (



        <TouchableOpacity
            onPress={() => navigation.navigate('TimeSlots')}
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
                paddingLeft:10,
                paddingRight:10,
                paddingTop:10,
                paddingBottom:10,
                backgroundColor: "#6ac131",
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
                <Text style={{fontSize: 15, fontWeight:"bold", textAlign:"left",color:"#ffffff"}}>{item.hallName}</Text>
            </View>

        </TouchableOpacity>
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
            <View style={{flex:12}}>
                {/*<Spinner visible={isLoading} />*/}


                {isLoading ? <Text style={{color:'black'}}>Loading...</Text> :(
                    <View style={{
                        flex: 1,
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
                                    data={data.reverse()}
                                    renderItem={renderItem}
                                    keyExtractor={(data) => data._id}
                                />

                            </SafeAreaView>
                        </View>
                    </View>
                )}

            </View>
            <View style={{flex:2}}>
                <TouchableOpacity
                    style={{
                        height:50,
                        backgroundColor: "#2b1153",
                        borderRadius:20,
                        padding:10
                    }}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={{fontSize: 18, fontWeight:"bold", textAlign:"center",color:"#ffffff"}}>Login as Lecturer</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcome: {
        fontSize: 18,
        marginBottom: 8,
    },
});

export default LecHallsScreen;
