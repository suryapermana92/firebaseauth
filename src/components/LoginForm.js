import React, { Component } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = {
        login: true,
        email: '',
        password:'',
        message:'',
        sukses:'',
        loading: false
    }
    onAuth() {
        const { login, email, password } = this.state
        this.setState({ loading: true, message: '' })
        if (login) {
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => this.setState({ loading: false,sukses: true, message: 'Successfully Logged In'}))
            .catch((error) => this.setState({ loading: false, sukses: false, message: error.message }))
        } else {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => this.setState({ loading: false, sukses: true, message: 'User Account Sign Up Successfull'}))
            .catch((error) => this.setState({ loading: false, sukses: false, message: error.message }))
        }
        
        console.log(login, email, password)
    }
    
    
    renderPhone() {
        if (this.state.login === false) {
            return (
                <CardSection >
                    <Input text='Phone' placeholder='0812-3456789'/>
                </CardSection>
            )
        }
    }

    renderMessage() {
        if (this.state.message) {
            if(this.state.sukses) {
            return (
                <CardSection>
                    <Text style={{ color: 'green'}}>{this.state.message}</Text>
                </CardSection>
            )
        }
            return (
        <CardSection>
        <Text style={{ color: 'red'}}>{this.state.message}</Text>
        </CardSection>
            )
        
    }
}
    renderLoading() {
        if (this.state.loading) {
            return (
                <ActivityIndicator 
                style={{ 
                    width: '100%', 
                    justifyContent: 'center', 
                    alignItems: 'center'}} 
                size='large'
                />
    
            )
        }
        return (
        <Button onPress={() => this.onAuth()}>
        {this.state.login ? 'Login' : 'Sign up'}
        </Button>
        )
    }
    render() {
        const { login, email, password, message, sukses } = this.state
        console.log(sukses,message)
        return (
        <Card>
            <CardSection >
                <Input 
                text='Email' 
                placeholder='name@mail.com'
                onChangeText={(text) => {
                    this.setState({ email: text })
                    }}
                
                autoCorrect={false}
                />
            </CardSection>
            <CardSection>
                <Input 
                text='Password' 
                placeholder='password'
                onChangeText={(text) => {
                    this.setState({ password: text });
                    }
                }
                secureTextEntry={true}
                />
                
            </CardSection>
            {this.renderPhone()}
            {this.renderMessage()}
            <CardSection>
            {this.renderLoading()}
             </CardSection> 
             <CardSection>
                <TouchableOpacity 
                style={{ flex:1, alignItems: 'center' }}
                onPress={() => this.setState({ login: !this.state.login, message:'' }) } 
                >
                    <View >
                        <Text>
                        {!this.state.login ? 'or Login' : 'or Sign up'}
                        </Text>
                    </View>
                </TouchableOpacity>
             </CardSection> 
        </Card>
    );
    }
}


export default LoginForm;
