// RAW DATA
const rawGuestList = `
0	Groom Jack、Bride Kensey、主婚人 蔡寬福、主婚人 張瑢糴、主婚人 徐瑜樺、主婚人 李武男、阿嬤 侯玉珠、大伯父 蔡松柏、大伯母 蔡林金蓮、大舅 徐崇偉、小舅 徐晟偉、小舅媽 郭憓陵、舅舅 張志強、舅媽 陳亮今
1	蔡佳雯、陳品全、陳宥儒、陳羿璇、蔡英哲、蔡沛霈、蔡佳秋、陳順昌、陳佩妤、陳楷元、林依妮、蔡沅恩
2	PP Kevin 陳怡全、PE Paper 陳富瑞、PP Climber 陳睦彥、張月華、PP Solomon 陳文慶、余麗霞、PP Stephen 曾大中、蔣以文、Benz 邱禎雄、陳麗珠
3	CP Richard 陳國雄、PP Amanada 邱南嫣、PP Gino 林明聰、廖淑美、P IQ 胡儷馨、PE Alan 林伯倫、James Huang 黃丁士、周祝如、陳淑靜、Ken Yuan
4	PP Amanada、PP Linda、PP Shain、PP Keane、PP Bear、PP Franey、PP Godspeed、PP Eric 王金祥、PP Frank、Leona
5	連文彬、許文泉、謝宜良、王政琦、林怡伶 Ivy、郭思寬、曹心寗、曹柇軒、Woody、Sammi、曹人宇、洪雪裕
6	鄭立仁 Jack、廖慧伶、謝涴亦 Gina、高紹瑀 Amber、高菁蔚 Vivian、曾靜怡Yudy、徐家清 Sissi、廖玉美、蔣可怡 Teri、安東尼、吳婕柔 Winnie
7	蔡孟攸、St Cloud、張馥淇、張維恩、張瑜庭、Ivy Dodo、易慎慈、張雅憶、林霆宥、張塋鈺、林穎菲
8	陳解文、劉豐逸、蔡妤萱、蔡閔森、汪嘉慧、陳怡媚、陳冠佑、鄭言晞、鄭芯宥、蔡昀頤、蔡溱羽、蔡溱秝
9	李嘉芬、陳永正、大野友義、Ono Yoshie、蔡筠、李孟玲 Linda、王家玉、黃大倫、鍾志、連素哲
10	馬靜如 PDG Sara、Ralph、莊金英 PP Linda、陳耀祖 James、秦嗣林 PP Stone、徐靜孏、彭達賢 PP Gear、許靜慧、吳榮發 PP Donny、林芷亦 PP Jill
11	IPP David、Jane、Tanya、Michelle、Lily、Yvette、Jeanette、Grace、林家妃、Sophie 翁淑惠
12	張乃聖、李智慧、翁世慧、曾新衡、韓曉君、張軒瑜、楊惠蘭、曾慶星、許明文、張毓婷
13	二伯父 蔡松山、二伯母 蔡陳對、三伯父 蔡松義、三伯母 陳玉珠、姑姑 蔡沂澐、姑丈 陳振成、堂哥 蔡志忠、堂哥 蔡哲賢、大嫂 陳晏真、堂姐 蔡靜宜
14	五星好評 瑞雲姐、姨丈 張人文、雅雅阿姨、莊壹証、舅公 侯德宗、Ray、洪美雅、林于倫、小舅 侯逯陞 Cary、小舅媽 Nicole、舅婆、Ivy
15	叔公 張朝國、姨婆 張楊寶蓮、哥哥 張瑞堂、舅公 楊得元、伯父 何志傑、漂亮姨婆 王春梅、叔公 李武龍、大伯父 李文章、叔叔 洪聞、洪聞夫人 王秋萍
16	Fanny Chang、Kevin Liu、Jessie Chang、Brian Yeh、Joanna、James Lee、Emily Chiu、Eason Hsu、Hsin Pei Chou、軒哥阿嬤、吳小珈
17	Maggie Tang、Capybara Otani、Catherine Hsiao、Oscar Tang、Sisa Chiang、Ivan Ivanov、Alexandar Ivanov、Ghini Iong、Lorrain Sun、Avery Chiang
18	Steve Tang、Anderson Goh、Tiffany Lee、Yaya Lau、Justin Hui、Amber Chiu、Angeline Kuo、Chunkiat Ong、Wenxin Chiam、Jill Lin、Amy Williams
19	John、Eric、950、Mag、Hans、Weber、Joseph、Jay、Vivian、李家碩
20	林佳欣、黃其安、江明勳 莫凝123、洪邵澤 ccs、喜德、Rax、樹哥、小米、Bala、志祥
21  Uncle 李昱頡、劉福財、劉福財夫人、教授 何四郎、伯父 林文欽、張仁德、張仁德夫人、李守益、洪名義、曾昭雄
22  李佳妙、吳英立、李怡儒、蔡蕙霞、二姑婆 徐綉玲、二姑丈 李專榮、徐千純、謝元峰、謝承儒、謝承哲
23  Cherry Yang、Gerry Lin、Annie Lin、Bryan Lin、語柔、Yan Lin、Cindy、Miho Lin、Kimi Lin、冠廷、永婕
24  Candice Chia、Kevin Chen、Lucas Hung、Louise Ho、Hali Liu、Lance Huang、Irene、丸少爺、Emma Fang、黃子耘、吳佳旻
25  Michael、Belle、Webber、Vera、Megan、Nikki、David、Allison、Steven、Zoe
26  
`;

// Parse Guest Data
export const TABLES = rawGuestList.trim().split('\n').map(line => {
    // Match number at start, followed by whitespace (tab or spaces), then the rest
    const match = line.match(/^(\d+)[\t\s]+(.+)$/);
    if (!match) return null;

    const [_, numStr, namesStr] = match;
    return {
        tableNumber: parseInt(numStr, 10),
        guests: namesStr.split('、').map(n => n.trim())
    };
}).filter(t => t !== null);

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
