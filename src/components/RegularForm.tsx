import { useForm } from "react-hook-form";

function RegularForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { userName: "", Email: "", password: "" } });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <h1>Changed To React Hook Form</h1>
      <div>
        <input
          placeholder="userName"
          {...register("userName", {
            required: " userName is required",
            minLength: { value: 2, message: " min 2 char" },
          })}
        />
        {errors.userName && <span>{errors.userName?.message}</span>}
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
          placeholder="password"
          {...register("password", {
            required: " password is required",
            pattern: {
              value:
                /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/g,
              message: " הקוד לא תקין",
            },
          })}
        />
        {errors.password && <span>{errors.password?.message}</span>}
      </div>
      <div>{<input type="submit" id="submit" />}</div>
    </form>
  );
}

export default RegularForm;
