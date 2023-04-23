import React, { useEffect, useState } from 'react'
const ZOHO =  window.ZOHO;

const DataCRM = () => {
  const [crmData, setCrmData] = useState();
 
  useEffect(()=>{ 
    ZOHO.embeddedApp.on("PageLoad", async function (data) {    
    const recordId = data.EntityId; 
    // console.log(`Record Id: ${recordId}`)
    ZOHO.CRM.API.getRecord({
      Entity: "Leads",
      RecordID: recordId,
    }).then(function (data) {
      const Leaddatas = data["data"];
      // setCrmData(Leaddatas);
      Leaddatas.forEach(element => {
           var LeadName = element["Full_Name"];
           var LastName = element["Last_Name"];
           var Email = element["Email"];
           document.getElementById("fname").value=LeadName;
           document.getElementById("lname").value=LastName;
          console.log(element);
          document.getElementById("email").value=Email;
         });
    });
  });
    
  ZOHO.embeddedApp.init();
},[])
  return (
    <>
    {crmData}
    </>
  )
}

export default DataCRM



