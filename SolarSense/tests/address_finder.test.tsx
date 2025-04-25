import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { AddressFinder } from '../src/components/AddressFinder';

// Mock the Autocomplete component
vi.mock('react-google-autocomplete', () => ({
  __esModule: true,
  default: ({ onPlaceSelected, apiKey }) => {
    return (
      <button
        onClick={() =>
          onPlaceSelected({
            geometry: { location: { lat: () => 59.3293, lng: () => 18.0686 } },
          })
        }
      >
        Select Place
      </button>
    );
  },
}));

describe('AddressFinder', () => {
  it('should log coordinates when a place is selected', async () => {
    // Mock the console log to capture the output
    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    // Render the component
    render(<AddressFinder />);

    // Simulate clicking the "Select Place" button (mimicking place selection)
    const button = screen.getByText('Select Place');
    fireEvent.click(button);

    // Wait for the async actions to complete
    await waitFor(() => expect(logSpy).toHaveBeenCalledWith('Lat:', 59.3293, 'Lng:', 18.0686));

    // Clean up the mock
    logSpy.mockRestore();
  });
});