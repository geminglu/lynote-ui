"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { ChevronDownIcon, XIcon } from "lucide-react";
import { useEffect } from "react";
import { Controller, useFieldArray, useForm, useWatch } from "react-hook-form";
import * as z from "zod";

import { Button } from "../..";
import { Calendar } from "../../calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../card";
import { Checkbox } from "../../checkbox";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "../../combobox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "../../field";
import { Input } from "../../input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../../input-group";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../../input-otp";
import { Popover, PopoverContent, PopoverTrigger } from "../../popover";
import { RadioGroup, RadioGroupItem } from "../../radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../select";
import { Slider } from "../../slider";
import { Switch } from "../../switch";
import { Textarea } from "../../textarea";

const departments = [
  { label: "技术部", value: "tech" },
  { label: "产品部", value: "product" },
  { label: "设计部", value: "design" },
  { label: "市场部", value: "marketing" },
  { label: "运营部", value: "operations" },
] as const;

const teamMembers = [
  { id: "zhangsan", name: "张三", role: "前端工程师" },
  { id: "lisi", name: "李四", role: "后端工程师" },
  { id: "wangwu", name: "王五", role: "产品经理" },
  { id: "zhaoliu", name: "赵六", role: "UI 设计师" },
  { id: "sunqi", name: "孙七", role: "测试工程师" },
] as const;

const techStacks = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "nextjs", label: "Next.js" },
  { value: "nuxt", label: "Nuxt" },
  { value: "solid", label: "SolidJS" },
  { value: "astro", label: "Astro" },
];

const milestoneTemplates: Record<string, string[]> = {
  agile: ["Sprint 1", "Sprint 2", "Sprint 3", "发布上线"],
  waterfall: ["需求分析", "设计", "开发", "测试", "上线"],
  general: ["规划阶段", "执行阶段", "验收阶段"],
};

const formSchema = z
  .object({
    // 基本信息
    name: z
      .string()
      .min(1, "请输入项目名称。")
      .min(3, "项目名称至少需要 3 个字符。")
      .max(50, "项目名称不能超过 50 个字符。"),
    description: z
      .string()
      .min(10, "项目描述至少需要 10 个字符。")
      .max(500, "项目描述不能超过 500 个字符。"),
    department: z.string().min(1, "请选择所属部门。"),

    // 项目类型与优先级
    type: z.enum(["agile", "waterfall", "general"], {
      error: "请选择项目类型。",
    }),
    priority: z.enum(["low", "medium", "high", "urgent"], {
      error: "请选择项目优先级。",
    }),

    // 技术栈（Combobox）
    techStack: z
      .object({
        value: z.string(),
        label: z.string(),
      })
      .nullable()
      .refine((val) => val !== null, {
        message: "请选择技术栈。",
      }),

    // 项目截止日期（DatePicker）
    deadline: z.date({ error: "请选择项目截止日期。" }).min(
      (() => {
        const d = new Date();
        d.setDate(d.getDate() + 1);
        d.setHours(0, 0, 0, 0);
        return d;
      })(),
      "截止日期不能早于明天。",
    ),

    // 团队规模 / 预算（Slider）
    budget: z
      .number()
      .min(5, "预算不能低于 5 万元。")
      .max(200, "预算不能超过 200 万元。"),

    // 项目邀请码（InputOTP）
    inviteCode: z
      .string()
      .length(6, "邀请码必须为 6 位字符。")
      .regex(/^[A-Z0-9]+$/, "邀请码只能包含大写字母和数字。"),

    // 团队成员
    members: z
      .array(z.string())
      .min(1, "请至少选择一名团队成员。")
      .max(5, "团队成员不能超过 5 人。"),

    // 里程碑（动态数组）
    milestones: z
      .array(
        z.object({
          title: z.string().min(1, "请输入里程碑名称。"),
        }),
      )
      .min(1, "请至少添加一个里程碑。")
      .max(8, "最多可以添加 8 个里程碑。"),

    // 联系方式
    contactEmail: z
      .string()
      .min(1, "请输入联系邮箱。")
      .email("请输入有效的邮箱地址。"),

    // 通知设置
    emailNotifications: z.boolean(),
    weeklyReport: z.boolean(),

    // 协议
    agreeToTerms: z.boolean().refine((val) => val === true, {
      message: "请阅读并同意项目规范。",
    }),
  })
  .refine(
    (data) => {
      if (data.emailNotifications && !data.contactEmail) {
        return false;
      }
      return true;
    },
    {
      message: "开启邮件通知需要填写联系邮箱。",
      path: ["contactEmail"],
    },
  );

