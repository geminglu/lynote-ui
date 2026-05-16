import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyH5,
  TypographyH6,
  TypographyInlineCode,
  TypographyLarge,
  TypographyLead,
  TypographyMuted,
  TypographyP,
  TypographySmall,
  TypographyUl,
} from "../index";

const App: React.FC = () => {
  return (
    <article className="mx-auto max-w-3xl space-y-10">
      <header className="space-y-4">
        <TypographyH1>构建清晰的界面文案</TypographyH1>
        <TypographyLead>
          Typography 提供一组语义化文本样式，用于快速组织标题、正文和辅助说明。
        </TypographyLead>
        <TypographyMuted>
          更新于 2026 年 5 月 17 日 · 阅读约 4 分钟
        </TypographyMuted>
      </header>

      <section>
        <TypographyH2>为什么需要统一排版</TypographyH2>
        <TypographyP>
          良好的排版能够帮助用户快速理解内容层级。你可以使用
          <TypographyInlineCode>TypographyP</TypographyInlineCode>
          编写正文段落，并通过标题组件拆分页面结构。
        </TypographyP>
        <TypographyP>
          在产品页面、文档站点和设置面板中，统一的文字样式可以减少重复样式代码，
          让不同场景下的信息表达保持一致。
        </TypographyP>
      </section>

      <section>
        <TypographyH2>适用场景</TypographyH2>
        <TypographyUl>
          <li>文档页、帮助中心和博客文章。</li>
          <li>产品说明、空状态说明和表单提示。</li>
          <li>需要统一文本层级的业务页面。</li>
          <li>包含代码片段、注意事项和辅助说明的内容区块。</li>
        </TypographyUl>
      </section>

      <section className="space-y-4">
        <TypographyH2>标题层级</TypographyH2>
        <TypographyH3>三级标题用于页面中的主要小节</TypographyH3>
        <TypographyH4>四级标题适合卡片或模块标题</TypographyH4>
        <TypographyH5>五级标题可用于更细的内容分组</TypographyH5>
        <TypographyH6>六级标题常用于紧凑说明或辅助标题</TypographyH6>
      </section>

      <section>
        <TypographyH2>强调与辅助文本</TypographyH2>
        <div className="space-y-3">
          <TypographyLarge>
            重要提示：先定义内容层级，再选择具体组件。
          </TypographyLarge>
          <TypographySmall>提示：组件会保留语义化 HTML 标签。</TypographySmall>
          <TypographyMuted>
            你仍然可以通过传入原生属性继续扩展每个文本片段。
          </TypographyMuted>
        </div>
      </section>

      <TypographyBlockquote>
        好的界面文案不仅要看起来清晰，也要让信息被更快地理解。
      </TypographyBlockquote>
    </article>
  );
};

export default App;
