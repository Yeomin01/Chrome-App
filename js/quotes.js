const quotes = [
    {
        quote: "고개를 들라. 그대의 계절을 준비하라.",
        author: "아프니까 청춘이다, 김난도",
    },
    {
        quote : "스스로를 신뢰하는 순간, 어떻게 살아야 할 지 깨닫게 된다",
        author : "요한 볼프강 폰 괴테",
    },
    {
        quote : "온 하늘이 새의 길이듯 삶이 이 온통 사람의 길이니, 그러니 그대 사라지지 말아라",
        author : "잘못 들어선 길은 없다, 박노해 ",
    },
    {
        quote : "멋진 사람이 되어라. 그러나 그것을 증명하는 데 시간낭비는 하지 마라",
        author : "파울로 코엘료",
    },
    {
        quote : "달을 향해 쏴라 빗나가도 별이 될테니",
        author : "레스 브라운",
    },
    {
        quote : "바람이 분다 살아야겠다.",
        author : "해변의 묘지, 폴 발레리",
    },
    {
        quote : "너의 우울이 길다. 후회가 체념이 무기력이 너무 길다. 네 안에서 부는 바람에 너는 너무 오래 흔들린다",
        author : "너의 우울이 길다, 황경민",
    },
    {
        quote : "받아들이면 된다. 지는 해를 깨우려 노력하지 말아라. 너는 달빛에 더 아름답다",
        author : "너에게, 서혜진",
    },
    {
        quote : "불확실한 것에도 가치를 두자. 애매함을 견디는 힘을 기르자. 살아 있는다는 것은 변하는 것. 변화는 불안한 일이자 축복받은 일이다",
        author : "선택하지 않은 인생은 잊어도 좋다, 고지마 게이코",
    },
    {
        quote : "배는 항구에 있을 때 가장 안전하지만 그것이 배의 존재 이유는 아니다",
        author : "존 쉐드",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;