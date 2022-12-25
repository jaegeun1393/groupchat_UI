import React, { Component } from "react";

class GroupChatAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.closepanel = this.closepanel.bind(this);
    }

    closepanel(bol) {
        var main = document.getElementById("modal");
        if (bol == "on") {
            main.className = "relative flex justify-center items-center";
        } else {
            main.className = "relative flex justify-center items-center hidden";
            this.reset_val();
        }
    }

    render() {
        return (
            <div className="relative flex justify-center items-center hidden" id="modal">
                <div id="menu" className="left-0 w-full h-full bg-gray-900 bg-opacity-80 top-0 fixed sticky-0">
                    <div className="2xl:container 2xl:mx-auto py-28 px-4 md:px-28 flex justify-center items-center">
                        <div className=" dark:bg-gray-800 relative justify-center items-center bg-white md:rounded-t-3xl rounded-t-xl">
                            <h1 className='w-full bg-[#374557] text-white md:px-12 px-2 md:rounded-t-2xl rounded-t-xl py-4 font-bold'>Add Chat Room</h1>
                            <div className="rounded-xl md:py-4 md:px-10 overflow-auto">
                                <div className="grid gap-6 mb-6 lg:grid-cols-1">
                                    <div>
                                        <label htmlFor="room_title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Room Title</label>
                                        <input type="text" id="room_title" name="room_title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="# Class 101" required />
                                    </div>
                                </div>

                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Participants</label>
                                <div className='md:grid grid-cols-2 py-2 text-[#374557]'>
                                    <div id="list_child" className='grid-cols-1 pl-2 md:pr-44 pr-0 flex'>

                                    </div>
                                </div>
                                <div className='md:grid grid-cols-2 py-2 text-[#374557]'>
                                    <div className='grid-cols-1 md:pr-44 pr-0 flex'>
                                        <input
                                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                            placeholder='search by first name' name="child_search"
                                        />
                                    </div>
                                </div>
                                <div id="dropdown" className="ml-2 z-10 w-[200px] bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">

                                </div>

                                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >Create</button>
                            </div>

                            <button onClick={() => this.closepanel("off")} className="text-white dark:text-gray-400 absolute top-4 right-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" aria-label="close">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GroupChatAdd;