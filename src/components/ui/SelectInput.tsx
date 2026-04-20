import { useState } from "react";

interface InputSelectEventProps {
    label: string;
    nama: string;
    register: any;
    setValue: any;
    error?: string;
    placeholder?: string;
    options: { label: string; value: string; }[];
}

const InputSelectEvent: React.FC<InputSelectEventProps> = ({
    label,
    nama,
    register,
    setValue,
    error,
    placeholder = "-- Pilih Event --",
    options,
}) => {
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    const handleSelect = (event: string) => {
        setSelectedValue(event);
        setValue(nama, event);
        setOpen(false);
    };

    const selectedLabel = options.find(option => option.value === selectedValue)?.label || null;

    return (
        <div className="flex flex-col gap-1 mb-4">
            <label>{label}</label>

            <input type="hidden" {...register(nama)} />

            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="border border-gray-200 p-2 rounded-2xl w-full text-left flex justify-between items-center"
            >
                    <span className="text-gray-500">
                    {selectedLabel ?? placeholder}
                </span>
                <span>{open ? "▲" : "▼"}</span>
            </button>

            {open && (
                <div className="border border-gray-200 rounded-2xl bg-white">
                    {options.map((option) => (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => handleSelect(option.value)}
                            className="w-full text-left px-4 py-2 hover:bg-gray-100"
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            )}

            {error && <p className="text-red-800 text-sm">{error}</p>}
        </div>
    );
};

export default InputSelectEvent;