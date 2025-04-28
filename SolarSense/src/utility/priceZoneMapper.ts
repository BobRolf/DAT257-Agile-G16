type Point = [number, number];
type Polygon = Point[];

// Determine whether or not a given point is contained within a given polygon
function isPointInPolygon(point: Point, polygon: Polygon): boolean {
  let [px, py] = point;
  let inside = false;

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    // Iterate through all edges
    const [xi, yi] = polygon[i];
    const [xj, yj] = polygon[j];

    // Check if the ray intersects with the edge of the polygon
    const intersects =
      yi > py !== yj > py && // Check if the point is between the y-coordinates of the edge
      px < ((xj - xi) * (py - yi)) / (yj - yi) + xi; // Check if the point is to the left of the edge
    if (intersects) inside = !inside;
  }

  return inside;
}

// Find which Electrical Price Zone a given pair of coordinates is in. Coordinates in form [lat, lon]
async function priceZoneMapper(coordinates: Point): Promise<string | null> {
  const correctedCoordinates: Point = [coordinates[1], coordinates[0]];
  const response = await fetch("/src/assets/PriceZones.geojson"); // Adjust the path if necessary
  const geojson = await response.json();

  for (const feature of geojson.features) {
    // Iterate through all polygons present in the geojson file
    const polygon: Polygon = feature.geometry.coordinates[0];
    if (isPointInPolygon(correctedCoordinates, polygon)) {
      console.log(
        "Coordinates in electrical price zone:",
        feature.properties.PriceZone
      );
      return feature.properties.PriceZone || null;
    }
  }
  console.log("Coordinates outside of price zone. Using SE3 zone");
  return "SE3"; // Standard value in the case where the coordinates are outside of a price class
}

// Example usage
(async () => {
  console.log("Expected: SE1");
  console.log(await priceZoneMapper([67.82489407852277, 20.279543266176027]));
  console.log("Expected: SE2");
  console.log(await priceZoneMapper([60.83061922048006, 16.917299346019757]));
  console.log("Expected: SE3");
  console.log(await priceZoneMapper([57.697119572893094, 12.012271923153186]));
  console.log("Expected: SE4");
  console.log(await priceZoneMapper([55.76671401962827, 13.66289461601057]));
  console.log("Expected: Outside of price zones");
  console.log(await priceZoneMapper([62.0700882262372, -44.75680000956491]));
})();

export default priceZoneMapper;
