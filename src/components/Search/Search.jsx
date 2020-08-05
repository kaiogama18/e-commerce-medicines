import Rota from "../../Routes/Rota";
import styles from "./Search.module.scss"
import { useEffect, useState, Fragment } from "react"
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Router from 'next/router';
import { TextField, CircularProgress, InputAdornment, Grid, Typography } from "@material-ui/core";

export const Details = (value) => {
  console.log(JSON.stringify(value, null, 2))
  Router.push('/details?id=' + value.id);
};


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
      if (active) {
        setOptions(Object.keys(data).map((key) => data[key]));
      }
    })();

    return () => {
      active = false;
    };

  }, [value, inputValue, loading])



  return (
    <>
      <Autocomplete
        value={value}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        getOptionLabel={((option) => (option.nome))}
        options={options}
        autoComplete
        includeInputInList
        filterSelectedOptions
        loading={loading}
        loadingText={"Carregando..."}
        noOptionsText={"Produto não encontrado"}
        onChange={(event, newValue) => {
          setOptions(newValue ? [newValue, ...options] : options);
          setValue(newValue);
        }}
        inputValue={inputValue}
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
        renderOption={(option) => (
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography variant="body2" color="textSecondary">
                {option.nome}
              </Typography>
            </Grid>
          </Grid>
        )

        }
      />
      {value !== null ? Details(value) : null}
    </>
  );
}

export default Search;

