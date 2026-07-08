const slidesData = [
  // PART 1: 概念篇 - 裝修房子的魔法 (1-7)
  {
    id: 1,
    section: "認識 Antigravity",
    layout: "title",
    title: "Antigravity",
    contentHtml: `
      <div class="layout-title">
        <h1 style="font-size: 3.2rem;">Antigravity 入門指南</h1>
        <p class="subtitle">用「裝修夢想房子」的白話文，帶你認識 Google DeepMind 開發的 AI 程式設計助手</p>
        <div class="author-info">
          <p>適合完全沒有基礎的初學者</p>
          <p>協同開發的無重力體驗</p>
        </div>
      </div>
    `
  },
  {
    id: 2,
    section: "認識 Antigravity",
    layout: "split-content",
    title: "白話比喻：什麼是 Antigravity？",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>程式開發的「室內設計師」</h3>
          <p class="intro-text">想像你想蓋一間「貓咪咖啡廳」：</p>
          <ul class="bullet-list">
            <li><strong>傳統寫程式</strong>：你自己去買水泥、搬磚頭、鋸木頭，稍微量錯 1 公分，整面牆就會倒塌（語法錯誤）。</li>
            <li><strong>使用 Antigravity</strong>：你聘請了一位<b>專業的「AI 裝潢設計師」</b>。你只需出嘴說出你的想法，他來負責畫設計圖、鋸木頭、刷油漆。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card" style="background-color: var(--accent-glow); border-color: var(--accent-primary); width: 100%;">
            <h4 style="font-size: 1.25rem;"><span class="card-icon">🏠</span> 完美的角色分工</h4>
            <p style="font-size: 0.95rem; line-height: 1.6; margin-top: 0.5rem;">
              <b>你（業主）</b>：決定要蓋「貓跳台」還是「咖啡吧台」，審查設計圖。<br><br>
              <b>Antigravity（設計師）</b>：負責計算結構、拿起電鑽施工、確保水電安全。
            </p>
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
          <h3>拿掉開發的「重力負擔」</h3>
          <p class="intro-text">對初學者來說，寫程式最重的負擔不是創意，而是瑣碎的雜事：</p>
          <ul class="bullet-list">
            <li><strong>語法重力</strong>：忘記加括號或分號，程式就當掉。</li>
            <li><strong>環境重力</strong>：安裝軟體、套件包，常常裝到電腦當機。</li>
            <li><strong>無重力開發</strong>：AI 幫你把這些「重力活」通通吸走，讓你在太空中自由漂浮，專心做設計。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="stats-container" style="flex-direction: column; width: 100%;">
            <div class="stat-item" style="width: 100%;">
              <div class="stat-number">100%</div>
              <div class="stat-label">專注於創意與邏輯</div>
              <div class="stat-desc">瑣碎語法與環境配置通通交給 AI 代勞。</div>
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
      <h3>不是代理人，是「雙人搭檔」</h3>
      <p class="intro-text">在工地裡，一個人施工很容易漏看藍圖，所以需要兩個人一組。這就是 <b>Pair Programming (結對程式設計)</b>：</p>
      <ul class="bullet-list" style="margin-top: 1.5rem;">
        <li><strong>Navigator (導航員 / 你)</strong>：坐在副駕駛座，拿著地圖看方向，提醒前方有坑洞，決定目的地。</li>
        <li><strong>Driver (駕駛員 / AI)</strong>：雙手握著方向盤，負責踩油門、換檔、注意路況。</li>
        <li><strong>雙向對齊</strong>：AI 每次要轉彎（改代碼）前，都會問你：「我要切到這個車道囉？」你點頭同意，它才轉彎。</li>
      </ul>
    `
  },
  {
    id: 5,
    section: "認識 Antigravity",
    layout: "split-content",
    title: "初學者需要 AI 助手的真實場景",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>新手卡關的求救信號</h3>
          <p class="intro-text">當你遇到以下狀況，就是呼叫 Antigravity 的時候：</p>
          <ul class="bullet-list">
            <li><strong>「我想寫個記帳程式，但我不知道第一步要開什麼檔案？」</strong>：AI 會幫你把地基打好，建好資料夾結構。</li>
            <li><strong>「終端機噴出一堆看不懂的紅色英文報錯！」</strong>：AI 會幫你讀懂報錯，並把修正方案寫成計畫書。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card">
            <h4><span class="card-icon">🛡️</span> 安全的學習防護網</h4>
            <p style="font-size: 0.9rem; line-height: 1.5;">
              新手最怕亂改程式導致整個專案報銷。Antigravity 在修改前會展示清晰的「前後對比圖 (Diff)」，讓你像在玩遊戲一樣，可以隨時存檔、讀檔、反悔。
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 6,
    section: "認識 Antigravity",
    layout: "split-content",
    title: "一般聊天 AI vs. 代理型 AI (Antigravity)",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>只給意見 vs. 幫你施工</h3>
          <p class="intro-text">差別就在於 AI 有沒有「手腳」和「工具箱」：</p>
          <ul class="bullet-list">
            <li><strong>聊天型 AI (無手腳)</strong>：只給你設計圖紙，然後說：「你自己去刷油漆喔！」你還是得自己複製貼上、開終端機。</li>
            <li><strong>代理型 AI (有手腳)</strong>：直接帶齊電鑽、梯子到現場，不僅幫你規劃，還親自動手把牆壁粉刷好、把螺絲鎖上。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="code-mockup" style="font-family: var(--font-body);">
            <div class="code-header">
              <div class="code-dots"><div class="code-dot dot-red"></div><div class="code-dot dot-yellow"></div><div class="code-dot dot-green"></div></div>
              <span class="code-title">能力對比表</span>
            </div>
            <div style="padding: 1rem; font-size: 0.85rem; line-height: 1.5;">
              <p style="color: var(--text-secondary); margin-bottom: 0.5rem;">💬 <b>聊天 AI</b>：生成代碼 ➔ 結束 ➔ (剩下人類自己手動)。</p>
              <p style="color: var(--accent-secondary);">🤖 <b>Antigravity</b>：研究原始碼 ➔ 寫計畫書 ➔ 取得授權 ➔ 修改檔案 ➔ 跑測試 ➔ 完成。</p>
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
      <h3>我們的裝修學習之旅</h3>
      <p class="intro-text">以下是我們接下來要一起探索的四大景點：</p>
      <div class="diagram-container">
        <div class="flow-step">
          <div class="flow-step-num">1</div>
          <div class="flow-step-desc">
            <strong>優勢分析篇</strong>
            <span>看看這位 AI 設計師有哪些讓初學者驚嘆的神奇超能力。</span>
          </div>
        </div>
        <div class="flow-step">
          <div class="flow-step-num">2</div>
          <div class="flow-step-desc">
            <strong>規劃模式五部曲</strong>
            <span>看懂設計師如何從現場勘查、畫草圖，到施工和驗收。</span>
          </div>
        </div>
        <div class="flow-step">
          <div class="flow-step-num">3</div>
          <div class="flow-step-desc">
            <strong>百寶袋與秘密手勢</strong>
            <span>認識設計師的工具箱，以及如何用簡單的手勢（斜線指令）命令他。</span>
          </div>
        </div>
        <div class="flow-step">
          <div class="flow-step-num">4</div>
          <div class="flow-step-desc">
            <strong>分包團隊與專屬風格</strong>
            <span>指揮多位工程師協作，並訂立你的專案裝修風格規範。</span>
          </div>
        </div>
      </div>
    `
  },

  // PART 2: 為什麼要使用 ANTIGRAVITY？ (8-15)
  {
    id: 8,
    section: "為什麼要使用 Antigravity？",
    layout: "chapter",
    title: "第二部分：為什麼要使用 Antigravity？",
    contentHtml: `
      <div class="layout-chapter">
        <div class="chapter-num">PART 2</div>
        <h2>為什麼要使用 Antigravity？</h2>
        <p>分析初學者寫程式的「崩潰痛點」，看 AI 設計師如何幫你掃除一切障礙。</p>
      </div>
    `
  },
  {
    id: 9,
    section: "為什麼要使用 Antigravity？",
    layout: "bullets",
    title: "初學者寫程式的三大「工地慘案」",
    contentHtml: `
      <h3>新手寫程式就像無照施工</h3>
      <p class="intro-text">沒有經驗的初學者，自己動手往往會遇到這三種尷尬場面：</p>
      <ul class="bullet-list" style="margin-top: 1.5rem;">
        <li><strong>慘案 1：買錯材料 (套件衝突)</strong>：上網查了舊資料，下載了不相容的套件，搞得整個電腦發燙，程式還是不會動。</li>
        <li><strong>慘案 2：接錯水電 (語法 Bug)</strong>：只要少了一個括號，終端機就會噴出 100 行紅色警告，讓人看著直發楞，不知從何修起。</li>
        <li><strong>慘案 3：一拆牆整棟樓塌了 (程式改壞)</strong>：明明只改了一個小按鈕，結果購物車、登入功能全部失靈，又沒有存檔備份，欲哭無淚。</li>
      </ul>
    `
  },
  {
    id: 10,
    section: "為什麼要使用 Antigravity？",
    layout: "split-content",
    title: "優勢 1：先勘查再動手 (不會亂拆牆)",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>優勢 1：智慧勘查與規劃</h3>
          <p class="intro-text">Antigravity 絕不盲目動手。它有極高的<b>大局觀</b>：</p>
          <ul class="bullet-list">
            <li><strong>不當莽撞工人</strong>：它不會一進場就拿大錘敲牆，而是會先去敲敲看是不是結構牆。</li>
            <li><strong>閱讀全部代碼</strong>：它會把你的整個專案大大小小的檔案讀過一遍，搞清楚彼此的血緣關係。</li>
            <li><strong>出具計畫書</strong>：施工前，先告訴你它要動哪裡，確保你的安全。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card">
            <h4><span class="card-icon">🔍</span> 實例場景</h4>
            <p style="font-size: 0.9rem; line-height: 1.5; margin-top: 0.5rem;">
              你要在首頁加一個「搜尋框」。<br><br>
              AI 會先去找 <code>index.html</code> (首頁牆面)、<code>style.css</code> (油漆顏色) 和 <code>search.js</code> (搜尋引擎)，想好怎麼擺放，才向你請示。
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
    title: "優勢 2：帶齊全套工具 (不必自己買電鑽)",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>優勢 2：全套操作能力</h3>
          <p class="intro-text">AI 內建了工程師必備的所有工具，不必你幫它下載：</p>
          <ul class="bullet-list">
            <li><strong>寫入工具</strong>：精準定位到某個檔案的第 23 行進行修改。</li>
            <li><strong>指令工具</strong>：能幫你啟動伺服器、打包程式。</li>
            <li><strong>聯網工具</strong>：遇到不懂的新套件，會自己 Google 去讀最官方的說明書，不胡思亂想。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="code-mockup">
            <div class="code-header">
              <div class="code-dots"><div class="code-dot dot-red"></div><div class="code-dot dot-yellow"></div><div class="code-dot dot-green"></div></div>
              <span class="code-title">自動上網查文獻</span>
            </div>
            <div class="code-body" style="font-size: 0.8rem;">
              <span class="code-comment"># 發現沒看過的程式庫，AI 自動執行：</span>
              $ <code>search_web query="FastAPI latest documentation"</code>
              
              <span class="code-string">-> 取得最新規格，開始正確施工！</span>
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
    title: "優勢 3：水管漏水自己修 (Self-healing Loop)",
    contentHtml: `
      <h3>優勢 3：漏水自動修復機制</h3>
      <p class="intro-text">一般工人蓋完水管，如果打開水龍頭漏水了，可能會推卸責任。但 Antigravity 擁有<b>自我修正（Self-healing）</b>的韌性：</p>
      <ul class="bullet-list" style="margin-top: 1.5rem;">
        <li><strong>通水測試</strong>：寫完程式碼後，AI 會主動測試運行，看程式會不會當掉。</li>
        <li><strong>發現漏水 (報錯)</strong>：若測試失敗，出現 Bug，它不會停下來哭泣，而是會自己蹲下去看是哪一個螺絲沒鎖緊。</li>
        <li><strong>自動鎖緊</strong>：它會根據錯誤訊息，主動修改錯誤代碼，重新開水測試，直到一滴水都不漏（測試全綠燈）才交給您。</li>
      </ul>
    `
  },
  {
    id: 13,
    section: "為什麼要使用 Antigravity？",
    layout: "split-content",
    title: "優勢 4：請個小助理幫忙跑腿 (子代理人)",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>優勢 4：分工合作不心煩</h3>
          <p class="intro-text">大型專案很複雜，大設計師如果什麼都自己做，腦袋會轉不過來。它可以找分包商：</p>
          <ul class="bullet-list">
            <li><strong>跑腿小弟 (Research)</strong>：在背景查厚厚的文件、在網上爬文，查完後把精華整理成一張紙交給大設計師。</li>
            <li><strong>安全測試員 (Self)</strong>：在隔壁小空地試畫油漆顏色，確定好看且無毒，大設計師才在你的主客廳上色。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card" style="background-color: var(--accent-glow); border-color: var(--accent-primary); width: 100%;">
            <h4><span class="card-icon">👥</span> 工地現場比喻</h4>
            <p style="font-size: 0.9rem; line-height: 1.5; margin-top: 0.5rem;">
              主工程師（Antigravity）<br>
              └── 派小弟 1：去建材行查規格（Research）<br>
              └── 派小弟 2：去驗證這個電線接法會不會跳電（Self）
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
    title: "優勢 5：指定裝潢風格與禁忌 (Skills & Rules)",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>優勢 5：風格規矩說到做到</h3>
          <p class="intro-text">你可以幫設計師立下一些硬性規矩，或者是教他一些獨門絕活：</p>
          <ul class="bullet-list">
            <li><strong>禁忌與規則 (Rules)</strong>：比如「本專案不准使用塑膠地板 (TailwindCSS)」、「所有開關一定要用繁體中文標註」。</li>
            <li><strong>特殊技能 (Skills)</strong>：比如「教導設計師如何使用你家獨門的隱藏門機關」。它學會後，每次裝修都會主動使用這招。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="code-mockup">
            <div class="code-header">
              <div class="code-dots"><div class="code-dot dot-red"></div><div class="code-dot dot-yellow"></div><div class="code-dot dot-green"></div></div>
              <span class="code-title">.agents/AGENTS.md</span>
            </div>
            <div class="code-body" style="font-size: 0.8rem;">
              # 業主的硬性規定：
              1. 註解必須用繁體中文。
              2. 變數名稱必須使用底線命名。
              3. 不得使用未經授權的第三方套件。
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 15,
    section: "為什麼要使用 Antigravity？",
    layout: "stats",
    title: "量化價值：AI 設計師能幫你省下多少時間？",
    contentHtml: `
      <h3>告別手忙腳亂的施工</h3>
      <p class="intro-text">使用 Antigravity 後，初學者的開發日常會產生顯著變化：</p>
      <div class="stats-container">
        <div class="stat-item">
          <div class="stat-number">1/10</div>
          <div class="stat-label">施工時間</div>
          <div class="stat-desc">原本需要查整晚語法的打底工作，現在 5 分鐘搞定。</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">0 次</div>
          <div class="stat-label">崩潰重寫</div>
          <div class="stat-desc">因為有嚴格的計畫書與安全沙盒，再也不怕改錯代碼導致專案全毀。</div>
        </div>
      </div>
    `
  },

  // PART 3: 規劃模式五部曲 (16-24)
  {
    id: 16,
    section: "規劃模式的奧秘",
    layout: "chapter",
    title: "第三部分：規劃模式五部曲",
    contentHtml: `
      <div class="layout-chapter">
        <div class="chapter-num">PART 3</div>
        <h2>規劃模式 (Planning Mode) 五部曲</h2>
        <p>拆解 AI 設計師的工作 SOP。看他如何從敲定需求、畫藍圖，到施工、除錯和完工驗收。</p>
      </div>
    `
  },
  {
    id: 17,
    section: "規劃模式的奧秘",
    layout: "split-content",
    title: "什麼是規劃模式？先想、再問、最後動手",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>謀定而後動的工作流</h3>
          <p class="intro-text">如果你對工人說：「幫我裝個熱水器」，不專業的工人可能一進來就亂切瓦斯管，非常危險。規劃模式就是要求 AI：</p>
          <ul class="bullet-list">
            <li><strong>第一步：先研究</strong>（看你家的管線在哪裡）。</li>
            <li><strong>第二步：出計畫</strong>（畫出熱水器安裝位置圖）。</li>
            <li><strong>第三步：問業主</strong>（取得你的點頭同意才開工）。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card" style="background-color: var(--accent-glow); border-color: var(--accent-primary); width: 100%;">
            <h4><span class="card-icon">⚡</span> 核心精神</h4>
            <p style="font-size: 0.95rem; line-height: 1.6; margin-top: 0.5rem;">
              「在未取得業主（你）的正式簽核之前，AI 絕對不能動手修改你房子裡的任何一塊磚瓦（任何一行原始碼）。」
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 18,
    section: "規劃模式的奧秘",
    layout: "diagram",
    title: "規劃模式的五大步驟",
    contentHtml: `
      <h3>AI 設計師的工作流程圖</h3>
      <p class="intro-text">每一個任務，AI 都會按照這五個步驟老老實實地執行：</p>
      <div class="diagram-container">
        <div class="flow-step">
          <div class="flow-step-num">1</div>
          <div class="flow-step-desc"><strong>階段一：現場勘查 (Research)</strong> <span>翻閱專案舊代碼，找出有問題的地方，不進行任何修改。</span></div>
        </div>
        <div class="flow-step">
          <div class="flow-step-num">2</div>
          <div class="flow-step-desc"><strong>階段二：畫藍圖 (Plan)</strong> <span>寫出一份詳細的 Markdown 計畫書，列出要改的檔案與驗證方法。</span></div>
        </div>
        <div class="flow-step">
          <div class="flow-step-num">3</div>
          <div class="flow-step-desc"><strong>階段三：業主簽名 (Approval)</strong> <span>將計畫書秀給你，等待你點擊「同意」或提出修改意見。</span></div>
        </div>
        <div class="flow-step">
          <div class="flow-step-num">4</div>
          <div class="flow-step-desc"><strong>階段四：照表施工 (Execute)</strong> <span>列出施工進度表 (task.md)，逐項修改並打勾。</span></div>
        </div>
        <div class="flow-step">
          <div class="flow-step-num">5</div>
          <div class="flow-step-desc"><strong>階段五：驗收報告 (Verify)</strong> <span>測試功能是否正常，並提交完工報告 (walkthrough.md)。</span></div>
        </div>
      </div>
    `
  },
  {
    id: 19,
    section: "規劃模式的奧秘",
    layout: "bullets",
    title: "步驟一：現場勘查 (Research) - 不動一磚一瓦",
    contentHtml: `
      <h3>階段一：現場勘查</h3>
      <p class="intro-text">當你說：<i>「幫我加一個會員登出按鈕」</i>，AI 不會立刻在程式碼裡亂塞代碼。它會像個設計師，先帶尺來量尺寸：</p>
      <ul class="bullet-list" style="margin-top: 1.5rem;">
        <li><strong>搜尋全屋</strong>：利用 <code>grep_search</code> 搜尋專案裡的 "logout", "login" 等關鍵字，看看前人把登入按鈕擺在哪裡。</li>
        <li><strong>細看局部</strong>：利用 <code>view_file</code> 唯讀讀取相關程式，分析要插在哪個角落最合適。</li>
        <li><strong>不動手原則</strong>：此時 AI 只是在「看」，沒有任何改寫行為，不用擔心搞砸任何事。</li>
      </ul>
    `
  },
  {
    id: 20,
    section: "規劃模式的奧秘",
    layout: "split-content",
    title: "步驟二：畫藍圖 (Implementation Plan)",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>階段二：畫出實作計畫書</h3>
          <p class="intro-text">勘查完畢後，AI 會在你家客廳桌上留下一份名為 <code>implementation_plan.md</code> 的計畫草稿：</p>
          <ul class="bullet-list">
            <li><strong>要動哪些牆</strong>：列出預計修改、新增或刪除的程式檔案。</li>
            <li><strong>施工詳情</strong>：說明大概會改寫哪幾個區塊的邏輯。</li>
            <li><strong>如何驗收</strong>：寫明它打算用什麼指令來測試這個登出按鈕是否真的能按。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card">
            <h4><span class="card-icon">📂</span> 草稿存放路徑</h4>
            <p style="font-family: monospace; font-size: 0.85rem; background-color: var(--bg-secondary); padding: 0.5rem; border-radius: 6px; margin-top: 0.5rem;">
              .gemini/antigravity/brain/.../implementation_plan.md
            </p>
            <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem;">這份計畫是個「活藍圖」，施工前可以隨意塗改討論。</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 21,
    section: "規劃模式的奧秘",
    layout: "code-mockup",
    title: "白話版計畫書 (implementation_plan.md) 範例",
    contentHtml: `
      <div class="code-mockup">
        <div class="code-header">
          <div class="code-dots"><div class="code-dot dot-red"></div><div class="code-dot dot-yellow"></div><div class="code-dot dot-green"></div></div>
          <span class="code-title">實作計畫草稿</span>
        </div>
        <div class="code-body" style="font-size: 0.75rem;">
# 任務：加裝會員登出按鈕

## 預計施工區域
- <b>[修改] navbar.html</b>：在「會員頭像」旁邊，加一個 <code>&lt;button&gt;登出&lt;/button&gt;</code>。
- <b>[修改] auth.js</b>：新增登出邏輯，清除瀏覽器的登入標記。

## 驗收方法
- 執行指令：$ <code>npm run test:auth</code> 確保登出測試綠燈。
        </div>
      </div>
      <p style="font-size: 0.9rem; margin-top: 1rem; color: var(--text-secondary);">
        💡 計畫書結構清晰，讓初學者能一眼看出 AI 待會要去動哪一個檔案。
      </p>
    `
  },
  {
    id: 22,
    section: "規劃模式的奧秘",
    layout: "split-content",
    title: "步驟三：業主簽名同意 (User Approval)",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>階段三：點擊 Proceed 授權施工</h3>
          <p class="intro-text">AI 寫好計畫書後，會站在你面前雙手合十，等待你的指示：</p>
          <ul class="bullet-list">
            <li><strong>核對藍圖</strong>：你看著計畫書，點頭說：「恩，加在 <code>navbar.html</code> 很合理，同意！」</li>
            <li><strong>按下同意</strong>：在對話視窗點選「同意 (Proceed)」，施工才正式開始。</li>
            <li><strong>隨時糾正</strong>：如果你覺得加在首頁太顯眼，你直接打字告訴它：「不對，登出按鈕應該藏在設定選單裡。」AI 會乖乖擦掉計畫書，重新寫一份。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card" style="background-color: rgba(245, 158, 11, 0.1); border-color: #f59e0b; width: 100%;">
            <h4 style="color: #f59e0b;"><span class="card-icon">⚠️</span> 初學者避坑指南</h4>
            <p style="font-size: 0.85rem; line-height: 1.5; margin-top: 0.5rem;">
              不要偷懶每次都直接按 Proceed！每次都花 10 秒鐘看一眼它要改的檔案名稱，這是你學習程式結構的黃金時間。
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 23,
    section: "規劃模式的奧秘",
    layout: "split-content",
    title: "步驟四：照表施工 (Execute & task.md)",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>階段四：拿著施工進度表施工</h3>
          <p class="intro-text">按下同意後，AI 會開出一張 <code>task.md</code> 進度清單掛在牆上，每做好一項就打勾：</p>
          <ul class="bullet-list">
            <li><strong>打勾追蹤</strong>：<code>[x]</code> 代表做完，<code>[/]</code> 代表施工中，<code>[ ]</code> 代表未開工。</li>
            <li><strong>精準切割</strong>：只修改需要變更的幾行代碼，不動其他完整的部分，確保水電線路不短路。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="code-mockup">
            <div class="code-header">
              <div class="code-dots"><div class="code-dot dot-red"></div><div class="code-dot dot-yellow"></div><div class="code-dot dot-green"></div></div>
              <span class="code-title">施工進度表 (task.md)</span>
            </div>
            <div class="code-body" style="font-size: 0.8rem;">
              - [x] 備份 navbar.html<br>
              - [/] 正在 navbar.html 加入按鈕標籤<br>
              - [ ] 在 auth.js 新增清除 Session 邏輯<br>
              - [ ] 執行單元測試
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 24,
    section: "規劃模式的奧秘",
    layout: "bullets",
    title: "步驟五：通水通電驗收 (Verify & walkthrough.md)",
    contentHtml: `
      <h3>階段五：最後的品質驗收</h3>
      <p class="intro-text">裝修完成後，AI 設計師會進行最後的嚴格檢測，確認沒問題才交屋：</p>
      <ul class="bullet-list" style="margin-top: 1.5rem;">
        <li><strong>通電檢測 (跑測試)</strong>：自動下達測試指令（如 <code>npm run test</code>），模擬使用者點擊按鈕，看會不會跳電當機。</li>
        <li><strong>漏水修復 (除錯)</strong>：如果跳電了，自動發揮 Self-healing 技能，修改接線，重新送電，直到測試全綠燈。</li>
        <li><strong>完工報告</strong>：產出一份 <code>walkthrough.md</code> 報告交給你，上面會標註：「水電接線已完工，按鈕已測試 10 次正常，請驗收！」</li>
      </ul>
    `
  },

  // PART 4: 核心工具箱 (25-32)
  {
    id: 25,
    section: "核心工具箱",
    layout: "chapter",
    title: "第四部分：設計師的百寶袋 (Core Toolbox)",
    contentHtml: `
      <div class="layout-chapter">
        <div class="chapter-num">PART 4</div>
        <h2>第四部分：設計師的百寶袋 (Core Toolbox)</h2>
        <p>看看 AI 設計師隨身攜帶了哪些超能力工具，讓他能在你的電腦工地裡自如地敲敲打打。</p>
      </div>
    `
  },
  {
    id: 26,
    section: "核心工具箱",
    layout: "bullets",
    title: "百寶袋道具 1：放大鏡與精準油漆刀",
    contentHtml: `
      <h3>檔案與搜尋工具：精準施工的法寶</h3>
      <p class="intro-text">AI 要怎麼看檔案、改檔案？它有這三樣專屬道具：</p>
      <ul class="bullet-list" style="margin-top: 1.5rem;">
        <li><strong>放大鏡 (view_file)</strong>：像看設計圖一樣，唯讀查看某個檔案的某幾行，避免一次看太多眼花。</li>
        <li><strong>全屋金屬探測器 (grep_search)</strong>：在幾百個房間（資料夾）裡，一秒抓出所有藏有「折扣碼」字眼的鐵釘在哪裡。</li>
        <li><strong>精準手術刀 (replace_file_content)</strong>：只刮掉第 15 行的舊油漆，換上新油漆，絕不弄髒隔壁第 16 行的好牆面。</li>
      </ul>
    `
  },
  {
    id: 27,
    section: "核心工具箱",
    layout: "split-content",
    title: "百寶袋道具 2：威力強大的電鑽 (run_command)",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>威力強大的電鑽：指令執行</h3>
          <p class="intro-text"><code>run_command</code> 是 AI 的電鑽，可以在你的終端機裡鑽孔、開洞、打地基：</p>
          <ul class="bullet-list">
            <li><strong>功能</strong>：幫你下載套件、啟動本地網頁伺服器。</li>
            <li><strong>安全防護</strong>：因為電鑽很危險（比如亂下格式化磁碟的指令），所以<b>每一次使用電鑽，AI 都必須跳出提示請求你點擊授權</b>。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card" style="background-color: rgba(239, 68, 68, 0.1); border-color: #ef4444; width: 100%;">
            <h4 style="color: #ef4444;"><span class="card-icon">🛑</span> 施工安全鎖</h4>
            <p style="font-size: 0.85rem; line-height: 1.5; margin-top: 0.5rem;">
              AI 不能隨便在背景亂鑽孔。當它要執行指令時，你的對話框會出現黃色驚嘆號，只有當你按下「允許」，電鑽才會運轉。
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 28,
    section: "核心工具箱",
    layout: "bullets",
    title: "百寶袋道具 3：材料目錄與最新設計網頁",
    contentHtml: `
      <h3>聯網搜尋：查閱最新建材手冊</h3>
      <p class="intro-text">AI 如果不知道最新版的網頁語法怎麼寫，它會直接拿起手機查閱最新資料：</p>
      <ul class="bullet-list" style="margin-top: 1.5rem;">
        <li><strong>Google 搜尋 (search_web)</strong>：當某個水管規格它沒見過，它會直接在網上搜尋最新的水管拼接教學。</li>
        <li><strong>下載手冊 (read_url_content)</strong>：直接把網頁上的說明書爬下來，轉成純文字，一字一句讀懂最新規範。</li>
        <li><strong>拒絕過時知識</strong>：即使是昨天剛出的技術，AI 也能透過上網查資料秒懂，不會胡言亂語。</li>
      </ul>
    `
  },
  {
    id: 29,
    section: "核心工具箱",
    layout: "split-content",
    title: "百寶袋道具 4：拍照生成模擬圖 (generate_image)",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>UI 視覺效果草圖生成</h3>
          <p class="intro-text">想蓋貓跳台，但不知道塗成什麼顏色好看？AI 設計師可以為你「畫一張渲染效果圖」：</p>
          <ul class="bullet-list">
            <li><strong>generate_image</strong>：根據你的口頭描述，生成網頁介面、背景圖、或是按鈕的設計 Mockup。</li>
            <li><strong>實境效果</strong>：拒絕在簡報裡留白，直接給你看實機運行起來的極簡北歐風效果。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card" style="background-color: var(--accent-glow); border-color: var(--accent-primary); width: 100%;">
            <h4><span class="card-icon">🎨</span> 企業級美學標準</h4>
            <p style="font-size: 0.85rem; line-height: 1.5; margin-top: 0.5rem;">
              Antigravity 不會給你大紅大綠的陽春設計。它懂得使用毛玻璃磨砂（Glassmorphism）、微漸層（Gradients）與舒適的邊距，讓網頁看起來非常高級。
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 30,
    section: "核心工具箱",
    layout: "bullets",
    title: "百寶袋道具 5：定時施工與鬧鐘 (schedule)",
    contentHtml: `
      <h3>施工定時器：設定鬧鐘去睡覺</h3>
      <p class="intro-text">如果水泥需要 3 小時才會乾（例如打包超大專案需要花 10 分鐘跑測試）：</p>
      <ul class="bullet-list" style="margin-top: 1.5rem;">
        <li><strong>定時監控 (schedule)</strong>：AI 不用傻傻在旁邊發呆（發送 sleep 指令浪費計算額度），它可以定一個「10分鐘後的鬧鐘」。</li>
        <li><strong>背景休眠</strong>：鬧鐘響之前，AI 會去休息。時間一到，系統會搖醒它：「水泥乾了，可以來做壓力測試了！」</li>
        <li><strong>定期巡檢 (Cron)</strong>：也可以設定成「每週五晚上自動把專案打包備份到 GitHub」。</li>
      </ul>
    `
  },
  {
    id: 31,
    section: "核心工具箱",
    layout: "split-content",
    title: "安全鐵閘：哪些事是設計師絕對不准碰的？",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>工地的權限禁區</h3>
          <p class="intro-text">為了保護你的隱私與財產安全，工地有嚴格的分區管制：</p>
          <ul class="bullet-list">
            <li><strong>綠區 (Allowed - 唯讀)</strong>：客廳的設計圖 (專案代碼)，AI 可以隨意看。</li>
            <li><strong>黃區 (Ask - 修改)</strong>：施工、動手鋸木頭、執行電鑽，必須得到你的口頭同意。</li>
            <li><strong>紅區 (Denied - 禁止)</strong>：你的保險箱密碼、GitHub 帳號密鑰 (.git 憑證)。系統直接上鎖，AI 絕對碰不到。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card" style="border-left: 4px solid var(--accent-secondary);">
            <h4><span class="card-icon">🛡️</span> 安全至上</h4>
            <p style="font-size: 0.85rem; line-height: 1.5; margin-top: 0.5rem;">
              在無重力開發環境中，系統已幫你架好紅外線感應器（ sandbox 沙盒），AI 只要手伸向敏感檔案，會立刻被硬性彈回。
            </p>
          </div>
        </div>
      </div>
    `
  },

  // PART 5: 快速斜線指令 (32-38)
  {
    id: 32,
    section: "快速斜線指令",
    layout: "chapter",
    title: "第五部分：快速斜線指令 (Slash Commands)",
    contentHtml: `
      <div class="layout-chapter">
        <div class="chapter-num">PART 5</div>
        <h2>第五部分：快速斜線指令 (Slash Commands)</h2>
        <p>你與 AI 設計師之間的「秘密手勢」。輸入一個斜線，就能開啟神奇的特種服務！</p>
      </div>
    `
  },
  {
    id: 33,
    section: "快速斜線指令",
    layout: "split-content",
    title: "/goal 指令：大統包工程，做完才准下班",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>/goal：包到好工程模式</h3>
          <p class="intro-text">一般情況下，AI 做完一步就會停下來問你。但如果你要出門旅行，想把整個廚房裝修全權委託給它：</p>
          <ul class="bullet-list">
            <li><strong>統包委託</strong>：輸入 <code>/goal</code>，設定最終目標（如：蓋出整套購物功能並測試通過）。</li>
            <li><strong>不打擾自主執行</strong>：AI 會自動一步接一步幹活、遇到 Bug 自己修，不發送 Proceed 打擾你，直到完全蓋好才通知你。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card" style="background-color: var(--accent-glow); border-color: var(--accent-primary); width: 100%;">
            <h4><span class="card-icon">🏁</span> 白話指令範例</h4>
            <p style="font-family: monospace; font-size: 0.85rem; margin-top: 0.5rem; line-height: 1.5;">
              <b>/goal</b> 幫我把這個專案的會員登入介面，從簡陋的純文字修改成包含 Google 登入的毛玻璃炫彩畫面，並保證點擊後能跳轉。
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 34,
    section: "快速斜線指令",
    layout: "split-content",
    title: "/grill-me 指令：設計師對你的「需求大拷問」",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>/grill-me：靈魂拷問防做白工</h3>
          <p class="intro-text">業主常常說：<i>「幫我加個聊天室，謝謝。」</i>但沒講聊天室要幾個人用、能不能傳圖片。這時候可以用 <code>/grill-me</code>：</p>
          <ul class="bullet-list">
            <li><strong>設計師反問</strong>：AI 會變身成嚴格的專案經理，列出 3 個問題拷問你。</li>
            <li><strong>對齊需求</strong>：釐清你的設計規格，防止寫了一堆代碼結果全做白工。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card" style="border-left: 4px solid var(--accent-secondary);">
            <h4><span class="card-icon">💬</span> 模擬拷問現場</h4>
            <p style="font-size: 0.85rem; line-height: 1.5; margin-top: 0.5rem;">
              <b>AI:</b> 「為了幫你蓋好聊天室，請回答以下 2 個問題：<br>
              1. 聊天訊息要永久儲存，還是關掉瀏覽器就消失？<br>
              2. 需要有『已讀』功能嗎？」
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 35,
    section: "快速斜線指令",
    layout: "split-content",
    title: "/browser 指令：打開瀏覽器，幫我看看排版",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>/browser：模擬實境除錯</h3>
          <p class="intro-text">寫網頁最怕「跑版」或「按鈕按不下去」。AI 沒有螢幕，它要怎麼驗收？</p>
          <ul class="bullet-list">
            <li><strong>啟動無頭瀏覽器</strong>：AI 會在背景打開一個隱藏的 Chrome 瀏覽器。</li>
            <li><strong>自動點擊</strong>：它會幫你點點看按鈕、模擬滑鼠捲動。</li>
            <li><strong>拍照錄影</strong>：它會把瀏覽器的畫面拍下來自己看，檢查有沒有字體重疊或按鈕壞掉，並當場修改。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card" style="background-color: var(--accent-glow); border-color: var(--accent-primary); width: 100%;">
            <h4><span class="card-icon">🌐</span> 白話指令範例</h4>
            <p style="font-family: monospace; font-size: 0.85rem; margin-top: 0.5rem; line-height: 1.5;">
              <b>/browser</b> 打開首頁，幫我看看用手機模式觀看時，上方的導覽列會不會太擠，如果會的話，幫我改成漢堡選單。
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 36,
    section: "快速斜線指令",
    layout: "split-content",
    title: "/learn 指令：記住我的怪癖 (不要再叫我改了)",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>/learn：養成專屬默契</h3>
          <p class="intro-text">如果你每次開工，都要重新跟工人叮嚀：「我討厭粉紅色」、「我習慣用 JSDoc」，會很心累。</p>
          <ul class="bullet-list">
            <li><strong>寫入備忘錄</strong>：輸入 <code>/learn</code>，AI 會把你的偏好永久寫進它的筆記本中。</li>
            <li><strong>永久生效</strong>：以後每次新對話，它都會主動遵守，不需要你重複碎碎念。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card">
            <h4><span class="card-icon">🧠</span> 白話指令範例</h4>
            <p style="font-family: monospace; font-size: 0.85rem; margin-top: 0.5rem; line-height: 1.5;">
              <b>/learn</b> 請記住我這個專案一律不使用任何第三方樣式庫，只使用純 CSS 寫版面，且必須相容 RWD 手機版。
            </p>
          </div>
        </div>
      </div>
    `
  },

  // PART 6: 子代理人與團隊協作 (37-41)
  {
    id: 37,
    section: "子代理人與團隊協作",
    layout: "chapter",
    title: "第六部分：分包工頭與分工團隊 (Subagents)",
    contentHtml: `
      <div class="layout-chapter">
        <div class="chapter-num">PART 6</div>
        <h2>第六部分：分包工頭與分工團隊 (Subagents)</h2>
        <p>「分工合作，大工告成。」了解大設計師如何分配工作給不同的虛擬小助手，分頭行事提升效率。</p>
      </div>
    `
  },
  {
    id: 38,
    section: "子代理人與團隊協作",
    layout: "split-content",
    title: "什麼是子代理人？請分包小組來幫忙",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>大腦分身，專人專事</h3>
          <p class="intro-text">當專案太龐大，大腦記不住那麼多細節。設計師會打電話請專家來：</p>
          <ul class="bullet-list">
            <li><strong>獨立辦公室</strong>：每個子代理人有獨立的背景視窗，專心算它自己的題目。</li>
            <li><strong>效率加倍</strong>：主工程師負責刷油漆，子代理人 A 負責在外面上網查文獻，子代理人 B 在沙盒房裡接電線。</li>
            <li><strong>節省成本</strong>：水電接好（任務完成）後，子代理人立刻收拾工具回家，不佔用你的系統記憶體。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card" style="background-color: var(--accent-glow); border-color: var(--accent-primary); width: 100%;">
            <h4><span class="card-icon">⚡</span> 分工效益</h4>
            <p style="font-size: 0.9rem; line-height: 1.5; margin-top: 0.5rem;">
              當遇到棘手 Bug 時，主 AI 不用中斷目前的寫作，可以直接派一個 <code>research</code> 專家去背景查 GitHub Issue。查到解法後回傳給主 AI，大工程師秒懂並修復。
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 39,
    section: "子代理人與團隊協作",
    layout: "bullets",
    title: "內建小助手 1：research (跑腿資料庫專家)",
    contentHtml: `
      <h3>資料庫專家：research</h3>
      <p class="intro-text">當專案檔案很多，像個堆滿雜物的舊倉庫，主工程師需要找某份「10年前的接線圖」：</p>
      <ul class="bullet-list" style="margin-top: 1.5rem;">
        <li><strong>翻箱倒櫃</strong>：<code>research</code> 被授權了唯讀的放大鏡，它會在整個倉庫裡快速搜尋，把所有相關的圖紙找出來。</li>
        <li><strong>不碰工具</strong>：它只有「眼睛」，沒有帶「手腳」和「電鑽」。所以它在你的資料夾裡到處看，絕對不會改壞你任何檔案，非常安全。</li>
        <li><strong>摘要報告</strong>：看完後，它會打電話給主工程師，告訴主工程師在哪一頁找到了圖紙，任務圓滿完成。</li>
      </ul>
    `
  },
  {
    id: 40,
    section: "子代理人與團隊協作",
    layout: "bullets",
    title: "內建小助手 2：self (在隔壁小空地試畫的分身)",
    contentHtml: `
      <h3>複製另一個自己：self</h3>
      <p class="intro-text">大工程師正小心翼翼地在貼昂貴的磁磚，突然有個地方需要做個實驗，但又怕弄髒現場：</p>
      <ul class="bullet-list" style="margin-top: 1.5rem;">
        <li><strong>分身大師</strong>：主工程師會用 <code>self</code> 召喚出一個和自己一模一樣的分身。</li>
        <li><strong>隔離沙盒</strong>：分身帶著全套電鑽與修改工具，走到隔壁完全不相干的空房進行實驗，試試看某個接線會不會爆炸。</li>
        <li><strong>安全收尾</strong>：實驗成功後，把接線步驟寫在小紙條上遞給主工程師。隨後，分身與空房實驗室自動消失，不留痕跡。</li>
      </ul>
    `
  },
  {
    id: 41,
    section: "子代理人與團隊協作",
    layout: "split-content",
    title: "如何呼叫自訂分包工頭？define_subagent",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>自訂你的分包工頭</h3>
          <p class="intro-text">你可以給 AI 一個人設，臨時成立一個專業部門：</p>
          <ul class="bullet-list">
            <li><strong>指派專家角色 (Role)</strong>：如「安全帽檢查員」、「繁簡體翻譯秘書」。</li>
            <li><strong>設定他的專屬教條 (Prompt)</strong>：只告訴他他該做的事情，不干擾大局。</li>
            <li><strong>工具配備</strong>：只配備給他抹刀（唯讀）或電鑽（寫入），完全由你做主。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="code-mockup">
            <div class="code-header">
              <div class="code-dots"><div class="code-dot dot-red"></div><div class="code-dot dot-yellow"></div><div class="code-dot dot-green"></div></div>
              <span class="code-title">define_subagent 範例</span>
            </div>
            <div class="code-body" style="font-size: 0.75rem;">
              Name: "CssStyler"<br>
              Role: "CSS layout Expert"<br>
              SystemPrompt: "你只負責美化網頁排版。<br>
              只能讀寫 css 檔案，<br>
              所有配色必須採用深 slate 與亮 emerald 的漸層。"
            </div>
          </div>
        </div>
      </div>
    `
  },

  // PART 7: 客製化規章 (42-45)
  {
    id: 42,
    section: "客製化設定",
    layout: "chapter",
    title: "第七部分：客製化規章 (Customizations)",
    contentHtml: `
      <div class="layout-chapter">
        <div class="chapter-num">PART 7</div>
        <h2>第七部分：客製化規章 (Customizations)</h2>
        <p>為你的工地制定「工人守則」與「獨門絕活」，讓所有進場的 AI 工人都乖乖聽話。</p>
      </div>
    `
  },
  {
    id: 43,
    section: "客製化設定",
    layout: "split-content",
    title: "工人守則與獨門絕活：AGENTS.md 與 Skills",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>如何限制 AI 的施工風格？</h3>
          <p class="intro-text">為了不讓進場的工人亂套用他們的奇葩審美，你可以在工地門口貼兩張告示牌：</p>
          <ul class="bullet-list">
            <li><strong>告示牌 A (AGENTS.md)</strong>：工人守則。強制規定「進入工地一律戴安全帽（程式命名規範）」、「嚴禁動某個房間（排除目錄）」。</li>
            <li><strong>告示牌 B (Skills)</strong>：絕活教學。放上「特製隱藏拉門的施工SOP (技能)」，讓工人照著做。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card" style="background-color: var(--accent-glow); border-color: var(--accent-primary); width: 100%;">
            <h4><span class="card-icon">📂</span> 工地門口的告示位置</h4>
            <p style="font-family: monospace; font-size: 0.85rem; line-height: 1.5; margin-top: 0.5rem;">
              專案根目錄/<br>
              └── .agents/ (告示牌專區)<br>
              &nbsp;&nbsp;&nbsp;&nbsp;├── AGENTS.md (工人守則)<br>
              &nbsp;&nbsp;&nbsp;&nbsp;└── skills/ (絕活SOP資料夾)
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 44,
    section: "客製化設定",
    layout: "code-mockup",
    title: "寫下你的絕活 SOP：SKILL.md 寫法",
    contentHtml: `
      <div class="code-mockup">
        <div class="code-header">
          <div class="code-dots"><div class="code-dot dot-red"></div><div class="code-dot dot-yellow"></div><div class="code-dot dot-green"></div></div>
          <span class="code-title">.agents/skills/clean_junk/SKILL.md</span>
        </div>
        <div class="code-body" style="font-size: 0.75rem;">
---<br>
name: "clean_junk"<br>
description: "清理工地多餘的垃圾材料與備份檔"<br>
---<br>
# 施工步驟：<br>
1. 找出專案內以 .tmp 結尾的暫存檔。<br>
2. 將這些暫存檔全部刪除。<br>
3. 執行 git status 確保沒有誤刪正常檔案。
        </div>
      </div>
      <p style="font-size: 0.9rem; margin-top: 1rem; color: var(--text-secondary);">
        💡 當你在聊天對話中打：「幫我清一下垃圾」時，AI 會自動讀取並觸發這份絕活 SOP！
      </p>
    `
  },
  {
    id: 45,
    section: "客製化設定",
    layout: "bullets",
    title: "工人守則 (AGENTS.md)：工人們必須遵守的法律",
    contentHtml: `
      <h3>工人守則的法律效力</h3>
      <p class="intro-text">在 <code>.agents/AGENTS.md</code> 裡，你可以用簡單的條列式中文，寫下你想約束的一切規矩：</p>
      <ul class="bullet-list" style="margin-top: 1.5rem;">
        <li><strong>命名風格</strong>：如「全案變數名稱一律採用 camelCase (駝峰命名法)」。</li>
        <li><strong>註解規範</strong>：如「每個新加入的函式上方，必須寫 2 行中文說明它在幹嘛」。</li>
        <li><strong>絕對服從</strong>：所有的 AI 工人（包括子代理人）在開始動手前，都會把這份守則讀一遍，並發誓絕對遵守。這保證了代碼風格的整潔與安全。</li>
      </ul>
    `
  },

  // PART 8: 最佳實踐與總結 (46-52)
  {
    id: 46,
    section: "最佳實踐與總結",
    layout: "chapter",
    title: "第八部分：初學者施工金律與總結",
    contentHtml: `
      <div class="layout-chapter">
        <div class="chapter-num">PART 8</div>
        <h2>第八部分：初學者施工金律與總結</h2>
        <p>學會如何做好一個「甩手業主」。掌握 5 大施工金律，並學會當 AI 設計師卡住時的解決辦法。</p>
      </div>
    `
  },
  {
    id: 47,
    section: "最佳實踐與總結",
    layout: "bullets",
    title: "做個聰明業主的 5 大施工金律",
    contentHtml: `
      <h3>如何發揮 AI 設計師的最大威力？</h3>
      <p class="intro-text">記住這五條工地金律，保證你不會蓋出危樓：</p>
      <ul class="bullet-list" style="margin-top: 1.5rem;">
        <li><strong>金律 1：大別墅拆成小房間蓋</strong>。不要叫 AI 「蓋一個淘寶網站」。應該先叫它「設計商品卡片樣式」，分小步執行。</li>
        <li><strong>金律 2：簽名（Proceed）前看一眼藍圖</strong>。確認它要動的檔案是不是你預期的那幾個。</li>
        <li><strong>金律 3：多拷問（/grill-me）</strong>。當需求不夠清楚，讓 AI 來拷問你，把細節寫成規格再施工。</li>
        <li><strong>金律 4：記錄你的習慣（/learn）</strong>。解決一個 Bug 後，讓 AI 把經驗記在備忘錄中。</li>
        <li><strong>金律 5：放手讓它去測試</strong>。AI 有自動修復水電（Self-healing）的本領，不用怕報錯，讓它自己去跑測試修正。</li>
      </ul>
    `
  },
  {
    id: 48,
    section: "最佳實踐與總結",
    layout: "split-content",
    title: "常見問題：施工到一半卡住了怎麼辦？",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>當設計師陷入死胡同</h3>
          <p class="intro-text">寫程式難免會卡住。當 AI 重複修改同一個 Bug 三次都修不好時：</p>
          <ul class="bullet-list">
            <li><strong>解法 1：大聲喝止</strong>。打字說：「停！這個方法行不通，我們換一個更簡單的寫法。」</li>
            <li><strong>解法 2：業主親自修</strong>。你可以自己打開檔案，把那行寫錯的螺絲鎖上。AI 在下一步讀取檔案時，會自動跟上你的修改。</li>
            <li><strong>解法 3：時光倒流 (Git)</strong>：因為我們有 Git 存檔，隨時可以用指令還原，不怕改壞。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="info-card" style="background-color: var(--accent-glow); border-color: var(--accent-primary); width: 100%;">
            <h4><span class="card-icon">💡</span> 救火小幫手</h4>
            <p style="font-size: 0.85rem; line-height: 1.5; margin-top: 0.5rem;">
              當遇到怎麼改都不對的情況，可以在 scratch 資料夾寫一個極簡的 <code>test.js</code> 試跑，找出最正確的寫法，再把代碼貼給 AI 看。
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 49,
    section: "最佳實踐與總結",
    layout: "split-content",
    title: "從「動手寫代碼」到「指揮 AI 寫代碼」",
    contentHtml: `
      <div class="split-layout">
        <div class="split-left">
          <h3>心態轉變與個人成長</h3>
          <p class="intro-text">使用 Antigravity 不僅是為了偷懶，更是讓你從碼農升級為架構師的過程：</p>
          <ul class="bullet-list">
            <li><strong>新手期 (工人)</strong>：看著 AI 寫程式，自己跟著抄，學習基礎語法。</li>
            <li><strong>中手期 (工頭)</strong>：審查計畫書，能看出 AI 計畫裡的漏洞，並引導它修正。</li>
            <li><strong>大師期 (總監/架構師)</strong>：你負責規劃大架構，定義 <code>AGENTS.md</code> 規則，把累人的施工交給 AI 團隊。</li>
          </ul>
        </div>
        <div class="split-right">
          <div class="stats-container" style="flex-direction: column; width: 100%;">
            <div class="stat-item" style="width: 100%;">
              <div class="stat-number">100%</div>
              <div class="stat-label">掌控全局</div>
              <div class="stat-desc">你才是這棟夢想房子的真正設計靈魂。</div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 50,
    section: "最佳實踐與總結",
    layout: "title",
    title: "開啟你的無重力程式裝修之旅吧！",
    contentHtml: `
      <div class="layout-title">
        <h1 style="font-size: 2.8rem;">準備好蓋起你的咖啡廳了嗎？</h1>
        <p class="subtitle" style="font-size: 1.25rem;">別再背負沉重的語法包袱，與 Antigravity 攜手，像漂浮在無重力太空中一樣，愉快地蓋起你的軟體帝國！</p>
        <div class="info-card" style="display: inline-block; padding: 0.8rem 1.8rem; margin-top: 1rem; background-color: var(--accent-glow); border-color: var(--accent-primary);">
          <span style="font-weight: 700; color: var(--text-primary); font-size: 1rem;">🚀 祝你的程式碼永遠綠燈，施工順利！</span>
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
