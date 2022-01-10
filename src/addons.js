
// // generate random arabic spam
// // بستيمان يا بت ايبتاسي بمنتسيبمتنس
// // بسمكينتبسيمكتبايسمنابيتس
// // سيبتنايسمنتباسيبوةىلاروةءى
// // صقعخهث

var generateRandomArabicSpam = () => { // Easter egg 1
    var spam = "";
    var spam_length = Math.floor(Math.random() * (10 - 1) + 1);
    for (var i = 0; i < spam_length; i++) {
        var random_char = Math.floor(Math.random() * (15 - 1) + 1);
        switch (random_char) {
            case 1:
                spam += "ب";
                break;
            case 2:
                spam += "ت";
                break;
            case 3:
                spam += "ا";
                break;
            case 4:
                spam += "ي";
                break;
            case 5:
                spam += "ب";
                break;
            case 6:
                spam += "ا";
                break;
            case 7:
                spam += "س";
                break;
            case 8:
                spam += "م";
                break;
            case 9:
                spam += "ن";
                break;
            case 10:
                spam += "ب";
                break;
            case 11:
                spam += "ت";
                break;
            case 12:
                spam += "ا";
                break;
            case 13:
                spam += "س";
                break;
            case 14:
                spam += "م";
                break;
            case 15:
                spam += "ن";
                break;
        }
    }
    return spam;
}

const inverseColors = () => {
    var colorProperties = ['color', 'background-color'];

    $('*').each(function() {
        var color = null;

        for (var prop in colorProperties) {
            prop = colorProperties[prop];

            if (!$(this).css(prop)) continue; 

            color = new RGBColor($(this).css(prop));

            if (color.ok) {
                $(this).css(prop, 'rgb(' + (255 - color.r) + ', ' + (255 - color.g) + ', ' + (255 - color.b) + ')');
            }
            color = null;
        }
    });
}

const o_o = () => console.log("%csussy balls", 'color: red; font-weight: bold; font-size: 60px;');

const among_sus = () => {
    console.log(
        'Red 🔴 📛 sus 💦 💦. Red 🔴 🔴 suuuus. I 👁👄 👁 said 🤠🗣 💬👱🏿💦 red 👹 🔴, sus 💦 💦, hahahahaha 🤣 🤣. Why 🤔 🤔 arent you 👉😯 👈 laughing 😂 😂? I 👁🍊 👥 just made 👑 👑 a reference 👀👄🙀 👀👄🙀 to the popular 👍😁😂 😂 video 📹 📹 game 🎮 🎮 "Among 🇷🇴🎛 💰 Us 👨 👨"! How can you 👈 👈 not laugh 😂 😂 at it? Emergeny meeting 💯 🤝! Guys 👦 👨, this here guy 👨 👱🏻👨🏻 doesnt laugh 🤣 ☑😂😅 at my funny 😃😂 🍺😛😃 Among 💰 💰 Us 👨 👨 memes 🐸 😂! Lets 🙆 🙆 beat ✊👊🏻 😰👊 him 👴 👨 to death 💀💥❓ 💀! Dead 💀😂 ☠ body 💃 💃 reported ☎ 🧐! Skip 🐧 🏃🏼! Skip 🐧 🐧! Vote 🔝 🔝 blue 💙 💙! Blue 💙 💙 was not an impostor 😎 😠. Among 😂 🙆🏽🅰 us 👨 👨 in a nutshell 😠 😠 hahahaha 😂👌👋 😂. What?! Youre still 🤞🙌 🤞🙌 not laughing 😂 😂 your 👉 👉 ass 🍑 🅰 off 📴 📴☠? I 👁 👁 made 👑 👑 SEVERAL 💯 💯 funny 😀😂😛 😃❓ references 👀👄🙀 📖 to Among 💰 💑👨‍❤️‍👨👩‍❤️‍👩 Us 👨 🇺🇸 and YOU 👈🏼 😂👉🔥 STILL 🤞🙌 🙄 ARENT LAUGHING 😂 😂😎💦??!!! Bruh ⚠ 😳🤣😂. Ya 🙏🎼 🙀 hear 👂 👂 that? Wooooooosh 💦👽👾 💦👽👾. Whats 😦 😦 woooosh 🚁 🚁? Oh 🙀 🙀, nothing ❌ 🚫. Just the sound 👂 🔊 of a joke 😂 😂 flying ✈ ✈ over 😳🙊💦 🔁 your 👉 👉 head 💆 💆. Whats 😦 🤔 that? You 👈 👉 think 💭 💭 im 👌 💘 annoying 😠 😠? Kinda 🙅 🙅 sus 💦 💦, bro 👆 🌈☺👬. Hahahaha 😂 😂! Anyway 🔛 🔛, yea 😀 💯, gotta 👉 👉 go 🏃 🏃 do tasks ✔ 📋. Hahahaha 😂 😂!'
    );
};

const top_things_to_do_after_installing_fart_night = () => console.log("%c1- Uninstall\n2- Get brain", `color: #ff0000; font-weight: bold; font-size: 60px;`);

