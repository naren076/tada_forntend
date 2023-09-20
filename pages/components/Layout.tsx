import React from 'react'
import { HeaderMenu } from './HeaderMenu'
import { FooterDiv } from './FooterDiv'

function Layout({children}:any) {
  return (
    <div>
      <HeaderMenu/>
      {children}
      <FooterDiv/>
    </div>
  )
}

export default Layout