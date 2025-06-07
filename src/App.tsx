import { Tabs } from "radix-ui";
import { useState } from "react";
import "./App.css";
import { Skills } from "./components/skills";
import { Contact } from "./components/contact";
import { Projects } from "./components/project";

function App() {
  const [tab, setTab] = useState("tab1");
  return (
    <div>
      <div className="header">
        <h1>Pontus Curtsson</h1>
        <h3>DevOps Engineer</h3>
        <p className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
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
