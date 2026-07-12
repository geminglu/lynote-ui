import { FileCodeIcon, FileTextIcon, TableIcon } from "lucide-react";

import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from "lynote-ui/attachment";

const files = [
  { name: "会议纪要.pdf", meta: "PDF · 1.4 MB", icon: FileTextIcon },
  { name: "客户名单.csv", meta: "CSV · 18 KB", icon: TableIcon },
  { name: "renderer.tsx", meta: "TSX · 12 KB", icon: FileCodeIcon },
];

const App: React.FC = () => {
  return (
    <AttachmentGroup className="w-full max-w-xl">
      {files.map(({ name, meta, icon: Icon }) => (
        <Attachment key={name} size="sm">
          <AttachmentMedia>
            <Icon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>{name}</AttachmentTitle>
            <AttachmentDescription>{meta}</AttachmentDescription>
          </AttachmentContent>
        </Attachment>
      ))}
    </AttachmentGroup>
  );
};

export default App;
