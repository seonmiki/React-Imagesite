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
        {/* 만약 북마크가 비어있을 경우 */}
        {data.length === 0 
        ? (<div className={styles.page__contents__noData}>조회 가능한 데이터가 없습니다. 🥺</div>) 
        : (data.map((item: CardDTO) => {
                return <Card prop={item} key={item.id}/>
            }))}
    </main>
    </div>
    )
}

export default index