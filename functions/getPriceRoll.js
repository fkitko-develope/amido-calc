export async function onRequest() {

    // ▼▼▼ ここに Excel で生成したロール式の JSON 行を貼り付ける ▼▼▼
    const list = [
        { type:"ロール式網戸", W:400, H:600, group:"単色", bath:"なし", price:18400, unit:12880 },
        { type:"ロール式網戸", W:400, H:600, group:"木目", bath:"なし", price:21200, unit:14840 },
        { type:"ロール式網戸", W:400, H:1000, group:"単色", bath:"なし", price:20000, unit:14000 },
        { type:"ロール式網戸", W:400, H:1000, group:"木目", bath:"なし", price:22900, unit:16030 },
        { type:"ロール式網戸", W:400, H:1500, group:"単色", bath:"なし", price:22000, unit:15400 },
        { type:"ロール式網戸", W:400, H:1500, group:"木目", bath:"なし", price:25300, unit:17710 },
        { type:"ロール式網戸", W:400, H:2000, group:"単色", bath:"なし", price:24000, unit:16800 },
        { type:"ロール式網戸", W:400, H:2000, group:"木目", bath:"なし", price:27600, unit:19320 },
        { type:"ロール式網戸", W:400, H:2300, group:"単色", bath:"なし", price:25100, unit:17570 },
        { type:"ロール式網戸", W:400, H:2300, group:"木目", bath:"なし", price:28900, unit:20230 },
        { type:"ロール式網戸", W:700, H:600, group:"単色", bath:"なし", price:20800, unit:14560 },
        { type:"ロール式網戸", W:700, H:600, group:"木目", bath:"なし", price:24000, unit:16800 },
        { type:"ロール式網戸", W:700, H:1000, group:"単色", bath:"なし", price:22400, unit:15680 },
        { type:"ロール式網戸", W:700, H:1000, group:"木目", bath:"なし", price:25700, unit:17990 },
        { type:"ロール式網戸", W:700, H:1500, group:"単色", bath:"なし", price:24500, unit:17150 },
        { type:"ロール式網戸", W:700, H:1500, group:"木目", bath:"なし", price:28100, unit:19670 },
        { type:"ロール式網戸", W:700, H:2000, group:"単色", bath:"なし", price:26400, unit:18480 },
        { type:"ロール式網戸", W:700, H:2000, group:"木目", bath:"なし", price:30400, unit:21280 },
        { type:"ロール式網戸", W:700, H:2300, group:"単色", bath:"なし", price:27500, unit:19250 },
        { type:"ロール式網戸", W:700, H:2300, group:"木目", bath:"なし", price:31700, unit:22190 },
        { type:"ロール式網戸", W:1000, H:600, group:"単色", bath:"なし", price:23400, unit:16380 },
        { type:"ロール式網戸", W:1000, H:600, group:"木目", bath:"なし", price:26900, unit:18830 },
        { type:"ロール式網戸", W:1000, H:1000, group:"単色", bath:"なし", price:24800, unit:17360 },
        { type:"ロール式網戸", W:1000, H:1000, group:"木目", bath:"なし", price:28500, unit:19950 },
        { type:"ロール式網戸", W:1000, H:1500, group:"単色", bath:"なし", price:26800, unit:18760 },
        { type:"ロール式網戸", W:1000, H:1500, group:"木目", bath:"なし", price:30800, unit:21560 },
        { type:"ロール式網戸", W:1000, H:2000, group:"単色", bath:"なし", price:28900, unit:20230 },
        { type:"ロール式網戸", W:1000, H:2000, group:"木目", bath:"なし", price:33200, unit:23240 },
        { type:"ロール式網戸", W:1000, H:2300, group:"単色", bath:"なし", price:30000, unit:21000 },
        { type:"ロール式網戸", W:1000, H:2300, group:"木目", bath:"なし", price:34500, unit:24150 },
        { type:"ロール式網戸", W:1300, H:600, group:"単色", bath:"なし", price:26700, unit:18690 },
        { type:"ロール式網戸", W:1300, H:600, group:"木目", bath:"なし", price:30700, unit:21490 },
        { type:"ロール式網戸", W:1300, H:1000, group:"単色", bath:"なし", price:28400, unit:19880 },
        { type:"ロール式網戸", W:1300, H:1000, group:"木目", bath:"なし", price:32700, unit:22890 },
        { type:"ロール式網戸", W:1300, H:1500, group:"単色", bath:"なし", price:30300, unit:21210 },
        { type:"ロール式網戸", W:1300, H:1500, group:"木目", bath:"なし", price:34800, unit:24360 },
        { type:"ロール式網戸", W:1300, H:2000, group:"単色", bath:"なし", price:32300, unit:22610 },
        { type:"ロール式網戸", W:1300, H:2000, group:"木目", bath:"なし", price:37100, unit:25970 },
        { type:"ロール式網戸", W:1300, H:2300, group:"単色", bath:"なし", price:33600, unit:23520 },
        { type:"ロール式網戸", W:1300, H:2300, group:"木目", bath:"なし", price:38600, unit:27020 },
    ];
    // ▲▲▲ ここに貼り付け ▲▲▲
  
    return new Response(JSON.stringify(list), {
      headers: { "Content-Type": "application/json" }
    });
  }
  