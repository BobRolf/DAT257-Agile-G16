import { useTheme } from "../context/ThemeContext";
import Navbar from "../components/Navbar";
import SettingsCard from "../components/SettingsCard";
import Switch from "react-switch";

function Settings() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div>
      <Navbar />
      <div className="container mt-5 d-flex justify-content-center">
        <SettingsCard>
          <div
            className="d-flex justify-content-left align-items-left"
            style={{ marginLeft: "1rem" }}
          >
            <Switch
              onChange={toggleTheme}
              checked={isDark}
              onColor="#000"
              offColor="#ddd"
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
