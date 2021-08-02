import React, { Component, useRef, useState } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
// import 'firebase/analytics';

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Link } from "react-router-dom";
import jwtDecode from 'jwt-decode';
import FormRadio from "../components/FormComponents/FormRadio"
// import FormSwitch from "../components/FormComponents/FormSwitch"
import FormSelect from "../components/FormComponents/FormSelect"
let jwt = window.localStorage.getItem('jwt');

export default class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: undefined
        }

    }
    componentDidMount() {
        if (jwt) {
            let result = jwtDecode(jwt)
            if (result.username) {
                this.setState({ username: result.username })
            }
        }
        else {
            this.props.history.push('/')
        }

    }
    render() {
        let fromMessages = [
            {
                messageUser: 'Sarah Ambrams',
                messageImg: 'https://dummyimage.com/50x50',
                messageTitle: 'Lorem Ipsum',
                messageSnip: 'Do consequat nisi cupidatat',
                messageUserBody: 'Consequat id qui do excepteur mollit commodo est consequat adipisicing.',
                messageDate: '09/05/2021',
                messageUri: '#message',
                message: [
                    {
                        title: 'Amet sit veniam molli',
                        body: 'Aute consequat ad esse velit in culpa exercitation pariatur ipsum occaecat.'
                    },
                    {
                        title: 'Amet sit veniam molli',
                        body: 'Aute consequat ad esse velit in culpa exercitation pariatur ipsum occaecat.'
                    },
                    {
                        title: 'Amet sit veniam molli',
                        body: 'Aute consequat ad esse velit in culpa exercitation pariatur ipsum occaecat.'
                    },
                    {
                        title: 'Amet sit veniam molli',
                        body: 'Aute consequat ad esse velit in culpa exercitation pariatur ipsum occaecat.'
                    },
                    {
                        title: 'Amet sit veniam molli',
                        body: 'Aute consequat ad esse velit in culpa exercitation pariatur ipsum occaecat.'
                    },
                ]
            },
            {
                messageUser: 'Jake Snap',
                messageImg: 'https://dummyimage.com/50x50',
                messageTitle: 'Lorem Ipsum',
                messageSnip: 'Do consequat nisi cupidatat',
                messageUserBody: 'Consequat id qui do excepteur mollit commodo est consequat adipisicing.',
                messageDate: '09/05/2021',
                messageUri: '#message',
                message: [
                    {
                        title: 'Amet sit veniam molli',
                        body: 'Aute consequat ad esse velit in culpa exercitation pariatur ipsum occaecat.'
                    },
                    {
                        title: 'Amet sit veniam molli',
                        body: 'Aute consequat ad esse velit in culpa exercitation pariatur ipsum occaecat.'
                    },
                    {
                        title: 'Amet sit veniam molli',
                        body: 'Aute consequat ad esse velit in culpa exercitation pariatur ipsum occaecat.'
                    },
                    {
                        title: 'Amet sit veniam molli',
                        body: 'Aute consequat ad esse velit in culpa exercitation pariatur ipsum occaecat.'
                    },
                    {
                        title: 'Amet sit veniam molli',
                        body: 'Aute consequat ad esse velit in culpa exercitation pariatur ipsum occaecat.'
                    },
                ]
            },
            {
                messageUser: 'Itho ingot',
                messageImg: 'https://dummyimage.com/50x50',
                messageTitle: 'Lorem Ipsum',
                messageSnip: 'Do consequat nisi cupidatat',
                messageUserBody: 'Consequat id qui do excepteur mollit commodo est consequat adipisicing.',
                messageDate: '09/05/2021',
                messageUri: '#message',
                message: [
                    {
                        title: 'Amet sit veniam molli',
                        body: 'Aute consequat ad esse velit in culpa exercitation pariatur ipsum occaecat.'
                    },
                    {
                        title: 'Amet sit veniam molli',
                        body: 'Aute consequat ad esse velit in culpa exercitation pariatur ipsum occaecat.'
                    },
                    {
                        title: 'Amet sit veniam molli',
                        body: 'Aute consequat ad esse velit in culpa exercitation pariatur ipsum occaecat.'
                    },
                    {
                        title: 'Amet sit veniam molli',
                        body: 'Aute consequat ad esse velit in culpa exercitation pariatur ipsum occaecat.'
                    },
                    {
                        title: 'Amet sit veniam molli',
                        body: 'Aute consequat ad esse velit in culpa exercitation pariatur ipsum occaecat.'
                    },
                ]
            },
        ]
        return (
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-6 mx-auto">
                    <div className="flex flex-wrap">
                        <div className="lg:w-full md:w-full mb-6 p-4 w-full">
                            <section className="text-gray-400 bg-gray-900 body-font relative">
                                <div className="absolute inset-0 bg-gray-800 shadow-lg rounded-lg">

                                </div>
                                <div className="container px-5 py-4 mx-auto flex">
                                    <div className="lg:w-2/5 md:w-2/7 bg-gray-900 shadow-lg rounded-lg p-4 px-6 flex flex-col w-full mt-0 md:mt-0 mr-3 relative z-10">
                                        <h2 className="text-white text-xl mb-1 font-medium title-font">Chat</h2>
                                        {fromMessages.map((item) => (
                                            <Link
                                                to="/#selectMessage"
                                                className="flow-root px-4 py-4 mt-4 transition duration-50 ease-in-out rounded-md hover:bg-gray-700 bg-gray-800 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                            >
                                                    <span className="flex items-center">
                                                        <span className="text-sm font-medium text-gray-200">
                                                            {item.messageUser}
                                                        </span>
                                                    </span>
                                                    <span className="block text-sm text-gray-400">
                                                        {item.messageSnip}
                                                    </span>
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="lg:w-5/7 md:w-2/7 bg-gray-900 shadow-lg rounded-lg p-8 flex flex-col md:mr-auto w-full mt-1 md:mt-0 relative z-10">
                                    {fromMessages.map((item) => (
                                            <Link
                                                to="/#selectMessage"
                                                className="flow-root px-4 py-4 mt-4 transition duration-50 ease-in-out rounded-md hover:bg-gray-700 bg-gray-800 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                            >
                                                    <span className="flex items-center">
                                                        <span className="text-sm font-medium text-gray-200">
                                                            {item.messageUser}
                                                        </span>
                                                    </span>
                                                    <span className="block text-sm text-gray-400">
                                                        {item.messageSnip}
                                                    </span>
                                            </Link>
                                        ))}
                                    </div>

                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}