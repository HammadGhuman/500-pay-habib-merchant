"use client";
import SignImage from "@/public/Walet.jpeg";
import Chart from "@/public/Chart.jpeg";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { loginFormSchema } from "@/lib/validator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const Login = () => {
  const initialValues = {
    username: "",
    password: "",
  };
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: initialValues,
  });

  function onSubmit(data: z.infer<typeof loginFormSchema>) {
    console.log(data);
  }

  return (
    <div className="  text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="flex flex-col items-center justify-center lg:w-[300px] xl:w-[600px] p-6 sm:[200px]">
          <div className="flex items-center justify-center h-[50px] w-[250px] gap-5">
            <Image src={SignImage} alt="sign" className="" />
            <div className="flex w-full ">
              <h1 className="font-semibold ">Customer Account</h1>
            </div>
          </div>
          <div className="mt-4 flex flex-col items-">
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold">Login</h1>
                <div className="flex pt-3 space-x-2">
                  <h1 className="text-3xl font-bold text-cyan-400">
                    Customer Portal
                  </h1>
                  <div className="flex">
                    {" "}
                    <h1 className="text-3xl font-bold">account</h1>
                  </div>
                </div>
              </div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col gap-2 mx-auto max-w-xs mt-5 "
                >
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold">
                          Customer Name *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Username"
                            {...field}
                            className="max-w-sm "
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
                        <FormLabel className="font-bold">Password</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Password"
                            {...field}
                            className="max-w-sm "
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="mt-2 tracking-wide font-semibold bg-cyan-400 text-white-500 w-full py-4 rounded-lg hover:bg-cyan-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    Log In
                  </Button>
                  <p className="mt-6 text-sm text-gray-600 text-center">
                    Already have account?
                    <a
                      href="/sign-in"
                      className="border-b border-cyan-400 border-dotted text-cyan-400"
                    >
                      Sign up
                    </a>
                  </p>
                </form>
              </Form>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-cyan-400 text-center hidden lg:flex">
          <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
            <Image src={Chart} alt="chart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
