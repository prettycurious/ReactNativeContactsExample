/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import Contacts from 'react-native-contacts';

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            familyName: '',
            givenName: '',
            phoneNumbersLabel: '',
            number: '',
            emailAddressesLabel: '',
            email: '',
        };
    }

    addContact = () => {
        let newPerson = {
            familyName: this.state.familyName,
            givenName: this.state.givenName,
            phoneNumbers: [{
                label: "mobile",
                number: this.state.number,
            }],
            emailAddresses: [{
                label: "work",
                email: this.state.email,
            }],
        };
        Contacts.addContact(newPerson, (err) => {
            if (err) {
                throw err
            }else {
                alert("添加成功")
            }
            // save successful
        })
    };

    getAllContacts = () => {
        Contacts.getAll((err, contacts) => {
            if (err === 'denied'){
                // error
            } else {
                // contacts returned in Array
                alert(JSON.stringify(contacts));//通讯录列表
            }
        })
    };

    resetContact = () => {
        this.setState({
            familyName: "",
            givenName: "",
            number: "",
            email: "",
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.listView}>
                    <View style={styles.itemView}>
                        <Text style={styles.itemText}>姓：</Text>
                        <TextInput
                            style={styles.itemTextInput}
                            onChangeText={(text) => this.setState({familyName: text})}
                            value={this.state.familyName}
                            autoCapitalize='none'
                            textContentType='familyName'
                        />
                    </View>
                    <View style={styles.itemView}>
                        <Text style={styles.itemText}>名：</Text>
                        <TextInput
                            style={styles.itemTextInput}
                            onChangeText={(text) => this.setState({givenName: text})}
                            value={this.state.givenName}
                            autoCapitalize='none'
                            textContentType='givenName'
                        />
                    </View>
                    <View style={styles.itemView}>
                        <Text style={styles.itemText}>手机号码：</Text>
                        <TextInput
                            style={styles.itemTextInput}
                            onChangeText={(text) => this.setState({number: text})}
                            value={this.state.number}
                            autoCapitalize='none'
                            textContentType='telephoneNumber'
                        />
                    </View>
                    <View style={styles.itemView}>
                        <Text style={styles.itemText}>邮箱：</Text>
                        <TextInput
                            style={styles.itemTextInput}
                            onChangeText={(text) => this.setState({email: text})}
                            value={this.state.email}
                            autoCapitalize='none'
                            textContentType='emailAddress'
                        />
                    </View>
                </View>
                <Button title="添加联系人" onPress={this.addContact}/>
                <Button title="重置联系人" onPress={this.resetContact}/>
                <Button title="获取联系人" onPress={this.getAllContacts}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    listView: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    itemView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    itemText: {
        width: 80,
        fontSize: 15,
    },
    itemTextInput: {
        borderColor: '#BFBFBF',
        borderWidth: 1,
        width: 120,
        height: 30,
        fontSize: 15,
        marginLeft: 15,
    },
});
