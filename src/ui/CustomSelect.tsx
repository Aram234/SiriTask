import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export function CustomSelect() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      multiple
      options={[
        { id: "a", uuu: "dsaf" },
        { id: "b", uuu: "dsafgweqtr" },
      ]}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
      getOptionLabel={({ uuu }) => uuu}
    />
  );
}
