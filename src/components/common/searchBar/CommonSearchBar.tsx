import { useRecoilState } from 'recoil';
import styles from './CommonSearchBar.module.scss'
import { useState } from 'react';
import { searchState } from '@/recoil/atoms/searchState';
import { pageState } from '@/recoil/atoms/pageState';

function CommonSearchBar() {
	const [search, setSearch] = useRecoilState(searchState);
	const [page, setPage] = useRecoilState(pageState);
	const [text, setText] = useState("");
	const onChange = (event) => {
		console.log(event.target.value);
		setText(event.target.value);
	}
	const onSearch = () => {
		if (text === "") {
			// searching default value
			setSearch("Korea");
			setPage(1);
		}
		else {
			// searching input value
			setSearch(text);
			setPage(1);
		}
	}
	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === "Enter") {
			if (text === "") {
				// searching default value
				setSearch("Korea");
			}
			else {
				// searching input value
				setSearch(text)
			}
		}
	}

	return (
	<div className={styles.searchBar}>
		<div className={styles.searchBar__search}>
			<input type="text" placeholder="찾으실 이미지를 검색하세요." className={styles.searchBar__search__input} value={text} onChange={onChange} onKeyDown={handleKeyDown}/>
			<img src="src/assets/icons/icon-search.svg" alt="" onClick={onSearch} />
		</div>
	</div>
  )
}

export default CommonSearchBar