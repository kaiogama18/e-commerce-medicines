import Rota from "../../Routes/Rota";
import styles from "./Search.module.scss"
import { useEffect, useState, Fragment } from "react"
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Router from 'next/router';
import { TextField, CircularProgress, InputAdornment, Avatar, ListItemText, List, ListItem, ListItemAvatar, Divider } from "@material-ui/core";

export const Details = (value) => {
  // console.log(JSON.stringify(value, null, 2))
  Router.push('/details?name=' + value.nome);
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
          <List className="w-full">
            <ListItem>
              <ListItemAvatar>
                <Avatar alt={option.nome} src="/img/no-photo.svg" className="p-1" />
              </ListItemAvatar>
              <ListItemText primary={option.nome} secondary={"R$" + option.preco} />
            </ListItem>
            <Divider />
          </List>

        )

        }
      />
      {value !== null ? Details(value) : null}
    </>
  );
}

export default Search;

