import {
  CheckIcon,
  CircleAlertIcon,
  ClockIcon,
  FileTextIcon,
  LoaderCircleIcon,
} from "lucide-react";

import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "lynote-ui/attachment";

const states = [
  {
    state: "idle" as const,
    title: "待上传文件.pdf",
    description: "等待上传",
    icon: ClockIcon,
  },
  {
    state: "uploading" as const,
    title: "设计资源.zip",
    description: "正在上传 · 64%",
    icon: LoaderCircleIcon,
  },
  {
    state: "processing" as const,
    title: "调研报告.pdf",
    description: "正在处理文档",
    icon: FileTextIcon,
  },
  {
    state: "error" as const,
    title: "财务模型.xlsx",
    description: "上传失败，请重试",
    icon: CircleAlertIcon,
  },
  {
    state: "done" as const,
    title: "项目总结.pdf",
    description: "上传完成 · 1.8 MB",
    icon: CheckIcon,
  },
];

const App: React.FC = () => {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      {states.map(({ state, title, description, icon: Icon }) => (
        <Attachment key={state} state={state}>
          <AttachmentMedia>
            <Icon className={state === "uploading" ? "animate-spin" : ""} />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>{title}</AttachmentTitle>
            <AttachmentDescription>{description}</AttachmentDescription>
          </AttachmentContent>
        </Attachment>
      ))}
    </div>
  );
};

export default App;
