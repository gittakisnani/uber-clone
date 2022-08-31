import React from 'react'
import DownloadSection from '../components/DownloadSection'
import HelpSafe from '../components/HelpSafe'
import SafetyFocus from '../components/SafetyFocus'
import Services from '../components/Services'
import SignUp from '../components/SignUp'
import UberForBusiness from '../components/UberForBusiness'
import { useLangContext } from '../contexts/SelctedOptions'

const Home = () => {
  const { showLang } = useLangContext()
  return (
    <>
      {!showLang && 
      <>
        <HelpSafe />
        <Services />
        <UberForBusiness />
        <SafetyFocus />
        <DownloadSection />
        <SignUp />
      </>
      }
    </>
  )
}

export default Home