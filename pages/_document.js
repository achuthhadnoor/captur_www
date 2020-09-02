import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="viewport" content="width=device-width" />
                    <meta name="description" content="A simple Screen Capturing tool for windows, Mac ,linux" />
                </Head>
                <body>
                    <Main />
                    <NextScript />

                    <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background:#F3EEE6;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
         overflow-x: hidden;
         scroll-behavior: smooth;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
                </body>
            </Html>
        )
    }
}

export default MyDocument