import { Paper } from '@mui/material';
import { AppProps } from 'next/app';
import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { NavBar } from "../components/NavBar";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return (
  <QueryClientProvider client={queryClient}>
    <NavBar/>
    <Component {...pageProps} />
  </QueryClientProvider>
  )
}
