import { FileTextIcon, XIcon } from "lucide-react";

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "lynote-ui/attachment";

const App: React.FC = () => {
  return (
    <Attachment>
      <AttachmentMedia>
        <FileTextIcon />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>季度销售报告.pdf</AttachmentTitle>
        <AttachmentDescription>PDF · 2.4 MB</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="移除季度销售报告.pdf">
          <XIcon />
        </AttachmentAction>
      </AttachmentActions>
    </Attachment>
  );
};

export default App;
