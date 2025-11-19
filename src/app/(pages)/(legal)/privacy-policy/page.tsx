import React from "react";

import { 
  Introduction,                  // A
  Network,                       // B
  Collection,                    // C
  PersonalData,                  //
  LegalBasis,                    //
  Recipients,                    //
  SpecialCases,                  //
  Rights,                        //
  Storing,                       //
  Government,                    //
  Binding,                       //
  Security,                      //
  Control,                       //
  WebsiteCookies,                //
  SocialMedia,                   //
  DNT,                           //
  ChildrenPrivacy,               //
  FurtherInformation,            //
  PrivacyChanges,                //
  ContactCompany                 //
} from "./_components";

import Border from "@/components/Border";

const PrivacyPolicy = () => {
  return (
    <Border>
      <Introduction />
      <Network />
      <Collection />
      <PersonalData />
      <LegalBasis />
      <Recipients />
      <SpecialCases />
      <Rights />
      <Storing />
      <Government />
      <Binding />
      <Security />
      <Control />
      <WebsiteCookies />
      <SocialMedia />
      <DNT />
      <ChildrenPrivacy />
      <FurtherInformation />
      <PrivacyChanges />
      <ContactCompany />
    </Border>
  );
};

export default PrivacyPolicy;
