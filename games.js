const gamesList = [
    {
        title: "腐败王国v0.22.1",
        pcLink: "https://pan.baidu.com/s/1cBXy-jj6OjtGFyRaZTv6SA?pwd=9s6l", // 替换为实际的电脑下载链接
        androidLink: "https://pan.baidu.com/s/1wvwty_z7KGLj_pg5WqE9uA?pwd=rmja" // 替换为实际的安卓下载链接
    },
    {
        title: "永恒世界v0.8.5",
        pcLink: "https://pan.baidu.com/s/1IqKnya5K3C112WD8dH-HmA?pwd=djw2", // 表示没有电脑下载链接
        androidLink: "https://pan.baidu.com/s/1Lj46SIk-nZjqayMy_eOoKg?pwd=e8er" // 替换为实际的安卓下载链接
    },
    {
        title: "特工17v0.24.8",
        pcLink: "https://pan.baidu.com/s/1PgFxkaMARSXK2EJT3QJOCg?pwd=8it2",
        androidLink: "https://pan.baidu.com/s/1Z903-HwxmeCY2GC2TP5X7w?pwd=bqdr"
    },
    {
        title: "二次人生：永恒不再 0.8",
        pcLink: "https://pan.baidu.com/s/1HxGfy3jDzD1R4N3lL8c_FA?pwd=c3jk",
        androidLink: "https://pan.baidu.com/s/1zEu9O1-OsJZu8J4zMFROwg?pwd=rkgi"
    },
    {
        title: "康乃馨俱乐部 4.4part2",
        pcLink: "https://pan.baidu.com/s/1pneNeeHT5amh97n2FdSm1g?pwd=6puj",
        androidLink: "https://pan.baidu.com/s/1y5Fe6-7I6FCRZLG-3srvgQ?pwd=ljj0"
    },
    {
        title: "黑暗的伴侣 Ch.8",
        pcLink: "https://pan.baidu.com/s/1B1czuub7cEERTy_FEIcqVg?pwd=okej",
        androidLink: "https://pan.baidu.com/s/1E31LatXZ5zzM7rlvBylIWA?pwd=u9xs"
    },
    {
        title: "我的电子羊女仆 0.5.9",
        pcLink: "https://pan.baidu.com/s/1MB4OKYuNcj6Or6VuO-W7EA?pwd=y0kv",
        androidLink: "https://pan.baidu.com/s/1sPkoge-2TjywKD3MTpQ0vQ?pwd=86xt"
    },
    {
        title: "彼岸花",
        pcLink: "https://pan.baidu.com/s/1e3SKqHTngSgrYpGGD9Fsgw?pwd=8191",
        androidLink: "https://pan.baidu.com/s/1oLq7J6CRmrYeQQxcyff6Pw?pwd=pftr"
    },
    {
        title: "一生一次",
        pcLink: "https://pan.baidu.com/s/11e-WF5OTgpwIgZzU7xGYLg?pwd=fcb7",
        androidLink: "https://pan.baidu.com/s/1tYO5TwOIcW5GdXHTYd1hvQ?pwd=it09"
    },
    {
        title: "花火轮盘赌 1.1",
        pcLink: "https://pan.baidu.com/s/1Az7CcziDDDv9SA5IiImD0g?pwd=n88j",
        androidLink: "https://pan.baidu.com/s/1gf79zuJtE-cTqjglpxI_vg?pwd=5fe3"
    },
    {
        title: "爱丽丝篇・(破)",
        pcLink: "https://pan.baidu.com/s/1jw7bHGcRMuT43dAnhg-LzA?pwd=buns",
        androidLink: null
    },
    {
        title: "爱丽丝篇・(续)",
        pcLink: "https://pan.baidu.com/s/1nanAgOkFBLX4_1vwp2xiYA?pwd=vg4y",
        androidLink: null
    },
    {
        title: "双子篇・壹",
        pcLink: "https://pan.baidu.com/s/1lcMVIkLyfnnjmNg2rh-FuA?pwd=5oza",
        androidLink: null
    },
    {
        title: "后宫大冒险 KonoSuba",
        pcLink: "https://pan.baidu.com/s/1xgKcNcb_yh4q3ACDCrY34A?pwd=x6vv",
        androidLink: "https://pan.baidu.com/s/1l2JW0GJDX46fmb0JOPAzlw?pwd=docc"
    },
    {
        title: "夏日狂想曲",
        pcLink: "https://pan.baidu.com/s/1bWsBKrmwT-Y8D3is0_tvWQ?pwd=oex4",
        androidLink: null
    },
    {
        title: "冬日狂想曲",
        pcLink: "https://pan.baidu.com/s/1jYaRaF-RLZKa_jU82H0vUw?pwd=dh88",
        androidLink: null
    },
    {
        title: "鲁迪v6",
        pcLink: "https://pan.baidu.com/s/1S4Ja5KKJsZwZHvC1EMIICQ?pwd=hgp2",
        androidLink: "https://pan.baidu.com/s/1rTx0BoraLEWY6KEZ3L0NLA?pwd=wmvn"
    },
    {
        title: "凤凰V12",
        pcLink: "https://pan.baidu.com/s/1Udla98ACrCBUMTWUtOSNAw?pwd=x3cd",
        androidLink: "https://pan.baidu.com/s/10Ry-pULxjwKrCEeO5JUTdA?pwd=hqn2"
    },
    {
        title: "代号S.P.E.S",
        pcLink: "https://pan.baidu.com/s/1zReRiLVNY7vUA3xnQOvnPQ?pwd=pu75",
        androidLink: "https://pan.baidu.com/s/1K8NjOBi4CsWDNW-8bqzEaw?pwd=a141"
    },
    {
        title: "垂死之梦Ver0.7.0.1",
        pcLink: "https://pan.baidu.com/s/1_zoPAXeZ_F4c7Fq9fE0BEw?pwd=938p",
        androidLink: "https://pan.baidu.com/s/1Lv3_KdkxxCZkOaVmJuL5Uw?pwd=w5r5"
    }// 可以继续添加更多游戏
];
