import SendMoney from "@/components/SendMoney";
import Summary from "@/components/Summary";
import Image from "next/image";

export default function Send() {
  return (
    <main className="p-10 flex flex-col md:flex-row items-start space-x-8">
      <div className="lg:flex-[70%] flex-[80%]">
        <SendMoney />
      </div>
      <div className="lg:flex-[30%] flex-[40%] ">
        <div className="fixed bg-blue-100/40 md:min-w-[350px]">
          <Summary />
        </div>
      </div>
    </main>
  );
}
