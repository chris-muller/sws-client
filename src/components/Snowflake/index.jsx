import React from 'react'
import RadarChart from 'react-svg-radar-chart'
import 'react-svg-radar-chart/build/css/index.css'
import styled from 'styled-components'

const Snowflake = styled.div`
  .caption {
    fill: #fff;
    text-shadow: 1px 1px 0 #222;
  }

  .shape {
    fill-opacity: 0.1;
  }

  .scale {
    fill: rgba(58, 71, 89, 0.5);
  }
`

const defaultCaptions = {
  value: 'Value',
  future: 'Future',
  past: 'Past',
  health: 'Health',
  dividend: 'Income',
}

export default ({ data, options }) => {
  const { captions = defaultCaptions, color, size = 150 } = options
  const snowflakeData = [
    {
      data,
      meta: { color },
    },
  ]

  return (
    <Snowflake>
      <RadarChart captions={captions} data={snowflakeData} size={size} />
    </Snowflake>
  )
}
