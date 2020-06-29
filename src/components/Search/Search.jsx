import { useEffect } from "react"
import Rota from "../../Routes/Rota";
import { InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import styles from "./Search.module.scss"



function Search() {
  const route = '/produto/consulta';
  useEffect(() => {
    const fetchAPI = async () => {
      const { data } = await Rota({ route, param: { "texto": "dorflex", "tipo": "des", "convenio": false } })
      console.log('[Search] ==> ' + JSON.stringify(data, null, 2));
    }
    fetchAPI();
  }, route)

  return (
    <>
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
    </>
  );
}

export default Search;
