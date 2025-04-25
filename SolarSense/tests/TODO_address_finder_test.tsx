//This test is commented out because it requires a working Google Maps API key and the @react-google-maps/api library to be properly set up.

/*
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { AddressFinder } from "../src/components/AddressFinder";
import { CoordinatesProvider } from "../src/context/CoordinatesContext";

// Mock the `@react-google-maps/api` Autocomplete component
vi.mock("@react-google-maps/api", () => ({
  Autocomplete: ({ onLoad, onPlaceChanged, children }: any) => {
    // Simulate the `onLoad` callback
    const mockAutocompleteInstance = {
      getPlace: () => ({
        geometry: {
          location: {
            lat: () => 59.3293,
            lng: () => 18.0686,
          },
        },
      }),
    };
    onLoad(mockAutocompleteInstance);
    
    return (
      <div onClick={onPlaceChanged} data-testid="autocomplete">
      {children}
      </div>
    );
  },
}));

describe("AddressFinder", () => {
  it("should update coordinates when a place is selected", async () => {
    // Mock the `setCoordinates` function
    const setCoordinatesMock = vi.fn();
    
    // Render the component wrapped in the CoordinatesProvider
    render(
      <CoordinatesProvider
      value={{
          setCoordinates: setCoordinatesMock,
          lastUpdatedBy: "finder",
        }}
        >
        <AddressFinder />
        </CoordinatesProvider>
      );
      
      // Simulate user interaction with the Autocomplete component
      const autocomplete = screen.getByTestId("autocomplete");
      fireEvent.click(autocomplete);
      
      // Wait for the coordinates to be updated
      await waitFor(() => {
        expect(setCoordinatesMock).toHaveBeenCalledWith(
        { lat: 59.3293, lng: 18.0686 },
        "finder"
      );
    });
  });
});
*/
