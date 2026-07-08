const slidesData = [
  // PART 1: 認識 ANTIGRAVITY (1-7)
  {
    id: 1,
    section: "認識 Antigravity",
    layout: "title",
    title: "Antigravity",
    contentHtml: `
      <div class="layout-title">
        <h1>Antigravity</h1>
        <p class="subtitle">你的 AI 協同開發神隊友：初學者輕鬆上手的「無重力」程式開發指南</p>
        <div class="author-info">
          <p>Google DeepMind 開發</p>
          <p>Advanced Agentic Coding 團隊出品</p>
        </div>
      </div>
    `
  },
  {
    id: 2,
    section: "認識 Antigravity",
    layout: "split-content",
    title: "什麼是 Antigravity？",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>什麼是 Antigravity？</h3>
          <p class="intro-text">Antigravity 是一個<b>「代理型 AI 程式設計助手」(Agentic AI Coding Assistant)</b>。它不只是幫你做程式碼自動補全，更是能與你並肩作戰的虛擬工程師夥伴。</p>
          <ul class="bullet-list">
            <li><strong>共同開發 (Pair Programming)</strong>：你和它一起分工，它寫程式，你把關方向。</li>
            <li><strong>深思熟慮</strong>：在動手改代碼之前，它會主動研究、撰寫計畫並徵求你的同意。</li>
            <li><strong>自主執行</strong>：它能讀寫檔案、運行終端機指令、搜尋網頁，甚至自動執行單元測試。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card" style="background-color: var(--accent-glow); border-color: var(--accent-primary); width: 100%;">
            <h4 style="font-size: 1.3rem; margin-bottom: 1rem;"><span class="card-icon">🚀</span> 核心定位</h4>
            <p style="font-size: 1rem; line-height: 1.6;">「我們不僅要降低程式開發的門檻，更要讓整個開發過程變得無感、順暢，就像漂浮在無重力空間一樣自由。」</p>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 1rem; text-align: right;">— DeepMind 開發團隊</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 3,
    section: "認識 Antigravity",
    layout: "split-content",
    title: "為什麼叫「無重力」(Antigravity)？",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>「無重力」的開發革命</h3>
          <p class="intro-text">傳統寫程式就像背負著重力在前行：繁雜的語法、難搞的環境配置、找不出原因的 Bug，壓得新手喘不過氣。</p>
          <ul class="bullet-list">
            <li><strong>擺脫繁瑣細節</strong>：把「語法怎麼寫」、「環境怎麼裝」交給 AI。</li>
            <li><strong>專注於創意與架構</strong>：你只需要專注在「想要做什麼功能」與「邏輯流程」。</li>
            <li><strong>順暢的開發流</strong>：AI 幫你處理完瑣碎的事，讓你體驗毫無阻力的開發快感。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="stats-container" style="flex-direction: column; width: 100%;">
            <div class="stat-item" style="width: 100%; text-align: left;">
              <div class="stat-number">0 px</div>
              <div class="stat-label">阻力阻礙</div>
              <div class="stat-desc">讓環境配置與語法錯誤不再成為卡關理由。</div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 4,
    section: "認識 Antigravity",
    layout: "bullets",
    title: "結對程式設計 (Pair Programming) 的新定義",
    contentHtml: `
      <h3>結對程式設計的新夥伴</h3>
      <p class="intro-text">在軟體工程中，「結對程式設計」是指兩位工程師共用一台電腦，一人寫程式，另一人負責覆核。Antigravity 將這個角色數位化：</p>
      <ul class="bullet-list" style="margin-top: 1.5rem;">
        <li><strong>你是主駕駛 (Driver/Navigator)</strong>：設定目標、提供專案脈絡、審核計畫、提出功能調整需求。</li>
        <li><strong>Antigravity 是副駕駛 (Copilot/Agent)</strong>：負責查閱文件、編寫具體程式碼、運行指令驗證、排除 Bug。</li>
        <li><strong>雙向溝通</strong>：它會主動向你解釋它的思路，並在關鍵步驟（例如：修改檔案、下指令）請求你的許可。</li>
        <li><strong>互補合作</strong>：用人類的創造力與判斷力，結合 AI 的運算力與記憶力，打造完美代碼。</li>
      </ul>
    `
  },
  {
    id: 5,
    section: "認識 Antigravity",
    layout: "split-content",
    title: "為什麼初學者需要 Antigravity？",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>初學者的程式痛點與解方</h3>
          <p class="intro-text">對新手來說，寫程式最怕遇到挫折感。Antigravity 能為你搭建強大的學習鷹架：</p>
          <ul class="bullet-list">
            <li><strong>即時的實踐指導</strong>：每一行程式碼都有合理的規劃背景，邊看邊學。</li>
            <li><strong>不必死記硬背語法</strong>：用簡單的口語描述，剩下的留給 Antigravity。</li>
            <li><strong>從「抄代碼」到「改架構」</strong>：透過檢視 AI 的計畫書，理解軟體設計的流程。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="card-grid" style="grid-template-columns: 1fr;">
            <div class="info-card">
              <h4><span class="card-icon">💡</span> 學習心態轉變</h4>
              <p>過去：努力查語法、複製貼上、不知道為什麼錯。<br>現在：理解功能需求、審查 AI 計畫、指揮 AI 實作與修正。</p>
            </div>
            <div class="info-card">
              <h4><span class="card-icon">🛡️</span> 安全避風港</h4>
              <p>在安全沙盒中運行指令，並在修改檔案前提供對比 diff，讓你敢於嘗試，不怕改壞程式。</p>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 6,
    section: "認識 Antigravity",
    layout: "split-content",
    title: "聊天型 AI vs. 代理型 AI (Antigravity)",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>聊天型 AI 與 Agent 代理的差別</h3>
          <p class="intro-text">一般的 ChatGPT/Gemini 聊天介面，與 Antigravity 的運作模式有本質上的不同：</p>
          <ul class="bullet-list">
            <li><strong>聊天型 AI (僅生成文字)</strong>：只給你代碼，你需要自己複製、貼上、開終端機執行、自己除錯。</li>
            <li><strong>代理型 AI (執行任務)</strong>：擁有「眼睛」與「手腳」。能直接閱讀你專案裡的程式、修改檔案、下指令測試、修正錯誤，直到任務完成。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="code-mockup" style="font-family: var(--font-body);">
            <div class="code-header">
              <div class="code-dots"><div class="code-dot dot-red"></div><div class="code-dot dot-yellow"></div><div class="code-dot dot-green"></div></div>
              <span class="code-title">運作模式對比</span>
            </div>
            <div style="padding: 1.25rem; font-size: 0.9rem;">
              <p style="color: #ef4444; margin-bottom: 0.75rem;"><b>🚫 聊天型 AI：被動回應</b><br>「這是你的程式碼，請自己貼到 main.py 執行...」</p>
              <p style="color: #10b981;"><b>✅ Antigravity：主動規劃執行</b><br>「我已研究專案結構，計畫修改 main.py 的第 12 行。請授權我執行測試指令...」</p>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 7,
    section: "認識 Antigravity",
    layout: "diagram",
    title: "本套簡報學習地圖",
    contentHtml: `
      <h3>本套簡報學習地圖</h3>
      <p class="intro-text">跟著這份地圖，你將快速掌握 Antigravity 的精髓，從新手變身為 AI 指揮官：</p>
      <div class="diagram-container">
        <div class="flow-step">
          <div class="flow-step-num">1</div>
          <div class="flow-step-desc">
            <strong>優勢分析篇</strong>
            <span>了解為什麼要用它，以及它能為你帶來什麼強大能力。</span>
          </div>
        </div>
        <div class="flow-step">
          <div class="flow-step-num">2</div>
          <div class="flow-step-desc">
            <strong>規劃模式 (Planning Mode)</strong>
            <span>最核心的運作邏輯，搞懂「謀定而後動」的五大步驟。</span>
          </div>
        </div>
        <div class="flow-step">
          <div class="flow-step-num">3</div>
          <div class="flow-step-desc">
            <strong>核心工具箱與斜線指令</strong>
            <span>了解 AI 的武器庫，以及如何對它下達特殊指令（如 /goal, /grill-me）。</span>
          </div>
        </div>
        <div class="flow-step">
          <div class="flow-step-num">4</div>
          <div class="flow-step-desc">
            <strong>自訂技能與最佳實踐</strong>
            <span>學會如何客製化 AI、設定規則，以及高效對話的黃金法則。</span>
          </div>
        </div>
      </div>
    `
  },

  // PART 2: 為什麼要使用 ANTIGRAVITY？ (8-16)
  {
    id: 8,
    section: "為什麼要使用 Antigravity？",
    layout: "chapter",
    title: "第二部分：為什麼要使用 Antigravity？",
    contentHtml: `
      <div class="layout-chapter">
        <div class="chapter-num">PART 2</div>
        <h2>為什麼要使用 Antigravity？</h2>
        <p>探討初學者的開發痛點，並解析 Antigravity 解決這些問題的核心優勢與量化價值。</p>
      </div>
    `
  },
  {
    id: 9,
    section: "為什麼要使用 Antigravity？",
    layout: "bullets",
    title: "初學者寫程式時常遇到的四大挫折",
    contentHtml: `
      <h3>初學者寫程式的卡關惡夢</h3>
      <p class="intro-text">在學習寫程式的路上，你是否也曾因為這些原因想放棄？</p>
      <ul class="bullet-list" style="margin-top: 1.5rem;">
        <li><strong>環境配置地獄</strong>：好不容易寫好程式，卻因為 Python 版本、Node 套件裝不起來而無法運行。</li>
        <li><strong>看不懂的報錯訊息 (Syntax/Runtime Error)</strong>：終端機噴出滿滿的紅色英文，根本不知道該去修改哪一行。</li>
        <li><strong>越改越爛，不敢動手</strong>：程式本來會動，加了一個功能之後全部壞掉，又不知道怎麼退回原本的狀態。</li>
        <li><strong>不知道該從何開始</strong>：面對一個大專案，腦中有想法，卻不知道要在哪個資料夾、寫哪一個檔案。</li>
      </ul>
      <p style="margin-top: 1.5rem; font-weight: 500; color: var(--accent-secondary);">💡 這些挫折，現在全部都可以交給 Antigravity 來為你排憂解難！</p>
    `
  },
  {
    id: 10,
    section: "為什麼要使用 Antigravity？",
    layout: "split-content",
    title: "優勢 1：主動規劃與智慧決策",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>優勢 1：主動規劃與決策</h3>
          <p class="intro-text">一般 AI 就像回聲，你丟一行程式，它回一行。Antigravity 具備<b>自主規劃能力 (Agentic Planning)</b>。</p>
          <ul class="bullet-list">
            <li><strong>不盲目動手</strong>：接到任務後，會先檢索你的程式庫，通盤了解關聯性後再行動。</li>
            <li><strong>產出實實在在的計策</strong>：會寫出一份「計畫書」，告訴你它要改什麼、為什麼這樣改。</li>
            <li><strong>可控性極佳</strong>：在得到你的同意之前，它絕不會動你的源碼。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card">
            <h4><span class="card-icon">🧠</span> 智慧決策鏈</h4>
            <p style="margin-bottom: 0.5rem;">當你說：<i>「幫我加一個會員登入的欄位」</i></p>
            <p style="color: var(--accent-primary); font-size: 0.85rem; font-family: monospace;">
              1. 檢索資料庫 schema<br>
              2. 搜尋前端註冊頁面檔案<br>
              3. 檢查 API endpoint<br>
              4. 擬定修改方案 (產出 Plan)
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 11,
    section: "為什麼要使用 Antigravity？",
    layout: "split-content",
    title: "優勢 2：完整的環境與工具操作能力",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>優勢 2：完整的環境操作能力</h3>
          <p class="intro-text">Antigravity 被賦予了能在你電腦上執行特定操作的工具權限。它是個有「手」的 AI。</p>
          <ul class="bullet-list">
            <li><strong>檔案讀寫修改</strong>：精準修改單一程式碼片段，而不是叫你整檔覆蓋。</li>
            <li><strong>下達指令</strong>：會自己執行測試、安裝必要的套件、檢查執行結果。</li>
            <li><strong>上網查最新文件</strong>：當遇到不熟悉的套件時，會自己 Google 搜尋最新用法，不依賴過時的訓練資料。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="code-mockup">
            <div class="code-header">
              <div class="code-dots"><div class="code-dot dot-red"></div><div class="code-dot dot-yellow"></div><div class="code-dot dot-green"></div></div>
              <span class="code-title">指令執行權限畫面</span>
            </div>
            <div class="code-body" style="font-size: 0.8rem;">
              <span class="code-comment"># Antigravity 提議執行以下指令：</span>
              $ <span class="code-keyword">npm run test</span>
              
              <span class="code-comment"># 狀態: 等待使用者核准中...</span>
              <span class="code-string">[ 允許 ]</span>  <span style="color: #ef4444;">[ 拒絕 ]</span>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 12,
    section: "為什麼要使用 Antigravity？",
    layout: "bullets",
    title: "優勢 3：自我修正與除錯迴圈 (Self-healing)",
    contentHtml: `
      <h3>優勢 3：自動除錯與自我修正</h3>
      <p class="intro-text">寫程式有 80% 的時間都在除錯。Antigravity 內建了<b>自我修正迴圈 (Self-healing Loop)</b>：</p>
      <ul class="bullet-list" style="margin-top: 1.5rem;">
        <li><strong>不推卸責任</strong>：如果它改完程式碼，運行測試時報錯，它不會傻傻等你想辦法。</li>
        <li><strong>主動解讀錯誤</strong>：它會自己研讀終端機噴出的報錯訊息（Stack Trace），找出錯誤原因。</li>
        <li><strong>自動迭代修改</strong>：它會自動修改有問題的程式碼，並重新運行測試，直到測試順利通過為止。</li>
        <li><strong>最終產出乾淨成品</strong>：送到你面前的代碼，通常已經過它自己的初步驗證，大幅降低出錯機率。</li>
      </ul>
    `
  },
  {
    id: 13,
    section: "為什麼要使用 Antigravity？",
    layout: "split-content",
    title: "優勢 4：支援子代理人團隊協作",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>優勢 4：子代理人協作</h3>
          <p class="intro-text">Antigravity 可以化身為一個團隊！它能夠在背景開啟多個「子代理人」(Subagents)，進行分工。</p>
          <ul class="bullet-list">
            <li><strong>分頭行事</strong>：例如，一個子代理人專心在背景查閱厚厚的文件，不打擾你；而主代理人則繼續為你編寫代碼。</li>
            <li><strong>隔離環境</strong>：子代理人可以在分支沙盒中進行實驗，不會影響你當前的主程式。</li>
            <li><strong>極致效率</strong>：複雜的工作被拆分成小任務，由多個 AI 專家共同搞定。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card" style="background-color: var(--accent-glow); border-color: var(--accent-primary); width: 100%;">
            <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem;">👥 AI 開發團隊架構</h4>
            <p style="font-size: 0.85rem; line-height: 1.5;">
              <b>[主代理人 (Antigravity)]</b><br>
              ├── 委派 → <b>[Research 專家]</b> (搜尋網路文獻)<br>
              └── 委派 → <b>[Tester 專家]</b> (專職撰寫單元測試)
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 14,
    section: "為什麼要使用 Antigravity？",
    layout: "split-content",
    title: "優勢 5：客製化技能與專案規則",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>優勢 5：客製化技能與規則</h3>
          <p class="intro-text">每家企業、每個專案的規範都不同。Antigravity 可以被塑造成符合你個人或團隊風格的助手：</p>
          <ul class="bullet-list">
            <li><strong>技能 (Skills)</strong>：你可以把特別的 API 調用方法、私有套件的用法包裝成技能，讓 AI 秒懂。</li>
            <li><strong>規則 (Rules)</strong>：你可以強制要求它「命名必須用 camelCase」、「一定要寫中文註解」，它就會乖乖遵守。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="code-mockup">
            <div class="code-header">
              <div class="code-dots"><div class="code-dot dot-red"></div><div class="code-dot dot-yellow"></div><div class="code-dot dot-green"></div></div>
              <span class="code-title">AGENTS.md (客製化規則)</span>
            </div>
            <div class="code-body" style="font-size: 0.8rem;">
              # 專案程式碼規範
              - 變數名稱一律採用底線命名法 (snake_case)。
              - 每個函式上方必須附上 JSDoc 說明。
              - 不得使用任何第三方 UI 框架。
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 15,
    section: "為什麼要使用 Antigravity？",
    layout: "bullets",
    title: "優勢 6：嚴格的品質與驗證機制",
    contentHtml: `
      <h3>優勢 6：嚴格的品質把關</h3>
      <p class="intro-text">很多 AI 寫完程式就拍拍屁股走人，不管能不能動。Antigravity 擁有最後的<b>驗證關卡 (Verification Phase)</b>：</p>
      <ul class="bullet-list" style="margin-top: 1.5rem;">
        <li><strong>代碼檢查 (Linting)</strong>：自動偵測有沒有漏掉分號、括號不對稱等語法低級錯誤。</li>
        <li><strong>自動建置測試</strong>：確保寫好的代碼在編譯或打包時不會崩潰。</li>
        <li><strong>Walkthrough 報告</strong>：在全部完成後，它會自動生成一份精美的 <code>walkthrough.md</code>，圖文並茂地展示它做了哪些修改、測試的結果，讓你一目了然。</li>
      </ul>
    `
  },
  {
    id: 16,
    section: "為什麼要使用 Antigravity？",
    layout: "stats",
    title: "企業級應用的量化價值",
    contentHtml: `
      <h3>Antigravity 能為你帶來什麼價值？</h3>
      <p class="intro-text">這不只是好玩，而是能實質提升開發產能的終極武器：</p>
      <div class="stats-container">
        <div class="stat-item">
          <div class="stat-number">10x</div>
          <div class="stat-label">開發速度提升</div>
          <div class="stat-desc">將原本繁雜的檔案修改與指令測試時間縮短十倍。</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">95%</div>
          <div class="stat-label">Bug 自動排除率</div>
          <div class="stat-desc">利用 Self-healing 除錯迴圈，高達九成以上的常見語法錯誤在提交前即被修復。</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">1 天</div>
          <div class="stat-label">新手上路時間</div>
          <div class="stat-desc">初學者藉由閱讀 AI 計畫書，可迅速熟悉複雜的專案架構。</div>
        </div>
      </div>
    `
  },

  // PART 3: 規劃模式的奧秘 (17-26)
  {
    id: 17,
    section: "規劃模式的奧秘",
    layout: "chapter",
    title: "第三部分：規劃模式 (Planning Mode) 的奧秘",
    contentHtml: `
      <div class="layout-chapter">
        <div class="chapter-num">PART 3</div>
        <h2>規劃模式 (Planning Mode) 的奧秘</h2>
        <p>「謀定而後動，知止而後得。」學習 Antigravity 最核心的運作邏輯，掌握它如何安全、有條理地修改程式碼。</p>
      </div>
    `
  },
  {
    id: 18,
    section: "規劃模式的奧秘",
    layout: "split-content",
    title: "什麼是「規劃模式」(Planning Mode)？",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>規劃模式：謀定而後動</h3>
          <p class="intro-text">當你要求 Antigravity 做一些複雜的事情（例如：重構程式、跨多檔案修改）時，它會自動進入<b>規劃模式</b>。</p>
          <ul class="bullet-list">
            <li><strong>拒絕瞎猜</strong>：一般的 AI 拿到指令立刻開始吐代碼，往往前後矛盾。</li>
            <li><strong>計畫導向</strong>：Antigravity 在動手前，會先靜下心來，把整個專案相關程式讀一遍，然後寫一份實作計畫。</li>
            <li><strong>安全防護</strong>：把修改源碼的最終決定權，牢牢掌握在人類手中。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card" style="background-color: var(--accent-glow); border-color: var(--accent-primary); width: 100%;">
            <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem;">🔒 安全核心理念</h4>
            <p style="font-size: 0.9rem; line-height: 1.6;">「在未取得人類的正式簽核（Approval）前，AI 絕對不能直接改動專案的任何一行主原始碼。」</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 19,
    section: "規劃模式的奧秘",
    layout: "diagram",
    title: "規劃模式的五大運作階段",
    contentHtml: `
      <h3>規劃模式的五大運作階段</h3>
      <p class="intro-text">這套流程是 Antigravity 能維持極高品質、不改壞程式碼的關鍵保證：</p>
      <div class="diagram-container">
        <div class="flow-step" style="padding: 0.5rem 1rem;">
          <div class="flow-step-num" style="background-color: #6366f1;">1</div>
          <div class="flow-step-desc"><strong>研究調查 (Research)</strong> <span>唯讀探索專案，找出受影響的程式碼範圍與關聯。</span></div>
        </div>
        <div class="flow-step" style="padding: 0.5rem 1rem;">
          <div class="flow-step-num" style="background-color: #8b5cf6;">2</div>
          <div class="flow-step-desc"><strong>撰寫計畫 (Implementation Plan)</strong> <span>寫出詳細的實作計畫書 (implementation_plan.md) 提交給你。</span></div>
        </div>
        <div class="flow-step" style="padding: 0.5rem 1rem;">
          <div class="flow-step-num" style="background-color: #ec4899;">3</div>
          <div class="flow-step-desc"><strong>用戶審核 (User Approval)</strong> <span>你在對話框中點選「同意」按鈕，AI 才會開始動手。</span></div>
        </div>
        <div class="flow-step" style="padding: 0.5rem 1rem;">
          <div class="flow-step-num" style="background-color: #10b981;">4</div>
          <div class="flow-step-desc"><strong>任務執行 (Execute & task.md)</strong> <span>AI 建立 TODO 清單，依序修改代碼並打勾追蹤。</span></div>
        </div>
        <div class="flow-step" style="padding: 0.5rem 1rem;">
          <div class="flow-step-num" style="background-color: #06b6d4;">5</div>
          <div class="flow-step-desc"><strong>品質驗證 (Verify & walkthrough.md)</strong> <span>運行測試與打包建置，並寫出成果報告向你回報。</span></div>
        </div>
      </div>
    `
  },
  {
    id: 20,
    section: "規劃模式的奧秘",
    layout: "bullets",
    title: "第一階段：研究調查 (Research) - 精準查找",
    contentHtml: `
      <h3>階段一：研究調查 (Research)</h3>
      <p class="intro-text">當你說：<i>「幫我修復購物車結帳時，折扣金額計算錯誤的 Bug。」</i>，AI 不會馬上改代碼，它會先扮演偵探：</p>
      <ul class="bullet-list" style="margin-top: 1.5rem;">
        <li><strong>搜尋關鍵字</strong>：使用 <code>grep_search</code> 在專案內搜尋 "checkout", "discount", "cart" 等關鍵字。</li>
        <li><strong>研讀關聯檔案</strong>：使用 <code>view_file</code> 查閱相關檔案（例如：cart_service.py、payment_controller.py）。</li>
        <li><strong>不進行破壞性操作</strong>：此階段完全是<b>「唯讀」(Read-Only)</b> 的。它不會去寫入或更改任何檔案，也不會執行任何可能更改系統狀態的指令。</li>
        <li><strong>找出病灶</strong>：確認計算公式的錯誤所在（例如：少乘了折價券的百分比）。</li>
      </ul>
    `
  },
  {
    id: 21,
    section: "規劃模式的奧秘",
    layout: "split-content",
    title: "第二階段：設計計畫書 (Implementation Plan)",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>階段二：設計計畫書</h3>
          <p class="intro-text">研究完畢後，Antigravity 會產出一份 Markdown 格式的計畫書，路徑固定在專案內部的隱藏目錄下。</p>
          <ul class="bullet-list">
            <li><strong>列出修改目標</strong>：清楚告訴你它會動到哪些檔案。</li>
            <li><strong>標明修改動作</strong>：使用 <code>[MODIFY]</code>、<code>[NEW]</code>、<code>[DELETE]</code> 來標記新增或修改。</li>
            <li><strong>說明驗證方法</strong>：它會用什麼指令來證明修改是正確的（例如跑哪一個測試檔案）。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card">
            <h4><span class="card-icon">📝</span> 計畫書範本位置</h4>
            <p style="font-family: monospace; font-size: 0.8rem; background-color: var(--bg-secondary); padding: 0.5rem; border-radius: 6px;">
              &lt;appDataDir&gt;/brain/&lt;conversation-id&gt;/implementation_plan.md
            </p>
            <p style="font-size: 0.85rem; margin-top: 0.5rem; color: var(--text-secondary);">這份計畫書是一份「活文件」(Living Document)，隨著需求變更，AI 會隨時更新它。</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 22,
    section: "規劃模式的奧秘",
    layout: "code-mockup",
    title: "實作計畫書 (implementation_plan.md) 剖析",
    contentHtml: `
      <div class="code-mockup">
        <div class="code-header">
          <div class="code-dots"><div class="code-dot dot-red"></div><div class="code-dot dot-yellow"></div><div class="code-dot dot-green"></div></div>
          <span class="code-title">implementation_plan.md</span>
        </div>
        <div class="code-body" style="font-size: 0.75rem;">
# 修正購物車折扣計算 Bug

## 預計修改項目
### [MODIFY] [cart_service.py](file:///path/to/cart_service.py)
- 修改 <code>calculate_total</code> 函式，確保在計算折扣 (discount) 時，金額不會變成負數。

## 驗證計畫
### 自動測試
- 執行 $ <span class="code-keyword">pytest tests/test_cart.py</span> 確保測試案例通過。
        </div>
      </div>
      <p style="font-size: 0.9rem; margin-top: 1rem; color: var(--text-secondary);">
        💡 計畫書結構嚴謹，區分修改範圍與驗證方法，對初學者來說是極佳的程式架構學習範本。
      </p>
    `
  },
  {
    id: 23,
    section: "規劃模式的奧秘",
    layout: "split-content",
    title: "第三階段：用戶審核 (User Approval)",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>階段三：用戶審核</h3>
          <p class="intro-text">計畫書寫好後，Antigravity 會暫停，把控制權交還給你。此時它在對話框中會呈現等待狀態。</p>
          <ul class="bullet-list">
            <li><strong>你的核心任務</strong>：仔細閱讀計畫書，看看它打算改的檔案對不對，邏輯合不合心意。</li>
            <li><strong>核准計畫 (Proceed)</strong>：如果滿意，直接點選「同意/Proceed」，AI 就會像拿到尚方寶劍一樣開始實作。</li>
            <li><strong>提出修正</strong>：如果不滿意，你可以直接在對話框回覆它：「我覺得改 A 檔案不好，你應該改 B 檔案。」AI 會乖乖回去修改計畫書，直到你滿意。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card" style="background-color: rgba(245, 158, 11, 0.1); border-color: #f59e0b; width: 100%;">
            <h4 style="color: #f59e0b;"><span class="card-icon">⚠️</span> 關鍵提醒</h4>
            <p style="font-size: 0.85rem; line-height: 1.5;">初學者千萬不要「盲目點同意」。養成每次點 Proceed 前，至少瞄一眼它要動哪些檔案的習慣，這是成為資深開發者的第一步。</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 24,
    section: "規劃模式的奧秘",
    layout: "split-content",
    title: "第四階段：任務執行與追蹤 (Execute & task.md)",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>階段四：任務執行與追蹤</h3>
          <p class="intro-text">你按下「同意」後，Antigravity 會自動建立一個任務清單檔案 <code>task.md</code>，並開始大刀闊斧地改代碼。</p>
          <ul class="bullet-list">
            <li><strong>進度追蹤 (task.md)</strong>：將大任務拆解成很多個 TODO。</li>
            <li><strong>實行修改</strong>：使用 <code>replace_file_content</code> 或 <code>multi_replace_file_content</code> 進行精準修改。</li>
            <li><strong>即時打勾</strong>：完成一項就在 <code>task.md</code> 裡標記 <code>[x]</code>，正在做的標記 <code>[/]</code>。你可以隨時打開這個檔案看進度。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="code-mockup">
            <div class="code-header">
              <div class="code-dots"><div class="code-dot dot-red"></div><div class="code-dot dot-yellow"></div><div class="code-dot dot-green"></div></div>
              <span class="code-title">task.md</span>
            </div>
            <div class="code-body" style="font-size: 0.8rem;">
              - [x] 備份現有代碼
              - [/] 修改 cart_service.py 計算公式
              - [ ] 撰寫單元測試
              - [ ] 執行測試指令
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 25,
    section: "規劃模式的奧秘",
    layout: "bullets",
    title: "第五階段：驗證與總結報告 (Verify & walkthrough.md)",
    contentHtml: `
      <h3>階段五：品質驗證與成果報告</h3>
      <p class="intro-text">代碼寫完了，任務就算結束了嗎？在 Antigravity 中還沒！它會完成最重要的一哩路：</p>
      <ul class="bullet-list" style="margin-top: 1.5rem;">
        <li><strong>自動跑測試</strong>：依據計畫書中的驗證計畫，執行測試指令（例如跑 <code>pytest</code> 或 <code>npm test</code>）。</li>
        <li><strong>驗證失敗處理</strong>：如果跑測試時發現紅字 (Bug)，觸發 Self-healing 機制，自動去把剛剛改壞的 code 修好。</li>
        <li><strong>撰寫 Walkthrough 報告</strong>：測試完全綠燈通過後，AI 會撰寫 <code>walkthrough.md</code> 成果報告，說明它最後究竟改了哪些地方、測試結果是什麼。</li>
        <li><strong>提交覆核</strong>：你看完 <code>walkthrough.md</code> 確定沒問題後，任務才算完美落地！</li>
      </ul>
    `
  },
  {
    id: 26,
    section: "規劃模式的奧秘",
    layout: "bullets",
    title: "為什麼「規劃模式」比直接寫代碼安全？",
    contentHtml: `
      <h3>安全第一的開發流程</h3>
      <p class="intro-text">傳統的寫程式 AI 往往因為「幻覺」，給你一堆會報錯的垃圾代碼，或者是把本來會動的專案改得一團糟。規劃模式能帶給初學者三大保障：</p>
      <ul class="bullet-list" style="margin-top: 1.5rem;">
        <li><strong>防範未然</strong>：因為先做了 Research，AI 知道修改 A 檔案會不會弄壞 B 功能，大大降低系統崩潰機率。</li>
        <li><strong>可隨時反悔</strong>：在 Approval 階段，你如果發現 AI 的思維跑偏了，可以在它破壞代碼前，一句話喝止它並引導回正軌。</li>
        <li><strong>邏輯透明化</strong>：對新手來說，最難的是理解寫程式的「思考脈絡」。規劃模式強迫 AI 把它的思考過程寫成文字，這就是最棒的教科書！</li>
      </ul>
    `
  },

  // PART 4: 核心工具箱 (27-35)
  {
    id: 27,
    section: "核心工具箱",
    layout: "chapter",
    title: "第四部分：核心工具箱 (Core Toolbox) 的威力",
    contentHtml: `
      <div class="layout-chapter">
        <div class="chapter-num">PART 4</div>
        <h2>核心工具箱 (Core Toolbox) 的威力</h2>
        <p>「工欲善其事，必先利其器。」帶你參觀 Antigravity 內建的超能力工具，了解它是如何透過這些工具與你的電腦和網路世界互動的。</p>
      </div>
    `
  },
  {
    id: 28,
    section: "核心工具箱",
    layout: "bullets",
    title: "Antigravity 超能力工具箱概覽",
    contentHtml: `
      <h3>超能力工具箱概覽</h3>
      <p class="intro-text">Antigravity 之所以強大，是因為它能調用一系列由系統安全控管的 API 工具。這些工具大致分為五大類：</p>
      <ul class="bullet-list" style="margin-top: 1.5rem;">
        <li><strong>檔案讀寫工具</strong>：如 <code>view_file</code>, <code>write_to_file</code>, <code>replace_file_content</code>（精準代碼置換）。</li>
        <li><strong>搜尋檢索工具</strong>：如 <code>grep_search</code>（在成千上萬行程式中快速定位）。</li>
        <li><strong>系統執行工具</strong>：如 <code>run_command</code>（在電腦的 Shell 裡執行任何命令）。</li>
        <li><strong>網頁瀏覽與外部工具</strong>：如 <code>search_web</code>, <code>read_url_content</code>（取得線上即時文件）。</li>
        <li><strong>定時與管理工具</strong>：如 <code>schedule</code>（背景排程工作）、<code>manage_subagents</code>（管理子代理人）。</li>
      </ul>
    `
  },
  {
    id: 29,
    section: "核心工具箱",
    layout: "split-content",
    title: "檔案操控大師：精準的檔案讀寫工具",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>精準的檔案修改機制</h3>
          <p class="intro-text">Antigravity 不會粗暴地用大塊程式碼覆蓋你的整個檔案。它使用專門設計的檔案工具：</p>
          <ul class="bullet-list">
            <li><strong>view_file</strong>：一次最多唯讀檢視 800 行程式碼，避免撐爆記憶體。</li>
            <li><strong>replace_file_content</strong>：提供精確的 StartLine 與 EndLine，將舊的代碼置換成新代碼。</li>
            <li><strong>multi_replace_file_content</strong>：如果要修改同一檔案裡多個不連續的地方，一次打包送出，極速省時。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="code-mockup">
            <div class="code-header">
              <div class="code-dots"><div class="code-dot dot-red"></div><div class="code-dot dot-yellow"></div><div class="code-dot dot-green"></div></div>
              <span class="code-title">replace_file_content 範例</span>
            </div>
            <div class="code-body" style="font-size: 0.75rem;">
TargetContent:
<span style="color: #ef4444;">- return a + b</span>

ReplacementContent:
<span style="color: #10b981;">+ // 確保輸入值皆為數字
+ const numA = Number(a);
+ const numB = Number(b);
+ return numA + numB;</span>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 30,
    section: "核心工具箱",
    layout: "bullets",
    title: "全域檢索利器：grep_search",
    contentHtml: `
      <h3>全域檢索利器：grep_search</h3>
      <p class="intro-text">當專案很大，有幾百個資料夾跟幾千個檔案時，人腦根本記不住某個函式定義在哪裡。這時候 AI 會召喚 <code>grep_search</code>：</p>
      <ul class="bullet-list" style="margin-top: 1.5rem;">
        <li><strong>快如閃電</strong>：底層使用 Ripgrep 技術，在零點幾秒內掃描整個專案。</li>
        <li><strong>精確定位</strong>：它不僅能找出哪些檔案包含關鍵字，還能回傳確切的<b>行號 (Line Number)</b>與<b>該行內容</b>。</li>
        <li><strong>過濾雜訊</strong>：能指定只搜尋特定的檔案格式（如 <code>*.py</code>）或排除特定目錄（如排除 <code>node_modules</code>），防止垃圾資訊干擾 AI 決策。</li>
      </ul>
      <p style="margin-top: 1.5rem; font-size: 0.9rem; color: var(--text-muted);">
        💡 對初學者而言，這免去了在 VS Code 側邊欄一個個檔案慢慢點開的痛苦。
      </p>
    `
  },
  {
    id: 31,
    section: "核心工具箱",
    layout: "split-content",
    title: "終端機指揮官：run_command",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>終端機指揮官：run_command</h3>
          <p class="intro-text">這是 AI 最強大的「手」。它可以在你本機的環境（Windows 上的 PowerShell）下達終端機指令。</p>
          <ul class="bullet-list">
            <li><strong>自動化命令</strong>：自動執行 <code>npm install</code>、<code>python main.py</code>、<code>git commit</code> 等。</li>
            <li><strong>非同步執行與背景任務</strong>：如果是一個需要一直跑的伺服器（例如 <code>npm run dev</code>），它會把它送到背景，並用定時任務監控狀態。</li>
            <li><strong>極致安全保護</strong>：<b>「不准 CD 命令」</b>！系統禁止 AI 執行 <code>cd</code> 改目錄，以防路徑混亂。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card" style="background-color: rgba(239, 68, 68, 0.1); border-color: #ef4444; width: 100%;">
            <h4 style="color: #ef4444;"><span class="card-icon">⚠️</span> 安全鐵律</h4>
            <p style="font-size: 0.85rem; line-height: 1.5;">
              為了防止惡意代碼損壞你的電腦，任何 <code>run_command</code> 的調用<b>都必須經過你（使用者）的點擊授權</b>。AI 絕對無法偷偷背著你執行危險的指令。
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 32,
    section: "核心工具箱",
    layout: "bullets",
    title: "網頁搜集器：search_web 與 read_url_content",
    contentHtml: `
      <h3>網頁搜集器：突破知識時空限制</h3>
      <p class="intro-text">大語言模型的訓練資料往往只停留在過去。如果我們在用 2026 年最新推出的套件，AI 要怎麼懂？</p>
      <ul class="bullet-list" style="margin-top: 1.5rem;">
        <li><strong>search_web</strong>：主動在 Google 上搜尋該套件的最新說明與解決方案。</li>
        <li><strong>read_url_content</strong>：直接爬取該網頁的內容，並自動轉成 Markdown 乾淨的純文字格式讓 AI 閱讀。</li>
        <li><strong>沒有幻覺，只有事實</strong>：當 AI 遇到看不懂的 Bug，它會上 StackOverflow 或 GitHub Issues 上面查有沒有人遇過類似問題，找到解法再回頭修復你的專案。</li>
      </ul>
    `
  },
  {
    id: 33,
    section: "核心工具箱",
    layout: "split-content",
    title: "UI 生成器：generate_image",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>UI 視覺生成器：generate_image</h3>
          <p class="intro-text">在開發網頁前端或設計 App 時，你可能常常需要「放一張示意圖」或「設計一個精美的按鈕與 Layout」。</p>
          <ul class="bullet-list">
            <li><strong>拒絕預留占位符 (No Placeholders)</strong>：Antigravity 開發規範要求不使用無聊的假圖片。</li>
            <li><strong>自主生成設計稿</strong>：呼叫 <code>generate_image</code> 繪製網頁 UI Mockup、Logo，或是精美的產品示意圖。</li>
            <li><strong>迭代美化</strong>：AI 會根據你的回饋，傳入原圖進行局部修改，直到 UI 達到企業級的高級感。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card" style="background-color: var(--accent-glow); border-color: var(--accent-primary); width: 100%;">
            <h4 style="font-size: 1.1rem;"><span class="card-icon">🎨</span> 美學指南</h4>
            <p style="font-size: 0.85rem; line-height: 1.5; margin-top: 0.5rem;">
              Antigravity 內建高標準的美學魂：不採用死板的純紅、純藍，優先使用漸層色、毛玻璃效果 (Glassmorphism)、微互動動畫，讓產出的網頁第一眼就驚艷使用者。
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 34,
    section: "核心工具箱",
    layout: "bullets",
    title: "定時任務排程器：schedule",
    contentHtml: `
      <h3>定時任務排程器：schedule</h3>
      <p class="intro-text">如果你有一個需要跑很久的工作（例如：建置大型專案要花 10 分鐘，或是要定時監控網頁伺服器是否正常運行）：</p>
      <ul class="bullet-list" style="margin-top: 1.5rem;">
        <li><strong>告別無效等待</strong>：AI 不需要一直發指令「Sleep」，這會浪費大量額度與系統資源。</li>
        <li><strong>One-shot Timer (一次性計時器)</strong>：AI 可以定一個「3分鐘後叫醒我」的計時器，然後暫時休眠，時間一到系統會自動發送通知喚醒 AI 來檢查結果。</li>
        <li><strong>Recurring Cron (循環任務)</strong>：使用標準的 Cron 表達式（例如 <code>*/5 * * * *</code>），讓 AI 每五分鐘自動起床巡檢你的服務狀態。</li>
      </ul>
    `
  },
  {
    id: 35,
    section: "核心工具箱",
    layout: "split-content",
    title: "安全鐵閘：權限管理機制",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>安全鐵閘：權限管理</h3>
          <p class="intro-text">安全永遠是第一考量。系統內建了嚴密的權限清單來限制 AI 的行為：</p>
          <ul class="bullet-list">
            <li><strong>唯讀免申報</strong>：讀取一般程式碼檔案 (<code>read_file</code>) 預設是允許的，這樣 AI 才能快速了解專案。</li>
            <li><strong>修改需核准</strong>：寫入重要系統設定、執行系統指令 (<code>command</code>)，一律會跳出提示請求使用者授權。</li>
            <li><strong>黑名單機制 (Denied)</strong>：極敏感的安全路徑（如 <code>.git</code> 憑證、金鑰金庫檔）會直接被系統 Denied，AI 連碰都碰不到。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card" style="border-left: 4px solid var(--accent-secondary);">
            <h4><span class="card-icon">🛡️</span> 三色安全級別</h4>
            <p style="font-size: 0.85rem; line-height: 1.5; margin-top: 0.5rem;">
              🟢 <b>綠色 (Allowed)</b>: 唯讀探索專案。<br>
              🟡 <b>黃色 (Ask/Prompt)</b>: 執行指令、改動代碼，需人為點擊確認。<br>
              🔴 <b>紅色 (Denied)</b>: 敏感路徑與系統密鑰，硬性禁止存取。
            </p>
          </div>
        </div>
      </div>
    `
  },

  // PART 5: 快速斜線指令 (36-43)
  {
    id: 36,
    section: "快速斜線指令",
    layout: "chapter",
    title: "第五部分：快速斜線指令 (Slash Commands)",
    contentHtml: `
      <div class="layout-chapter">
        <div class="chapter-num">PART 5</div>
        <h2>快速斜線指令 (Slash Commands)</h2>
        <p>掌握這幾組神奇的快捷鍵！斜線指令是人機互動的秘密通道，能一鍵啟動 Antigravity 的進階運作模式。</p>
      </div>
    `
  },
  {
    id: 37,
    section: "快速斜線指令",
    layout: "bullets",
    title: "什麼是斜線指令？快捷捷徑介紹",
    contentHtml: `
      <h3>斜線指令：與 AI 溝通的魔法</h3>
      <p class="intro-text">在聊天對話框中，你不用打一長串中文去解釋你想做什麼。只要輸入一個「/」字元，就能呼叫內建的自動化工作流：</p>
      <ul class="bullet-list" style="margin-top: 1.5rem;">
        <li><strong>一鍵切換模式</strong>：讓 AI 知道你要切換到特定的高階任務。</li>
        <li><strong>啟動專業工具</strong>：例如一鍵啟動瀏覽器測試、開啟面試模式、或指派任務給多個子代理人。</li>
        <li><strong>效率加倍</strong>：對初學者來說，這些指令提供了一套「標準作業程序 (SOP)」，照著指令打，就能確保得到高品質的產出。</li>
      </ul>
    `
  },
  {
    id: 38,
    section: "快速斜線指令",
    layout: "split-content",
    title: "/goal 指令：設定終極目標，奮鬥到成功",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>/goal：永不放棄的奮鬥模式</h3>
          <p class="intro-text">當你手上有一個非常艱鉅、需要反覆除錯、甚至需要跑上一整晚的超大任務時，使用 <code>/goal</code>：</p>
          <ul class="bullet-list">
            <li><strong>自動化循環</strong>：AI 會自動拆解步驟，做完一步接著做下一步，不需要你一直給它按 Proceed。</li>
            <li><strong>頑強的除錯毅力</strong>：遇到錯誤會自動研究、自動修改、自動重跑，直到達成目標。</li>
            <li><strong>適用場景</strong>：建置全新的複雜系統、進行大規模的舊代碼重構。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card" style="background-color: var(--accent-glow); border-color: var(--accent-primary); width: 100%;">
            <h4><span class="card-icon">🏁</span> 使用範例</h4>
            <p style="font-family: monospace; font-size: 0.9rem; margin-top: 0.5rem;">
              <b>/goal</b> 幫我把這個專案的所有 Python 代碼，全部改寫並升級到 FastAPI 框架，且單元測試覆蓋率要達到 90% 以上。
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 39,
    section: "快速斜線指令",
    layout: "split-content",
    title: "/schedule 指令：設定定時與排程任務",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>/schedule：定時自動巡檢</h3>
          <p class="intro-text">如果你希望 AI 充當一個背景的守護進程，定期幫你檢查工作成果：</p>
          <ul class="bullet-list">
            <li><strong>非同步定時監看</strong>：設定一個定時鬧鐘（例如：10 分鐘後），AI 就會乖乖去休息，時間到自動起來檢查任務。</li>
            <li><strong>自動化腳本運行</strong>：每天凌晨三點自動跑一次備份程式，或是每小時跑一次測試，確認同事交的 code 沒有弄壞你的功能。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card">
            <h4><span class="card-icon">⏰</span> 使用範例</h4>
            <p style="font-family: monospace; font-size: 0.9rem; margin-top: 0.5rem;">
              <b>/schedule</b> CronExpression="0 * * * *" Prompt="執行本機 server 健康檢查，若有報錯請立刻通知我"
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 40,
    section: "快速斜線指令",
    layout: "split-content",
    title: "/browser 指令：開啟網頁瀏覽與動態測試",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>/browser：視覺化網頁除錯</h3>
          <p class="intro-text">很多寫網頁的 Bug，只看代碼是找不出來的（例如：按鈕點了沒反應、畫面跑版）。<code>/browser</code> 指令：</p>
          <ul class="bullet-list">
            <li><strong>啟動無頭瀏覽器 (Chrome)</strong>：讓 AI 在背景打開瀏覽器，直接載入你寫好的網頁。</li>
            <li><strong>模擬真實使用者</strong>：AI 會自動模擬使用者點擊、填寫表單、捲動頁面。</li>
            <li><strong>截圖與錄影</strong>：將執行畫面截圖或錄影下來，回傳給 AI 進行版面視覺分析。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card" style="background-color: var(--accent-glow); border-color: var(--accent-primary); width: 100%;">
            <h4><span class="card-icon">🌐</span> 使用範例</h4>
            <p style="font-family: monospace; font-size: 0.9rem; margin-top: 0.5rem;">
              <b>/browser</b> 打開 localhost:3000，並幫我點擊「購物車」按鈕，看看畫面的排版是否正常，如果有重疊的文字請幫我修正。
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 41,
    section: "快速斜線指令",
    layout: "split-content",
    title: "/grill-me 指令：需求釐清面試，拒絕做白工",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>/grill-me：靈魂拷問模式</h3>
          <p class="intro-text">初學者最常犯的錯就是：<b>沒想清楚需求就開始寫程式，結果做了半天發現方向完全不對</b>。</p>
          <ul class="bullet-list">
            <li><strong>主動面試</strong>：AI 會變身成嚴格的資深產品經理 (PM)，用多選題或問答題主動拷問你。</li>
            <li><strong>對齊心智模型</strong>：釐清你的設計偏好、資料庫規格、使用場景。</li>
            <li><strong>防範於未然</strong>：用 5 分鐘的對答，省下未來 5 小時的白工修改時間。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card" style="border-left: 4px solid var(--accent-secondary);">
            <h4><span class="card-icon">💬</span> Grill-Me 現場還原</h4>
            <p style="font-size: 0.85rem; line-height: 1.5; margin-top: 0.5rem;">
              <b>AI:</b> 「在我們開始設計購物車前，我想跟你確認三件事：<br>
              1. 購物車資料要存在瀏覽器 (Cookie) 還是資料庫？<br>
              2. 庫存不足時，是否允許超賣？<br>
              3. 折扣碼可以疊加使用嗎？」
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 42,
    section: "快速斜線指令",
    layout: "split-content",
    title: "/teamwork-preview 指令：多代理人團隊預覽",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>/teamwork-preview：團隊分工預演</h3>
          <p class="intro-text">當專案規模龐大，需要前端、後端、測試工程師同時動手時：</p>
          <ul class="bullet-list">
            <li><strong>分工藍圖</strong>：AI 會畫出一張精美的組織分工圖，告訴你它打算派出哪些「虛擬專家」。</li>
            <li><strong>職責界定</strong>：明確定義每個虛擬專家的輸入、輸出、以及彼此的合作關係。</li>
            <li><strong>新手震撼</strong>：讓你親身體驗在大型軟體公司裡，多個工程師團隊是怎麼協同運作的。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card">
            <h4><span class="card-icon">👥</span> 使用範例</h4>
            <p style="font-family: monospace; font-size: 0.9rem; margin-top: 0.5rem;">
              <b>/teamwork-preview</b> 我們要開發一個包含聊天室的社群網站，請規劃代理人團隊分工。
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 43,
    section: "快速斜線指令",
    layout: "split-content",
    title: "/learn 指令：記憶學習，越用越聰明",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>/learn：個人化記憶引擎</h3>
          <p class="intro-text">如果每次開啟新對話，都要重新告訴 AI「我喜歡用 TailwindCSS」、「我的伺服器埠號是 8080」，那就太蠢了。</p>
          <ul class="bullet-list">
            <li><strong>永久儲存偏好</strong>：當你糾正了 AI 的某個習慣，或者解決了一個複雜的環境設定後，輸入 <code>/learn</code>。</li>
            <li><strong>寫入設定檔</strong>：AI 會將這個知識寫入專案的客製化設定中。</li>
            <li><strong>越用越懂你</strong>：下一次它會自動套用這些偏好，成為最懂你開發習慣的靈魂伴侶。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card" style="background-color: var(--accent-glow); border-color: var(--accent-primary); width: 100%;">
            <h4><span class="card-icon">🧠</span> 使用範例</h4>
            <p style="font-family: monospace; font-size: 0.9rem; margin-top: 0.5rem;">
              <b>/learn</b> 請記住我這個專案一律使用繁體中文進行變數命名與註解，並且一律使用 ESM 模組規範。
            </p>
          </div>
        </div>
      </div>
    `
  },

  // PART 6: 子代理人與團隊協作 (44-48)
  {
    id: 44,
    section: "子代理人與團隊協作",
    layout: "chapter",
    title: "第六部分：子代理人與團隊協作 (Subagents)",
    contentHtml: `
      <div class="layout-chapter">
        <div class="chapter-num">PART 6</div>
        <h2>子代理人與團隊協作 (Subagents)</h2>
        <p>「一個人走得快，一群人走得遠。」探索 Antigravity 的分身術，了解它是如何召喚不同領域的 AI 專家共同完成大型專案的。</p>
      </div>
    `
  },
  {
    id: 45,
    section: "子代理人與團隊協作",
    layout: "split-content",
    title: "什麼是子代理人 (Subagents)？",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>AI 分身術：子代理人</h3>
          <p class="intro-text">在處理大型、多元的開發任務時，如果只有一個 AI 主線程在跑，很容易因為上下文資訊過多而「失憶」或卡死。這時需要<b>子代理人 (Subagents)</b>：</p>
          <ul class="bullet-list">
            <li><strong>獨立的思維脈絡</strong>：每個子代理人擁有獨立的對話上下文，專注在它被指派的單一小任務上。</li>
            <li><strong>平行作業</strong>：主代理人可以在前台與你聊天，而三個子代理人同時在背景默默搬磚。</li>
            <li><strong>隨建隨拆</strong>：任務一完成，子代理人立刻被關閉銷毀，節省系統資源。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card" style="background-color: var(--accent-glow); border-color: var(--accent-primary); width: 100%;">
            <h4><span class="card-icon">⚡</span> 子代理人的大優勢</h4>
            <p style="font-size: 0.9rem; line-height: 1.6; margin-top: 0.5rem;">
              當遇到複雜的第三方 API，主代理人可以派一個 Research 子代理人專門在網路搜尋文獻，把千頁文件濃縮成 10 行調用精華，直接餵給主代理人。這就是最強大的分工！
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 46,
    section: "子代理人與團隊協作",
    layout: "bullets",
    title: "內建子代理人 1：research (代碼研究專家)",
    contentHtml: `
      <h3>代碼研究專家：research</h3>
      <p class="intro-text">專案檔案太多、架構太亂？主代理人隨時可以派它的得力助手 <code>research</code> 登場：</p>
      <ul class="bullet-list" style="margin-top: 1.5rem;">
        <li><strong>唯讀探索權限</strong>：<code>research</code> 子代理人被配置了「唯讀」工具，它只能查代碼、搜網頁、讀文件，絕對沒有權限修改你的任何檔案，百分之百安全。</li>
        <li><strong>背景默默耕耘</strong>：當你在前台確認 UI 版面時，它正在背景幫你閱讀幾萬行的 legacy 代碼邏輯。</li>
        <li><strong>產出精華報告</strong>：完成後，它會回報給主代理人一份結構清晰的「分析報告」，告訴主代理人修改哪幾個檔案最合適。</li>
      </ul>
    `
  },
  {
    id: 47,
    section: "子代理人與團隊協作",
    layout: "bullets",
    title: "內建子代理人 2：self (複製另一個自己)",
    contentHtml: `
      <h3>複製另一個自己：self</h3>
      <p class="intro-text">當主代理人手頭的工作卡住，需要跳出去驗證一個完全不相關的想法，但又不想破壞當前對話上下文時：</p>
      <ul class="bullet-list" style="margin-top: 1.5rem;">
        <li><strong>完整的自己</strong>：<code>self</code> 子代理人會全數繼承主代理人所有的系統提示詞、工具操作權限、以及模型配置。</li>
        <li><strong>分支實驗室</strong>：它就像是開了一個沙盒分支，在裡面任意安裝套件、下指令測試，完全不會弄髒主代理人正在進行的程式碼實作。</li>
        <li><strong>驗證成功再合併</strong>：在分支測試成功後，把成功的方案回報給主代理人，主代理人再將其應用到主程式中。</li>
      </ul>
    `
  },
  {
    id: 48,
    section: "子代理人與團隊協作",
    layout: "split-content",
    title: "如何建立自訂子代理人？define_subagent",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>自訂代理人：define_subagent</h3>
          <p class="intro-text">如果你想成立一個特殊的虛擬部門，你可以直接命令 AI 動態定義新的子代理人：</p>
          <ul class="bullet-list">
            <li><strong>設定人設與職責 (Role)</strong>：例如「資料庫優化大師」、「繁簡翻譯小幫手」。</li>
            <li><strong>配置專屬系統提示詞 (System Prompt)</strong>：只給它跟它任務相關的指令。</li>
            <li><strong>指派特定工具群</strong>：可以限制它只准用搜尋工具，或者只准用檔案修改工具。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="code-mockup">
            <div class="code-header">
              <div class="code-dots"><div class="code-dot dot-red"></div><div class="code-dot dot-yellow"></div><div class="code-dot dot-green"></div></div>
              <span class="code-title">define_subagent 宣告</span>
            </div>
            <div class="code-body" style="font-size: 0.75rem;">
Name: "SqlOptimizer"
Role: "Database Tuning Expert"
SystemPrompt: "你是一個資料庫調優專家。
你只能讀取 .sql 檔案，
並提出提升查詢效率的 index 建議。"
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 49,
    section: "子代理人與團隊協作",
    layout: "bullets",
    title: "代理人間的溝通橋樑：send_message",
    contentHtml: `
      <h3>代理人間的通訊網路：send_message</h3>
      <p class="intro-text">多代理人系統中，AI 彼此之間是怎麼說話的？他們使用專用的 <code>send_message</code> 工具：</p>
      <ul class="bullet-list" style="margin-top: 1.5rem;">
        <li><strong>不吵到人類</strong>：子代理人彼此之間的頻繁交流、發送代碼片段、討論除錯方案，都是在背景默默進行的，不會瘋狂洗版你的聊天視窗。</li>
        <li><strong>進度匯報</strong>：一旦有了關鍵性的結論，主代理人會整理成人類看得懂的繁體中文，在聊天視窗向你做大匯報。</li>
        <li><strong>主動喚醒機制</strong>：當子代理人在背景跑完任務發送 <code>send_message</code> 給主代理人時，系統會自動喚醒主代理人處理，不需要你手動去重新載入頁面或一直盯著進度。</li>
      </ul>
    `
  },

  // PART 7: 客製化設定 (50-53)
  {
    id: 50,
    section: "客製化設定",
    layout: "chapter",
    title: "第七部分：客製化設定 (Customizations)",
    contentHtml: `
      <div class="layout-chapter">
        <div class="chapter-num">PART 7</div>
        <h2>客製化設定 (Customizations)</h2>
        <p>「因材施教，因專案施規。」學會如何自訂技能 (Skills) 與專案規則 (Rules)，打造一個完美融入你工作流程的專屬 AI 助手。</p>
      </div>
    `
  },
  {
    id: 51,
    section: "客製化設定",
    layout: "split-content",
    title: "客製化設定概覽：讓 AI 聽話的秘訣",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>馴服 AI：自訂技能與規則</h3>
          <p class="intro-text">不同專案有不同的寫法，如果你不給 AI 設限，它可能會用它自己的偏好亂寫。Antigravity 提供兩種層級的客製化：</p>
          <ul class="bullet-list">
            <li><strong>專案規則 (Rules)</strong>：約束 AI 的行為規範，例如「一定要寫單元測試」、「變數命名方式」。寫在 <code>AGENTS.md</code> 檔案中。</li>
            <li><strong>自訂技能 (Skills)</strong>：教導 AI 原本不會的絕招，例如操作某個特別的硬體設備或內部開發的私有 API。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card" style="background-color: var(--accent-glow); border-color: var(--accent-primary); width: 100%;">
            <h4><span class="card-icon">📂</span> 設定目錄結構</h4>
            <p style="font-family: monospace; font-size: 0.85rem; line-height: 1.5; margin-top: 0.5rem;">
              專案根目錄/<br>
              └── .agents/ (專案級設定)<br>
              &nbsp;&nbsp;&nbsp;&nbsp;├── AGENTS.md (客製化規則)<br>
              &nbsp;&nbsp;&nbsp;&nbsp;└── skills/ (自訂技能目錄)
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 52,
    section: "客製化設定",
    layout: "code-mockup",
    title: "自訂技能 (Skills)：撰寫你的第一招",
    contentHtml: `
      <div class="code-mockup">
        <div class="code-header">
          <div class="code-dots"><div class="code-dot dot-red"></div><div class="code-dot dot-yellow"></div><div class="code-dot dot-green"></div></div>
          <span class="code-title">.agents/skills/clean_log/SKILL.md</span>
        </div>
        <div class="code-body" style="font-size: 0.75rem;">
---
name: "clean_log"
description: "清理專案中多餘的 console.log 偵錯代碼"
---
# 執行步驟
1. 使用 grep_search 找出所有 console.log。
2. 評估該日誌是否重要。若為暫時偵錯用，將其刪除。
3. 執行 npm run build 確保刪除後編譯正常。
        </div>
      </div>
      <p style="font-size: 0.9rem; margin-top: 1rem; color: var(--text-secondary);">
        💡 當你在聊天中提到「幫我清理日誌」時，AI 會自動比對並觸發此技能，按照這份 SOP 完美執行！
      </p>
    `
  },
  {
    id: 53,
    section: "客製化設定",
    layout: "bullets",
    title: "專案規則 (Rules)：強制約束 AI 的行為",
    contentHtml: `
      <h3>專案規則 (Rules) 的無上權威</h3>
      <p class="intro-text">在 <code>.agents/AGENTS.md</code> (或全域設定中的 AGENTS.md) 裡，你可以用 Markdown 條列式寫下你的底線規矩：</p>
      <ul class="bullet-list" style="margin-top: 1.5rem;">
        <li><strong>寫作風格</strong>：例如「所有註解必須是繁體中文」、「採用 2 個空格縮排」。</li>
        <li><strong>排除路徑</strong>：例如「嚴禁讀取或修改 <code>data/sensitive/</code> 資料夾下的任何檔案」。</li>
        <li><strong>架構規範</strong>：例如「新增路由時，一律要在 <code>routes/index.js</code> 裡進行註冊」。</li>
        <li><strong>AI 絕對服從</strong>：Antigravity 在每次思考前都會優先加載這份檔案，它會把這份文件視為至高無上的法律，絕不違背。</li>
      </ul>
    `
  },

  // PART 8: 最佳實踐與總結 (54-58)
  {
    id: 54,
    section: "最佳實踐與總結",
    layout: "chapter",
    title: "第八部分：初學者最佳實踐與總結",
    contentHtml: `
      <div class="layout-chapter">
        <div class="chapter-num">PART 8</div>
        <h2>初學者最佳實踐與總結</h2>
        <p>修行在個人！了解與 Antigravity 協同開發的 5 大金律，並學會當 AI 卡住時的應對之策，正式展開你的 AI 編程之旅。</p>
      </div>
    `
  },
  {
    id: 55,
    section: "最佳實踐與總結",
    layout: "bullets",
    title: "初學者與 Antigravity 協同的 5 大金律",
    contentHtml: `
      <h3>協同開發的 5 大金律</h3>
      <p class="intro-text">記住這五條黃金法則，你將能發揮 Antigravity 200% 的威力，並大幅避免出錯：</p>
      <ul class="bullet-list" style="margin-top: 1.5rem;">
        <li><strong>金律 1：大任務拆成小步驟</strong>。不要一次叫它寫「一整個購物商城」，先叫它「設計商品列表的 API」，一步步來最穩健。</li>
        <li><strong>金律 2：認真審查計畫書</strong>。在點選「同意 (Proceed)」前，花 30 秒確認它預計要改的檔案和你的想法一致。</li>
        <li><strong>金律 3：充分利用 /grill-me</strong>。如果你對功能需求還有些模糊，輸入 <code>/grill-me</code> 讓 AI 主動幫你釐清盲點。</li>
        <li><strong>金律 4：善用 /learn 記錄偏好</strong>。把每次解決環境問題、或是調整風格的結論記錄下來，讓 AI 越來越懂你。</li>
        <li><strong>金律 5：不要害怕錯誤</strong>。AI 有強大的 Self-healing 機制，放手讓它去跑測試、除錯，它是個越錯越勇的戰士！</li>
      </ul>
    `
  },
  {
    id: 56,
    section: "最佳實踐與總結",
    layout: "split-content",
    title: "FAQ 常見問題解答：如果 AI 卡住了怎麼辦？",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>如果 AI 卡住了怎麼辦？</h3>
          <p class="intro-text">寫程式總是會有意外。當 AI 不小心卡在死胡同、或者給出奇怪的代碼時，不要慌張：</p>
          <ul class="bullet-list">
            <li><strong>方法 1：打斷重新引導</strong>。直接在聊天室輸入「等等，這個寫法不對，我們重新想一個更簡單的方案」，讓它更新計畫書。</li>
            <li><strong>方法 2：手動干預修改</strong>。你可以自己動手把那行寫錯的程式改掉，AI 在下一步讀取檔案時會自動發現你的修改並配合你。</li>
            <li><strong>方法 3：善用 git 還原</strong>。因為專案有 Git 版本控制，隨時可以 <code>git checkout .</code> 退回修改前狀態。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card" style="background-color: var(--accent-glow); border-color: var(--accent-primary); width: 100%;">
            <h4><span class="card-icon">⚡</span> 偵錯小撇步</h4>
            <p style="font-size: 0.85rem; line-height: 1.5; margin-top: 0.5rem;">
              當遇到棘手 Bug，可以自己動手寫一個簡單的 <code>debug.js</code> 放在 scratch 資料夾下測試，再把結果直接貼給 AI 看。
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 57,
    section: "最佳實踐與總結",
    layout: "split-content",
    title: "邁向大師之路：從初學者到系統指揮官",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>邁向大師之路</h3>
          <p class="intro-text">使用 Antigravity 不僅是為了快速交差，更是你學習軟體架構的絕佳機會：</p>
          <ul class="bullet-list">
            <li><strong>第一階段 (新手)</strong>：依賴 AI 給出全部解法，點擊 Proceed，並看懂程式碼註解。</li>
            <li><strong>第二階段 (中手)</strong>：能主動糾正 AI 的計畫書，並使用自訂規則 (AGENTS.md) 規範 AI 寫法。</li>
            <li><strong>第三階段 (大師)</strong>：把 AI 當作你的開發團隊，利用 Subagents、自訂 Skills 來拼裝大型架構，自己退居二線當「軟體架構師」。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="stats-container" style="flex-direction: column; width: 100%;">
            <div class="stat-item" style="width: 100%;">
              <div class="stat-number">100%</div>
              <div class="stat-label">自主指揮權</div>
              <div class="stat-desc">你才是專案的靈魂，AI 是為你代勞的手腳。</div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 58,
    section: "最佳實踐與總結",
    layout: "title",
    title: "與 Antigravity 一起創造無重力的開發體驗！",
    contentHtml: `
      <div class="layout-title">
        <h1 style="font-size: 3rem;">準備好起飛了嗎？</h1>
        <p class="subtitle" style="font-size: 1.3rem;">拋開繁雜的重力負擔，與 Antigravity 一起航向高效、愉快的開發星海！</p>
        <div class="info-card" style="display: inline-block; padding: 1rem 2rem; margin-top: 1.5rem; background-color: var(--accent-glow); border-color: var(--accent-primary);">
          <span style="font-weight: 700; color: var(--text-primary); font-size: 1.1rem;">🚀 祝你的程式碼永遠綠燈 (All Tests Passed)！</span>
        </div>
      </div>
    `
  }
];

// 將資料匯出，以便 app.js 使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = slidesData;
} else {
  window.slidesData = slidesData;
}
