import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/css/Home.module.css'
import Options from "../../../components/options";
import {Container} from "react-bootstrap";
import Code from "../../../components/code";
import Input from "../../../components/input"
import Output from "../../../components/output"
import { useRouter } from 'next/router'
import handler from "../../api/ide";
import {languages} from "../../../data/languages";
import {useState} from "react";

export default function Home() {
    const router = useRouter()
    const language = router.query["language"]
    return language!==undefined?<HomePage language={language}/>:null}

const HomePage=({language}) =>{
    let data = languages.find((element)=>element.name===language)

    const [code,setCode] = useState(data.code)
    const [input,setInput] = useState(' ')
    const [output,setOutput] = useState(' ')
    const compile=async () => {
        const result = await handler(code, data.compileName, input)
        console.log(result)
        setOutput(result.success?result.output:result.error)
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Online Compiler for {language}</title>
                <meta name="description" content="Code Compiler"/>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <Options language={language} compile={compile}/>
                <div className={styles.grid}>
                    <div className={styles.code + " " + styles.grid_element} id="code">
                        <Code content={code} setContent={setCode}/>
                    </div >
                    <div  className={styles.grid_element}>
                        <Input content={input} setContent={setInput}/>
                    </div >
                    <div  className={styles.grid_element}>
                        <Output content={output}/>
                    </div >
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
                </a>
            </footer>
        </div>
    )
}
