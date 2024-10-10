import * as React from "react";
import Header from "@/components/Header";
import CustomTab,{TabProp} from "@/components/Tab";
function Home() {
  const tabs:TabProp[]=[
    {
      id:"1",
      label:"Home",
      disabled:false
    },
    {
      id:"2",
      label:"ChatRoom",
      disabled:false
    },
    {
      id:"3",
      label:"TechTalk",
      disabled:false
    },
    {
      id:"4",
     label:"ProjectShare",
     disabled:false
    }
  ]
  return (
    <div>
      <CustomTab tabs={tabs}/>
    </div>
  );
}
export default Home;
