export const FETCH_DATA_QUERY = `query ($name: String!){getCityByName(name: $name) {
    name
    country
    weather {
      summary {
        title
        description
      }
      temperature {
        actual
        feelsLike
        min
        max
      }
      wind {
        speed
        deg
      }
      clouds {
        all
        visibility
        humidity
      }
      timestamp
    }
  }
}`