type FormValues = z.infer<typeof formSchema>;

export default function App() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      department: "",
      type: "agile",
      priority: "medium",
      techStack: null,
      deadline: undefined,
      budget: 50,
      inviteCode: "",
      members: [],
      milestones: [{ title: "" }, { title: "" }],
      contactEmail: "",
      emailNotifications: true,
      weeklyReport: false,
      agreeToTerms: false,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "milestones",
  });

  const projectType = useWatch({ control: form.control, name: "type" });
  const emailNotifications = useWatch({
    control: form.control,
    name: "emailNotifications",
  });

  useEffect(() => {
    if (projectType && milestoneTemplates[projectType]) {
      const template = milestoneTemplates[projectType];
      form.setValue(
        "milestones",
        template.map((t) => ({ title: t })),
      );
    }
  }, [projectType, form]);

  function onSubmit(data: FormValues) {
    console.log("项目提交数据：", data);
  }

  return (
    <Card className="w-full sm:max-w-lg">
      <CardHeader className="border-b">
        <CardTitle>创建新项目</CardTitle>
        <CardDescription>
          填写以下信息来创建一个新项目。带 * 的字段为必填项。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-project" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            {/* ====== 基本信息 ====== */}
            <FieldSet>
              <FieldLegend variant="label">基本信息</FieldLegend>
              <FieldDescription>
                填写项目的名称、描述和所属部门。
              </FieldDescription>
              <FieldGroup>
                <Controller
                  name="name"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-rhf-project-name">
                        项目名称 *
                      </FieldLabel>
                      <Input
                        {...field}
                        id="form-rhf-project-name"
                        aria-invalid={fieldState.invalid}
                        placeholder="例如：客户管理系统 v2"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="description"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-rhf-project-description">
                        项目描述 *
                      </FieldLabel>
                      <Textarea
                        {...field}
                        id="form-rhf-project-description"
                        aria-invalid={fieldState.invalid}
                        placeholder="请简要描述项目目标和范围..."
                        className="min-h-[100px]"
                      />
                      <FieldDescription>
                        建议包含项目目标、预期产出和关键时间节点。
                      </FieldDescription>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="department"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-rhf-project-department">
                        所属部门 *
                      </FieldLabel>
                      <Select
                        name={field.name}
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger
                          id="form-rhf-project-department"
                          aria-invalid={fieldState.invalid}
                        >
                          <SelectValue placeholder="请选择部门" />
                        </SelectTrigger>
                        <SelectContent>
                          {departments.map((dept) => (
                            <SelectItem key={dept.value} value={dept.value}>
                              {dept.label}
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
              </FieldGroup>
            </FieldSet>

            <FieldSeparator />

            {/* ====== 项目类型与优先级 ====== */}
            <FieldSet>
              <FieldLegend variant="label">项目配置</FieldLegend>
              <FieldDescription>
                选择项目管理方式和优先级。切换项目类型会自动更新里程碑模板。
              </FieldDescription>
              <FieldGroup>
                <Controller
                  name="type"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <FieldSet data-invalid={fieldState.invalid}>
                      <FieldLegend variant="label">项目类型 *</FieldLegend>
                      <RadioGroup
                        name={field.name}
                        value={field.value}
                        onValueChange={field.onChange}
                        aria-invalid={fieldState.invalid}
                      >
                        <FieldLabel htmlFor="form-rhf-project-type-agile">
                          <Field orientation="horizontal">
                            <FieldContent>
                              <FieldTitle>敏捷开发</FieldTitle>
                              <FieldDescription>
                                迭代式开发，适合需求不确定的项目
                              </FieldDescription>
                            </FieldContent>
                            <RadioGroupItem
                              value="agile"
                              id="form-rhf-project-type-agile"
                            />
                          </Field>
                        </FieldLabel>
                        <FieldLabel htmlFor="form-rhf-project-type-waterfall">
                          <Field orientation="horizontal">
                            <FieldContent>
                              <FieldTitle>瀑布流</FieldTitle>
                              <FieldDescription>
                                线性推进，适合需求明确的项目
                              </FieldDescription>
                            </FieldContent>
                            <RadioGroupItem
                              value="waterfall"
                              id="form-rhf-project-type-waterfall"
                            />
                          </Field>
                        </FieldLabel>
                        <FieldLabel htmlFor="form-rhf-project-type-general">
                          <Field orientation="horizontal">
                            <FieldContent>
                              <FieldTitle>通用模式</FieldTitle>
                              <FieldDescription>
                                灵活的阶段划分，适合日常项目
                              </FieldDescription>
                            </FieldContent>
                            <RadioGroupItem
                              value="general"
                              id="form-rhf-project-type-general"
                            />
                          </Field>
                        </FieldLabel>
                      </RadioGroup>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </FieldSet>
                  )}
                />
                <Controller
                  name="priority"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <FieldSet data-invalid={fieldState.invalid}>
                      <FieldLegend variant="label">优先级 *</FieldLegend>
                      <FieldDescription>
                        设置项目的紧急程度，将影响资源分配。
                      </FieldDescription>
                      <RadioGroup
                        name={field.name}
                        value={field.value}
                        onValueChange={field.onChange}
                        aria-invalid={fieldState.invalid}
                      >
                        {(
                          [
                            {
                              value: "low",
                              label: "低",
                              desc: "无时间压力，可灵活安排",
                            },
                            {
                              value: "medium",
                              label: "中",
                              desc: "按正常节奏推进",
                            },
                            {
                              value: "high",
                              label: "高",
                              desc: "需要优先处理",
                            },
                            {
                              value: "urgent",
                              label: "紧急",
                              desc: "立即处理，最高优先级",
                            },
                          ] as const
                        ).map((option) => (
                          <div
                            key={option.value}
                            className="has-[>[data-slot=field]]:rounded-lg has-[>[data-slot=field]]:border *:data-[slot=field]:p-2.5"
                          >
                            <FieldLabel
                              htmlFor={`form-rhf-project-priority-${option.value}`}
                            >
                              <Field orientation="horizontal">
                                <FieldContent>
                                  <FieldTitle>{option.label}</FieldTitle>
                                  <FieldDescription>
                                    {option.desc}
                                  </FieldDescription>
                                </FieldContent>
                                <RadioGroupItem
                                  value={option.value}
                                  id={`form-rhf-project-priority-${option.value}`}
                                />
                              </Field>
                            </FieldLabel>
                          </div>
                        ))}
                      </RadioGroup>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </FieldSet>
                  )}
                />

                {/* ====== 技术栈选择（Combobox） ====== */}
                <Controller
                  name="techStack"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-rhf-project-tech-stack">
                        技术栈 *
                      </FieldLabel>
                      <Combobox<(typeof techStacks)[number]>
                        items={techStacks}
                        value={field.value ?? undefined}
                        onValueChange={(value) => {
                          field.onChange(value ?? null);
                        }}
                        itemToStringLabel={(item) => item.label}
                      >
                        <ComboboxInput
                          id="form-rhf-project-tech-stack"
                          placeholder="搜索并选择技术栈..."
                        />
                        <ComboboxContent>
                          <ComboboxEmpty>未找到匹配的技术栈</ComboboxEmpty>
                          <ComboboxList>
                            {(item) => (
                              <ComboboxItem key={item.value} value={item}>
                                {item.label}
                              </ComboboxItem>
                            )}
                          </ComboboxList>
                        </ComboboxContent>
                      </Combobox>
                      <FieldDescription>
                        支持搜索筛选，选择项目主要使用的技术框架。
                      </FieldDescription>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>
            </FieldSet>

            <FieldSeparator />

            {/* ====== 日程与预算 ====== */}
            <FieldSet>
              <FieldLegend variant="label">日程与预算</FieldLegend>
              <FieldDescription>设定项目截止日期和预算范围。</FieldDescription>
              <FieldGroup>
                {/* ====== 截止日期（DatePicker） ====== */}
                <Controller
                  name="deadline"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-rhf-project-deadline">
                        截止日期 *
                      </FieldLabel>
                      <Popover>
                        <PopoverTrigger
                          render={
                            <Button
                              id="form-rhf-project-deadline"
                              variant="outline"
                              data-empty={!field.value}
                              className="data-[empty=true]:text-muted-foreground w-full justify-between text-left font-normal"
                              aria-invalid={fieldState.invalid}
                            >
                              {field.value
                                ? format(field.value, "yyyy-MM-dd")
                                : "请选择截止日期"}
                              <ChevronDownIcon data-icon="inline-end" />
                            </Button>
                          }
                        />
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            defaultMonth={field.value}
                            onSelect={(date) => {
                              field.onChange(date);
                              field.onBlur();
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                      <FieldDescription>
                        截止日期不能早于明天。
                      </FieldDescription>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                {/* ====== 项目预算（Slider） ====== */}
                <Controller
                  name="budget"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-medium">项目预算 *</span>
                        <span className="text-muted-foreground text-sm">
                          {field.value} 万元
                        </span>
                      </div>
                      <Slider
                        value={[field.value]}
                        onValueChange={(value) => {
                          field.onChange(value[0]);
                        }}
                        min={5}
                        max={200}
                        step={5}
                        aria-invalid={fieldState.invalid}
                      />
                      <div className="text-muted-foreground flex justify-between text-xs">
                        <span>5 万</span>
                        <span>200 万</span>
                      </div>
                      <FieldDescription>
                        拖动滑块设置项目总预算，范围 5-200 万元。
                      </FieldDescription>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>
            </FieldSet>

            <FieldSeparator />

            {/* ====== 项目邀请码（InputOTP） ====== */}
            <Controller
              name="inviteCode"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-project-invite-code">
                    项目邀请码 *
                  </FieldLabel>
                  <InputOTP
                    id="form-rhf-project-invite-code"
                    maxLength={6}
                    value={field.value}
                    onChange={(value) => {
                      field.onChange(value);
                      field.onBlur();
                    }}
                    aria-invalid={fieldState.invalid}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                  <FieldDescription>
                    输入 6 位大写字母或数字组成的邀请码，用于团队成员加入项目。
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <FieldSeparator />

            {/* ====== 团队成员 ====== */}
            <Controller
              name="members"
              control={form.control}
              render={({ field, fieldState }) => (
                <FieldSet data-invalid={fieldState.invalid}>
                  <FieldLegend variant="label">团队成员 *</FieldLegend>
                  <FieldDescription>
                    选择参与项目的团队成员（1-5 人）。
                  </FieldDescription>
                  <FieldGroup data-slot="checkbox-group">
                    {teamMembers.map((member) => (
                      <Field
                        key={member.id}
                        orientation="horizontal"
                        data-invalid={fieldState.invalid}
                      >
                        <Checkbox
                          id={`form-rhf-project-member-${member.id}`}
                          name={field.name}
                          aria-invalid={fieldState.invalid}
                          checked={field.value.includes(member.id)}
                          onCheckedChange={(checked) => {
                            const newValue = checked
                              ? [...field.value, member.id]
                              : field.value.filter((v) => v !== member.id);
                            field.onChange(newValue);
                            field.onBlur();
                          }}
                        />
                        <FieldContent>
                          <FieldLabel
                            htmlFor={`form-rhf-project-member-${member.id}`}
                          >
                            {member.name}
                          </FieldLabel>
                          <FieldDescription>{member.role}</FieldDescription>
                        </FieldContent>
                      </Field>
                    ))}
                  </FieldGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </FieldSet>
              )}
            />

            <FieldSeparator />

            {/* ====== 里程碑（动态数组） ====== */}
            <FieldSet>
              <FieldLegend variant="label">项目里程碑</FieldLegend>
              <FieldDescription>
                定义项目的关键里程碑。切换项目类型会自动更新模板，您也可以手动编辑。
              </FieldDescription>
              <FieldGroup className="gap-4">
                {fields.map((field, index) => (
                  <Controller
                    key={field.id}
                    name={`milestones.${index}.title`}
                    control={form.control}
                    render={({ field: controllerField, fieldState }) => (
                      <Field
                        orientation="horizontal"
                        data-invalid={fieldState.invalid}
                      >
                        <FieldContent>
                          <InputGroup>
                            <InputGroupInput
                              {...controllerField}
                              id={`form-rhf-project-milestone-${index}`}
                              aria-invalid={fieldState.invalid}
                              placeholder={`里程碑 ${index + 1}`}
                            />
                            {fields.length > 1 && (
                              <InputGroupAddon align="inline-end">
                                <InputGroupButton
                                  type="button"
                                  variant="ghost"
                                  size="xs"
                                  icon
                                  onClick={() => remove(index)}
                                  aria-label={`删除里程碑 ${index + 1}`}
                                >
                                  <XIcon />
                                </InputGroupButton>
                              </InputGroupAddon>
                            )}
                          </InputGroup>
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </FieldContent>
                      </Field>
                    )}
                  />
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => append({ title: "" })}
                  disabled={fields.length >= 8}
                >
                  添加里程碑
                </Button>
                {form.formState.errors.milestones?.root && (
                  <FieldError
                    errors={[form.formState.errors.milestones.root]}
                  />
                )}
              </FieldGroup>
            </FieldSet>

            <FieldSeparator />

            {/* ====== 联系方式与通知 ====== */}
            <FieldSet>
              <FieldLegend variant="label">联系方式与通知</FieldLegend>
              <FieldDescription>设置项目联系邮箱和通知偏好。</FieldDescription>
              <FieldGroup>
                <Controller
                  name="contactEmail"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-rhf-project-email">
                        联系邮箱 *
                      </FieldLabel>
                      <Input
                        {...field}
                        id="form-rhf-project-email"
                        type="email"
                        aria-invalid={fieldState.invalid}
                        placeholder="project@example.com"
                        autoComplete="email"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <FieldSeparator />
                <Controller
                  name="emailNotifications"
                  control={form.control}
                  render={({ field }) => (
                    <Field orientation="horizontal">
                      <FieldContent>
                        <FieldLabel htmlFor="form-rhf-project-email-notif">
                          邮件通知
                        </FieldLabel>
                        <FieldDescription>
                          接收项目状态变更、里程碑完成等重要通知。
                        </FieldDescription>
                      </FieldContent>
                      <Switch
                        id="form-rhf-project-email-notif"
                        name={field.name}
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </Field>
                  )}
                />
                {emailNotifications && (
                  <Controller
                    name="weeklyReport"
                    control={form.control}
                    render={({ field }) => (
                      <Field orientation="horizontal">
                        <FieldContent>
                          <FieldLabel htmlFor="form-rhf-project-weekly">
                            每周报告
                          </FieldLabel>
                          <FieldDescription>
                            每周一收到项目进度汇总报告。
                          </FieldDescription>
                        </FieldContent>
                        <Switch
                          id="form-rhf-project-weekly"
                          name={field.name}
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </Field>
                    )}
                  />
                )}
              </FieldGroup>
            </FieldSet>

            <FieldSeparator />

            {/* ====== 协议确认 ====== */}
            <Controller
              name="agreeToTerms"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  orientation="horizontal"
                  data-invalid={fieldState.invalid}
                >
                  <Checkbox
                    id="form-rhf-project-agree"
                    name={field.name}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldContent>
                    <FieldLabel
                      htmlFor="form-rhf-project-agree"
                      className="font-normal"
                    >
                      我已阅读并同意
                      <a href="#">《项目管理规范》</a>和
                      <a href="#">《数据安全协议》</a>
                    </FieldLabel>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </FieldContent>
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end border-t">
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            重置
          </Button>
          <Button type="submit" form="form-rhf-project">
            创建项目
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
