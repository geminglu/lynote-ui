import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "lynote-ui";

const App: React.FC = () => {
  return (
    <Accordion className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>这是第一个问题？</AccordionTrigger>
        <AccordionContent>
          这是第一个问题的答案。手风琴组件可以用于展示可折叠的内容区域。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>这是第二个问题？</AccordionTrigger>
        <AccordionContent>
          这是第二个问题的答案。你可以展开和折叠每个项目。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>这是第三个问题？</AccordionTrigger>
        <AccordionContent>
          这是第三个问题的答案。支持单个或多个项目同时展开。
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default App;
