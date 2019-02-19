/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';
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

    openContactForm = () => {
        // let newPerson = {
        //     familyName: "张",
        //     givenName: "三",
        //     phoneNumbers: [{
        //         label: "mobile",
        //         number: "(555) 555-5555",
        //     }],
        //     emailAddresses: [{
        //         label: "work",
        //         email: "mrniet@example.com",
        //     }],
        // };
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
            };
            // save successful
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.listView}>
                    <View style={styles.itemView}>
                        <Text style={styles.itemText}>姓：</Text>
                        <TextInput
                            onChangeText={(text) => this.setState({familyName: text})}
                            style={styles.itemTextInput}
                        />
                    </View>
                    <View style={styles.itemView}>
                        <Text style={styles.itemText}>名：</Text>
                        <TextInput
                            onChangeText={(text) => this.setState({givenName: text})}
                            style={styles.itemTextInput}
                        />
                    </View>
                    <View style={styles.itemView}>
                        <Text style={styles.itemText}>手机号码：</Text>
                        <TextInput
                            onChangeText={(text) => this.setState({number: text})}
                            style={styles.itemTextInput}
                        />
                    </View>
                    <View style={styles.itemView}>
                        <Text style={styles.itemText}>邮箱：</Text>
                        <TextInput
                            onChangeText={(text) => this.setState({email: text})}
                            style={styles.itemTextInput}
                        />
                    </View>
                </View>
                <Button title="添加联系人" onPress={this.openContactForm}/>
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
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
