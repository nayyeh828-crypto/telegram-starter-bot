import { InlineKeyboard } from "grammy";

export function registerCommands(bot) {

  // START
  bot.command("start", async (ctx) => {
    await ctx.reply(
      `🌸 HTZ FASHION မှ ကြိုဆိုပါတယ် 🌸

မင်္ဂလာပါရှင့် 💖

HTZ FASHION မှာ
🎓 အပ်ချုပ်သင်တန်းအပ်နိုင်ပါတယ်။
👗 အဝတ်အစားများကိုလည်း စိတ်ကြိုက်မှာယူနိုင်ပါတယ်။

အောက်ကစာကို ရိုက်ပို့ပြီး ဆက်လက်လုပ်ဆောင်နိုင်ပါတယ်။

🎓 သင်တန်းအပ်မယ်
👗 အဝတ်အစားမှာမယ်`,
      {
        reply_markup: new InlineKeyboard()
          .text("🎓 သင်တန်းအပ်မယ်", "enroll")
          .row()
          .text("👗 အဝတ်အစားမှာမယ်", "order")
      }
    );
  });

  // ENROLLMENT
  const enrollMessage = `🎓 HTZ FASHION အပ်ချုပ်သင်တန်း

သင်တန်းအပ်ရန် အောက်ပါအချက်များကို ပေးပို့ပေးပါရှင့် 💖

1. အမည်
2. ဖုန်းနံပါတ်
3. တက်ရောက်လိုသော သင်တန်း
4. နေထိုင်ရာမြို့

အချက်အလက်များ ပေးပို့ပြီးပါက သင်တန်းအကြောင်း ဆက်သွယ်ပေးပါမယ်ရှင့်။`;

  // CLOTHING ORDER
  const orderMessage = `👗 HTZ FASHION အဝတ်အစားမှာယူခြင်း

အဝတ်အစားမှာယူရန် အောက်ပါအချက်များ ပေးပို့ပေးပါရှင့် 💖

1. မှာယူလိုသော အဝတ်အစားပုံ
2. အရောင်
3. Size
4. အရေအတွက်
5. ဖုန်းနံပါတ်

အချက်အလက်များ ပေးပို့ပြီးပါက ဆက်သွယ်ပေးပါမယ်ရှင့်။`;

  // BUTTON CALLBACKS
  bot.callbackQuery("enroll", async (ctx) => {
    await ctx.answerCallbackQuery();
    await ctx.reply(enrollMessage);
  });

  bot.callbackQuery("order", async (ctx) => {
    await ctx.answerCallbackQuery();
    await ctx.reply(orderMessage);
  });

  // HELP
  bot.command("help", async (ctx) => {
    await ctx.reply(
      `🌸 HTZ FASHION

🎓 သင်တန်းအပ်မယ်
👗 အဝတ်အစားမှာမယ်

အထက်ပါစာသားများကို ရိုက်ပို့နိုင်ပါတယ်ရှင့်။`
    );
  });

  // TEXT AUTO REPLY
  bot.on("message:text", async (ctx) => {
    const text = ctx.message.text.trim();

    if (text === "သင်တန်းအပ်မယ်" || text === "သင်တန်းအပ်ချင်တယ်") {
      return ctx.reply(enrollMessage);
    }

    if (text === "အဝတ်အစားမှာမယ်" || text === "အဝတ်အစားမှာချင်တယ်") {
      return ctx.reply(orderMessage);
    }

    if (text === "မင်္ဂလာပါ" || text === "ဟယ်လို" || text.toLowerCase() === "hi") {
      return ctx.reply(
        "🌸 မင်္ဂလာပါရှင့်။ HTZ FASHION မှ ကြိုဆိုပါတယ် 💖\n\n🎓 သင်တန်းအပ်မယ်\n👗 အဝတ်အစားမှာမယ်"
      );
    }

    return ctx.reply(
      "🌸 HTZ FASHION မှ ကြိုဆိုပါတယ်ရှင့် 💖\n\n🎓 သင်တန်းအပ်မယ်\n👗 အဝတ်အစားမှာမယ်\n\nအထက်ပါစာသားများထဲမှ ရွေးပြီး ပို့ပေးပါရှင့်။"
    );
  });

}
