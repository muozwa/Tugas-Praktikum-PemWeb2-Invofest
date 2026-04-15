import { useForm } from "react-hook-form";
import InputText from "../src/components/ui/InputText";
import InputPassword from "../src/components/ui/InputPassword";

import { zodResolver } from "@hookform/resolvers/zod";
import { email, z } from "zod";
import Button from "../src/components/ui/Button";


type FormData = {
    nama: string;
    email: string;
    password: string;
    password_confirm: string;
}

const schema = z.object({
    nama: z.string().min(1,"Nama harus diisi"),
    email: z.string().min(1,"Email harus diisi"),
    password: z.string().min(8, "Password minimal 8 karakter"),
    password_confirm: z.string().min(8, "Password minimal 8 karakter"),
});

export default function RegisterForm() {
    const {register, 
            handleSubmit, 
             formState: {errors}} = useForm<FormData>({resolver: zodResolver(schema)});

    const onSubmit = (data : FormData) => {
        console.log(data);
    }

    return ( 
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>

            <InputText label="nama" 
            nama="nama" 
            register={register} 
            error={errors.nama?.message} />

            <InputText label="email" 
            nama="email" 
            register={register} 
            error={errors.email?.message} />
            
            <InputPassword label="Password" 
            nama="password" 
            register={register} 
            error={errors.password?.message} />

            <InputPassword label="Password" 
            nama="password" 
            register={register} 
            error={errors.password_confirm?.message} />

            <Button label="Register" variant="primary" />
        </form>
    </div>
);
}
