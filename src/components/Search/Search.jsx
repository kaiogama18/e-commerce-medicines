import Rota from "../../Routes/Rota";
import styles from "./Search.module.scss"
import { useEffect, useState, Fragment } from "react"
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField, CircularProgress, InputAdornment } from "@material-ui/core";



function Search() {
  const route = '/produto/consulta';
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (inputValue === '') {
      setOptions(value ? [value] : []);
      return undefined;
    }

    if (!loading) {
      return undefined;
    }

    (async () => {
      const { data } = await Rota({ route, param: { "texto": inputValue, "tipo": "des", "convenio": false } })
      // console.log('[Search] ==> ' + JSON.stringify(data, null, 2));
      if (active) {
        setOptions(Object.keys(data).map((key) => data[key]));
      }
    })();

    return () => {
      active = false;
    };

  }, [value, inputValue, loading])

  // useEffect(() => {
  //   if (!open) {
  //     setOptions([]);
  //   }
  // }, [open]);

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
      autoComplete
      includeInputInList
      filterSelectedOptions
      value={value}
      loading={loading}
      onChange={(event, newValue) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}

      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          className={styles.search}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon className={styles.searchIcon} />
              </InputAdornment>
            ),
            endAdornment: (
              <Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </Fragment>
            ),
          }}
        />
      )}
    />
  );
}

export default Search;


