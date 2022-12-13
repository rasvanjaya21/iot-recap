import {Router, useRouter } from "next/router";
import nProgress from "nprogress";
import "@styles/nprogress.css";
import "@styles/globals.css";
import "boxicons/css/boxicons.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }) {

	const router = useRouter();
	AOS.init({once: true,});

	React.useEffect(() => {
		const handleRouteChange = (url) => {
				window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
					page_path: url,
				});
			};
			router.events.on("routeChangeComplete", handleRouteChange);
			return () => {
				router.events.off("routeChangeComplete", handleRouteChange);
			};
	}, [router.events]);

	return <Component {...pageProps} />;
}

export default MyApp;