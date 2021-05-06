import React from 'react'
import RadarChart from 'react-svg-radar-chart'
import 'react-svg-radar-chart/build/css/index.css'
import styled from 'styled-components'

const Snowflake = styled.div``

const defaultCaptions = {
  value: 'Value',
  future: 'Future',
  past: 'Past',
  health: 'Health',
  dividend: 'Income',
}

export default ({ data, options }) => {
  const { captions = defaultCaptions, color, size = 250 } = options
  const snowflakeData = [
    {
      data,
      meta: { color },
    },
  ]

  console.log(`snowflakeData`, JSON.stringify(snowflakeData, null, 5))

  return (
    <Snowflake>
      <RadarChart captions={captions} data={snowflakeData} size={size} />
    </Snowflake>
  )
}
