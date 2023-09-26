import SenderLookup from "./forms/SenderLookup";
import ReceiverInformation from "./forms/ReceiverInformation";
import TransferInformation from "./forms/TransferInformation";
import SenderDetails from "./forms/SenderDetails";
import ReceiverDetails from "./forms/ReceiverDetails";
import Submission from "./Submission";

const SendMoney = () => {
  const showRest = true;

  return (
    <div>
      <div className="border-2 p-2 tracking-wide font-bold">
        <h1>Send Money</h1>
      </div>

      <div>
        <SenderLookup />
      </div>
      <div>
        {showRest && (
          <>
            <div>
              <TransferInformation />
            </div>
            <div>
              <ReceiverInformation />
            </div>
            <div>
              <SenderDetails />
            </div>
            <div>
              <ReceiverDetails />
            </div>
            <div>
              <Submission />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SendMoney;
