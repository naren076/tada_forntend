import React from 'react'
import { HeaderMenu } from './HeaderMenu'
import { FooterDiv } from './FooterDiv'
import { Layout} from 'antd';

function DashboardLayout({children}:any) {
  return (
    <div>
      <Layout className="layout">
        <HeaderMenu/>
        {children}
        <FooterDiv/>
      </Layout>
    </div>
  )
}

export default DashboardLayout