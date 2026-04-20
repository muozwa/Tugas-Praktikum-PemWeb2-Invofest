interface TextareaProps {
    label: string;
    nama: string;
    register: any;
    error?: string;
    
}
export const Textarea: React.FC<TextareaProps> = ({
    label,
    nama,
    register,
    error,
}) => {
return (
    <div className="flex flex-col gap-1 mb-4">
        <label>{label}</label>
            <textarea
        {...register(nama)}
        placeholder={"isi kk"}
        className="border border-gray-200 p-2 rounded-2xl"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};

export default Textarea;