import "../../../packages/ui/dist/style.css";

function main() {
  // 初始化暗色模式状态
  let isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // 监听暗色模式变化
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      isDarkMode = event.matches;
      updateTheme(isDarkMode);
    });

  // 监听 data-prefers-color 属性变化
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "data-prefers-color"
      ) {
        const prefersColor =
          document.documentElement.getAttribute("data-prefers-color");
        // 你可以根据 prefersColor 做相应处理
        // 例如：自动切换主题
        updateTheme(prefersColor === "dark");
      }
    });
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-prefers-color"],
  });

  // 更新主题的函数
  function updateTheme(isDark: boolean) {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
}

main();
