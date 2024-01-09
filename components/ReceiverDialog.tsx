"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";

type AlertProps = {
  firstName: string;
};

const ReceiverDialog = ({ firstName }: AlertProps) => {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="wuapprove">Search</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {firstName}, the Receiver, is WU Digital Bank Account Holder
            </AlertDialogTitle>
            <AlertDialogDescription>
              Would you like to send directly to {firstName} WU Digital Bank
              Account?
              <br />
              Money will be delivered in{" "}
              <span className="font-bold">seconds</span>. In case this the first
              deposit for {firstName},{" "}
              <span className="font-bold">she/he will get 10 EUR bonus.</span>
              <br />
              <br />
              <br />
              <span className="text-red-400 font-bold">
                Please confirm with the sender that money will be delivered to{" "}
                {firstName} WU Digital Bank Account.
              </span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Confirmed</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default ReceiverDialog;
