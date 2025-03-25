import Accounts from '@/components/Features/Accounts'
import Advanced_Statistics from '@/components/Features/Advanced_Statistics'
import Bank from '@/components/Features/Bank'
import Cards from '@/components/Features/Cards'
import Faq from '@/components/Features/Faq'
import Hero from '@/components/Features/Hero'
import One_app from '@/components/Features/One_app'
import Saving_Accounts from '@/components/Features/Saving_Accounts'
import Transactions from '@/components/Features/Transactions'
import React from 'react'

export default function Features() {
  return (
    <>
    <Hero/>
    <Transactions/>
    <Cards/>
    <Advanced_Statistics/>
    <Saving_Accounts/>
    <Bank/>
    <Accounts/>
    <One_app/>
    <Faq/>
    </>
  )
}
