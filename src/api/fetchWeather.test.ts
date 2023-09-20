import { getWeatherByCoords, getWeatherBySearch } from './fetchWeather'

describe('fetching weather data', () => {
  it('should fetch weather data by coords', async () => {
    expect.assertions(2)
    const data = await getWeatherByCoords(0, 0)

    expect(data).toHaveProperty('main')
    expect(typeof data.main.temp).toEqual('number')
  })

  it('should fetch weather data by search', async () => {
    expect.assertions(2)
    const data = await getWeatherBySearch('London')

    expect(data).toHaveProperty('main')
    expect(typeof data.main.temp).toEqual('number')
  })
})
