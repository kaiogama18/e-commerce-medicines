import { useEffect, useState } from "react"
import Rota from "../../Routes/Rota";
import { InputBase, ListItem, ListItemText } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import styles from "./Search.module.scss"
import { FixedSizeList } from 'react-window';


function Search() {
  const route = '/produto/consulta';
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchAPI = async () => {
      const { data } = await Rota({ route, param: { "texto": "dorflex", "tipo": "des", "convenio": false } })
      console.log('[Search] ==> ' + JSON.stringify(data, null, 2));
    }
    fetchAPI();
  }, route)

  function updateSearch(event) {
    setSearch();
  }

  return (
    <div className={styles.containerSearch}>
      <div className={styles.search}>
        <div className="mr-2">
          <SearchIcon className={styles.searchIcon} />
        </div>
        <InputBase
          placeholder="O que você procura? "
          classes={{
            root: styles.inputRoot,
            input: styles.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>

      {/* <div className={styles.list}>
        <FixedSizeList height={400} width={300} itemSize={46} itemCount={200}>
          {renderRow}
        </FixedSizeList>
      </div> */}
    </div>
  );
}

export default Search;


function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={`Item ${index + 1}`} />
    </ListItem>
  );
}
