// RAW DATA
const rawGuestList = `
1	Alexander Hamilton、林志豪、張偉、Emily Watson、陳怡君、王力、Michael Chang、黃俊傑、李娜、Sarah Thompson
2	張雅婷、James Lee、David Lee、林欣怡、趙強、Jennifer Wu、王志強、孫麗、Robert Garcia、李淑芬
3	吳軍、Jessica Chen、陳建宏、鄭平、William Clark、蔡佩珊、謝安、Olivia Brown、楊宗緯、馮敏
4	Kevin Chen、黃睿展、賈永廷、劉紫筠、Nini Kao、袁達、Linda Martinez、林宜靜、郭靜、Richard Taylor
5	郭承翰、彭博、Barbara Jackson、黃柏翔、羅傑、Daniel White、張惠妹、宋江、Elizabeth Harris、廖婉君
6	馬龍、Christopher Martin、賴俊男、朱莉、Matthew Robinson、徐志明、何斌、Ashley Lewis、邱郁婷、高飛
7	Joshua Walker、曾國藩、梁寬、Amanda Young、蘇美玲、杜鵑、Andrew Hall、葉天宇、韓信、Melissa King
8	莊凱勛、曹操、Patrick Wright、江佩蓉、魏徵、Stephanie Scott、呂明哲、潘安、Kevin Green、何秀英
9	傅紅、Brian Baker、羅志祥、沈括、Rachel Adams、蕭敬騰、姜維、Steven Nelson、潘瑋柏、盧亮
10	Kimberly Carter、田馥甄、賈明、Timothy Mitchell、蔡依林、董卓、Laura Perez、柯震東、范冰、Jason Roberts
11	梁靜茹、方正、Jeffrey Turner、鄧紫棋、姚明、Ryan Phillips、吳青峰、汪峰、Gary Campbell、張惠春
12	陸毅、Amy Parker、陳奕迅、金星、Frank Evans、王力宏、史泰、Scott Edwards、陶喆、孟飛
13	Eric Collins、林俊傑、郝雲、Stephen Stewart、周杰倫、邵峰、Larry Sanchez、張學友、常遠、Justin Morris
14	劉德華、尹正、Brandon Rogers、郭富城、康凱、Gregory Reed、黎明、嚴寬、Samuel Cook、謝霆鋒
15	華晨、Benjamin Morgan、陳小春、衛蘭、Raymond Bell、鄭伊健、卓文、Alexander Murphy、吳彥祖、單飛
16	Patrick Bailey、古天樂、費翔、Jack Rivera、張家輝、舒淇、Dennis Cooper、劉青雲、湯唯、Jerry Richardson
17	梁朝偉、鞏俐、Tyler Cox、周星馳、章子、Aaron Howard、成龍、楊紫、Henry Ward、李連杰
18	趙薇、Douglas Torres、甄子丹、周迅、Peter Peterson、洪金寶、鹿晗、Adam Gray、元彪、吳亦
19	Nathan Ramirez、林青霞、肖戰、Zachary James、王祖賢、王一、Walter Watson、張曼玉、蔡徐、Kyle Brooks
20	鍾楚紅、易烊、Harold Kelly、關之琳、王源、Carl Sanders、李嘉欣、胡歌、Arthur Price、邱淑貞
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
    { id: 2, url: "https://picsum.photos/400/400?random=2", size: "small" },
    { id: 3, url: "https://picsum.photos/400/800?random=3", size: "medium" },
    { id: 4, url: "https://picsum.photos/400/400?random=4", size: "small" },
    { id: 5, url: "https://picsum.photos/600/600?random=5", size: "medium" },
    { id: 6, url: "https://picsum.photos/400/800?random=6", size: "large" },
    { id: 7, url: "https://picsum.photos/400/400?random=7", size: "small" },
    { id: 8, url: "https://picsum.photos/400/800?random=8", size: "small" },
    { id: 9, url: "https://picsum.photos/400/400?random=9", size: "small" },
    { id: 10, url: "https://picsum.photos/600/600?random=10", size: "medium" },
    { id: 11, url: "https://picsum.photos/400/400?random=11", size: "large" },
    { id: 12, url: "https://picsum.photos/400/400?random=12", size: "small" },
];
