import React from "react";
import logoIEEE from "../../assets/logoIEEE.png"
import {BsLinkedin, BsInstagram, BsTwitter} from "react-icons/bs"

const Footer = () => {
    return (
        <div className="bg-[#C72F55] flex">
            <div className="flex mt-[3rem] text-white w-full mx-[4rem]">
                <div className="w-1/3 text-left">
                    <div className="mr-4">
                        <img src={logoIEEE} alt="Logo" className="w-100 h-16" />
                        <p className="text-3xl"><span className="font-bold">IEEE</span> Student Branch</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-3xl mt-[6rem]">Student Branch</h3>
                        <span className="text-xl">Manipal University Jaipur</span>
                    </div>
                </div>
                <div className="w-1/3 text-left mb-4">
                    <h3 className="font-bold text-4xl">Contact Us:</h3>
                    <p className="text-xl">
                        <p>+91 99992 14243</p>
                        <p>Aarohi Manchanda</p>
                        <p>+91 99300 48037</p>
                        <p>Vikramaditya Hiran</p>
                    </p>
                    <p className="my-4">
                        <span className="text-xl">ieee@muj.manipal.edu</span>
                    </p>
                    <p className="text-xl w-2/3 my-4">
                        <p>Address:</p>
                        <p>
                            Manipal University Jaipur, Dehmi Kalan, Near GVK Toll Plaza, Jaipur-Ajmer Expressway, Jaipur, Rajasthan 303007
                        </p>
                    </p>
                </div>
                <div className="w-1/3 text-left">
                    <h3 className="font-bold text-2xl">Faculty Messages</h3>
                    <p className="text-xl underline">
                        <a href="#">Director's MessageCoordinator's</a><br />
                        <a href="#">MessageDSW's MessageAdvisor's</a><br />
                        <a href="#">Message</a>
                    </p>
                    <div>
                        <h3 className="font-bold text-2xl mt-4">Links</h3>
                        <p className="text-xl underline">
                            <a href="#">Website TeamMUJ Official</a><br />
                            <a href="#">WebsiteIEEE Official WebsiteIEEE</a><br />
                            <a href="#">ScholarshipsIEEE Benefits Global</a><br />
                            <a href="#">Membership</a><br />
                        </p>
                    </div>
                    <div className="flex text-3xl mt-4 justify-end mx-[6rem]">
                        <a href="#"><BsLinkedin /></a>
                        <a href="#" className="mx-3"><BsInstagram /></a>
                        <a href="#"><BsTwitter /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;