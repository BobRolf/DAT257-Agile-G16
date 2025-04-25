import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SettingsCard from "../components/SettingsCard";
import Switch from "react-switch";

function Settings() {
  const [isDark, setIsDark] = useState(true);
  return (
    <div>
      <Navbar />
      <div className="container mt-5 d-flex justify-content-center">
        <SettingsCard>
          <Switch
            onChange={setIsDark}
            checked={isDark}
            onColor="#000"
            offColor="#ddd"
          />
          <label>
            <span style={{ marginRight: "1rem" }}>
              {isDark ? "Dark Mode" : "Light Mode"}
            </span>
          </label>
        </SettingsCard>
        {/* Add SettingCard */}
      </div>
    </div>
  );
}

export default Settings;
