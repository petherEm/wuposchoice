"use client";

import { useEffect } from "react";
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

import { TransferValidation } from "@/lib/validations/transfer";
import { usePayStore } from "@/store/PayStore";

const TransferInformation = () => {
  const {
    fundsOut,
    setFundsOut,
    country,
    setCountry,
    deliveryOption,
    setDeliveryOption,
  } = usePayStore((state) => ({
    fundsOut: state.fundsOut,
    setFundsOut: state.setFundsOut,
    deliveryOption: state.deliveryOption,
    setDeliveryOption: state.setDeliveryOption,
    country: state.country,
    setCountry: state.setCountry,
  }));

  const form = useForm<z.infer<typeof TransferValidation>>({
    resolver: zodResolver(TransferValidation),
    defaultValues: {
      payoutCountry: country,
    },
  });

  const watchedPayoutCountry = form.watch("payoutCountry");

  useEffect(() => {
    if (watchedPayoutCountry) {
      onSubmit({
        payoutCountry: watchedPayoutCountry,
        senderCurrency: "",
        amountToSend: 0,
        amountToReceive: 0,
        totalAmount: 0,
      });
    }
  }, [watchedPayoutCountry]);

  useEffect(() => {
    console.log(country);
  }, [country]);

  function onSubmit(data: z.infer<typeof TransferValidation>) {
    setCountry(data.payoutCountry);
  }

  return (
    <div className="">
      <div className="p-2 bg-white mb-10">
        {/* Header */}
        <div className="bg-slate-600 text-white uppercase tracking-wide">
          <h1 className="p-2">Please provide the transfer information</h1>
        </div>
        {/* Body */}
        <div>
          <Form {...form}>
            <form className="w-2/3 space-y-6">
              <FormField
                control={form.control}
                name="senderCurrency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sender Currency*</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      value={field.value}
                    >
                      <FormControl className="">
                        <SelectTrigger>
                          <SelectValue
                            placeholder="EURO"
                            defaultValue={field.value}
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Euro">Euro</SelectItem>
                        <SelectItem value="USD">US Dollar</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="payoutCountry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Payout Country</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      value={field.value}
                    >
                      <FormControl className="">
                        <SelectTrigger>
                          <SelectValue placeholder="PAYOUT COUNTRY" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="RO">Romania</SelectItem>
                        <SelectItem value="PL">Poland</SelectItem>
                        <SelectItem value="UK">United Kingdom</SelectItem>
                        <SelectItem value="DE">Germany</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center justify-between gap-6">
                <FormField
                  control={form.control}
                  name="amountToSend"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <Input type="number" placeholder="AMOUNT TO SEND*" />

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="amountToReceive"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <Input type="number" placeholder="AMOUNT TO RECEIVE*" />

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="totalAmount"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <Input type="number" placeholder="TOTAL AMOUNT*" />

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

export default TransferInformation;
