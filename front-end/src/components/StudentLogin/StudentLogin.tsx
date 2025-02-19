"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { axiosClient } from "@/api/axios";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
    email: z.string().email().min(2).max(30),
    password: z.string().min(8).max(30),
});

const StudentLogin = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const navigate = useNavigate()

    async function onSubmit(values: z.infer<typeof formSchema>) {

            await axiosClient.get("sanctum/csrf-cookie");

            const data = await axiosClient.post("/login", values);

            if(data.status === 204){
                navigate("/student/dashboard");
            }

    }

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md bg-white w-full space-y-8 p-8 rounded-lg shadow-lg">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">
                    Student Login
                </h2>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter your email"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            placeholder="Enter your password"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            type="submit"
                            className="w-full flex justify-center "
                        >
                            Login
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default StudentLogin;
