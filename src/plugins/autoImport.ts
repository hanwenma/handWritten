import fs from "fs";
import path from "path";

const defaultPath = path.resolve(__dirname, "../", "./code");
const defaultAppendPath = path.resolve(__dirname, "../", "./code/index.ts");

// 追加文件内容
function appendAction(appendContent) {
  fs.appendFile(defaultAppendPath, appendContent, function (error) {
    if (error) {
      console.log("~ 自动导入文件失败 ~");
      return;
    }
    console.log("~ 自动导入文件成功 ~");
  });
}

// 重写文件内容
function rewriteFile(repalceStr, content) {
  const rawContent = fs.readFileSync(defaultAppendPath, { encoding: "utf8" });
  fs.writeFileSync(defaultAppendPath, rawContent.replace(repalceStr, content));
}

export default function () {
  return {
    name: "vite-plugin-vue-auto-import",
    apply: "serve", // 指明它们仅在 'build' 或 'serve' 模式时调用
    buildStart() {
      fs.watch(
        defaultPath,
        {
          encoding: "utf-8",
        },
        (eventType, filename: string) => {
          // 重命名文件、新增文件、删除文件
          if (eventType === "rename") {
            const filePath = path.join(defaultPath, `/${filename}`);
            fs.access(filePath, (error: any) => {
              // 判断是否存在对应文件
              if (error) {
                // 不存在重写文件内容
                const repalceStr = `import "./${filename}"`;
                rewriteFile(repalceStr,'');
              } else {
                // 存在文件则自动导入文件
                const appendContent = `\nimport "./${filename}"`;
                appendAction(appendContent);
              }
            });
          }
        }
      );
    },
  };
}
