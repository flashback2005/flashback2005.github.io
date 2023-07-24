import{_ as s,o as a,c as n,O as o}from"./chunks/framework.e90d2b58.js";const d=JSON.parse('{"title":"BpButton","description":"","frontmatter":{},"headers":[],"relativePath":"BPComponents/BpButton/index.md","filePath":"BPComponents/BpButton/index.md"}'),l={name:"BPComponents/BpButton/index.md"},p=o(`<h1 id="bpbutton" tabindex="-1">BpButton <a class="header-anchor" href="#bpbutton" aria-label="Permalink to &quot;BpButton&quot;">​</a></h1><h3 id="主要作用" tabindex="-1">主要作用 <a class="header-anchor" href="#主要作用" aria-label="Permalink to &quot;主要作用&quot;">​</a></h3><ol><li>主要是显示没有连接对的链的话，就显示连接文案.</li><li>置灰显示</li></ol><p>使用按钮的时候，与链上有交易的请求，统一使用全局组件<code>BpButton</code>，需要有加载状态<code>loading</code>。一些普通的操作DOM按钮可以不使用该组件。</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const [handleClick, loadClick] = useWrite(async () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  await lpObj.claimAllReward();</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">bp-button</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">v-loading</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">loadClick</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">handleClick</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">click-box</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">bp写操作</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">bp-button</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h4 id="置灰" tabindex="-1">置灰： <a class="header-anchor" href="#置灰" aria-label="Permalink to &quot;置灰：&quot;">​</a></h4><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const isDisable = ref(false); // 是否置灰按钮</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">BpButton</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">blue-btn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">func</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">disable</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">isDisable</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">点击</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">BpButton</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="源码" tabindex="-1">源码 <a class="header-anchor" href="#源码" aria-label="Permalink to &quot;源码&quot;">​</a></h3><p>blockpulse_dapp 自带</p>`,9),t=[p];function e(c,r,D,i,y,F){return a(),n("div",null,t)}const u=s(l,[["render",e]]);export{d as __pageData,u as default};
