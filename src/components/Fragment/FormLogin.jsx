import Cookies from "js-cookie";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../Element/Button";
import { InputForm } from "../Element/Input";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";

export const FormLogin = () => {
  const navigate = useNavigate();
  const [loginFailed, setLoginFailed] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();

    setIsLoading(true);

    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    login(data, (status, res) => {
      if (status) {
        Cookies.set("token", res, { expires: 1 });
        navigate("/");
      } else {
        setLoginFailed("Login failed. Please check your email and password.");
        setIsLoading(false);
      }
    });
  };

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <motion.form
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="flex flex-col gap-5"
      onSubmit={handleLogin}
    >
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="example@gmail.com"
        ref={emailRef}
        required
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="********"
        required
        minLength="8"
      />
      <Link to="/change-password" className="font-bold text-sm text-[#635BFF]">
        Forgot Password?
      </Link>

      <Button
        classname="bg-[#635BFF] w-full"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Logging in..." : "Login"}
      </Button>
      {loginFailed && (
        <motion.p
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-red-500 text-center text-sm"
        >
          {loginFailed}
        </motion.p>
      )}
    </motion.form>
  );
};
