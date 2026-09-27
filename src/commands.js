export function registerCommands(bot) {
  // START
  bot.command("start", async (ctx) => {
    await ctx.reply(
      `🌸 မင်္ဂလာပါရှင့် 🌸

💖 HTZ FASHION မှ ကြိုဆိုပါတယ်ရှင့်။

🎓 သင်တန်းအပ်နှံလိုပါက
"သင်တန်းအပ်မယ်" လို့ ရိုက်ပို့ပေးပါရှင့်။

👗 အဝတ်အစား အော်ဒါမှာယူလိုပါက
"အော်ဒါမှာမယ်" လို့ ရိုက်ပို့ပေးပါရှင့်။

💌 အသေးစိတ်သိရှိလိုပါက
"အသေးစိတ်" လို့ ရိုက်ပို့ပေးပါရှင့်။`
    );
  });

  // HELP
  bot.command("help", async (ctx) => {
    await ctx.reply(
      `🌸 HTZ FASHION 🌸

🎓 သင်တန်းအပ်မယ်
👗 အော်ဒါမှာမယ်
💌 အသေးစိတ်`
    );
  });

  // PING
  bot.command("ping", async (ctx) => {
    await ctx.reply("pong");
  });

  // ID
  bot.command("id", async (ctx) => {
    await ctx.reply(`Chat ID: ${ctx.chat.id}`);
  });

  // AUTO REPLY
  bot.on("message:text", async (ctx) => {
    const message = ctx.message.text.trim();

    if (message.includes("သင်တန်းအပ်မယ်")) {
      await ctx.reply(
        `🎓 HTZ FASHION သင်တန်းအပ်နှံခြင်း 🌸

သင်တန်းအပ်နှံရန် အောက်ပါအချက်များကို ပို့ပေးပါရှင့်။

1️⃣ အမည်
2️⃣ တက်ရောက်လိုသော သင်တန်း
3️⃣ ဖုန်းနံပါတ်

💖 အချက်အလက်များ ပို့ပေးပြီးပါက ဆက်လက်ဆောင်ရွက်ပေးပါမယ်ရှင့်။`
      );
    } else if (message.includes("အော်ဒါမှာမယ်")) {
      await ctx.reply(
        `👗 HTZ FASHION အော်ဒါမှာယူခြင်း 💖

အော်ဒါမှာယူရန် အောက်ပါအချက်များကို ပို့ပေးပါရှင့်။

1️⃣ လိုချင်သော အဝတ်အစားပုံ
2️⃣ အရောင်
3️⃣ အရွယ်အစား
4️⃣ အရေအတွက်

🌸 အသေးစိတ်အချက်အလက်များ ပို့ပေးပါရှင့်။`
      );
    } else if (message.includes("အသေးစိတ်")) {
      await ctx.reply(
        `💖 HTZ FASHION 💖

🎓 သင်တန်းအပ်နှံခြင်း
👗 အဝတ်အစား အော်ဒါမှာယူခြင်း

လိုအပ်တာကို စာပို့မေးမြန်းနိုင်ပါတယ်ရှင့်။`
      );
    }
  });
}
