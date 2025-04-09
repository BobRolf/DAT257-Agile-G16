"use client";

import Title from "./components/Title";
import {
  //Tools from google api lmao
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

function App() {
  const position = { lat: 53.54, lng: 10 };

  return (
    <>
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        {" "}
        {/* Get API-key from environment variable*/}
        <div>
          <Title></Title>
        </div>
        {/* EXAMPLE MAP CODE
        <div style={{ height: "100vh", width: "100%" }}>
          <Map zoom={9} center={position}></Map>
        </div>
        */}
      </APIProvider>
    </>
  );
}

export default App;
