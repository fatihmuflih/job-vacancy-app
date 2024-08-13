import { motion } from "framer-motion";
import { Button } from "../Element/Button";
import { InputForm } from "../Element/Input";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { register } from "../../services/auth.service";

export const FormRegister = () => {
  let navigate = useNavigate();
  const [registerFailed, setRegisterFailed] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();

    setIsLoading(true);

    const data = {
      name: event.target.name.value,
      image_url: event.target.image_url.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    register(data, (status) => {
      if (status) {
        setIsLoading(false);
        navigate("/login");
      } else {
        setRegisterFailed(
          "Register failed. Please check your email and password."
        );
        setIsLoading(false);
      }
    });
  };

  const registerRef = useRef(null);
  useEffect(() => {
    registerRef.current.focus();
  }, []);

  return (
    <motion.form
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="flex flex-col gap-2"
      onSubmit={handleRegister}
    >
      <InputForm
        label="Username"
        type="text"
        name="name"
        placeholder="John Doe"
        ref={registerRef}
      />
      <InputForm
        label="Photo"
        type="text"
        name="image_url"
        placeholder="Image Url"
      />
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="example@gmail.com"
        required
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="8+ password"
        minLength="8"
        required
      />

      <Button
        classname="bg-[#635BFF] w-full mt-4"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Register in..." : "Register"}
      </Button>
      {registerFailed && (
        <motion.p
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-red-500 text-center text-sm"
        >
          {registerFailed}
        </motion.p>
      )}
    </motion.form>
  );
};
