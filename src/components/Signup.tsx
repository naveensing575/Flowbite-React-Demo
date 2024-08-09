import React, { useState } from "react";

function Signup() {
  const [formStatus, setFormStatus] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    website: "",
    visitors: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    website: "",
    visitors: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormStatus((prevState) => ({ ...prevState, [id]: value }));

    // Basic validation example
    if (!value) {
      setErrors((prevState) => ({
        ...prevState,
        [id]: `${id} is required`,
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        [id]: "",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Example submission logic
    let hasErrors = false;
    Object.keys(formStatus).forEach((key) => {
      if (!formStatus[key as keyof typeof formStatus]) {
        hasErrors = true;
        setErrors((prevState) => ({
          ...prevState,
          [key]: `${key} is required`,
        }));
      }
    });

    if (!hasErrors) {
      alert("Form submitted successfully!");
      // Handle form submission (e.g., send data to server)
    }
  };

  return (
    <div>
      <h1 className="mb-8 text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-5xl">
        SignUp Form
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="border-white-400 mb-6 grid gap-6 md:grid-cols-3">
          <div>
            <label
              htmlFor="first_name"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              value={formStatus.firstName}
              onChange={handleChange}
              className={`block w-full rounded-lg p-2.5 text-sm 
                ${
                  errors.firstName
                    ? "border border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-300 bg-gray-50 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                }
                dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500`}
              placeholder="John"
              required
            />
            {errors.firstName && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Oh, snap!</span>{" "}
                {errors.firstName}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              value={formStatus.lastName}
              onChange={handleChange}
              className={`block w-full rounded-lg p-2.5 text-sm 
                ${
                  errors.lastName
                    ? "border border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-300 bg-gray-50 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                }
                dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500`}
              placeholder="Doe"
              required
            />
            {errors.lastName && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Oh, snap!</span> {errors.lastName}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="company"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              value={formStatus.company}
              onChange={handleChange}
              className={`block w-full rounded-lg p-2.5 text-sm 
                ${
                  errors.company
                    ? "border border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-300 bg-gray-50 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                }
                dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500`}
              placeholder="Flowbite"
              required
            />
            {errors.company && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Oh, snap!</span> {errors.company}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              value={formStatus.phone}
              onChange={handleChange}
              className={`block w-full rounded-lg p-2.5 text-sm 
                ${
                  errors.phone
                    ? "border border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-300 bg-gray-50 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                }
                dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500`}
              placeholder="123-45-678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
            {errors.phone && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Oh, snap!</span> {errors.phone}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="website"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Website URL
            </label>
            <input
              type="url"
              id="website"
              value={formStatus.website}
              onChange={handleChange}
              className={`block w-full rounded-lg p-2.5 text-sm 
                ${
                  errors.website
                    ? "border border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-300 bg-gray-50 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                }
                dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500`}
              placeholder="flowbite.com"
              required
            />
            {errors.website && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Oh, snap!</span> {errors.website}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="visitors"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Unique visitors (per month)
            </label>
            <input
              type="number"
              id="visitors"
              value={formStatus.visitors}
              onChange={handleChange}
              className={`block w-full rounded-lg p-2.5 text-sm 
                ${
                  errors.visitors
                    ? "border border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-300 bg-gray-50 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                }
                dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500`}
              placeholder=""
              required
            />
            {errors.visitors && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Oh, snap!</span> {errors.visitors}
              </p>
            )}
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            value={formStatus.email}
            onChange={handleChange}
            className={`block w-full rounded-lg p-2.5 text-sm 
                ${
                  errors.email
                    ? "border border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-300 bg-gray-50 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                }
                dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500`}
            placeholder="johndoe@company.com"
            required
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oh, snap!</span> {errors.email}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={formStatus.password}
            onChange={handleChange}
            className={`block w-full rounded-lg p-2.5 text-sm 
                ${
                  errors.password
                    ? "border border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-300 bg-gray-50 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                }
                dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500`}
            placeholder="•••••••"
            required
          />
          {errors.password && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oh, snap!</span> {errors.password}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirm_password"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm password
          </label>
          <input
            type="password"
            id="confirm_password"
            value={formStatus.confirmPassword}
            onChange={handleChange}
            className={`block w-full rounded-lg p-2.5 text-sm 
                ${
                  errors.confirmPassword
                    ? "border border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-300 bg-gray-50 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                }
                dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500`}
            placeholder="•••••••"
            required
          />
          {errors.confirmPassword && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oh, snap!</span>{" "}
              {errors.confirmPassword}
            </p>
          )}
        </div>
        <div className="mb-6 flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="terms"
              type="checkbox"
              value=""
              className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              required
            />
          </div>
          <label
            htmlFor="terms"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-primary-600 dark:text-primary-500 hover:underline"
            >
              terms and conditions
            </a>
            .
          </label>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
