import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

import Logo from "../styles/imgs/logo.png";
import { CaretRight } from "phosphor-react";

const Register: NextPage = () => {
    return (
        <>
            <Navbar />
            <main className="h-[100vh] py-6">
                <div className="max-w-6xl m-auto p-12">
                    <div className="flex bg-[#32383e] shadow-xl rounded-[5px]">
                        <div className="hidden lg:flex basis-2/5 items-center justify-center bg-[#1c1e22]">
                            <div className="max-w-[50%]">
                                <Image src={Logo} />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center lg:basis-3/5 p-5 w-full">
                            <h3 className="text-[#A1A1AA] font-bold text-[19px] mb-6">Create My Account!</h3>
                            <form className="w-full p-5 lg:w-auto lg:p-0">
                                <input placeholder="Username" className="w-full py-3 px-4 bg-[#1c1e22] text-[#7a8288] outline-none mb-4 rounded-[5px]" />
                                <input placeholder="Email Address" className="w-full py-3 px-4 bg-[#1c1e22] text-[#7a8288] outline-none mb-4 rounded-[5px]" />
                                <div className="flex mb-4">
                                    <input placeholder="Password" className="py-3 px-4 bg-[#1c1e22] text-[#7a8288] outline-none w-full mr-[10px] rounded-[5px]" />
                                    <input placeholder="Confirm Password" className="py-3 px-4 bg-[#1c1e22] text-[#7a8288] outline-none w-full ml-[10px] rounded-[5px]" />
                                </div>
                                <button
                                    className="w-full bg-[#3a3f44] border border-[#22241d] rounded-[5px] px-4 py-3 hover:bg-[#191b1d] hover:border-[#3a3f44]"
                                    type="submit"
                                >
                                    Create Account
                                </button>
                                <hr className="border-t border-[rgba(170,170,170,0.1)] w-full my-4" />
                                <div className="text-[#aaaaaa] text-[12px] flex justify-center">
                                    <span>Already a member?</span>
                                    <Link href="/login">
                                        <a className="flex items-center ml-1 text-[#4799eb] hover:text-[#fff]">Log In <CaretRight size={10} weight="bold" /></a>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Register;