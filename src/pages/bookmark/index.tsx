import CommonHeader from '@/components/common/header/CommonHeader'
import Card from './components/Card'
import styles from './styles/index.module.scss'
import { useState, useEffect } from 'react'

function index() {
    const [data, setData] = useState([]);
    const getData = () => {

    }
    useEffect(() => {
        getData()
    }, []);

    return (
    <div className={styles.page}>
        <CommonHeader />
    <main className={styles.page__contents}>
        <Card />
    </main>
    </div>
    )
}

export default index