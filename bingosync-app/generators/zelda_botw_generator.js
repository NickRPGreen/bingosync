(function(j, i, g, m, k, n, o) {
    function q(b) {
        var e, f, a = this,
            c = b.length,
            d = 0,
            h = a.i = a.j = a.m = 0;
        a.S = [];
        a.c = [];
        for (c || (b = [c++]); d < g;) a.S[d] = d++;
        for (d = 0; d < g; d++) e = a.S[d], h = h + e + b[d % c] & g - 1, f = a.S[h], a.S[d] = f, a.S[h] = e;
        a.g = function(b) {
            var c = a.S,
                d = a.i + 1 & g - 1,
                e = c[d],
                f = a.j + e & g - 1,
                h = c[f];
            c[d] = h;
            c[f] = e;
            for (var i = c[e + h & g - 1]; --b;) d = d + 1 & g - 1, e = c[d], f = f + e & g - 1, h = c[f], c[d] = h, c[f] = e, i = i * g + c[e + h & g - 1];
            a.i = d;
            a.j = f;
            return i
        };
        a.g(g)
    }

    function p(b, e, f, a, c) {
        f = [];
        c = typeof b;
        if (e && c == "object")
            for (a in b)
                if (a.indexOf("S") < 5) try {
                    f.push(p(b[a], e - 1))
                } catch (d) {}
                return f.length ? f : b + (c != "string" ? "\0" : "")
    }

    function l(b, e, f, a) {
        b += "";
        for (a = f = 0; a < b.length; a++) {
            var c = e,
                d = a & g - 1,
                h = (f ^= e[a & g - 1] * 19) + b.charCodeAt(a);
            c[d] = h & g - 1
        }
        b = "";
        for (a in e) b += String.fromCharCode(e[a]);
        return b
    }
    i.seedrandom = function(b, e) {
        var f = [],
            a;
        b = l(p(e ? [b, j] : arguments.length ? b : [(new Date).getTime(), j, window], 3), f);
        a = new q(f);
        l(a.S, j);
        i.random = function() {
            for (var c = a.g(m), d = o, b = 0; c < k;) c = (c + b) * g, d *= g, b = a.g(1);
            for (; c >= n;) c /= 2, d /= 2, b >>>= 1;
            return (c + b) / d
        };
        return b
    };
    o = i.pow(g, m);
    k = i.pow(2, k);
    n = k * 2;
    l(i.random(), j)
})([], Math, 256, 6, 52);

bingoGenerator = function(bingoList, opts) {
    var LANG = opts.lang || 'name';
    var MODE = opts.mode || "normal";
    var cardType = "Normal";
    var SEED = opts.seed || Math.ceil(999999 * Math.random()).toString();
    var size = 5;
    if (true) {
        Math.seedrandom(SEED);
        var MAX_SEED = 999999;

        var lineCheckList = [];
        if (size == 5) {
            lineCheckList[1] = [1, 2, 3, 4, 5, 10, 15, 20, 6, 12, 18, 24];
            lineCheckList[2] = [0, 2, 3, 4, 6, 11, 16, 21];
            lineCheckList[3] = [0, 1, 3, 4, 7, 12, 17, 22];
            lineCheckList[4] = [0, 1, 2, 4, 8, 13, 18, 23];
            lineCheckList[5] = [0, 1, 2, 3, 8, 12, 16, 20, 9, 14, 19, 24];
            lineCheckList[6] = [0, 10, 15, 20, 6, 7, 8, 9];
            lineCheckList[7] = [0, 12, 18, 24, 5, 7, 8, 9, 1, 11, 16, 21];
            lineCheckList[8] = [5, 6, 8, 9, 2, 12, 17, 22];
            lineCheckList[9] = [4, 12, 16, 20, 9, 7, 6, 5, 3, 13, 18, 23];
            lineCheckList[10] = [4, 14, 19, 24, 8, 7, 6, 5];
            lineCheckList[11] = [0, 5, 15, 20, 11, 12, 13, 14];
            lineCheckList[12] = [1, 6, 16, 21, 10, 12, 13, 14];
            lineCheckList[13] = [0, 6, 12, 18, 24, 20, 16, 8, 4, 2, 7, 17, 22, 10, 11, 13, 14];
            lineCheckList[14] = [3, 8, 18, 23, 10, 11, 12, 14];
            lineCheckList[15] = [4, 9, 19, 24, 10, 11, 12, 13];
            lineCheckList[16] = [0, 5, 10, 20, 16, 17, 18, 19];
            lineCheckList[17] = [15, 17, 18, 19, 1, 6, 11, 21, 20, 12, 8, 4];
            lineCheckList[18] = [15, 16, 18, 19, 2, 7, 12, 22];
            lineCheckList[19] = [15, 16, 17, 19, 23, 13, 8, 3, 24, 12, 6, 0];
            lineCheckList[20] = [4, 9, 14, 24, 15, 16, 17, 18];
            lineCheckList[21] = [0, 5, 10, 15, 16, 12, 8, 4, 21, 22, 23, 24];
            lineCheckList[22] = [20, 22, 23, 24, 1, 6, 11, 16];
            lineCheckList[23] = [2, 7, 12, 17, 20, 21, 23, 24];
            lineCheckList[24] = [20, 21, 22, 24, 3, 8, 13, 18];
            lineCheckList[25] = [0, 6, 12, 18, 20, 21, 22, 23, 19, 14, 9, 4];
        }

        function mirror(i) {
            if (i == 0) {
                i = 4;
            } else if (i == 1) {
                i = 3;
            } else if (i == 3) {
                i = 1;
            } else if (i == 4) {
                i = 0;
            }
            return i;
        }

        function difficulty(i) {
            var Num3 = SEED % 1000;
            var Rem8 = Num3 % 8;
            var Rem4 = Math.floor(Rem8 / 2);
            var Rem2 = Rem8 % 2;
            var Rem5 = Num3 % 5;
            var Rem3 = Num3 % 3;
            var RemT = Math.floor(Num3 / 120);
            var Table5 = [0];
            Table5.splice(Rem2, 0, 1);
            Table5.splice(Rem3, 0, 2);
            Table5.splice(Rem4, 0, 3);
            Table5.splice(Rem5, 0, 4);
            Num3 = Math.floor(SEED / 1000);
            Num3 = Num3 % 1000;
            Rem8 = Num3 % 8;
            Rem4 = Math.floor(Rem8 / 2);
            Rem2 = Rem8 % 2;
            Rem5 = Num3 % 5;
            Rem3 = Num3 % 3;
            RemT = RemT * 8 + Math.floor(Num3 / 120);
            var Table1 = [0];
            Table1.splice(Rem2, 0, 1);
            Table1.splice(Rem3, 0, 2);
            Table1.splice(Rem4, 0, 3);
            Table1.splice(Rem5, 0, 4);
            i--;
            RemT = RemT % 5;
            x = (i + RemT) % 5;
            y = Math.floor(i / 5);
            var e5 = Table5[(x + 3 * y) % 5];
            var e1 = Table1[(3 * x + y) % 5];
            value = 5 * e5 + e1;
            if (MODE == "short") {
                value = Math.floor(value / 2);
            } else if (MODE == "long") {
                value = Math.floor((value + 25) / 2);
            }
            value++;
            return value;
        }

        function checkLine(i, typesA) {
            var synergy = 0;
            for (var j = 0; j < lineCheckList[i].length; j++) {
                var typesB = bingoBoard[lineCheckList[i][j] + 1].types;
                if (typeof typesB != 'undefined') {
                    for (var k = 0; k < typesA.length; k++) {
                        for (var l = 0; l < typesB.length; l++) {
                            if (typesA[k] == typesB[l]) {
                                synergy++;
                                if (k == 0) {
                                    synergy++
                                };
                                if (l == 0) {
                                    synergy++
                                };
                            }
                        }
                    }
                }
            }
            return synergy;
        }
        var bingoBoard = [];
        for (var i = 1; i <= 25; i++) {
            bingoBoard[i] = {
                difficulty: difficulty(i)
            };
        }
        for (var i = 1; i <= 25; i++) {
            var getDifficulty = bingoBoard[i].difficulty;
            var RNG = Math.floor(bingoList[getDifficulty].length * Math.random());
            if (RNG == bingoList[getDifficulty].length) {
                RNG--;
            };
            var j = 0,
                synergy = 0,
                currentObj = null,
                minSynObj = null;
            do {
                currentObj = bingoList[getDifficulty][(j + RNG) % bingoList[getDifficulty].length];
                synergy = checkLine(i, currentObj.types);
                if (minSynObj == null || synergy < minSynObj.synergy) {
                    minSynObj = {
                        synergy: synergy,
                        value: currentObj
                    };
                }
                j++;
            } while ((synergy != 0) && (j < bingoList[getDifficulty].length));
            bingoBoard[i].types = minSynObj.value.types;
            bingoBoard[i].name = minSynObj.value[LANG] || minSynObj.value.name;
            bingoBoard[i].synergy = minSynObj.synergy;
        }
        return bingoBoard;
    }
};

