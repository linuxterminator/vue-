const MarkdownIt = require("markdown-it");

let markdownit = new MarkdownIt();

//markdown-it的语法拓展
markdownit.use(require("markdown-it-mark"));
markdownit.use(require("markdown-it-ins"));
markdownit.use(require("markdown-it-emoji"));
//高亮插件
markdownit.use(require("markdown-it-highlightjs"));

export { markdownit };
