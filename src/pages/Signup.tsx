import { useState, useCallback } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import * as Yup from "yup";
import { useFormik, FormikProps } from "formik";
import { Link, useNavigate } from "react-router-dom";

// Define the form values type
interface SignupFormValues {
  firstName: string;
  lastName: string;
  company: string;
  phone: string;
  website: string;
  visitors: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Error Message Component Props
interface ErrorMessageProps {
  message: string | undefined;
}

// Reusable Error Message Component
function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <p
      className={`mt-2 min-h-[1.5rem] text-sm text-red-600 transition-opacity duration-300 dark:text-red-500 ${
        message ? "opacity-100" : "opacity-0"
      }`}
    >
      {message ? (
        <span>
          <span className="font-medium">Oh, snap!</span> {message}
        </span>
      ) : (
        "\u00A0" // Non-breaking space to maintain height
      )}
    </p>
  );
}

// Form Field Component Props
interface FormFieldProps {
  id: keyof SignupFormValues;
  label: string;
  type?: string;
  placeholder: string;
  formik: FormikProps<SignupFormValues>;
}

// Reusable Form Field Component
function FormField({
  id,
  label,
  type = "text",
  placeholder,
  formik,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        {...formik.getFieldProps(id)}
        className={`block w-full rounded-lg p-2.5 text-sm ${
          formik.touched[id] && formik.errors[id]
            ? "border border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500"
            : "border-gray-300 bg-gray-50 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        } dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500`}
        placeholder={placeholder}
      />
      <ErrorMessage
        message={
          formik.touched[id] && formik.errors[id] ? formik.errors[id] : ""
        }
      />
    </div>
  );
}

function Signup() {
  const navigate = useNavigate(); // Hook for navigation
  const [loader, setLoader] = useState(false);

  const formik = useFormik<SignupFormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      company: "",
      phone: "",
      website: "",
      visitors: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      company: Yup.string().required("Company is required"),
      phone: Yup.string()
        .matches(/^[0-9]{3}-[0-9]{2}-[0-9]{3}$/, "Phone number is not valid")
        .required("Phone number is required"),
      website: Yup.string()
        .url("Invalid website URL")
        .required("Website URL is required"),
      visitors: Yup.number()
        .positive("Visitors must be a positive number")
        .required("Unique visitors are required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm password is required"),
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

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h2 className="mb-8 text-center text-4xl font-extrabold dark:text-white">
          SignUp Form
        </h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid gap-6 md:grid-cols-2">
            <FormField
              id="firstName"
              label="First name"
              placeholder="John"
              formik={formik}
            />
            <FormField
              id="lastName"
              label="Last name"
              placeholder="Doe"
              formik={formik}
            />
            <FormField
              id="company"
              label="Company"
              placeholder="iTelaSoft"
              formik={formik}
            />
            <FormField
              id="phone"
              label="Phone number"
              type="tel"
              placeholder="123-45-678"
              formik={formik}
            />
            <FormField
              id="website"
              label="Website URL"
              type="url"
              placeholder="iTelaSoft.com"
              formik={formik}
            />
            <FormField
              id="visitors"
              label="Unique visitors (per month)"
              type="number"
              placeholder="123456"
              formik={formik}
            />
            <FormField
              id="email"
              label="Email address"
              type="email"
              placeholder="john.doe@company.com"
              formik={formik}
            />
            <FormField
              id="password"
              label="Password"
              type="password"
              placeholder="•••••••••"
              formik={formik}
            />
            <FormField
              id="confirmPassword"
              label="Confirm password"
              type="password"
              placeholder="•••••••••"
              formik={formik}
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            disabled={loader} // Disable button when loading
          >
            {loader ? (
              <span className="flex items-center justify-center">
                <svg
                  className="h-5 w-5 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" stroke="currentColor" />
                  <path d="M4 12a8 8 0 0 1 16 0 8 8 0 0 1-16 0" />
                </svg>
                <span className="ml-2">Loading...</span>
              </span>
            ) : (
              "Register"
            )}
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
