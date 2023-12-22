import { AddWord } from "./AddWord";
import WordList from "./WordList";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import React from "react";
import { useState} from 'react';



export function TabSelector() {
    const [wordAdded, setWordAdded] = useState(true);
    const [activeTab, setActiveTab] = React.useState("html");
    const handleWordAdd = () =>{
        setWordAdded(!wordAdded);
    }
    const tabs = [
      {
        label: "Word list",
        value: "html",
        desc: <WordList updateTrigger={wordAdded}  />
      },
      {
        label: "Add word",
        value: "react",
        desc: <AddWord handleWordAdd={handleWordAdd}/>
      }];
    return (
      <div className="m-12">
       <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none border-b border-blue bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-yellow-100 shadow-none rounded-none",
          }}
        >
          {tabs.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={`sm:text-2xl text-xl ${activeTab === value ? "text-white" : "text-gray-500"}`}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {tabs.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
       </Tabs>
      </div>
    );
  }
  