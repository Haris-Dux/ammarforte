"use server";

import { sendEmail } from "../Helper/Nodemailer";

export const  submitForm = async (prevState: any, formData: FormData) => {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const number = formData.get('number') as string;
    const message = formData.get('message') as string;
    try {
        if(!name || !email || !number || !message) throw new Error("Please Fill All Fields");
        await sendEmail({name,email,number,message});
        return {
            status:200,
            message:"Form Submitted Successfully"
        }
    } catch (error:any) {
        return {
            status: 500,
            error:error.message
        }
    }
};