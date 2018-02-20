import Document, { Head, Main, NextScript } from 'next/document';
import theme from '../style/variables';

export default class MyDocument extends Document {
	render() {
		return (
			<html lang="en">
				<Head>
					<title>
						Carla Fonseca
					</title>
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
					/>
					<link
						rel="shortcut icon"
						type="image/png"
						href="/static/images/favicon.png"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>

				<style jsx global>{`
					body {
                        margin: 0;
                        background-color: ${theme.colors.green_bg};
					}
				`}</style>
			</html>
		);
	}
}