import React from "react";
import "./form.css";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/OutlinedInput";
import { FormControlLabel } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";
import theme from "../theme";
import ComponentButton from "../ReusableComponents/ComponentButton";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Form() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  let navigate = useNavigate();

  type Inputs = {
    mail: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data), navigate("/home");
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <p className="headerTitle">
        Se connecter
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 12.375V9.5625C13.5 8.81658 13.7963 8.10121 14.3238 7.57376C14.8512 7.04632 15.5666 6.75 16.3125 6.75H27.5625C28.3084 6.75 29.0238 7.04632 29.5512 7.57376C30.0787 8.10121 30.375 8.81658 30.375 9.5625V26.4375C30.375 27.1834 30.0787 27.8988 29.5512 28.4262C29.0238 28.9537 28.3084 29.25 27.5625 29.25H16.875C15.3218 29.25 13.5 27.9907 13.5 26.4375V23.625"
            stroke="#369C96"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.25 23.625L25.875 18L20.25 12.375M5.625 18H24.75"
            stroke="#369C96"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </p>
      <p className="lightText">
        Entrez vos identifiants pour accéder à votre espace personnel.
      </p>

      <label>Adresse mail</label>
      <FilledInput
        style={{ height: "33px" }}
        id="mail"
        placeholder="adresse@mail.com"
        type="text"
        {...register("mail", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Invalid email address",
          },
        })}
        aria-invalid={errors.mail ? "true" : "false"}
      ></FilledInput>
      {errors.mail && (
        <p style={{ margin: "0px", color: "red" }}>{errors.mail.message}</p>
      )}
      <label>Mot de passe</label>
      <FilledInput
        style={{ height: "33px" }}
        id="password"
        placeholder="******"
        type={showPassword ? "text" : "password"}
        {...register("password")}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      <div className="containerCheckbox">
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Se souvenir de moi"
        />
        <a style={{ color: theme.palette.primary.main }} href="/">
          Mot de passe oublié ?
        </a>
      </div>
      <ComponentButton
        color="primary"
        text="se connecter"
        styles={{ height: "61px", textTransform: "Uppercase" }}
        type="submit"
      />
    </form>
  );
}

export default Form;
