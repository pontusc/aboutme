import { Tabs } from "radix-ui";
import { useState } from "react";
import "./App.css";
import { Skills } from "./components/skills";
import { Contact } from "./components/contact";
import { Projects } from "./components/project";
import { Header } from "./components/header";

function App() {
  const [tab, setTab] = useState("tab1");
  return (
    <div>
      <Header />
      <Tabs.Root value={tab} onValueChange={(val) => setTab(val)}>
        <Tabs.List>
          <Tabs.Trigger
            className={`tabButton ${tab === "tab1" ? "activeTab" : ""}`}
            value="tab1"
          >
            {tab === "tab1" ? ">" : ""} Skills
          </Tabs.Trigger>
          <Tabs.Trigger
            className={`tabButton ${tab === "tab2" ? "activeTab" : ""}`}
            value="tab2"
          >
            {tab === "tab2" ? ">" : ""} Projects
          </Tabs.Trigger>
          <Tabs.Trigger
            className={`tabButton ${tab === "tab3" ? "activeTab" : ""}`}
            value="tab3"
          ></Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="TabsContent" value="tab1">
          <Skills />
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="tab2">
          <Projects />
        </Tabs.Content>
      </Tabs.Root>
      <Contact />
    </div>
  );
}

export default App;
