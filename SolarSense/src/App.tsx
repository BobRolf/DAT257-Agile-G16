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
      <div>
        <Title></Title>
      </div>
      <div>
        <Autocomplete
          apiKey={
            import.meta.env.VITE_GOOGLE_MAPS_API_KEY //get API key from enviroment variable
          }
          onPlaceSelected={(place) => {
            //Get coordinates from selected address
            if (place?.geometry?.location) {
              const lat = place.geometry.location.lat();
              const lng = place.geometry.location.lng();
              console.log("Lat:", lat, "Lng:", lng);
            }
          }}
          options={{
            types: ["address"], //only show addresses
            componentRestrictions: { country: "se" }, //only show swedish addresses
          }}
        ></Autocomplete>
      </div>
    </>
  );
}

export default App;
