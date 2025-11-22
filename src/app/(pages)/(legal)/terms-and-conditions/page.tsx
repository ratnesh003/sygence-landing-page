import Border from '@/components/Border'
import React from 'react'
import { Acceptance, Agreement, Definitions, Ipr, Obligations, Privacy, Registration, Whereas } from './_components'

const TermsAndConditions = () => {
  return (
    <Border>
      <Agreement />
      <Whereas />
      <Acceptance />
      <Definitions />
      <Registration />
      <Obligations />
      <Ipr />
      <Privacy />
    </Border>
  )
}

export default TermsAndConditions