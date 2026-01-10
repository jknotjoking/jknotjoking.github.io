// RAW DATA
const rawGuestList = `
0	Groom Jack、Bride Kensey、主婚人 蔡寬福、主婚人 張瑢糴、主婚人 徐瑜樺、主婚人 李武男、阿嬤 侯玉珠、大伯父 蔡松柏、大伯母 蔡林金蓮、大舅 徐崇偉、小舅 徐晟偉、小舅媽 郭憓陵、舅舅 張志強、舅媽 陳亮今
1	二伯父 蔡松山、二伯母 蔡陳對、三伯父 蔡松義、三伯母 陳玉珠、姑姑 蔡沂澐、姑丈 陳振成、堂哥 蔡志忠、堂哥 蔡哲賢、大嫂 陳晏真、堂姐 蔡靜宜
2	蔡妤萱、鄭芯宥、鄭言晞、劉豐逸、陳怡媚、陳解文
3	蔡佳秋、陳順昌、陳冠佑、陳佩妤、蔡佳雯、陳品全、陳楷元、陳宥儒、陳羿璇
4	鄭立仁 Jack、廖慧伶、謝涴亦 Gina、高紹瑀 Amber、周建勳 Eric、洪子媗、曾靜怡 Yudy、蔣可怡 Teri、安東尼、吳婕柔 Winnie
5	林怡伶 Ivy、林怡伶+1 郭思寬、高菁蔚 Vivian、徐家清 Sissi、廖玉美、許明文、張毓婷、Ivy Dodo、易慎慈
6	馬靜如 PDG Sara、Ralph、莊金英 PP Linda、陳耀祖 James、秦嗣林 PP Stone、徐靜孄、彭達賢 PP Gear、許靜慧、吳榮發 PP Donny、林芷亦 PP Jill
7	張乃聖、李智慧、翁世慧、曾新衡、韓曉君、張軒瑜、楊惠蘭、曾慶星
8	姐姐 蔡孟攸、弟弟 St Cloud、阿姨 張馥琪、表弟 張維恩、表弟小孩 張塋鈺、張瑜庭、林漢威、表妹小孩 林霆宥、表妹小孩 林穎菲、小表妹 張雅憶
9	蔡敏森、汪嘉慧、蔡昀頤、蔡溱羽、蔡溱秝、蔡英哲、林依妮、蔡沛霈、蔡浣恩
10	John、Eric、950、Mag、Hans、Weber、Joseph、Jay、Vivian、李家碩
11	Michael、Belle、Webber、Vera、Megan、Nikki、David、Allison、Steven、Chloe
12	林佳欣、黃其安、江明勳 莫凝123、洪邵澤 ccs、喜德、Rax、樹哥、小米、Bala
13	PP Amanada、PP Linda、PP Shain、PP Keane、PP Bear、PP Franey、PP Godspeed、PP Eric 王金祥、PP Frank、Leona
14	李嘉芬、陳永正、大野友義、Ono Yoshie、美玲、李孟鈴Linda、王家玉、黃大倫、鐘志、連素哲
15	張鈞婷 Fanny Chang、劉紘恩 Kevin Liu、張佳熙 Jessie Chang、葉濬愷 Brian Yeh、Joanna、李明澤 James Lee、邱若妤 Emily Chiu、徐義軒 Eason Hsu、周欣蓓 Hsin Pei Chou、軒哥阿嬤、吳旻珈
16	Uncle 李昱頡、李語柔、冠廷、李永婕、家祥、張仁德、張仁德+1、張仁德+1、洪名義、曾昭雄
17	Maggie Tang、Peter Chiang、Catherine Hsiao、Oscar Tang、Sisa Chiang、Ivan Ivanov、Alexandar Ivanov、Ghini Iong、Lorrain Sun、Avery Chiang
18	Steve Tang、Anderson Goh、Tiffany Lee、Yaya Lau、Justin Hui、Amber Chiu、Angeline Kuo、Chunkiat Ong、Wenxin Chiam、Jill Lin、Amy Williams
19	Lance Huang、Irene、丸少爺、Lucas、Lucas +1、Candice Chia、Kevin Chen、Emma Fang
20	PP Kevin 陳怡全、PE Paper 陳富瑞、PP Climber 陳睦彥、張月華、PP Solomon 陳文慶、余麗霞、PP Stephen 曾大中、蔣以文、Benz 邱增雄、陳麗珠
21  CP Richard 陳國雄、PP Amanada 邱南嫣、PP Gino 林明聰、廖淑美、P IQ 胡儷馨、PE Alan 林伯倫、James Huang 黃丁士、周祝如、陳淑靜、Ken Yuan
22  五星好評 瑞雲姐、姨丈 張人文、雅雅阿姨、莊壹証、舅公 侯德宗、Ray、洪美雅、林于倫、侯逯陞 Cary、Nicole、舅婆、Ivy
23  李家妙、吳英立、李怡儒、蔡蕙霞、徐綉玲、二姑丈 李專榮、阿姨 范慈欣、徐千純、謝元峰、謝承儒、謝承哲
24  Cherry Yang、Gerry Lin、Annie Lin、Bryan Lin、Yan Lin、Cindy、Miho Lin、Kimi Lin
25  叔公 張朝國、姨婆 張楊寶蓮、哥哥 張瑞堂、舅公 楊得元、伯父 何志傑、漂亮姨婆 王春梅、教授 何四郎、大伯父 李文章、伯父 李文欽、叔叔 洪聞、洪聞夫人 王秋萍
26  連文彬、許文泉、謝宜良、王政琦、曹心寗、曹柇軒、Woody、Sammi、曹人宇、洪雪裕
`;

// Parse Guest Data
export const TABLES = rawGuestList.trim().split('\n').map(line => {
    const [numStr, namesStr] = line.split('\t');
    return {
        tableNumber: parseInt(numStr, 10),
        guests: namesStr.split('、').map(n => n.trim())
    };
});

export const ALL_GUESTS = TABLES.flatMap(table =>
    table.guests.map(name => ({ name, tableNumber: table.tableNumber }))
);

export const GALLERY_PHOTOS = [
    { id: 1, url: "https://storage.googleapis.com/jk-prewedding-photo/IMG_3355.JPG", size: "large" },
    { id: 2, url: "https://storage.googleapis.com/jk-prewedding-photo/1014-62.jpg", size: "small" },
    { id: 3, url: "https://storage.googleapis.com/jk-prewedding-photo/1014-116.jpg", size: "medium" },
    { id: 4, url: "https://storage.googleapis.com/jk-prewedding-photo/1014-313.jpg", size: "small" },
    { id: 5, url: "https://storage.googleapis.com/jk-prewedding-photo/1014-503.jpg", size: "medium" },
    { id: 6, url: "https://storage.googleapis.com/jk-prewedding-photo/1014-402.jpg", size: "large" },
    { id: 7, url: "https://storage.googleapis.com/jk-prewedding-photo/1014-445.jpg", size: "small" },
    { id: 8, url: "https://storage.googleapis.com/jk-prewedding-photo/1014-58.jpg", size: "small" },
    { id: 9, url: "https://storage.googleapis.com/jk-prewedding-photo/1014-104.jpg", size: "small" },
    { id: 10, url: "https://storage.googleapis.com/jk-prewedding-photo/IMG_3267.JPG", size: "medium" },
    { id: 11, url: "https://storage.googleapis.com/jk-prewedding-photo/1014-492.jpg", size: "large" },
    { id: 12, url: "https://storage.googleapis.com/jk-prewedding-photo/1014-549.jpg", size: "small" },
];
