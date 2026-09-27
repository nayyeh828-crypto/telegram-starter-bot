export function registerCommands(bot) {
  bot.command("start", async (ctx) => {
    await ctx.reply(
      "🌸 HTZ FASHION မှ ကြိုဆိုပါတယ် 🌸\n\n" +
      "သင်တန်းအပ်ရန် \"သင်တန်းအပ်မယ်\" လို့ ရိုက်ပို့ပေးပါ။\n\n" +
      "အဝတ်အစားမှာယူရန် \"အော်ဒါမှာမယ်\" လို့ ရိုက်ပို့ပေးပါ။"
    );
  });

  bot.command("help", (ctx) => {
    ctx.reply(
      "📌 HTZ FASHION\n\n" +
      "သင်တန်းအပ်မယ်\n" +
      "အော်ဒါမှာမယ်"
    );
  });

  bot.on("message:text", async (ctx) => {
    const msg = ctx.message.text.trim();

    if (msg === "သင်တန်းအပ်မယ်") {
      return ctx.reply(
        "🎓 သင်တန်းအပ်ရန်\n\n" +
        "အမည် -\n" +
        "ဖုန်းနံပါတ် -\n" +
        "တက်ရောက်လိုသောသင်တန်း -\n\n" +
        "အချက်အလက်များ ဖြည့်ပေးပါ။"
      );
    }

    if (msg === "အော်ဒါမှာမယ်") {
      return ctx.reply(
        "👗 အဝတ်အစားအော်ဒါမှာယူရန်\n\n" +
        "မှာယူလိုသောအဝတ်အစားပုံနှင့် အရွယ်အစားကို ပို့ပေးပါ။"
      );
    }
  });
}
