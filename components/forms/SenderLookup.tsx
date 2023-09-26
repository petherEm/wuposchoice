"use client";

import { useState } from "react";
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
import { Badge } from "@/components/ui/badge";
import { TransferValidation } from "@/lib/validations/transfer";

const SenderLookup = () => {
  const form = useForm<z.infer<typeof TransferValidation>>({
    resolver: zodResolver(TransferValidation),
  });

  function onSubmit(data: z.infer<typeof TransferValidation>) {}

  return (
    <div className="">
      <div className="p-2 bg-white mb-10 flex flex-col">
        {/* Header */}
        <div className="bg-slate-600 text-white uppercase tracking-wide">
          <h1 className="p-2">Sender Lookup</h1>
        </div>
        {/* Body */}
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-2/3 space-y-6"
            >
              <div className="mt-6 flex items-center justify-between gap-6">
                <FormField
                  control={form.control}
                  name="senderCurrency"
                  render={({ field }) => (
                    <FormItem className="w-1/2">
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="">
                          <SelectTrigger>
                            <SelectValue placeholder="ID TYPE" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Passport">Passport</SelectItem>
                          <SelectItem value="ID">
                            Government issued Nat'l ID
                          </SelectItem>
                          <SelectItem value="Driver">
                            Driver's license
                          </SelectItem>
                          <SelectItem value="Residence">
                            Residence permit
                          </SelectItem>
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="amountToSend"
                  render={({ field }) => (
                    <FormItem className="w-1/2">
                      <Input type="number" placeholder="ID NUMBER" />

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col bg-gray-100 w-full min-h-[160px] p-3">
                <div>
                  <p className="text-sm font-light mt-2 mb-2">
                    Add customer name if needed to refine returned search
                    results
                  </p>
                  <div className="mb-2 flex items-center justify-start space-x-2">
                    <Badge className="cursor-pointer">First/Last</Badge>
                    <Badge variant="outline" className="cursor-pointer">
                      Paternal/Maternal
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer">
                      Company
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <FormField
                    control={form.control}
                    name="amountToSend"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <Input type="text" placeholder="FIRST NAME(S)" />

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="amountToReceive"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <Input type="text" placeholder="LAST NAME(S)" />

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </form>
          </Form>
        </div>
        {/* Button */}
        <div className="flex items-center justify-end">
          <Button className="w-fit" variant="wuapprove">
            Search Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SenderLookup;
