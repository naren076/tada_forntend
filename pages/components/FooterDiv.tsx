import React from 'react';
import Image from 'next/image';
import { Layout} from 'antd';
import footerJohnSonLogo from '../../public/images/Logo_Signature.jpg'
import footerMedLogo from '../../public/images/Live_Text.jpg'

const { Footer } = Layout;

export const FooterDiv: React.FC = () => {
      
    return (
        <Footer className='flex px-8 items-center' style={{ textAlign: 'left', background: "white" }}>
            <Image 
                src={footerJohnSonLogo}
                alt=""
                className='pr-3 pt-1'
            />
            <Image 
                src={footerMedLogo}
                alt=""
            />
        </Footer>
    )
}