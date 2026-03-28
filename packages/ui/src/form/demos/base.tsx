import {
  Button,
  Checkbox,
  FormItem,
  FormRoot,
  Input,
  useForm,
} from "../../../index";
// import * as z from "zod";

const App: React.FC = () => {
  const form = useForm({
    values: {
      username: "",
      password: "",
      memory: false,
    },
    // resolver: z.object({
    //   username: z.string().min(1),
    // }),
  });

  const password = form.watch("password");

  return (
    <div className="flex items-center">
      <FormRoot {...form} onSubmit={(data) => console.log(data)}>
        <FormItem
          name="username"
          label="用户名"
          rules={{
            required: {
              value: true,
              message: "用户名不能为空",
            },
          }}
          render={({ field }) => {
            console.log("field", field);

            return <Input placeholder="Username" {...field} />;
          }}
        />
        <FormItem
          name="password"
          label="密码"
          rules={{
            required: {
              value: true,
              message: "密码不能为空",
            },
          }}
        >
          <Input
            placeholder="password"
            value={password}
            onChange={(v) => {
              form.setValue("password", v.target.value);
            }}
          />
        </FormItem>

        <FormItem
          name="memory"
          render={({ field }) => {
            return (
              <Checkbox
                {...field}
                checked={field.value}
                onClick={() => {
                  field.onChange(!field.value);
                }}
              >
                保存密码
              </Checkbox>
            );
          }}
        />

        <Button type="submit">Submit</Button>
      </FormRoot>
    </div>
  );
};

export default App;
