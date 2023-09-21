import type { AppProps } from 'next/app'
import DashboardLayout from './components/Layout'
import '../styles/globals.scss'
 
export default function App({ Component, pageProps }: AppProps) {
  return ( <DashboardLayout>
    <Component {...pageProps} />
  </DashboardLayout>)
}