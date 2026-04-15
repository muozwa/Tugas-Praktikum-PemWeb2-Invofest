interface InputTextProps {
    label: string;
    nama: string;
    register: any;
    error?: string;
}

const InputText: React.FC<InputTextProps> = ({
    label,
    nama,
    register,
    error,
}) => {
    return (
        <div className="flex flex-col gap-1 mb-4">
                <label htmlFor={label}>{label}</label>
                <input type="text"
                       {...register(nama)} 
                       placeholder={label} 
                       className="border border-gray-200 p-2 rounded-2xl"/>
                       {error && <p className="text-red-800 text-sm">{error}</p>}
        </div>
    )
};

export default InputText;