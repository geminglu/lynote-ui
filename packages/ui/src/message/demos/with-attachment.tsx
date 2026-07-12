import { FileTextIcon } from "lucide-react";

import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "lynote-ui/attachment";
import { Bubble, BubbleContent } from "lynote-ui/bubble";
import { Message, MessageContent } from "lynote-ui/message";

const App: React.FC = () => {
  return (
    <div className="flex w-full max-w-lg flex-col gap-5">
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>这是最终版报告，请帮我检查。</BubbleContent>
          </Bubble>
          <Attachment>
            <AttachmentMedia>
              <FileTextIcon />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>季度销售报告.pdf</AttachmentTitle>
              <AttachmentDescription>PDF · 2.4 MB</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
        </MessageContent>
      </Message>
      <Message>
        <MessageContent>
          <Bubble variant="ghost">
            <BubbleContent>
              收到。我会先检查数据口径，再核对结论与图表是否一致。
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </div>
  );
};

export default App;
