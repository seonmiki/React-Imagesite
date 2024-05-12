import CommonHeader from '@/components/common/header/CommonHeader'
import Card from './components/Card'
import styles from './styles/index.module.scss'
import { useState, useEffect } from 'react'
import { CardDTO } from '../index/types/card';

function index() {
    const [data, setData] = useState([]);
    const getData = () => {
        const getLocalStorage = JSON.parse(localStorage.getItem("bookmark"));

        if (getLocalStorage || getLocalStorage !== null) {
            setData(getLocalStorage);
        }
        else {
            setData([]);
        }
    }
    useEffect(() => {
        getData()
    }, []);

    return (
    <div className={styles.page}>
        <CommonHeader />
    <main className={styles.page__contents}>
        {data.map((item: CardDTO) => {
            return (
                <Card prop={item} key={item.id}/>
            )
        })}
    </main>
    </div>
    )
}

export default index