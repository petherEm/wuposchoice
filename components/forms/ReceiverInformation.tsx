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

import { PayoutValidation } from "@/lib/validations/payout";
import { usePayStore } from "@/store/PayStore";

const ReceiverInformation = () => {
  const { fundsOut, setFundsOut, deliveryOption, setDeliveryOption } =
    usePayStore((state) => ({
      fundsOut: state.fundsOut,
      setFundsOut: state.setFundsOut,
      deliveryOption: state.deliveryOption,
      setDeliveryOption: state.setDeliveryOption,
    }));

  const form = useForm<z.infer<typeof PayoutValidation>>({
    resolver: zodResolver(PayoutValidation),
    defaultValues: {
      deliveryServices: fundsOut,
      deliveryOption: "",
    },
  });

  function onSubmit(data: z.infer<typeof PayoutValidation>) {
    setFundsOut(data.deliveryServices);

    console.log(fundsOut);
  }

  return (
    <div className="">
      <div className="p-2 bg-white mb-6">
        {/* Header */}
        <div className="bg-slate-600 text-white uppercase tracking-wide">
          <h1 className="p-2">HOW DOES YOUR RECEIVER WANT THE MONEY?</h1>
        </div>
        {/* Body */}
        <div>
          <Form {...form}>
            <form
              onChange={form.handleSubmit(onSubmit)}
              className="w-2/3 space-y-6"
            >
              <FormField
                control={form.control}
                name="deliveryServices"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Delivery services*</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      value={field.value}
                    >
                      <FormControl className="">
                        <SelectTrigger>
                          <SelectValue
                            defaultValue={field.value}
                            placeholder="Select Delivery Option"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Receiver Choice">
                          LET YOUR RECEIVER CHOOSE
                        </SelectItem>
                        <SelectItem value="Money in Minutes">
                          MONEY IN MINUTES
                        </SelectItem>
                        <SelectItem value="Direct to Bank">
                          DIRECT TO BANK
                        </SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="deliveryOption"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Delivery Option</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      value={field.value}
                    >
                      <FormControl className="">
                        <SelectTrigger>
                          <SelectValue placeholder="Dupa" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="PhoneNotification">
                          Phone Notification
                        </SelectItem>
                        <SelectItem value="PhysicalDelivery">
                          Physical Delivery
                        </SelectItem>
                      </SelectContent>
                    </Select>

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

export default ReceiverInformation;
