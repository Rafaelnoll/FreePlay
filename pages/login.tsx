import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

import Logo from "../styles/imgs/logo.png";
import LogoGrey from "../styles/imgs/logo-grey.png";
import { CaretRight } from "phosphor-react";


const Login: NextPage = () => {
    return (
        <>
            <Navbar />
            <main className="h-[100vh] py-6">
                <div className="max-w-6xl m-auto p-12">
                    <div className="flex bg-[#32383e] shadow-2xl rounded-[5px]">
                        <div className="hidden lg:flex basis-1/2 items-center justify-center bg-[#1c1e22]">
                            <div className="max-w-[50%]">
                                <Image src={Logo} />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center lg:basis-1/2 p-12 w-full">
                            <div className="w-[80px]">
                                <Image src={LogoGrey} />
                            </div>
                            <h3 className="text-[#A1A1AA] font-bold text-[19px] mb-6">Log in to FreePlay!</h3>
                            <form className="w-full p-5 lg:w-auto lg:p-0">
                                <input placeholder="Email Address" className="w-full py-3 px-4 bg-[#1c1e22] text-[#7a8288] outline-none mb-4 rounded-[5px]" />
                                <input placeholder="Password" className="py-3 px-4 bg-[#1c1e22] text-[#7a8288] outline-none w-full mb-4 rounded-[5px]" />
                                <button
                                    className="w-full bg-[#3a3f44] border border-[#22241d] rounded-[5px] px-4 py-3 hover:bg-[#191b1d] hover:border-[#3a3f44]"
                                    type="submit"
                                >
                                    Login
                                </button>
                                <hr className="border-t border-[rgba(170,170,170,0.1)] w-full my-4" />
                                <div className="text-[#aaaaaa] text-[12px] flex justify-center">
                                    <span>Not a member yet?</span>
                                    <Link href="/register">
                                        <a className="flex items-center ml-1 text-[#4799eb] hover:text-[#fff]">Create Account <CaretRight size={10} weight="bold" /></a>
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

export default Login;