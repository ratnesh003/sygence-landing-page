import Border from '@/components/Border'
import React from 'react'
import { Acceptance, Acknowledgement, Additional, Agreement, Amendment, Confidentiality, Definitions, Dispute, Entire, Fees, Force, Governing, Indemnification, Ipr, Liability, Notices, Obligations, Privacy, Publicity, Registration, Severability, Support, Termination, Warranties, Whereas } from './_components'
import ContactInfo from '@/components/ContactInfo'

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
      <Indemnification />
      <Support />
      <Publicity />
      <Warranties />
      <Force />
      <Dispute />
      <Governing />
      <Notices />
      <Severability />
      <Additional />
      <Amendment />
      <Entire />
      <Acknowledgement />
      <ContactInfo />
    </Border>
  )
}

export default TermsAndConditions