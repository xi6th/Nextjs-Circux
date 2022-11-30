import Header from '../components/headers'
import Footer from '../components/footer'
import Head from 'next/head'

export default function format({children}) {
    return (
        <>
            <Head>
                <title>Circux</title>
            </Head>

            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    )
}