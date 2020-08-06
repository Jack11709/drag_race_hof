import React from 'react'
import axios from 'axios'
import SectionContainer from './SectionContainer'

interface Season {
  id: number
  seasonNumber: string
}

interface Queen {
  id: number
  name: string
  image_url: string
  quote: string
  seasons: Season[]
}

export default function Winners() {
  const [queens, setQueens] = React.useState([])

  const getData = async () => {
    try {
      const url = 'http://www.nokeynoshade.party/api/queens/winners'
      const response = await axios.get(url)
      console.log(response.data)
      setQueens(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  React.useEffect(() => {
    getData()
  }, [])

  return (
    <SectionContainer>
      {queens.map((queen: Queen) => (
        <div>
          {queen.name}
        </div>
      ))}
    </SectionContainer>
  )
}
