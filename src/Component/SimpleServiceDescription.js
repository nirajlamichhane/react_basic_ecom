import React from "react";
import "./SimpleServiceDescription.css";
import ServiceDescriptionOption from "./ServiceDescriptionOption/ServiceDescriptionOption";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import ForumIcon from '@mui/icons-material/Forum';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CreditScoreIcon from '@mui/icons-material/CreditScore';

function SimpleServiceDescription() {
  return (
    <div className="serviceDescription">
      <ServiceDescriptionOption
        title="Delivery Anywhere"
        desc="Delivery Anywhere in Hetauda"
        Icon={AirplaneTicketIcon}
      />
      <ServiceDescriptionOption
        title="Support 24/7"
        desc="We support 24h a day"
        Icon={ForumIcon}
      />
      <ServiceDescriptionOption
        title="100% cash Bag"
        desc="You have 14days to refund"
        Icon={MonetizationOnIcon}
      />
      <ServiceDescriptionOption
        title="Payment Secure"
        desc="We insure Sercure payment"
        Icon={CreditScoreIcon}
      />
    </div>
  );
}

export default SimpleServiceDescription;
