import React from 'react';
import Image from 'next/image';
import { Layout, theme } from 'antd';
import footerJohnSonLogo from '../../public/images/Logo_Signature.jpg'
import footerMedLogo from '../../public/images/Live_Text.jpg'

const { Footer } = Layout;

export const FooterDiv: React.FC = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
      
    return (
        <Layout className="layout">
            <Footer className='flex' style={{ textAlign: 'left', background: "white" }}>
                <Image 
                    src={footerJohnSonLogo}
                    alt=""
                    className='pr-3'
                />
                <Image 
                    src={footerMedLogo}
                    alt=""
                    className='mb-3'
                />
            </Footer>
        </Layout>
    )
}