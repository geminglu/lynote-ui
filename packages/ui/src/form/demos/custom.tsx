import {
  Button,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
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
  return (
    <div className="flex items-center">
      <FormRoot {...form} onSubmit={(data) => console.log(data)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <div>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </div>
          )}
        />
        <Button type="submit">Submit</Button>
      </FormRoot>
    </div>
  );
};

export default App;
