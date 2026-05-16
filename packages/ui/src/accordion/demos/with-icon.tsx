import { CheckCircle2Icon, CreditCardIcon, ShieldIcon } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "lynote-ui/accordion";

const App: React.FC = () => {
  return (
    <Accordion className="w-full">
      <AccordionItem value="security">
        <AccordionTrigger>
          <span className="flex items-center gap-2">
            <ShieldIcon className="text-muted-foreground size-4" />
            账户安全
          </span>
        </AccordionTrigger>
        <AccordionContent>
          配置两步验证、查看登录设备并管理会话。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="payment">
        <AccordionTrigger>
          <span className="flex items-center gap-2">
            <CreditCardIcon className="text-muted-foreground size-4" />
            付款方式
          </span>
        </AccordionTrigger>
        <AccordionContent>管理付款方式、订阅与发票信息。</AccordionContent>
      </AccordionItem>
      <AccordionItem value="verification">
        <AccordionTrigger>
          <span className="flex items-center gap-2">
            <CheckCircle2Icon className="text-muted-foreground size-4" />
            实名认证
          </span>
        </AccordionTrigger>
        <AccordionContent>完成实名认证后可使用全部功能。</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default App;
