"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import * as z from "zod";

import { Button } from "../..";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "../../field";
import { Input } from "../../input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../select";

const cityOptions = {
  beijing: [
    { label: "海淀区", value: "haidian" },
    { label: "朝阳区", value: "chaoyang" },
    { label: "西城区", value: "xicheng" },
  ],
  shanghai: [
    { label: "浦东新区", value: "pudong" },
    { label: "徐汇区", value: "xuhui" },
    { label: "黄浦区", value: "huangpu" },
  ],
  guangzhou: [
    { label: "天河区", value: "tianhe" },
    { label: "越秀区", value: "yuexiu" },
    { label: "海珠区", value: "haizhu" },
  ],
} as const;

type Province = keyof typeof cityOptions;

const formSchema = z.object({
  province: z.string().min(1, "请选择省份。"),
  city: z.string().min(1, "请选择城市。"),
  detail: z.string().min(1, "请填写详细地址。"),
});

export default function App() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      province: "",
      city: "",
      detail: "",
    },
  });

  const province = useWatch({ control: form.control, name: "province" });

  useEffect(() => {
    form.setValue("city", "");
  }, [province, form]);

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  const cities = province ? cityOptions[province as Province] : [];

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>地址联动</CardTitle>
        <CardDescription>
          切换省份后，城市选项会随之变化，并自动清除已选择的城市值。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-dependent" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="province"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-dependent-province">
                    省份
                  </FieldLabel>
                  <Select
                    name={field.name}
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      id="form-rhf-dependent-province"
                      aria-invalid={fieldState.invalid}
                    >
                      <SelectValue placeholder="请选择省份" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beijing">北京市</SelectItem>
                      <SelectItem value="shanghai">上海市</SelectItem>
                      <SelectItem value="guangzhou">广州市</SelectItem>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="city"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-dependent-city">
                    城市
                  </FieldLabel>
                  <Select
                    name={field.name}
                    value={field.value}
                    onValueChange={field.onChange}
                    disabled={!province}
                  >
                    <SelectTrigger
                      id="form-rhf-dependent-city"
                      aria-invalid={fieldState.invalid}
                    >
                      <SelectValue
                        placeholder={province ? "请选择城市" : "请先选择省份"}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city.value} value={city.value}>
                          {city.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="detail"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-dependent-detail">
                    详细地址
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-dependent-detail"
                    aria-invalid={fieldState.invalid}
                    placeholder="请输入街道、门牌号"
                  />
                  <FieldDescription>
                    建议详细到门牌号，方便快递员配送。
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            重置
          </Button>
          <Button type="submit" form="form-rhf-dependent">
            保存
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
