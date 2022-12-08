import React, { Component } from "react";

import GroupChatRoom from "./group_chat_room";
import GroupChatMsg from "./group_chat_msg";

class GroupChat extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
                <div className="bg-[#E5E5E5]">
                    <div className="flex flex-1 h-screen w-[100%]">
                        <div className="container p-5">
                            <div className="max-h-full h-full flex flex-row ">
                                <aside
                                    className="w-full h-full md:w-3/6 lg:w-2/6 bg-white rounded-lg rounded-tr-none rounded-br-none border-r-2 border-gray-200">
                                    <div className="max-w-full w-full h-full flex flex-col">
                                        <div className="p-5 flex justify-start text-lg font-extrabold text-[#475465]">
                                            <span>Messages</span>
                                        </div>
                                        <div className="flex justify-between items-center p-3 gap-2">
                                            <span className="flex-grow-0 cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="rgba(128,138,151,1)" />
                                                </svg>
                                            </span>
                                            <form className="flex-grow">
                                                <div className="relative">
                                                    <div
                                                        className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                                        </svg>
                                                    </div>
                                                    <input type="search" id="default-search"
                                                        className="block px-4 py-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-400 outline-none"
                                                        placeholder="Search Here..." required="" />
                                                </div>
                                            </form>
                                        </div>

                                        <div className="text-sm text-gray-400 font-semibold flex gap-5 p-5 pl-4 cursor-pointer">
                                            <span>All Chats</span>
                                            <span> Chats</span>
                                        </div>
                                        <GroupChatRoom />
                                    </div>
                                </aside>
                                <GroupChatMsg />
                            </div>
                        </div>
                    </div>
                </div >
            </>
        );
    }
}

export default GroupChat;