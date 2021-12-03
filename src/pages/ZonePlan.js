import React from "react";

const ZonePlan = () => {
  return (
    <div className="text-center" height="100%" width="100%">
      <iframe src={process.env.REACT_APP_BASE_URL + '/mapEditor/index.html'} title='zone-plan' frameBorder="0" style={{overflow:'hidden',height:'100%',width:'100%'}} height="100%" width="100%"></iframe>
    </div>
  );
};

export default ZonePlan;
