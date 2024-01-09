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

const SenderDetails = () => {
  const form = useForm<z.infer<typeof SenderValidation>>({
    resolver: zodResolver(SenderValidation),
  });

  function onSubmit(values: z.infer<typeof SenderValidation>) {
    console.log(values);
  }

  return (
    <div className="">
      <div className="p-2 bg-white min-h-[800px]">
        {/* Header */}
        <div className="bg-slate-600 text-white uppercase tracking-wide">
          <h1 className="p-2">PLEASE PROVIDE SENDER DETAILS</h1>
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
                      <Input type="text" placeholder="FIRST NAME" />

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <Input type="text" placeholder="LAST NAME" />

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="countryOfResidence"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="">
                        <SelectTrigger>
                          <SelectValue placeholder="COUNTRY OF RESIDENCE" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Germany">Germany</SelectItem>
                        <SelectItem value="Poland">Poland</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="postCode"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <Input type="text" placeholder="POSTCODE" />

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <Input type="text" placeholder="PROVINCE/COUNTY/STATE" />

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <Input type="text" placeholder="CITY/TOWN" />

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <Input type="text" placeholder="ADDRESS 1" />

                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center justify-between gap-6">
                <FormField
                  control={form.control}
                  name="countryCode"
                  render={({ field }) => (
                    <FormItem className="w-[30%]">
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="">
                          <SelectTrigger>
                            <SelectValue placeholder="+49" />
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
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <Input type="text" placeholder="TELEPHONE NUMBER" />

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
                            <SelectValue placeholder="+49" />
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
                      <Input type="text" placeholder="MOBILE NUMBER" />

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <Input type="email" placeholder="EMAIL ADDRESS" />

                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SenderDetails;
