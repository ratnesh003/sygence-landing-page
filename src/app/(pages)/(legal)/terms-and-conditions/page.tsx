import Border from '@/components/Border'
import React from 'react'
import { Acceptance, Agreement, Confidentiality, Definitions, Fees, Ipr, Liability, Obligations, Privacy, Registration, Termination, Whereas } from './_components'

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
      <Fees />
      <Confidentiality />
      <Termination />
      <Liability />
    </Border>
  )
}

export default TermsAndConditions