const jerma_sus = () => {
    console.log(`
    ⠀⠀⠀⡯⡯⡾⠝⠘⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢊⠘⡮⣣⠪⠢⡑⡌
    ⠀⠀⠀⠟⠝⠈⠀⠀⠀⠡⠀⠠⢈⠠⢐⢠⢂⢔⣐⢄⡂⢔⠀⡁⢉⠸⢨⢑⠕⡌
    ⠀⠀⡀⠁⠀⠀⠀⡀⢂⠡⠈⡔⣕⢮⣳⢯⣿⣻⣟⣯⣯⢷⣫⣆⡂⠀⠀⢐⠑⡌
    ⢀⠠⠐⠈⠀⢀⢂⠢⡂⠕⡁⣝⢮⣳⢽⡽⣾⣻⣿⣯⡯⣟⣞⢾⢜⢆⠀⡀⠀⠪
    ⣬⠂⠀⠀⢀⢂⢪⠨⢂⠥⣺⡪⣗⢗⣽⢽⡯⣿⣽⣷⢿⡽⡾⡽⣝⢎⠀⠀⠀⢡
    ⣿⠀⠀⠀⢂⠢⢂⢥⢱⡹⣪⢞⡵⣻⡪⡯⡯⣟⡾⣿⣻⡽⣯⡻⣪⠧⠑⠀⠁⢐
    ⣿⠀⠀⠀⠢⢑⠠⠑⠕⡝⡎⡗⡝⡎⣞⢽⡹⣕⢯⢻⠹⡹⢚⠝⡷⡽⡨⠀⠀⢔
    ⣿⡯⠀⢈⠈⢄⠂⠂⠐⠀⠌⠠⢑⠱⡱⡱⡑⢔⠁⠀⡀⠐⠐⠐⡡⡹⣪⠀⠀⢘
    ⣿⣽⠀⡀⡊⠀⠐⠨⠈⡁⠂⢈⠠⡱⡽⣷⡑⠁⠠⠑⠀⢉⢇⣤⢘⣪⢽⠀⢌⢎
    ⣿⢾⠀⢌⠌⠀⡁⠢⠂⠐⡀⠀⢀⢳⢽⣽⡺⣨⢄⣑⢉⢃⢭⡲⣕⡭⣹⠠⢐⢗
    ⣿⡗⠀⠢⠡⡱⡸⣔⢵⢱⢸⠈⠀⡪⣳⣳⢹⢜⡵⣱⢱⡱⣳⡹⣵⣻⢔⢅⢬⡷
    ⣷⡇⡂⠡⡑⢕⢕⠕⡑⠡⢂⢊⢐⢕⡝⡮⡧⡳⣝⢴⡐⣁⠃⡫⡒⣕⢏⡮⣷⡟
    ⣷⣻⣅⠑⢌⠢⠁⢐⠠⠑⡐⠐⠌⡪⠮⡫⠪⡪⡪⣺⢸⠰⠡⠠⠐⢱⠨⡪⡪⡰
    ⣯⢷⣟⣇⡂⡂⡌⡀⠀⠁⡂⠅⠂⠀⡑⡄⢇⠇⢝⡨⡠⡁⢐⠠⢀⢪⡐⡜⡪⡊
    ⣿⢽⡾⢹⡄⠕⡅⢇⠂⠑⣴⡬⣬⣬⣆⢮⣦⣷⣵⣷⡗⢃⢮⠱⡸⢰⢱⢸⢨⢌
    ⣯⢯⣟⠸⣳⡅⠜⠔⡌⡐⠈⠻⠟⣿⢿⣿⣿⠿⡻⣃⠢⣱⡳⡱⡩⢢⠣⡃⠢⠁
    ⡯⣟⣞⡇⡿⣽⡪⡘⡰⠨⢐⢀⠢⢢⢄⢤⣰⠼⡾⢕⢕⡵⣝⠎⢌⢪⠪⡘⡌⠀
    ⡯⣳⠯⠚⢊⠡⡂⢂⠨⠊⠔⡑⠬⡸⣘⢬⢪⣪⡺⡼⣕⢯⢞⢕⢝⠎⢻⢼⣀⠀
    ⠁⡂⠔⡁⡢⠣⢀⠢⠀⠅⠱⡐⡱⡘⡔⡕⡕⣲⡹⣎⡮⡏⡑⢜⢼⡱⢩⣗⣯⣟
    ⢀⢂⢑⠀⡂⡃⠅⠊⢄⢑⠠⠑⢕⢕⢝⢮⢺⢕⢟⢮⢊⢢⢱⢄⠃⣇⣞⢞⣞⢾
    ⢀⠢⡑⡀⢂⢊⠠⠁⡂⡐⠀⠅⡈⠪⠪⠪⠣⠫⠑⡁⢔⠕⣜⣜⢦⡰⡎⡯⡾⡽
    `);
};

const eggs = (n=0) => {
    if (n > 2)
        return;
    generateRandomArabicSpam();
    inverseColors();
    o_o();
    among_sus();
    top_things_to_do_after_installing_fart_night();
    jerma_sus();
    eggs(n + 1);
};

module.exports = { 
    inverseColors, 
    generateRandomArabicSpam, 
    o_o, 
    among_sus, 
    top_things_to_do_after_installing_fart_night, 
    eggs,
    jerma_sus
};
