"use client";

import Title from "./components/Title";
import Autocomplete from "react-google-autocomplete";
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
      {/* Get API-key from environment variable*/}
      <div>
        <Title></Title>
      </div>
      <div>
        <Autocomplete
          apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
          onPlaceSelected={(place) => {
            console.log(place);
          }}
          options={{
            types: ["address"], // 🏡 Endast adresser (inte företag/städer)
            componentRestrictions: { country: "se" }, // 🇸🇪 Bara Sverige (valfritt)
          }}
        ></Autocomplete>
      </div>
    </>
  );
}

export default App;
