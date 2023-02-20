import React, {useContext} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';

const TimeSlotsScreen = () => {
    const {userInfo, isLoading, logout} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Spinner visible={isLoading} />
            <TouchableOpacity
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


                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize: 15, fontWeight:"bold", textAlign:"left",color:"#ffffff"}}>aaaaaa</Text>
                </View>

            </TouchableOpacity>
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
