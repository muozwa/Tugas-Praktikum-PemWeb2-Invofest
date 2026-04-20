import { useForm } from "react-hook-form";
import InputText from "../src/components/ui/InputText";
import InputPassword from "../src/components/ui/InputPassword";
import SelectInput from "../src/components/ui/SelectInput";
import { zodResolver } from "@hookform/resolvers/zod";
import {  z } from "zod";
import Button from "../src/components/ui/Button";
import Textarea from "../src/components/ui/TextArea";


type FormData = {
    nama: string;
    email: string;
    password: string;
    event: string;
    bio?: string;
}

const schema = z.object({
    nama: z.string().min(1,"Nama harus diisi"),
    email: z.string().min(1,"Email harus diisi"),
    password: z.string().min(8, "Password minimal 8 karakter"),
    event: z.string().min(1, "Event harus dipilih"),
    bio: z.string().max(200, "Bio maksimal 200 karakter").optional()
});

export default function RegisterForm() {
    const {register, 
            handleSubmit,
            setValue,
             formState: {errors}} = useForm<FormData>({resolver: zodResolver(schema)});

    const onSubmit = (data : FormData) => {
        console.log(data);
    }

    return ( 
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>

            <InputText label="Nama" 
            nama="nama" 
            register={register} 
            error={errors.nama?.message} />

            <InputText label="Email" 
            nama="email" 
            register={register} 
            error={errors.email?.message} />
            
            <InputPassword label="Password" 
            nama="password" 
            register={register} 
            error={errors.password?.message} />

            <SelectInput
                label="Pilih Event"
                nama="event"
                register={register}
                setValue={setValue}
                error={errors.event?.message}
                options={[
                    { label: "Webinar", value: "eventA" },
                    { label: "Workshop", value: "eventB" },
                    { label: "IT competition", value: "eventC" },
                ]}
            />

             <Textarea
                    label="Bio"
                    nama="bio"
                    register={register}
                    error={errors.bio?.message}
                />
                
            <Button label="daftar" variant="primary" className="rounded-2xl" />
            
        </form>
    </div>
);
}