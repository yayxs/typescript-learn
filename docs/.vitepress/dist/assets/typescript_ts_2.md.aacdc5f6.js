import{o as n,c as s,b as a,a as p}from"./app.589c5546.js";const t='{"title":"TypeScript 学习启示录 （2020 版）","description":"","frontmatter":{"title":"TypeScript 学习启示录 （2020 版）"},"headers":[{"level":2,"title":"TS 背景","slug":"ts-背景"},{"level":3,"title":"类似 JS","slug":"类似-js"},{"level":3,"title":"快速发展","slug":"快速发展"},{"level":2,"title":"基础数据类型","slug":"基础数据类型"},{"level":2,"title":"声明和解构","slug":"声明和解构"},{"level":3,"title":"解构","slug":"解构"},{"level":2,"title":"接口 interface","slug":"接口-interface"},{"level":3,"title":"函数类型接口","slug":"函数类型接口"},{"level":3,"title":"可索引类型","slug":"可索引类型"},{"level":3,"title":"类类型","slug":"类类型"}],"relativePath":"typescript/ts_2.md","lastUpdated":1622887183777}',e={},o=p('<hr><h1 id="typescript-学习启示录-（2020-版）"><a class="header-anchor" href="#typescript-学习启示录-（2020-版）" aria-hidden="true">#</a> TypeScript 学习启示录 （2020 版）</h1><h2 id="ts-背景"><a class="header-anchor" href="#ts-背景" aria-hidden="true">#</a> TS 背景</h2><h3 id="类似-js"><a class="header-anchor" href="#类似-js" aria-hidden="true">#</a> 类似 JS</h3><ul><li>不适合开发大型项目的能力</li><li>非常小的标准库</li><li>很奇怪的语法，null 和 undefined 全部变量比较难以控制</li><li>自动在行尾添加分号</li><li>运算符，例如+</li><li>数组和对象的划分</li><li>基本类型的包装对象</li></ul><h3 id="快速发展"><a class="header-anchor" href="#快速发展" aria-hidden="true">#</a> 快速发展</h3><ul><li>ts <ul><li>始于 js，归于 js</li><li>弱类型渐渐有点强</li><li>社区更新的非常快</li><li>适合大型项目的开发</li></ul></li></ul><h2 id="基础数据类型"><a class="header-anchor" href="#基础数据类型" aria-hidden="true">#</a> 基础数据类型</h2><ul><li>字符串</li></ul><div class="language-ts"><pre><code><span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">yayxs</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n</code></pre></div><ul><li>数字</li></ul><div class="language-ts"><pre><code><span class="token keyword">let</span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> num1<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0x10</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> num2<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0o20</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> num3<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0b10000</span><span class="token punctuation">;</span>\n</code></pre></div><ul><li>布尔类型</li></ul><div class="language-ts"><pre><code><span class="token keyword">let</span> flag<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n</code></pre></div><ul><li>数组</li></ul><div class="language-ts"><pre><code><span class="token comment">// 数字数组</span>\n<span class="token keyword">let</span> arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 字符串数组</span>\n<span class="token keyword">let</span> arr<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token comment">// 范式</span>\n<span class="token keyword">let</span> arr<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 啥类型都有那就是元组</span>\n</code></pre></div><ul><li>元组 已知类型 已知数量</li></ul><div class="language-ts"><pre><code><span class="token keyword">let</span> tuple<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\ntuple <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">yayxs</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">nan</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 取值</span>\ntuple<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre></div><p>直接点出来，会出来相应的 API</p>',19),c=p('<ul><li>枚举 标准数据类型的一种补充，见名知意</li></ul><div class="language-ts"><pre><code><span class="token comment">// 枚举</span>\n<span class="token keyword">enum</span> Sex <span class="token punctuation">{</span>\n  Man<span class="token punctuation">,</span>\n  Women<span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">let</span> sexMan<span class="token operator">:</span> Sex <span class="token operator">=</span> Sex<span class="token punctuation">.</span>Man<span class="token punctuation">;</span> <span class="token comment">// 0</span>\n\n<span class="token keyword">let</span> sexWo<span class="token operator">:</span> Sex <span class="token operator">=</span> Sex<span class="token punctuation">.</span>Women<span class="token punctuation">;</span> <span class="token comment">// 1</span>\n\n<span class="token comment">// 枚举之手动赋值</span>\n<span class="token keyword">enum</span> Sex <span class="token punctuation">{</span>\n  Man1 <span class="token operator">=</span> <span class="token number">21</span><span class="token punctuation">,</span>\n  Women1 <span class="token operator">=</span> <span class="token number">1314</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 由枚举的值得到名</span>\n<span class="token keyword">let</span> sexName21<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> Sex<span class="token punctuation">[</span><span class="token number">21</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> sexName1314<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> Sex<span class="token punctuation">[</span><span class="token number">1314</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre></div><ul><li>any</li></ul><div class="language-ts"><pre><code><span class="token keyword">let</span> str<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">yayxs</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> arr<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">yayxs</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre></div><ul><li>void 没有类型 一个函数没有返回值</li></ul><div class="language-ts"><pre><code><span class="token keyword">let</span> str<span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>\n<span class="token keyword">let</span> str<span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> str<span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n</code></pre></div><p>一般情况不用在变量，用在函数</p><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token function">sayLove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">I LOve You</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><ul><li>null vs undefined 所有类型的子类型</li></ul><div class="language-ts"><pre><code><span class="token keyword">let</span> str1<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> str1<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> str1<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n</code></pre></div><ul><li>never 用不存在值的类型 抛出异常的函数 所有类型的子类型 没有自己的子类型 必须存在无法存在的终点 <ul><li>抛出异常的函数</li></ul><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token function">error</span><span class="token punctuation">(</span>msg<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">never</span> <span class="token punctuation">{</span>\n  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">错误</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><ul><li>死循环</li></ul><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">never</span> <span class="token punctuation">{</span>\n  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">11</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><ul><li>更多的是用于底层的框架;</li></ul></li><li>object</li></ul><div class="language-ts"><pre><code><span class="token keyword">let</span> obj<span class="token operator">:</span> object <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">yayxs</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><ul><li>类型断言</li></ul><div class="language-ts"><pre><code><span class="token keyword">let</span> obj<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">yayxs is </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> str<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> obj<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> str<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 类型断言</span>\n\n<span class="token keyword">let</span> str<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token punctuation">(</span>obj <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 类型断言</span>\n</code></pre></div><h2 id="声明和解构"><a class="header-anchor" href="#声明和解构" aria-hidden="true">#</a> 声明和解构</h2><ul><li>var 作用域提升 一般不再使用了</li><li>let</li><li>const</li></ul><h3 id="解构"><a class="header-anchor" href="#解构" aria-hidden="true">#</a> 解构</h3><div class="language-ts"><pre><code><span class="token comment">// 解构数组</span>\n<span class="token keyword">let</span> arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> <span class="token punctuation">[</span>ele1<span class="token punctuation">,</span> ele2<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">;</span>\n<span class="token comment">// 元素交换</span>\n<span class="token punctuation">[</span>ele1<span class="token punctuation">,</span> ele2<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>ele2<span class="token punctuation">,</span> ele1<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token comment">// 展开</span>\n<span class="token keyword">let</span> <span class="token punctuation">[</span>ele1<span class="token punctuation">,</span> <span class="token operator">...</span>other<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>other<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">/**\n *\n * 解构对象\n */</span>\n<span class="token keyword">enum</span> Sex <span class="token punctuation">{</span>\n  Man<span class="token punctuation">,</span>\n  Women\n<span class="token punctuation">}</span>\n<span class="token keyword">interface</span> <span class="token class-name">Per</span> <span class="token punctuation">{</span>\n  pername<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  perage<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  persex<span class="token operator">:</span> Sex<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> person<span class="token operator">:</span>Per <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">yayxs</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span>Sex<span class="token punctuation">.</span>Man <span class="token punctuation">}</span>\n\n\n<span class="token keyword">let</span> <span class="token punctuation">{</span> pername<span class="token punctuation">,</span>perage<span class="token punctuation">,</span>persex<span class="token punctuation">}</span> <span class="token operator">=</span> per\n</code></pre></div><h2 id="接口-interface"><a class="header-anchor" href="#接口-interface" aria-hidden="true">#</a> 接口 interface</h2><ul><li>类似一种契约</li><li>核心：类型检查</li><li>结构性子类化</li><li>第三方代码契约</li><li>类的一部分抽象</li><li>对象的形状描述</li></ul><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n  pername<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  perage<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> person<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>\n  pername<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">yayxs</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n  perage<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><p>使接口具备可选属性,对某些属性进行预定义</p><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n  pername<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  perage<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>只读属性</p><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Name</span> <span class="token punctuation">{</span>\n  <span class="token keyword">readonly</span> myName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>额外的类型检查</p><ul><li>使用类型断言</li><li>通过字符串的索引签名</li></ul><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n  pername<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  perage<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  <span class="token punctuation">[</span>propsName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="函数类型接口"><a class="header-anchor" href="#函数类型接口" aria-hidden="true">#</a> 函数类型接口</h3><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">bijiao</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">(</span>num1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> num2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">let</span> fn<span class="token operator">:</span> <span class="token function-variable function">bijiao</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> num1 <span class="token operator">&gt;</span> num2<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="可索引类型"><a class="header-anchor" href="#可索引类型" aria-hidden="true">#</a> 可索引类型</h3><h3 id="类类型"><a class="header-anchor" href="#类类型" aria-hidden="true">#</a> 类类型</h3><ul><li>类中属性的约束</li></ul><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Time</span> <span class="token punctuation">{</span>\n  currentTime<span class="token operator">:</span> Date<span class="token punctuation">;</span>\n  <span class="token function">setTime</span><span class="token punctuation">(</span>day<span class="token operator">:</span> Date<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">class</span> <span class="token class-name">Now</span> <span class="token keyword">implements</span> <span class="token class-name">Time</span> <span class="token punctuation">{</span>\n  currentTime<span class="token operator">:</span> Date<span class="token punctuation">;</span>\n  <span class="token keyword">constructor</span><span class="token punctuation">(</span>hour<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> min<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>hour<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">setTime</span><span class="token punctuation">(</span>day<span class="token operator">:</span> Date<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>day<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><ul><li>类中描述一个方法</li></ul>',35);e.render=function(p,t,e,l,u,i){return n(),s("div",null,[o,a(" ![](../../../assets/images/images/QQ20191020-2.png) "),c])};export default e;export{t as __pageData};
