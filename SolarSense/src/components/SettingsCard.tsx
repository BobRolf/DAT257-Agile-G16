import Card from "./Card";

function SettingsCard() {
  return (
    <Card
      img=""
      title="Settings"
      text={`This is the settings page. Here you can change the settings for the app. You can change the language, the currency and the units used in the app. You can also change the theme of the app.`}
      buttonText="Back to Home"
      buttonLink="/"
    />
  );
}
export default SettingsCard;
