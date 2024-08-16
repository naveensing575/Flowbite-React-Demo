import { useState, useCallback } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

// Define form values type
interface LoginFormValues {
  email: string;
  password: string;
}

export function Login() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    }),
    onSubmit: (_values, { resetForm }) => {
      setLoader(true);
      setTimeout(() => {
        setLoader(false);
        navigate("/dashboard");
        resetForm();
      }, 1000);
    },
  });

  // Using useCallback to memoize the handleChange function to avoid unnecessary re-renders
  const handleChange = useCallback(formik.handleChange, []);

  return (
    <form
      className="flex w-full max-w-md flex-col gap-4 border-none" // Form container with controlled width
      onSubmit={formik.handleSubmit}
      noValidate
    >
      <div className="mb-2 block">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Welcome back!
        </h2>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="name@company.com"
          required
          {...formik.getFieldProps("email")}
          onChange={handleChange}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="mt-2 text-sm text-red-600">{formik.errors.email}</p>
        )}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput
          id="password1"
          type="password"
          placeholder="••••••••"
          required
          {...formik.getFieldProps("password")}
          onChange={handleChange}
        />
        {formik.touched.password && formik.errors.password && (
          <p className="mt-2 text-sm text-red-600">{formik.errors.password}</p>
        )}
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit" disabled={loader}>
        {loader ? "Loading..." : "Submit"}
      </Button>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Sign up
          </a>
        </p>
      </div>
    </form>
  );
}
