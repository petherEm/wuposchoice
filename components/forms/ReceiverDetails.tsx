"use client";

import Link from "next/link";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

import { SenderValidation } from "@/lib/validations/sender";
import { ReceiverValidation } from "@/lib/validations/receiver";
import ReceiverDialog from "../ReceiverDialog";

const ReceiverDetails = () => {
  const form = useForm<z.infer<typeof ReceiverValidation>>({
    resolver: zodResolver(ReceiverValidation),
  });

  function onSubmit(data: z.infer<typeof ReceiverValidation>) {
    console.log(data);
  }

  return (
    <div className="">
      <div className="p-2 bg-white">
        {/* Header */}
        <div className="bg-slate-600 text-white uppercase tracking-wide">
          <h1 className="p-2">PLEASE PROVIDE RECEIVER DETAILS</h1>
        </div>
        {/* Body */}
        <div className="mt-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-2/3 space-y-6"
            >
              <div className="flex items-center justify-between gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <Input type="text" placeholder="FIRST NAME" {...field} />

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <Input type="text" placeholder="LAST NAME" {...field} />

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center justify-between gap-6">
                <FormField
                  control={form.control}
                  name="mobileCountryCode"
                  render={({ field }) => (
                    <FormItem className="w-[30%]">
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="">
                          <SelectTrigger>
                            <SelectValue placeholder="+40" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="+49">+49</SelectItem>
                          <SelectItem value="+48">+48</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mobileNumber"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <Input
                        type="text"
                        placeholder="MOBILE NUMBER"
                        {...field}
                      />

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <ReceiverDialog firstName={form.watch("firstName")} />
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ReceiverDetails;
