'use client'
import { useState } from "react";
import { createUser } from "../api/create_user/createUser";
import Image from "next/image"
import SignOff from "./SignOff";

export default function RsvpForm ({ attending} : {attending: boolean}) {
    const [submit, setSubmit] = useState(false);
    const [name, setName] = useState('');
    const [food, setFood] = useState('');
    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();
        await createUser({ name, food, attending })
        setSubmit(true);
    }

    return (
        <div className="fixed inset-0">
            <Image
                src="/Meghan_and_Jake_house_empty.jpg"
                alt="Event Flyer"
                width={0}
                height={0}
                fill
                priority
                sizes="100vh">
            </Image>
            <div className="relative z-10 flex h-dvh items-center justify-center overflow-y-auto px-6">
                <form className="flex w-full max-w-[16rem] flex-col gap-4" onSubmit={handleSubmit}>
                    <input
                    className="w-full rounded-lg border border-gray-300 bg-black/60 px-4 py-3 text-base text-white font-brookshire font-normal"
                    placeholder="Please Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    {attending && (
                    <input
                        className="w-full rounded-lg border border- bg-black/60 px-4 py-3 text-base text-white font-brookshire font-normal"
                        placeholder="Please Enter Food"
                        value={food}
                        onChange={(e) => setFood(e.target.value)}
                    />
                    )}
                    <button
                    className="w-full rounded-lg bg-purple-700/60 py-3 text-base text-white font-brookshire font-normal"
                    type="submit"
                    >
                    Submit
                    </button>
                </form>
                {submit && <SignOff attending={attending}/>}
            </div>
        </div>
    )
}; 
