import Rota from "../../Routes/Rota";
import styles from "./Search.module.scss"
import { useEffect, useState, Fragment } from "react"
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField, CircularProgress } from "@material-ui/core";



function Search() {
  const route = '/produto/consulta';
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      console.log('[useEffect Search] ==> undefined!');
      return undefined;
    }

    (async () => {
      const { data } = await Rota({ route, param: { "texto": "dorflex", "tipo": "des", "convenio": false } })
      console.log('[Search] ==> ' + JSON.stringify(data, null, 2));
      if (active) {
        setOptions(Object.keys(data).map((key) => data[key]));
      }
    })();

    return () => {
      active = false;
    };

  }, [loading])

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);



  return (
    <Autocomplete
      className={styles.containerSearch}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.nome === value.nome}
      getOptionLabel={(option) => option.nome}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <>
          {/* <div className={styles.search}> */}
          {/* <div className="mr-2">
              <SearchIcon className={styles.searchIcon} />
            </div> */}

          <TextField
            {...params}
            variant="outlined"
            className={styles.search}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <Fragment>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </Fragment>
              ),
            }}
          />
          {/* </div> */}
        </>
      )}
    />
  );
}

export default Search;


