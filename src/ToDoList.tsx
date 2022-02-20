import { useForm } from "react-hook-form";

interface IForm {
  name: string;
  email: string;
  password: string;
  password1: string;
  extraError: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({ defaultValues: { email: "@naver.com" } });
  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError(
        "password1",
        { message: "Password are not the same" },
        { shouldFocus: true }
      );
    }
    setError("extraError", { message: "Server offline." });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onValid)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          {...register("name", {
            required: "Name is required",
            validate: {
              noABC: (value) =>
                value.includes("abc") ? "no abc allowed" : true,
              noNick: (value) =>
                value.includes("nick") ? "no nick allowed" : true,
            },
          })}
          placeholder="Name"
        />
        <span>{errors?.name?.message}</span>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: { value: 5, message: "password is too short." },
          })}
          placeholder="PassWord"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("password1", {
            required: "Password1 is required",
            minLength: { value: 5, message: "password1 is too short." },
          })}
          placeholder="PassWord1"
        />
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
