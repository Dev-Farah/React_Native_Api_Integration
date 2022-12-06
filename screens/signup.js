import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from '../styles/global'
import userIcon from '../assets/userIcon.png'
import passwordIcon from '../assets/passwordIcon.png'
import emailIcon from '../assets/emailIcon.png'
import LinearGradient from 'react-native-linear-gradient'


function SignUp() {

    let [userName, setUserName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [confirmPassword, setConfirmPassword] = useState('');


    return (
        <View style={[styles.container, { flex: 1 }]}>

            <View style={[styles.div]}>
                <Image source={userIcon} style={{ alignSelf: 'center', width: 100, height: 100, opacity: 0.4, marginRight: 5 }} />
                <Text style={[styles.heading]}>Sign Up</Text>


                <View style={[styles.inputBox, { flexDirection: 'row', alignItems: 'center' }]}>
                    <Image source={userIcon} style={{ width: 26, height: 26, opacity: 0.3, marginRight: 5 }} />
                    <TextInput
                        style={[styles.input, { flexDirection: 'column', flex: 0 }]}
                        placeholder='Enter name'
                        value={userName}
                        onChangeText={(e) => { setUserName(e) }}
                    />
                </View>

                <View style={[styles.inputBox, { flexDirection: 'row', alignItems: 'center' }]}>
                    <Image source={emailIcon} style={{ width: 21, height: 21, opacity: 0.3, marginRight: 8 }} />
                    <TextInput
                        style={[styles.input, { flexDirection: 'column', flex: 0 }]}
                        placeholder='Enter email'
                        value={email}
                        onChangeText={(e) => { setEmail(e) }}
                    />
                </View>

                <View style={[styles.inputBox, { flexDirection: 'row', alignItems: 'center' }]}>
                    <Image source={passwordIcon} style={{ width: 26, height: 26, opacity: 0.3, marginRight: 5 }} />
                    <TextInput
                        style={[styles.input, { flexDirection: 'column', flex: 0 }]}
                        placeholder='Password'
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(e) => { setPassword(e) }}
                    />
                </View>

                <View style={[styles.inputBox, { flexDirection: 'row', alignItems: 'center' }]}>
                    <Image source={passwordIcon} style={{ width: 26, height: 26, opacity: 0.3, marginRight: 5 }} />
                    <TextInput
                        style={[styles.input, { flexDirection: 'column', flex: 0 }]}
                        placeholder='Confirm Password'
                        secureTextEntry={true}
                        value={confirmPassword}
                        onChangeText={(e) => { setConfirmPassword(e) }}
                    />
                </View>

                <TouchableOpacity >
                    <LinearGradient colors={['#08d4c4', '#01ab9d', '#008080']}
                        style={[styles.button]}
                    >
                        <Text style={[styles.btnText]}>Sign Up</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={[styles.authLink]}>Already have an account? Login</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default SignUp;