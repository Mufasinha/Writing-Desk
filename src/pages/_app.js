import Head from 'next/head';
import Script from 'next/script';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return(
		<>
			<Head>
				<title>Writing Desk - {Component.title}</title>
			</Head>
    		<Component {...pageProps} />
			<Script src='https://kit.fontawesome.com/45da38f057.js' crossorigin='anonymous' />
		</>
	);
}

export default MyApp;