var bingoList = [];

bingoList[1] = [
  { name: "Hylian Hood", types: ["Clothes","Hylian Gear","Rupee",] },
  { name: "Hylian Tunic", types: ["Clothes","Hylian Gear","Rupee","Rupee",] },
  { name: "Warm Doublet", types: ["Clothes","Cold Resistance","Hateno",] },
  { name: "3 Great Plateau Koroks", types: ["Korok","Plateau",] },
  { name: "Hylian Trousers", types: ["Clothes","Hylian Gear","Rupee",] },
  { name: "Any 'Boko' Equipment item", types: ["Equipment",] },
  { name: "3 Dueling Peaks Koroks", types: ["Korok","Dueling Peaks",] },
  { name: "3 Ridgeland Koroks", types: ["Korok","Ridgeland",] },
];
bingoList[2] = [
  { name: "5 Koroks", types: ["Korok",] },
  { name: "3 Hateno Koroks", types: ["Korok","Hateno",] },
  { name: "3 Faron Koroks", types: ["Korok","Faron",] },
  { name: "3 Central Tower Koroks", types: ["Korok","Central Hyrule",] },
  { name: "Any 'Rusty' Equipment item", types: ["Equipment",] },
  { name: "Any Energizing meal", types: ["Cooking","Stamina",] },
  { name: "Give Beedle a Beetle", types: ["Horse",] },
  { name: "Register a Horse", types: ["Horse",] },
  { name: "Anger a Cucco", types: ["Cucco",] },
  { name: "Activate Dueling Peaks Tower", types: ["Tower","Dueling Peaks",] },
  { name: "Soup Ladle", types: ["Equipment",] },
  { name: "1 Koko Cooking Side Quest", types: ["Side Quest","Dueling Peaks",] },
  { name: "Any Hasty meal", types: ["Cooking",] },
  { name: "Any Spicy meal", types: ["Cooking","Cold Resistance",] },
];
bingoList[3] = [
  { name: "5 Great Plateau Koroks", types: ["Korok","Plateau",] },
  { name: "6 Dueling Peaks Koroks", types: ["Korok","Dueling Peaks",] },
  { name: "3 Lake Tower Koroks", types: ["Korok","Lake",] },
  { name: "3 Wasteland Koroks", types: ["Korok","Wasteland",] },
  { name: "3 Woodland Koroks", types: ["Korok","Woodland",] },
  { name: "3 Lanayru Koroks", types: ["Korok. Lanayru",] },
  { name: "'The Priceless Maracas' Side Quest", types: ["Side Quest","Dueling Peaks",] },
  { name: "'Playtime with Cottla' Side Quest", types: ["Side Quest","Dueling Peaks",] },
  { name: "'Wild Horses' Side Quest", types: ["Side Quest","Dueling Peaks","Horse",] },
  { name: "'The Statue's Bargain' Side Quest", types: ["Side Quest","Hateno",] },
  { name: "'Watch Out for the Flowers' Shrine Quest", types: ["Shrine","Shrine Quest","Dueling Peaks",] },
  { name: "Any Enduring meal", types: ["Cooking","Stamina",] },
  { name: "Any Mighty meal", types: ["Cooking",] },
  { name: "Any Sneaky meal", types: ["Cooking",] },
  { name: "Dubious Food", types: ["Cooking",] },
  { name: "Open 2 Bokoblin Camp Chests", types: ["Plateau",] },
  { name: "Save a Traveler in Peril", types: ["Monster",] },
  { name: "Activate Lake Tower", types: ["Tower","Lake",] },
  { name: "3 Tabantha Koroks", types: ["Korok","Tabantha",] },
  { name: "Any Stalfos 'Arm' Equipment item", types: ["Equipment",] },
  { name: "3 Side Quests", types: ["Side Quest",] },
];
bingoList[4] = [
  { name: "10 Koroks", types: ["Korok",] },
  { name: "3 Eldin Koroks", types: ["Korok","Eldin",] },
  { name: "3 Akkala Koroks", types: ["Korok","Akkala",] },
  { name: "Pay 1 Great Fairy", types: ["Rupee","Great Fairy",] },
  { name: "Full Hylian Set", types: ["Clothes","Hylian Gear","Rupee",] },
  { name: "Soldier's Helm", types: ["Clothes","Soldier Gear","Rupee","Hateno",] },
  { name: "Soldier's Armor", types: ["Clothes","Soldier Gear","Rupee","Hateno",] },
  { name: "Soldier's Greaves", types: ["Clothes","Soldier Gear","Rupee","Hateno",] },
  { name: "Stealth Mask", types: ["Clothes","Stealth Gear","Rupee","Dueling Peaks",] },
  { name: "Stealth Tights", types: ["Clothes","Stealth Gear","Rupee","Dueling Peaks",] },
  { name: "Climber's Bandanna", types: ["Clothes","Climbing Gear","Dueling Peaks",] },
  { name: "'Flown the Coop' Side Quest", types: ["Side Quest","Dueling Peaks","Heirloom",] },
  { name: "2 Koko Cooking Side Quests", types: ["Side Quest","Dueling Peaks",] },
  { name: "'Arrows of Burning Heat' Side Quest", types: ["Side Quest","Dueling Peaks",] },
  { name: "'The Apple of My Eye' Side Quest", types: ["Side Quest","Tabantha",] },
  { name: "A Minor Test of Strength Shrine", types: ["Shrine","Guardian",] },
  { name: "Farming Hoe", types: ["Equipment",] },
  { name: "Any Hearty meal", types: ["Cooking",] },
  { name: "Any Tough meal", types: ["Cooking",] },
  { name: "Hearty Elixir", types: ["Cooking",] },
  { name: "Energizing Elixir", types: ["Cooking",] },
  { name: "Chilly Elixir", types: ["Cooking",] },
  { name: "Hasty Elixir", types: ["Cooking",] },
  { name: "Enduring Elixir", types: ["Cooking",] },
  { name: "Mighty Elixir", types: ["Cooking",] },
  { name: "Tough Elixir", types: ["Cooking",] },
  { name: "Sneaky Elixir", types: ["Cooking",] },
  { name: "Rock-Hard Food", types: ["Cooking",] },
  { name: "Kill a Wizzrobe of any kind", types: ["Wizzrobe",] },
  { name: "Kill a Stone Talus of any kind", types: ["Rupee","Gems","Miniboss","Talus",] },
  { name: "Kill a (normal) Stone Talus", types: ["Rupee","Gems","Miniboss","Talus",] },
  { name: "Kill a Decayed Guardian", types: ["Miniboss","Guardian",] },
  { name: "Mount a Deer", types: ["Horse",] },
  { name: "Obtain a Purple Rupee", types: ["Rupee",] },
  { name: "Read Paya's Diary", types: ["Dueling Peaks",] },
  { name: "Read Purah's Diary", types: ["Hateno",] },
  { name: "Activate Hateno Tower", types: ["Tower","Hateno",] },
  { name: "Activate Faron Tower", types: ["Tower","Faron",] },
  { name: "Activate Wasteland Tower", types: ["Tower","Wasteland",] },
  { name: "Activate Ridgeland Tower", types: ["Tower","Ridgeland",] },
  { name: "4 Side Quests", types: ["Side Quest",] },
  { name: "Any Rod weapon", types: ["Equipment","Wizzrobe",] },
];
bingoList[5] = [
  { name: "6 Hateno Koroks", types: ["Korok","Hateno",] },
  { name: "6 Faron Koroks", types: ["Korok","Faron",] },
  { name: "6 Lake Tower Koroks", types: ["Korok","Lake",] },
  { name: "6 Wasteland Koroks", types: ["Korok","Wasteland",] },
  { name: "3 Gerudo Koroks", types: ["Korok","Gerudo",] },
  { name: "6 Ridgeland Koroks", types: ["Korok","Ridgeland",] },
  { name: "3 Hebra Koroks", types: ["Korok","Hebra","Cold Resistance",] },
  { name: "6 Woodland Koroks", types: ["Korok","Woodland",] },
  { name: "6 Lanayru Koroks", types: ["Korok. Lanayru",] },
  { name: "6 Central Tower Koroks", types: ["Korok","Central Hyrule",] },
  { name: "Rubber Helm", types: ["Clothes","Rubber Gear","Faron",] },
  { name: "Rubber Armor", types: ["Clothes","Rubber Gear","Ridgeland",] },
  { name: "Rubber Tights", types: ["Clothes","Rubber Gear","Faron",] },
  { name: "Stealth Chest Guard", types: ["Clothes","Stealth Gear","Rupee","Dueling Peaks",] },
  { name: "'Misko, the Great Bandit' Side Quest", types: ["Side Quest","Dueling Peaks",] },
  { name: "'Sunken Treasure' Side Quest", types: ["Side Quest","Hateno",] },
  { name: "'The Hero's Cache' Side Quest", types: ["Side Quest","Hateno",] },
  { name: "'Thunder Magnet' Side Quest", types: ["Side Quest","Faron","Rubber Gear",] },
  { name: "'A Good-Sized Horse' Side Quest", types: ["Side Quest","Wasteland","Horse",] },
  { name: "'The Spark of Romance' Side Quest", types: ["Side Quest","Tabantha",] },
  { name: "'A Gift for the Great Fairy' Side Quest", types: ["Side Quest","Tabantha","Rupee","Great Fairy",] },
  { name: "'Balloon Flight' Side Quest", types: ["Side Quest","Woodland",] },
  { name: "'Riverbed Reward' Side Quest", types: ["Side Quest","Central Hyrule",] },
  { name: "'The Two Rings' Shrine Quest", types: ["Shrine","Shrine Quest","Ridgeland",] },
  { name: "Any Boomerang", types: ["Equipment",] },
  { name: "Any 'Lizal' Equipment item", types: ["Equipment",] },
  { name: "Boat Oar", types: ["Equipment",] },
  { name: "Any 'Moblin' Equipment item", types: ["Equipment",] },
  { name: "Wooden Mop", types: ["Equipment",] },
  { name: "Any Chilly meal", types: ["Cooking","Wasteland",] },
  { name: "Any Electro meal", types: ["Cooking",] },
  { name: "Spicy Elixir", types: ["Cooking",] },
  { name: "Electro Elixir", types: ["Cooking",] },
  { name: "Kill a fire-typed Wizzrobe", types: ["Wizzrobe",] },
  { name: "Kill an electric-typed Wizzrobe", types: ["Wizzrobe",] },
  { name: "Kill a Hinox of any kind", types: ["Miniboss","Hinox",] },
  { name: "Kill a (red) Hinox", types: ["Miniboss","Hinox",] },
  { name: "500m in the Gliding Minigame", types: ["Minigame","Ridgeland",] },
  { name: "Activate Lanayru Tower", types: ["Tower","Lanayru",] },
  { name: "Activate Central Tower", types: ["Tower","Central Hyrule",] },
  { name: "5 Side Quests", types: ["Side Quest",] },
];
bingoList[6] = [
  { name: "6 Tabantha Koroks", types: ["Korok","Tabantha",] },
  { name: "6 Akkala Koroks", types: ["Korok","Akkala",] },
  { name: "Gerudo Set", types: ["Clothes","Wasteland","Rupee",] },
  { name: "Red Dyed Hylian Hood", types: ["Clothes","Hylian Gear","Hateno",] },
  { name: "Yellow Dyed Hylian Hood", types: ["Clothes","Hylian Gear","Hateno",] },
  { name: "Purple Dyed Hylian Hood", types: ["Clothes","Hylian Gear","Hateno",] },
  { name: "Green Dyed Hylian Hood", types: ["Clothes","Hylian Gear","Hateno",] },
  { name: "Light Yellow Dyed Hylian Hood", types: ["Clothes","Hylian Gear","Hateno",] },
  { name: "Gray Dyed Hylian Hood", types: ["Clothes","Hylian Gear","Hateno",] },
  { name: "3 Koko Cooking Side Quests", types: ["Side Quest","Dueling Peaks",] },
  { name: "'A Gift of Nightshade' Side Quest", types: ["Side Quest","Faron",] },
  { name: "'The Horseback Hoodlums' Side Quest", types: ["Side Quest","Lake",] },
  { name: "'The Royal White Stallion' Side Quest", types: ["Side Quest","Central Hyrule","Horse","Stamina",] },
  { name: "'The Cursed Statue' Shrine Quest", types: ["Shrine","Shrine Quest","Hateno",] },
  { name: "Fishing Harpoon", types: ["Equipment",] },
  { name: "3 Identical Weapons", types: ["Equipment",] },
  { name: "Fireproof Elixir", types: ["Cooking",] },
  { name: "Hard-Boiled Egg", types: ["Cooking",] },
  { name: "Kill an ice-typed Wizzrobe", types: ["Wizzrobe",] },
  { name: "Obtain a Silver Rupee", types: ["Rupee",] },
  { name: "Activate Tabantha Tower", types: ["Tower","Tabantha",] },
  { name: "Activate Woodland Tower", types: ["Tower","Woodland",] },
  { name: "6 Side Quests", types: ["Side Quest",] },
];
bingoList[7] = [
  { name: "15 Koroks", types: ["Korok",] },
  { name: "Snowquill Tunic", types: ["Clothes","Snow Gear","Cold Resistance","Rupee","Tabantha",] },
  { name: "Snowquill Trousers", types: ["Clothes","Snow Gear","Cold Resistance","Rupee","Tabantha",] },
  { name: "Zora Helm", types: ["Clothes","Zora Gear","Lanayru",] },
  { name: "Zora Armor", types: ["Clothes","Zora Gear","Lanayru",] },
  { name: "Blue Dyed Hylian Hood", types: ["Clothes","Hylian Gear","Hateno",] },
  { name: "White Dyed Hylian Hood", types: ["Clothes","Hylian Gear","Hateno",] },
  { name: "Light Blue Dyed Hylian Hood", types: ["Clothes","Hylian Gear","Hateno",] },
  { name: "Orange Dyed Hylian Hood", types: ["Clothes","Hylian Gear","Hateno",] },
  { name: "Crimson Dyed Hylian Hood", types: ["Clothes","Hylian Gear","Hateno",] },
  { name: "Brown Dyed Hylian Hood", types: ["Clothes","Hylian Gear","Hateno",] },
  { name: "4 Koko Cooking Side Quests", types: ["Side Quest","Dueling Peaks",] },
  { name: "'The Sheep Rustlers' Side Quest", types: ["Side Quest","Hateno",] },
  { name: "'An Ice Guy' Side Quest", types: ["Side Quest","Wasteland",] },
  { name: "'Diving is Beauty!' Side Quest", types: ["Side Quest","Lanayru",] },
  { name: "3 Dueling Peaks Shrines", types: ["Shrine","Dueling Peaks",] },
  { name: "'Crowned Beast' Shrine Quest", types: ["Shrine","Shrine Quest","Hateno","Horse",] },
  { name: "'A Landscape of a Stable' Shrine Quest", types: ["Shrine","Shrine Quest","Eldin",] },
  { name: "Any 'Zora' Equipment item", types: ["Equipment",] },
  { name: "Any Ice-typed Equipment item", types: ["Equipment",] },
  { name: "Any Fairy Tonic", types: ["Cooking",] },
  { name: "Glazed Meat", types: ["Cooking",] },
  { name: "Salt-Grilled Crab", types: ["Cooking",] },
  { name: "2 Stamina Vessels", types: ["Shrine","Stamina",] },
  { name: "Read Robbie's Diary", types: ["Akkala",] },
  { name: "Activate Gerudo Tower", types: ["Tower","Gerudo",] },
  { name: "Activate Eldin Tower", types: ["Tower","Eldin",] },
  { name: "7 Side Quests", types: ["Side Quest",] },
];
bingoList[8] = [
  { name: "7 Great Plateau Koroks", types: ["Korok","Plateau",] },
  { name: "9 Dueling Peaks Koroks", types: ["Korok","Dueling Peaks",] },
  { name: "9 Hateno Koroks", types: ["Korok","Hateno",] },
  { name: "9 Lake Tower Koroks", types: ["Korok","Lake",] },
  { name: "6 Gerudo Koroks", types: ["Korok","Gerudo",] },
  { name: "6 Hebra Koroks", types: ["Korok","Hebra","Cold Resistance",] },
  { name: "6 Eldin Koroks", types: ["Korok","Eldin",] },
  { name: "9 Central Tower Koroks", types: ["Korok","Central Hyrule",] },
  { name: "Hylian Hood ★", types: ["Clothes","Hylian Gear","Rupee","Great Fairy","Bokoblin",] },
  { name: "Hylian Tunic ★", types: ["Clothes","Hylian Gear","Rupee","Great Fairy","Bokoblin",] },
  { name: "Hylian Trousers ★", types: ["Clothes","Hylian Gear","Rupee","Great Fairy","Bokoblin",] },
  { name: "Full Soldier's Set", types: ["Clothes","Soldier Gear","Rupee","Hateno",] },
  { name: "Snowquill Headdress", types: ["Clothes","Snow Gear","Cold Resistance","Rupee","Tabantha",] },
  { name: "Flamebreaker Armor", types: ["Clothes","Flame Gear","Eldin","Rupee",] },
  { name: "Flamebreaker Boots", types: ["Clothes","Flame Gear","Eldin","Rupee",] },
  { name: "Black Dyed Hylian Hood", types: ["Clothes","Hylian Gear","Hateno",] },
  { name: "Navy Dyed Hylian Hood", types: ["Clothes","Hylian Gear","Hateno",] },
  { name: "Peach Dyed Hylian Hood", types: ["Clothes","Hylian Gear","Hateno",] },
  { name: "'A Freezing Rod' Side Quest", types: ["Side Quest","Woodland","Wizzrobe",] },
  { name: "'A Rare Find' Side Quest", types: ["Side Quest","Central Hyrule",] },
  { name: "3 Lake Shrines", types: ["Shrine","Lake",] },
  { name: "3 Central Tower Shrines", types: ["Shrine","Central Hyrule",] },
  { name: "'Master of the Wind' Shrine Quest", types: ["Shrine","Shrine Quest","Lanayru",] },
  { name: "Any 'Forest Dweller's' Equipment item", types: ["Equipment",] },
  { name: "Any Fire-typed Equipment item", types: ["Equipment",] },
  { name: "Any Electric-typed Equipment item", types: ["Equipment",] },
  { name: "Any Guardian Spear", types: ["Equipment","Guardian",] },
  { name: "Fruitcake", types: ["Cooking",] },
  { name: "Copious Fish Skewers", types: ["Cooking",] },
  { name: "Kill a Stone Talus (Luminous)", types: ["Rupee","Gems","Miniboss","Talus",] },
  { name: "Kill a Guardian Stalker", types: ["Miniboss","Guardian",] },
  { name: "Register the Royal Horse", types: ["Horse","Central Hyrule","Stamina",] },
  { name: "Talk to Kilton", types: ["Kilton","Akkala",] },
  { name: "Obtain a Gold Rupee", types: ["Rupee",] },
  { name: "5 Heart Containers", types: ["Shrine","Heart",] },
  { name: "5 Deer in Hunting Minigame", types: ["Minigame","Hateno",] },
  { name: "Activate Hebra Tower", types: ["Tower","Hebra","Cold Resistance",] },
  { name: "8 Side Quests", types: ["Side Quest",] },
];
bingoList[9] = [
  { name: "9 Faron Koroks", types: ["Korok","Faron",] },
  { name: "9 Ridgeland Koroks", types: ["Korok","Ridgeland",] },
  { name: "9 Lanayru Koroks", types: ["Korok. Lanayru",] },
  { name: "Climbing Boots", types: ["Clothes","Climbing Gear","Hateno",] },
  { name: "'What's for Dinner?' Side Quest", types: ["Side Quest","Faron",] },
  { name: "'The Secret Club's Secret' Side Quest", types: ["Side Quest","Wasteland","Radiant Gear","Desert Gear",] },
  { name: "'Tools of the Trade' Side Quest", types: ["Side Quest","Wasteland","Gems",] },
  { name: "'Missing in Action' Side Quest", types: ["Side Quest","Wasteland",] },
  { name: "'Fireproof Lizard Roundup' Side Quest", types: ["Side Quest","Eldin","Flame Gear",] },
  { name: "8 Shrines", types: ["Shrine",] },
  { name: "3 Ridgeland Shrines", types: ["Shrine","Ridgeland",] },
  { name: "'Twin Memories' Shrines", types: ["Shrine","Shrine Quest","Dueling Peaks",] },
  { name: "'Song of Storms' Shrine Quest", types: ["Shrine","Shrine Quest","Faron",] },
  { name: "1 Korok Trial", types: ["Shrine","Shrine Quest","Woodland",] },
  { name: "Any Guardian Sword", types: ["Equipment","Guardian",] },
  { name: "3 Identical Shields", types: ["Equipment",] },
  { name: "3 Identical Bows", types: ["Equipment",] },
  { name: "Apple Pie", types: ["Cooking","Tabantha",] },
  { name: "Curry Pilaf", types: ["Cooking",] },
  { name: "Kill a Blue Hinox", types: ["Miniboss","Hinox",] },
  { name: "Finish Golf Minigame", types: ["Minigame","Woodland",] },
  { name: "Activate Akkala Tower", types: ["Tower","Akkala",] },
];
bingoList[10] = [
  { name: "9 Wasteland Koroks", types: ["Korok","Wasteland",] },
  { name: "9 Tabantha Koroks", types: ["Korok","Tabantha",] },
  { name: "9 Woodland Koroks", types: ["Korok","Woodland",] },
  { name: "9 Akkala Koroks", types: ["Korok","Akkala",] },
  { name: "Climber's Bandanna ★", types: ["Clothes","Climbing Gear","Great Fairy",] },
  { name: "Barbarian Armor", types: ["Clothes","Barbarian Gear","Wasteland",] },
  { name: "'Take Back the Sea' Side Quest", types: ["Side Quest","Faron",] },
  { name: "'Hunt for the Giant Horse' Side Quest", types: ["Side Quest","Lake","Horse","Stamina",] },
  { name: "3 Faron Shrines", types: ["Shrine","Faron",] },
  { name: "3 Wasteland Shrines", types: ["Shrine","Wasteland",] },
  { name: "A Modest Test of Strength Shrine", types: ["Shrine","Guardian",] },
  { name: "'Secret of the Cedars' Shrine Quest", types: ["Shrine","Shrine Quest","Hateno",] },
  { name: "'The Desert Labyrinth' Shrine Quest", types: ["Shrine","Shrine Quest","Wastelands","Barbarian Gear",] },
  { name: "'The Eye of the Sandstorm' Shrine Quest", types: ["Shrine","Shrine Quest","Wastelands",] },
  { name: "'Into the Vortex' Shrine Quest", types: ["Shrine","Shrine Quest","Akkala",] },
  { name: "'The Skull's Eye' Shrine Quest", types: ["Shrine","Shrine Quest","Akkala",] },
  { name: "Any Guardian Shield", types: ["Equipment","Guardian",] },
  { name: "Cream of Mushroom Soup", types: ["Cooking",] },
  { name: "Strike in Bowling Minigame", types: ["Minigame","Hebra","Cold Resistance",] },
  { name: "9 Side Quests", types: ["Side Quest",] },
];
bingoList[11] = [
  { name: "20 Koroks", types: ["Korok",] },
  { name: "Pay 2 Great Fairies", types: ["Rupee","Great Fairy",] },
  { name: "Soldier's Armor ★", types: ["Clothes","Soldier Gear","Rupee","Great Fairy",] },
  { name: "Desert Voe Headband", types: ["Clothes","Desert Gear","Wasteland","Rupee",] },
  { name: "Desert Voe Trousers", types: ["Clothes","Desert Gear","Wasteland","Rupee",] },
  { name: "Rubber Helm ★", types: ["Clothes","Rubber Gear","Faron","Great Fairy",] },
  { name: "Stealth Mask ★", types: ["Clothes","Stealth Gear","Rupee","Great Fairy",] },
  { name: "Stealth Chest Guard ★", types: ["Clothes","Stealth Gear","Rupee","Great Fairy",] },
  { name: "Stealth Tights ★", types: ["Clothes","Stealth Gear","Rupee","Great Fairy",] },
  { name: "Full Stealth Set", types: ["Clothes","Stealth Gear","Rupee","Dueling Peaks",] },
  { name: "Barbarian Helm", types: ["Clothes","Barbarian Gear","Akkala",] },
  { name: "'A Gift for My Beloved' Side Quest", types: ["Side Quest","Hateno",] },
  { name: "3 Hateno Shrines", types: ["Shrine","Hateno",] },
  { name: "3 Tabantha Shrines", types: ["Shrine","Tabantha",] },
  { name: "3 Woodland Shrines", types: ["Shrine","Woodland",] },
  { name: "3 Akkala Shrines", types: ["Shrine","Akkala",] },
  { name: "'The Silent Swordswomen' Shrine Quest", types: ["Shrine","Shrine Quest","Wastelands",] },
  { name: "'Secret of the Snowy Peaks' Shrine Quest", types: ["Shrine","Shrine Quest","Wastelands","Cold Resistance",] },
  { name: "Forgotten Temple Shrine", types: ["Shrine","Shrine Quest","Woodland",] },
  { name: "'Shrouded Shrine' Shrine Quest", types: ["Shrine","Shrine Quest","Woodland",] },
  { name: "'The Gut Check Challenge' Shrine Quest", types: ["Shrine","Shrine Quest","Eldin",] },
  { name: "Akkala 'Trial of the Labyrinth' Shrine Quest", types: ["Shrine","Shrine Quest","Akkala","Barbarian Gear",] },
  { name: "Any 'Royal Guard's' Equipment item", types: ["Equipment",] },
  { name: "Any second tier Rod weapon", types: ["Equipment","Wizzrobe",] },
  { name: "Any Ancient Battle Axe", types: ["Equipment","Guardian",] },
  { name: "Monster cake", types: ["Cooking","Kilton",] },
  { name: "Wildberry Crepe", types: ["Cooking","Tabantha",] },
  { name: "Kill a Stone Talus (Rare)", types: ["Rupee","Miniboss","Talus",] },
  { name: "Register the Giant Horse", types: ["Horse","Lake","Stamina",] },
  { name: "Mount a Bear", types: ["Horse","Stamina",] },
  { name: "Mount a Stalhorse", types: ["Horse",] },
  { name: "2000 Rupees", types: ["Rupee",] },
  { name: "Read King's Diary", types: ["Hyrule Castle",] },
  { name: "Take a Selfie with Hestu", types: ["Dueling Peaks","Camera",] },
  { name: "Sheikah Sensor +", types: ["Camera","Rune Upgrade","Hateno",] },
];
bingoList[12] = [
  { name: "12 Dueling Peaks Koroks", types: ["Korok","Dueling Peaks",] },
  { name: "9 Eldin Koroks", types: ["Korok","Eldin",] },
  { name: "12 Central Tower Koroks", types: ["Korok","Central Hyrule",] },
  { name: "Champion's Tunic", types: ["Clothes","Champion","Camera",] },
  { name: "Soldier's Helm ★", types: ["Clothes","Soldier Gear","Rupee","Great Fairy",] },
  { name: "Soldier's Greaves ★", types: ["Clothes","Soldier Gear","Rupee","Great Fairy",] },
  { name: "Desert Voe Spaulder", types: ["Clothes","Desert Gear","Wasteland","Rupee",] },
  { name: "Rubber Armor ★", types: ["Clothes","Rubber Gear","Ridgeland","Great Fairy",] },
  { name: "Rubber Tights ★", types: ["Clothes","Rubber Gear","Faron","Great Fairy",] },
  { name: "Zora Greaves", types: ["Clothes","Zora Gear","Lanayru","Camera",] },
  { name: "Amber Earrings", types: ["Clothes","Gems","Rupee","Wasteland",] },
  { name: "'A Royal Recipe' Side Quest", types: ["Side Quest","Central Hyrule","Cooking",] },
  { name: "9 Shrines", types: ["Shrine",] },
  { name: "4 Shrine Quests", types: ["Shrine","Shrine Quest",] },
  { name: "'The Seven Heroines' Shrine Quest", types: ["Shrine","Shrine Quest","Wastelands",] },
  { name: "'Cliffside Etchings' Shrine Quest", types: ["Shrine","Shrine Quest","Gerudo","Cold Resistance",] },
  { name: "'Sign of the Shadow' Shrine Quest", types: ["Shrine","Shrine Quest","Gerudo",] },
  { name: "Collect 1 Picture Memory", types: ["Camera",] },
  { name: "Kill a Igneo Talus", types: ["Rupee","Gems","Miniboss","Talus","Eldin",] },
  { name: "Read Zelda's Diary", types: ["Hyrule Castle",] },
  { name: "Take a Selfie with Kass", types: ["Camera",] },
  { name: "Obtain a Material from Farosh", types: ["Dragon",] },
  { name: "3 Lanayru Shrines", types: ["Shrine","Lanayru",] },
  { name: "10 Side Quests", types: ["Side Quest",] },
  { name: "'Sunshroom Sensing' Side Quest", types: ["Side Quest","Hateno","Camera",] },
  { name: "Snow Boots", types: ["Clothes","Boots","Side Quest","Gerudo","Camera",] },
];
bingoList[13] = [
  { name: "12 Hateno Koroks", types: ["Korok","Hateno",] },
  { name: "12 Lake Tower Koroks", types: ["Korok","Lake",] },
  { name: "12 Ridgeland Koroks", types: ["Korok","Ridgeland",] },
  { name: "9 Hebra Koroks", types: ["Korok","Hebra","Cold Resistance",] },
  { name: "Flamebreaker Helm", types: ["Clothes","Flame Gear","Eldin","Rupee",] },
  { name: "Zora Armor ★", types: ["Clothes","Zora Gear","Great Fairy","Lizalfos",] },
  { name: "Barbarian Leg Wraps", types: ["Clothes","Barbarian Gear","Hebra",] },
  { name: "3 Hebra Shrines", types: ["Shrine","Hebra","Cold Resistance",] },
  { name: "3 Eldin Shrines", types: ["Shrine","Eldin",] },
  { name: "'The Serpent's Jaws' Shrine Quest", types: ["Shrine","Shrine Quest","Lake","Dragon",] },
  { name: "'Test of Will' Shrine Quest", types: ["Shrine","Shrine Quest","Gerudo",] },
  { name: "Kill a Frost Talus", types: ["Rupee","Gems","Miniboss","Talus","Cold Resistance",] },
  { name: "Kill a Gaurdian Turret", types: ["Miniboss","Guardian","Hyrule Castle",] },
  { name: "5 Creatures in Compendium", types: ["Camera","Compendium",] },
  { name: "5 Monsters in Compendium", types: ["Camera","Compendium",] },
  { name: "5 Equipment in Compendium", types: ["Camera","Compendium",] },
  { name: "Take a Selfie with Sidon", types: ["Lanayru","Camera",] },
  { name: "Obtain a Material from Dinraal", types: ["Dragon",] },
  { name: "Finish Basic Shield Surfing Minigame", types: ["Minigame","Hebra","Cold Resistance",] },
  { name: "'By Firefly's Light' Side Quest", types: ["Side Quest","Dueling Peaks","Heirloom","Camera",] },
];
bingoList[14] = [
  { name: "25 Koroks", types: ["Korok",] },
  { name: "12 Faron Koroks", types: ["Korok","Faron",] },
  { name: "9 Gerudo Koroks", types: ["Korok","Gerudo",] },
  { name: "12 Tabantha Koroks", types: ["Korok","Tabantha",] },
  { name: "12 Woodland Koroks", types: ["Korok","Woodland",] },
  { name: "12 Akkala Koroks", types: ["Korok","Akkala",] },
  { name: "12 Lanayru Koroks", types: ["Korok. Lanayru",] },
  { name: "Pay Horse God Malanya", types: ["Lake","Rupee",] },
  { name: "Zora Helm ★", types: ["Clothes","Zora Gear","Great Fairy","Lizalfos",] },
  { name: "Radiant Mask", types: ["Clothes","Radiant Gear","Rupee","Gems","Wasteland",] },
  { name: "Radiant Shirt", types: ["Clothes","Radiant Gear","Rupee","Gems","Wasteland",] },
  { name: "Radiant Tights", types: ["Clothes","Radiant Gear","Rupee","Gems","Wasteland",] },
  { name: "Topaz Earrings", types: ["Clothes","Gems","Rupee","Wasteland",] },
  { name: "'Curry for What Ails You' Side Quest", types: ["Side Quest","Tabantha","Eldin",] },
  { name: "10 Shrines", types: ["Shrine",] },
  { name: "3 Gerudo Shrines", types: ["Shrine","Gerudo","Cold Resistance",] },
  { name: "'Fragmented Monument' Shrine Quest", types: ["Shrine","Shrine Quest","Faron","Camera",] },
  { name: "Collect 2 Picture Memories", types: ["Camera",] },
  { name: "Kill a Black Hinox", types: ["Miniboss","Hinox",] },
  { name: "Kill a Stalnox", types: ["Miniboss","Hinox",] },
  { name: "Kill a Guardian Skywatcher", types: ["Miniboss","Guardian",] },
  { name: "3 Stamina Vessels", types: ["Shrine","Stamina",] },
  { name: "Obtain a Material from Naydra", types: ["Hateno","Cold Resistance","Dragon",] },
  { name: "Remote Bomb +", types: ["Camera","Rune Upgrade","Hateno",] },
  { name: "Activate 4 Towers", types: ["Tower",] },
  { name: "11 Side Quests", types: ["Side Quest",] },
];
bingoList[15] = [
  { name: "12 Wasteland Koroks", types: ["Korok","Wasteland",] },
  { name: "Snowquill Tunic ★", types: ["Clothes","Snow Gear","Cold Resistance","Rupee","Great Fairy",] },
  { name: "Snowquill Trousers ★", types: ["Clothes","Snow Gear","Cold Resistance","Rupee","Great Fairy",] },
  { name: "Full Snowquill Set", types: ["Clothes","Snow Gear","Cold Resistance","Rupee","Tabantha",] },
  { name: "Flamebreaker Boots ★", types: ["Clothes","Flame Gear","Eldin","Rupee","Great Fairy",] },
  { name: "Climbing Boots ★", types: ["Clothes","Climbing Gear","Great Fairy",] },
  { name: "Sapphire Circlet", types: ["Clothes","Gems","Rupee","Wasteland",] },
  { name: "Ruby Circlet", types: ["Clothes","Gems","Rupee","Wasteland",] },
  { name: "Bokoblin Mask", types: ["Clothes","Kilton",] },
  { name: "'Death Mountain's Secret' Side Quest", types: ["Side Quest","Eldin",] },
  { name: "'Lynel Safari' Side Quest", types: ["Side Quest","Lanayru","Camera","Zora Gear",] },
  { name: "'The Royal Guard's Gear' Side Quest", types: ["Side Quest","Hyrule Castle",] },
  { name: "'Stranded on Eventide' Shrine Quest", types: ["Shrine","Shrine Quest","Faron",] },
  { name: "'Three Giant Brothers' Shrine Quest", types: ["Shrine","Shrine Quest","Faron","Hinox",] },
  { name: "'The Bird in the Mountains' Shrine Quest", types: ["Shrine","Shrine Quest","Hebra","Cold Resistance",] },
  { name: "Hebra Labyrinth 'Trial on the Cliff' Shrine Quest", types: ["Shrine","Shrine Quest","Hebra","Cold Resistance","Barbarian Gear",] },
  { name: "Windcleaver", types: ["Equipment","Wasteland",] },
  { name: "Kill a Lynel", types: ["Miniboss","Lynel",] },
  { name: "Kill a Molduga", types: ["Miniboss","Molduga","Wasteland",] },
  { name: "6 Heart Containers", types: ["Shrine","Heart",] },
  { name: "Take a Selfie with Riju", types: ["Wasteland","Camera",] },
  { name: "Take a Selfie while on fire", types: ["Eldin","Camera",] },
  { name: "Stasis +", types: ["Camera","Rune Upgrade","Hateno",] },
  { name: "10 Equipment in Compendium", types: ["Camera","Compendium",] },
];
bingoList[16] = [
  { name: "15 Dueling Peaks Koroks", types: ["Korok","Dueling Peaks",] },
  { name: "15 Central Tower Koroks", types: ["Korok","Central Hyrule",] },
  { name: "Champion's Tunic ★", types: ["Clothes","Champion","Camera","Great Fairy",] },
  { name: "Snowquill Headdress ★", types: ["Clothes","Snow Gear","Cold Resistance","Rupee","Great Fairy",] },
  { name: "Full Rubber Set", types: ["Clothes","Rubber Gear","Faron","Ridgeland",] },
  { name: "Flamebreaker Armor ★", types: ["Clothes","Flame Gear","Eldin","Rupee","Great Fairy",] },
  { name: "Opal Earrings", types: ["Clothes","Gems","Rupee","Wasteland",] },
  { name: "'Medicinal Molduga' Side Quest", types: ["Side Quest","Wasteland","Molduga",] },
  { name: "'The Road to Respect' Side Quest", types: ["Side Quest","Eldin","Talus",] },
  { name: "'Little Sister's Big Request' Side Quest", types: ["Side Quest","Akkala",] },
  { name: "'Legendary Rabbit Trial' Side Quest", types: ["Side Quest","Wasteland","Camera",] },
  { name: "12 Side Quests", types: ["Side Quest",] },
  { name: "10 Creatures in Compendium", types: ["Camera","Compendium",] },
  { name: "10 Monsters in Compendium", types: ["Camera","Compendium",] },
];
bingoList[17] = [
  { name: "15 Hateno Koroks", types: ["Korok","Hateno",] },
  { name: "15 Lake Tower Koroks", types: ["Korok","Lake",] },
  { name: "12 Gerudo Koroks", types: ["Korok","Gerudo",] },
  { name: "15 Ridgeland Koroks", types: ["Korok","Ridgeland",] },
  { name: "12 Hebra Koroks", types: ["Korok","Hebra","Cold Resistance",] },
  { name: "12 Eldin Koroks", types: ["Korok","Eldin",] },
  { name: "Desert Voe Headband ★", types: ["Clothes","Desert Gear","Wasteland","Rupee","Great Fairy",] },
  { name: "Desert Voe Spaulder ★", types: ["Clothes","Desert Gear","Wasteland","Rupee","Great Fairy",] },
  { name: "Desert Voe Trousers ★", types: ["Clothes","Desert Gear","Wasteland","Rupee","Great Fairy",] },
  { name: "Sand Boots", types: ["Clothes","Boots","Side Quest","Gerudo",] },
  { name: "'The Eighth Heroine' Side Quest", types: ["Side Quest","Wasteland","Gerudo","Boots","Cold Resistance","Camera",] },
  { name: "11 Shrines", types: ["Shrine",] },
  { name: "5 Shrine Quests", types: ["Shrine","Shrine Quest",] },
  { name: "'Guardian Slideshow' Shrine Quest", types: ["Shrine","Shrine Quest","Lake","Camera","Guardian",] },
  { name: "'The Spring of Power' Shrine Quest", types: ["Shrine","Shrine Quest","Akkala","Dragon",] },
  { name: "Any 'Lynel' Equipment item", types: ["Equipment","Lynel",] },
  { name: "1 Fire, 1 Ice, and 1 Electric weapons", types: ["Equipment",] },
  { name: "20 Targets in Flight Range Minigame", types: ["Minigame","Tabantha","Cold Resistance",] },
  { name: "Activate 5 Towers", types: ["Tower",] },
  { name: "15 Equipment in Compendium", types: ["Camera","Compendium",] },
];
bingoList[18] = [
  { name: "15 Creatures in Compendium", types: ["Camera","Compendium",] },
  { name: "15 Monsters in Compendium", types: ["Camera","Compendium",] },
  { name: "30 Koroks", types: ["Korok",] },
  { name: "15 Faron Koroks", types: ["Korok","Faron",] },
  { name: "15 Akkala Koroks", types: ["Korok","Akkala",] },
  { name: "15 Lanayru Koroks", types: ["Korok. Lanayru",] },
  { name: "Full Desert Voe Set", types: ["Clothes","Desert Gear","Wasteland","Rupee",] },
  { name: "Flamebreaker Helm ★", types: ["Clothes","Flame Gear","Eldin","Rupee","Great Fairy",] },
  { name: "Zora Greaves ★", types: ["Clothes","Zora Gear","Great Fairy","Lizalfos","Camera",] },
  { name: "Radiant Mask ★", types: ["Clothes","Radiant Gear","Rupee","Gems","Great Fairy",] },
  { name: "Snow Boots ★", types: ["Clothes","Boots","Side Quest","Great Fairy","Camera",] },
  { name: "'Slated for Upgrades' Side Quest", types: ["Side Quest","Hateno","Camera",] },
  { name: "'A Shady Customer' Side Quest", types: ["Side Quest","Akkala","Kilton","Camera",] },
  { name: "12 Shrines", types: ["Shrine",] },
  { name: "'The Spring of Wisdom' Shrine Quest", types: ["Shrine","Shrine Quest","Hateno","Cold Resistance","Dragon",] },
  { name: "Collect 3 Picture Memories", types: ["Camera",] },
  { name: "Hylian Shield", types: ["Miniboss","Hinox","Hyrule Castle",] },
  { name: "Mount the Lord of the Mountain", types: ["Horse","Ridgeland","Stamina",] },
  { name: "Buy a House", types: ["Hateno","Rupee",] },
  { name: "A Major Test of Strength Shrine", types: ["Shrine","Guardian",] },
];
bingoList[19] = [
  { name: "15 Wasteland Koroks", types: ["Korok","Wasteland",] },
  { name: "15 Tabantha Koroks", types: ["Korok","Tabantha",] },
  { name: "15 Woodland Koroks", types: ["Korok","Woodland",] },
  { name: "Radiant Shirt ★", types: ["Clothes","Radiant Gear","Rupee","Gems","Great Fairy",] },
  { name: "Radiant Tights ★", types: ["Clothes","Radiant Gear","Rupee","Gems","Great Fairy",] },
  { name: "Amber Earrings ★", types: ["Clothes","Gems","Rupee","Great Fairy",] },
  { name: "'Stalhorse: Pictured!' Side Quest", types: ["Side Quest","Hebra","Camera",] },
  { name: "'The Stolen Heirloom' Shrine Quest", types: ["Shrine","Shrine Quest","Dueling Peaks","Heirloom","Camera",] },
  { name: "'Brother's Roast' Shrine Quest", types: ["Shrine","Shrine Quest","Eldin",] },
  { name: "1 Divine Beast Main Quest", types: ["Divine Beast",] },
  { name: "'Divine Beast Vah Medoh' Main Quest", types: ["Divine Beast","Tabantha","Cold Resistance",] },
  { name: "Revali's Gale", types: ["Divine Beast","Tabantha","Cold Resistance",] },
  { name: "Kill Coliseum Lynel", types: ["Miniboss","Lynel","Central Hyrule",] },
  { name: "Activate 6 Towers", types: ["Tower",] },
  { name: "13 Side Quests", types: ["Side Quest",] },
  { name: "Climbing Gear", types: ["Clothes","Climbing Gear","Hateno",] },
];
bingoList[20] = [
  { name: "15 Gerudo Koroks", types: ["Korok","Gerudo",] },
  { name: "15 Hebra Koroks", types: ["Korok","Hebra","Cold Resistance",] },
  { name: "15 Eldin Koroks", types: ["Korok","Eldin",] },
  { name: "Full Zora Set", types: ["Clothes","Zora Gear","Lanayru","Camera",] },
  { name: "Barbarian Helm ★", types: ["Clothes","Barbarian Gear","Great Fairy","Lynel",] },
  { name: "Barbarian Armor ★", types: ["Clothes","Barbarian Gear","Great Fairy","Lynel",] },
  { name: "Topaz Earrings ★", types: ["Clothes","Gems","Rupee","Great Fairy",] },
  { name: "Diamond Circlet", types: ["Clothes","Gems","Rupee","Wasteland",] },
  { name: "'The Forgotten Sword' Side Quest", types: ["Side Quest","Wasteland","Gerudo","Boots","Cold Resistance","Camera",] },
  { name: "'Find Kheel' Side Quest", types: ["Side Quest","Tabantha",] },
  { name: "'The Jewel Trade' Side Quest", types: ["Side Quest","Eldin","Gems",] },
  { name: "'Robbie's Research' Side Quest", types: ["Side Quest","Akkala","Camera",] },
  { name: "6 Shrine Quests", types: ["Shrine","Shrine Quest",] },
  { name: "'Divine Beast Vah Ruta' Main Quest", types: ["Divine Beast","Lanayru",] },
  { name: "Mipha's Grace", types: ["Divine Beast","Lanayru",] },
  { name: "Collect 4 Picture Memories", types: ["Camera",] },
  { name: "4 Stamina Vessels", types: ["Shrine","Stamina",] },
  { name: "20 Equipment in Compendium", types: ["Camera","Compendium",] },
];
bingoList[21] = [
  { name: "20 Creatures in Compendium", types: ["Camera","Compendium",] },
  { name: "20 Monsters in Compendium", types: ["Camera","Compendium",] },
  { name: "35 Koroks", types: ["Korok",] },
  { name: "Pay 3 Great Fairies", types: ["Rupee","Great Fairy",] },
  { name: "Full Flamebreaker Set", types: ["Clothes","Flame Gear","Eldin","Rupee",] },
  { name: "Barbarian Leg Wraps ★", types: ["Clothes","Barbarian Gear","Great Fairy","Lynel",] },
  { name: "Full Radiant Set", types: ["Clothes","Radiant Gear","Rupee","Gems","Wasteland",] },
  { name: "Opal Earrings ★", types: ["Clothes","Gems","Rupee","Great Fairy",] },
  { name: "Sapphire Circlet ★", types: ["Clothes","Gems","Rupee","Great Fairy",] },
  { name: "Ruby Circlet ★", types: ["Clothes","Gems","Rupee","Great Fairy",] },
  { name: "13 Shrines", types: ["Shrine",] },
  { name: "7 Shrine Quests", types: ["Shrine","Shrine Quest",] },
  { name: "'The Perfect Drink' Shrine Quest", types: ["Shrine","Shrine Quest","Wastelands",] },
  { name: "'Recital at Warbler's Nest' Shrine Quest", types: ["Shrine","Shrine Quest","Tabantha",] },
  { name: "'The Ancient Rito Song' Shrine Quest", types: ["Shrine","Shrine Quest","Tabantha",] },
  { name: "Collect 5 Picture Memories", types: ["Camera",] },
  { name: "Spring-Loaded Hammer", types: ["Equipment","Kilton",] },
  { name: "7 Heart Containers", types: ["Shrine","Heart",] },
  { name: "Upgrade All Runes", types: ["Camera","Rune Upgrade","Hateno",] },
  { name: "'The Ceremonial Song' Shrine Quest", types: ["Shrine","Shrine Quest","Lanayru",] },
];
bingoList[22] = [
  { name: "'Riddles of Hyrule' Side Quest", types: ["Side Quest","Woodland","Lynel",] },
  { name: "'Frog Catching' Side Quest", types: ["Side Quest","Lanayru",] },
  { name: "'Luminous Stone Gathering' Side Quest", types: ["Side Quest","Lanayru","Gems",] },
  { name: "'A Wife Washed Away' Side Quest", types: ["Side Quest","Lanayru",] },
  { name: "14 Shrines", types: ["Shrine",] },
  { name: "8 Shrine Quests", types: ["Shrine","Shrine Quest",] },
  { name: "Activate 7 Towers", types: ["Tower",] },
  { name: "14 Side Quests", types: ["Side Quest",] },
];
bingoList[23] = [
  { name: "40 Koroks", types: ["Korok",] },
  { name: "'Face the Frost Talus' Side Quest", types: ["Side Quest","Tabantha","Hebra","Cold Resistance",] },
  { name: "'The Giant of Ralis Pond' Side Quest", types: ["Side Quest","Lanayru","Hinox",] },
  { name: "15 Shrines", types: ["Shrine",] },
  { name: "'Divine Beast Vah Rudania' Main Quest", types: ["Divine Beast","Eldin",] },
  { name: "Daruk's Protection", types: ["Divine Beast","Eldin",] },
  { name: "Collect 6 Picture Memories", types: ["Camera",] },
  { name: "Remake a Champion's Weapon or Shield", types: ["Equipment","Divine Beast","Gems",] },
  { name: "Climbing Gear ★", types: ["Clothes","Climbing Gear","Great Fairy",] },
  { name: "Activate 8 Towers", types: ["Tower",] },
];
bingoList[24] = [
  { name: "45 Koroks", types: ["Korok",] },
  { name: "'Leviathan Bones' Side Quest", types: ["Side Quest","Camera",] },
  { name: "16 Shrines", types: ["Shrine",] },
  { name: "'Divine Beast Vah Naboris' Main Quest", types: ["Divine Beast","Wasteland",] },
  { name: "Urbosa's Fury", types: ["Divine Beast","Wasteland",] },
  { name: "Beat Ganon", types: ["Hyrule Castle",] },
  { name: "Activate 9 Towers", types: ["Tower",] },
  { name: "Full Climber's Set", types: ["Clothes","Climbing Gear",] },
];
bingoList[25] = [
  { name: "50 Koroks", types: ["Korok",] },
  { name: "'Zora Stone Monuments' Side Quest", types: ["Side Quest","Lanayru",] },
  { name: "2 Divine Beast Main Quest", types: ["Divine Beast",] },
  { name: "'The Search for Barta' Side Quest", types: ["Side Quest","Wasteland",] },
  { name: "'The Mystery Polluter' Side Quest", types: ["Side Quest","Wasteland",] },
  { name: "'The Undefeated Champ' Shrine Quest", types: ["Shrine","Shrine Quest","Wastelands",] },
  { name: "Activate 10 Towers", types: ["Tower",] },
  { name: "15 Side Quests", types: ["Side Quest",] },
  { name: "Full Barbarian Set", types: ["Clothes","Barbarian Gear",] },
];

