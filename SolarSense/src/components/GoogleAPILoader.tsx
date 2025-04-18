import { useJsApiLoader } from "@react-google-maps/api";
const libraries: "places"[] = ["places"];
function GoogleAPILoader({ children }: { children: React.ReactNode }) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return <div>Failed to load Google Maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return <>{children}</>;
}

export default GoogleAPILoader;
