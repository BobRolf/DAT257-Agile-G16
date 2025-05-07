import { useTheme } from "../context/useTheme";
import SettingsCard from "../components/SettingsCard";
import Switch from "react-switch";

function Settings() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div>
      <div className="container mt-5 d-flex justify-content-center">
        <SettingsCard>
          <div
            className="d-flex justify-content-left align-items-left"
            style={{ marginLeft: "1rem", marginBottom: "1rem" }}
          >
            <Switch
              onChange={toggleTheme}
              checked={isDark}
              onColor="#000"
              offColor="#ddd"
              uncheckedIcon={false}
              checkedIcon={false}
           />
            <label>
              <span style={{ marginRight: "1rem" }}>
                {isDark ? "Dark Mode" : "Light Mode"}
              </span>
            </label>
          </div>
        </SettingsCard>
        {/* Add SettingCard */}
      </div>
    </div>
  );
}

export default Settings;
