import { addressFinder } from './src/AddressFinder.tsx';

globalThis.fetch = jest.fn();

// clear the mockAddress before each new fetch
beforeEach(() => {
    fetch.mockClear();
})

// testing for successful api calls
test('address finder should return data when successful', async () => {
    const mockAddress = {
        longitude: 123.45,
        latitude: 67.89,
    };

    fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockAddress,
    });
    
    // save the real fetch results
    const result = await addressFinder();
})


expect(fetch).toHaveBeenCalledWith('');
expect(result).toEqual(expect.objectContaining({
    longitude: expect.any(Number),
    latitude: expect.any(Number)
}))

test('address finder should throw an error on failed request', async () => {
    fetch.mockResolvedValueOnce({ 
        ok: false,
    });

    await expect(addressFinder()).rejects.toThrow();
})
