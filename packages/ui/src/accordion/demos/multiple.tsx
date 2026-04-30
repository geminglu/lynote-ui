import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "lynote-ui";

const App: React.FC = () => {
  return (
    <Accordion className="w-full" defaultValue={["usage", "api"]}>
      <AccordionItem value="usage">
        <AccordionTrigger>什么时候使用 Accordion？</AccordionTrigger>
        <AccordionContent>当页面需要折叠展示多段说明时使用。</AccordionContent>
      </AccordionItem>
      <AccordionItem value="api">
        <AccordionTrigger>是否支持多个面板？</AccordionTrigger>
        <AccordionContent>
          可以通过数组默认值同时展开多个项目。
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default App;
