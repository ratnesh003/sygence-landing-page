import React from 'react'

import { 
  Advisors,
  Hero,
  Leadership,
  Mission, 
  Pillars
} from './_components'

const AboutUsPage = () => {
  return (
    <React.Fragment>
      <Hero />
      <Mission />
      <Pillars />
      <Leadership />
      <Advisors />
    </React.Fragment>
  )
}

export default AboutUsPage