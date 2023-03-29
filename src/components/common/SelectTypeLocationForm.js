import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function SelectLocationForm({
  selectedCity,
  setSelectedCity,
  selectedCounties,
  setSelectedCounties,
  cities,
  type,
  setType,
}) {
  const cityHandle = (option) => {
    setSelectedCounties();
    if (option.id === 0) {
      setSelectedCounties();
    } else {
      setSelectedCity(cities.find((ctiy) => ctiy.id === option.id));
    }
    return option.name;
  };

  const countiesHandle = (option) => {
    setSelectedCounties(
      selectedCity.cities.find((counties) => counties.id === option.id)
    );
    return option.name;
  };

  const navigate = useNavigate();

  const searchHandle = (e) => {
    e.preventDefault();
    selectedCity && type !== 0
      ? navigate(
          `/pitches/${selectedCity.id}/${
            selectedCounties ? selectedCounties.id : 0
          }/${type}`
        )
      :selectedCity ? alert("il seç") : alert("saha tipi seç");
  };

  const typeHandle = (e) => {
    setType(e.target.value);
  };
  return (
    <Box display="flex" justifyContent={"center"}>
      <FormControl color="info" sx={{ width: 300, marginRight: "20px" }}>
        <InputLabel>Saha Tipi</InputLabel>
        <Select value={type} label="Saha Türü" onChange={typeHandle}>
          <MenuItem value={"halı"}>Halı Sahası</MenuItem>
          <MenuItem value={"basketbol"}>Basketbol Sahası</MenuItem>
          <MenuItem value={"voleybol"}>Voleybol Sahası</MenuItem>
          <MenuItem value={"tenis"}>Tenis Kortu</MenuItem>
        </Select>
      </FormControl>
      <Autocomplete
        sx={{ width: 300, marginRight: "20px" }}
        disablePortal
        options={cities}
        getOptionLabel={cityHandle}
        renderInput={(params) => (
          <TextField color="info" {...params} label="il" />
        )}
      />

      <Autocomplete
        sx={{ width: 300, marginRight: "20px" }}
        disabled={!selectedCity}
        disablePortal
        options={
          selectedCity
            ? [{ id: 0, name: "Tüm ilçeler" }, ...selectedCity?.cities]
            : []
        }
        getOptionLabel={countiesHandle}
        renderInput={(params) => (
          <TextField color="info" {...params} label="ilçe" />
        )}
      />
      <Button variant="outlined" color="info" onClick={searchHandle}>
        ara
      </Button>
    </Box>
  );
}
