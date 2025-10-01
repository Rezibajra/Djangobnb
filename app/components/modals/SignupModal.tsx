'use client';

import Modal from "./Modal";

import useSignupModal from "@/app/hooks/useSignupModal";
import CustomButton from "../forms/CustomButton";

const SignupModal = () => {
    const signupModal = useSignupModal()
    const content = (
        <>
            <form 
                className="space-y-4"
            >
                <input placeholder="Your e-mail address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl outline-none" />

                <input placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl outline-none" />
            
                        <div 
                            className="p-5 bg-[#ff385c] text-white rounded-xl opacity-80"
                        >
                            Error Message
                        </div>

                <CustomButton
                    label="Submit"
                />
            </form>
        </>
    )

    return (
        <Modal
            isOpen={signupModal.isOpen}
            close={signupModal.close}
            label="Sign up"
            content={content}
        />
    )
}

export default SignupModal;