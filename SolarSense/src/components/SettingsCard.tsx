import Card from "./Card";

function SettingsCard({ children }: { children: React.ReactNode }) {
  return (
    <Card
      image="/src/assets/cog.webp"
      imageStyle={{
        width: "3rem",
        display: "block",
        margin: "1rem 1rem 0 1rem",
      }} // Adjust the width of the image
      title="Settings"
      text={`This is the settings page. Here you can change the settings for the app.`}
      buttonText="Back to Home"
      buttonLink="/"
      children={children}
    />
  );
}
export default SettingsCard;
