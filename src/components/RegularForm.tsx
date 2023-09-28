import { useForm } from "react-hook-form";

function RegularForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ defaultValues: { UserName: "", Email: "", Password: "" } });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <h1>Changed To React Hook Form</h1>
      <div>
        <input
          placeholder="UserName"
          {...register("UserName", {
            required: " UserName is required",
            minLength: { value: 2, message: " min 2 char" },
          })}
        />
        {errors.UserName && <span>{errors.UserName?.message}</span>}
      </div>
      <div>
        <input
          placeholder="Email"
          {...register("Email", {
            required: " Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: " כתובת האימייל אינה חוקית",
            },
          })}
        />
        {errors.Email && <span>{errors.Email?.message}</span>}
      </div>

      <div>
        <input
          placeholder="Password"
          {...register("Password", {
            required: " Password is required",
            pattern: {
              value:
                /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{8,20})/g,
              message: " הקוד לא תקין",
            },
          })}
        />
        {errors.Password && <span>{errors.Password?.message}</span>}
      </div>
      <input hidden={!isValid} type="submit" id="submit" />
    </form>
  );
}

export default RegularForm;
