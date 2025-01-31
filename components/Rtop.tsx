import { Button } from "@react-email/components";
import React from "react";

const Rtop = () => {
  return (
    <div className="fixed bottom-5 right-5 bg-red-500 text-white p-2 rounded-lg hover:bg-blue-600 cursor-pointer">
      <Button href="/#">return</Button>
      <i className="fas fa-arrow-top"></i>
    </div>
  );
};

export default Rtop;
