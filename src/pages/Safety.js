import React from 'react'
import CovidSafety from '../components/CovidSafety'
import Journeys from '../components/Journeys'
import Partner from '../components/Partner'
import SafetyCommit from '../components/SafetyCommit'
import SafetyExp from '../components/SafetyExp'
import SafetySlides from '../components/SafetySlides'
import Unilever from '../components/Unilever'
import { useLangContext } from '../contexts/SelctedOptions'

const Safety = () => {
  const { useLang } = useLangContext()
  return (
    <>
    {!useLang &&
    <div className='text-[#333333]'>
    <SafetyCommit />
    <CovidSafety />
    <SafetySlides />
    <Unilever />
    <SafetyExp />
    <Journeys />
    <Partner />
    </div>
    }
    </>
  )
}

export default Safety