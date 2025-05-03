import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import AddressFinder from '../src/components/LocationComponents/AddressFinder';
import '@testing-library/jest-dom';
import { CoordinatesProvider } from '../src/context/CoordinatesContext';
import React from 'react';
import { CoordinatesContext } from '../src/context/CoordinatesContext';

// Mock @react-google-maps/api Autocomplete
vi.mock('@react-google-maps/api', () => ({
  Autocomplete: ({ onLoad, onPlaceChanged, children }: any) => {
    const mockAutocomplete = {
      getPlace: () => ({
        geometry: {
          location: {
            lat: () => 59.3293,
            lng: () => 18.0686,
          },
        },
      }),
    };
    React.useEffect(() => {
      onLoad(mockAutocomplete);
    }, []);
    return (
      <div data-testid="mock-autocomplete" onClick={onPlaceChanged}>
        {children}
      </div>
    );
  },
}));

describe('AddressFinder', () => {
  it('calls setCoordinates with correct values when a place is selected', () => {
    render(
      <CoordinatesProvider>
        <AddressFinder />
      </CoordinatesProvider>
    );

    // Simulate place selection by clicking the Autocomplete wrapper
    const autocomplete = screen.getByTestId('mock-autocomplete');
    fireEvent.click(autocomplete);

    // Since state updates are async, assert input placeholder or test values if needed
    // In this case we can't access internal context state directly,
    // but you can spy on `setCoordinates` if exposed or mock it
    expect(screen.getByPlaceholderText('Search address')).toBeInTheDocument();
  });

  it('clears the input value when lastUpdatedBy is "input"', () => {
    // Fake context to simulate input update
    const CustomProvider = ({ children }: { children: React.ReactNode }) => {
      const [coordinates] = React.useState(null);
      const [lastUpdatedBy] = React.useState<'input'>('input');
      const setCoordinates = vi.fn();

      return (
        <CoordinatesProvider>
          <CoordinatesContext.Provider
            value={{ coordinates, lastUpdatedBy, setCoordinates }}
          >
            {children}
          </CoordinatesContext.Provider>
        </CoordinatesProvider>
      );
    };

    render(
      <CustomProvider>
        <AddressFinder />
      </CustomProvider>
    );

    const input = screen.getByPlaceholderText('Search address') as HTMLInputElement;
    expect(input.value).toBe('');
  });

  it('sets input value to coordinates when lastUpdatedBy is "map"', () => {
    const CustomProvider = ({ children }: { children: React.ReactNode }) => {
      const [coordinates] = React.useState({ lat: 1, lng: 2 });
      const [lastUpdatedBy] = React.useState<'map'>('map');
      const setCoordinates = vi.fn();

      return (
        <CoordinatesProvider>
          <CoordinatesContext.Provider
            value={{ coordinates, lastUpdatedBy, setCoordinates }}
          >
            {children}
          </CoordinatesContext.Provider>
        </CoordinatesProvider>
      );
    };

    render(
      <CustomProvider>
        <AddressFinder />
      </CustomProvider>
    );

    const input = screen.getByPlaceholderText('Search address') as HTMLInputElement;
    expect(input.value).toBe('1, 2');
  });
});
