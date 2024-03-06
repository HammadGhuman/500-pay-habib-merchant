"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { requestFormSchema } from "@/lib/validator";
import Dropdown from "./Dropdown";

const RequestForm = () => {
  const initialValues = {
    customerName: "",
    customerEmail: "",
    paymentAmount: "",
    merchantAcountNumber: "",
    customerAccountNumber: "",
    customerBankName: "",
    paymentPurpose: "",
  };
  const form = useForm<z.infer<typeof requestFormSchema>>({
    resolver: zodResolver(requestFormSchema),
    defaultValues: initialValues,
  });

  function onSubmit(values: z.infer<typeof requestFormSchema>) {}
  return (
    <div className="bg-[#FAFAFA] rounded-md px-5 py-5 mt-5">
      <h1 className="pb-10 font-semibold text-2xl">
        Payment Request for Customer
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
              <FormField
                control={form.control}
                name="customerName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Customer Name *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Input text"
                        {...field}
                        className="max-w-sm "
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-[500px]">
                <FormField
                  control={form.control}
                  name="customerEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">
                        Customer Email Address (Optional)
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Input text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <FormField
              control={form.control}
              name="paymentAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Payment Amount *</FormLabel>
                  <FormControl>
                    <Input placeholder="Input text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="merchantAcountNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">
                    Merchant Account Number *
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Input text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="customerAccountNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">
                    Customer Account Number *
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Input text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="customerAccountNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">
                    Customer Account Number *
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Input text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="customerBankName"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="font-bold">
                    Select Customer Bank Name *
                  </FormLabel>
                  <FormControl>
                    <Dropdown
                      onChangeHandler={field.onChange}
                      value={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="paymentPurpose"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Payment Purpose *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Input text"
                      {...field}
                      className="h-20"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className="bg-purple-500 text-white hover:bg-purple-500 hover:opacity-80"
          >
            Request
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default RequestForm;
