import{o as t,c as e,a as d}from"./app.589c5546.js";const a='{"title":"什么是ts","description":"","frontmatter":{},"headers":[{"level":2,"title":"什么是ts","slug":"什么是ts"},{"level":3,"title":"核心","slug":"核心"},{"level":3,"title":"特点","slug":"特点"},{"level":3,"title":"转换","slug":"转换"},{"level":2,"title":"js 与 ts 的关系","slug":"js-与-ts-的关系"}],"relativePath":"guide/is.md","lastUpdated":1622887098749}',l={},s=d('<h2 id="什么是ts"><a class="header-anchor" href="#什么是ts" aria-hidden="true">#</a> 什么是<code>ts</code></h2><h3 id="核心"><a class="header-anchor" href="#核心" aria-hidden="true">#</a> 核心</h3><p>抛出问题：都说 ts 那么 ts 究竟是什么 什么是呢？</p><p>一个面试题打开接下来的交流，== 与===的区别 js 的一些谜之操作让人意外，</p><ul><li>由于历史的原因 js 生出来天生自带 bug 起初 js 解决的问题也只是简单的表单问题，慢慢发展到现在。那么 ts 扩展了 js 的，添加了 <strong>类型支持</strong> 这是第一个关键词</li><li>从项目出发，大型的企业级项目，由于一些程序员处理业务逻辑的不严谨性，常常会导致一些简单的 bug 无非就是 没找到 undefined 等这些鸡毛蒜皮的小问题，因为 js 允许我们访问不存在的属性，企业中后端的接口数据有问题，这时候就需要前端做很多的数据兼容与健壮处理，ts 能提升程序员的<strong>开发体验</strong> ，</li><li>开源免费，任何用 js 开发的最终都可用 ts 开发</li></ul><blockquote><p>TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions. ---摘自 ts 官方</p><p>换句话说，当别人问你 ts 是啥，也可以说是 js 的超集 也可以说是一门语言，因为 js 是一门代码语言嘛，或者说是一个工具</p></blockquote><h3 id="特点"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h3><ul><li><p>静态类型定义，静态类型检查器</p><ul><li><p>这里特别说明一下 传统的<code>JavaScript</code> 也是有类型的（其中类型指的是动态的类型）</p></li><li><div class="language-"><pre><code>let a = 123;\na = &quot;hahha&quot;;\n</code></pre></div></li></ul></li></ul><blockquote><p>既然提到类型，就简单的说一下，类型包括动态类型与静态类型</p></blockquote><table><thead><tr><th>静态类型</th><th>动态类型</th><th></th></tr></thead><tbody><tr><td>类型的极度严格性</td><td>类型比较宽松</td><td></td></tr><tr><td>运行性能 ok</td><td>运行性能差点</td><td></td></tr><tr><td>并不是绝对的</td><td>不断发展渐进性</td><td></td></tr></tbody></table><ul><li>类型推断 ，所谓的类型系统</li><li>编辑器更友好提示</li></ul><h3 id="转换"><a class="header-anchor" href="#转换" aria-hidden="true">#</a> 转换</h3><p>我们不得不承认在浏览器环境和 node 环境是不能够跑 ts 代码的，我们试一下</p><h4 id="浏览器控制台"><a class="header-anchor" href="#浏览器控制台" aria-hidden="true">#</a> 浏览器控制台</h4><div class="language-"><pre><code>let a:number =1\nVM212:1 Uncaught SyntaxError: Unexpected token &#39;:&#39; // 错误的一种形式，具体的种类可以自行学习\n</code></pre></div><h2 id="js-与-ts-的关系"><a class="header-anchor" href="#js-与-ts-的关系" aria-hidden="true">#</a> <code>js</code> 与 <code>ts</code> 的关系</h2><ul><li>ts 是 js 超集的一种语言</li><li>两者共享语法与运行时行为</li><li>js 必须 ,ts 必须，</li></ul>',17);l.render=function(d,a,l,i,r,o){return t(),e("div",null,[s])};export default l;export{a as __pageData};
