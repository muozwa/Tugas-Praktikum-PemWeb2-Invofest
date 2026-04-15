import React, { useState } from "react";

interface InputPasswordProps {
    label: string;
    nama: string;
    register: any;
    error?: string;
}

const InputPassword: React.FC<InputPasswordProps> = ({
    label,
    nama,
    register,
    error,
}) => {
    const [show, setShow] = useState<boolean>(false);

    return (
        <div className="flex flex-col gap-1 mb-4">
                <label htmlFor={label}>{label}</label>

                <div className="relative">
                <input type={show ? "text" : "password"}
                       {...register(nama)} 
                       placeholder={label} 
                       className="border border-gray-200 p-2 w-full px-3 py-2 pr-10 rounded-2xl"/>

                        <button type="button" onClick={() => setShow(!show)}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                            {show ? "Hide" : "Show"}
                        </button>
                    </div>

                       {error && <p className="text-red-800 text-sm">{error}</p>}
        </div>
    )
};

export default InputPassword;