import Head from 'next/head'
import { AppProps } from 'next/app'

import '../static/instagram.css'

export default function App ({
  Component,
  pageProps
}: AppProps) {
  return (
		<>
			<Head>
				<title> Instalura - Projeto Base</title>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
					rel="stylesheet"
				/>
			</Head>
				<Component {...pageProps} />
		</>
  )
}
