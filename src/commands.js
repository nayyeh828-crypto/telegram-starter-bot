
import { InlineKeyboard } from "grammy"

export function registerCommands(bot) {
  bot.command("start", (ctx) =>
    ctx.reply(
      `မင်္ဂလာပါ ${ctx.from?.first_name ?? "ရှင်"} 🌸

HTZ FASHION မှ ကြိုဆိုပါတယ်။

သင်တန်းအပ်ရန် "သင်တန်းအပ်မယ်" လို့ ပို့ပေးပါ။

အဝတ်အထည် အော်ဒါမှာရန် "အော်ဒါမှာမယ်" လို့ ပို့ပေးပါ။`,
      {
        reply_markup: new InlineKeyboard().text("Ping me", "ping"),
      },
    ),
  )

  bot.command("help", (ctx) =>
    ctx.reply(
      [
        "HTZ FASHION",
        "",
        "သင်တန်းအပ်ရန် - သင်တန်းအပ်မယ်",
        "အော်ဒါမှာရန် - အော်ဒါမှာမယ်",
        "/start - စတင်ရန်",
        "/help - အကူအညီ",
        "/ping - Bot စမ်းရန်",
        "/id - ID ကြည့်ရန်",
      ].join("\n"),
    ),
  )

  bot.command("ping", (ctx) => ctx.reply("pong"))

  bot.command("id", (ctx) =>
    ctx.reply(
      `Chat id: ${ctx.chat.id}\nYour id: ${ctx.from?.id ?? "unknown"}`,
    ),
  )

  bot.callbackQuery("ping", (ctx) =>
    ctx.answerCallbackQuery({ text: "pong" }),
  )

  bot.on("message:text", (ctx) => {
    const text = ctx.message.text.trim()

    if (text === "သင်တန်းအပ်မယ်") {
      return ctx.reply(
        `🎓 HTZ FASHION သင်တန်းအပ်ရန်

အမည် -
ဖုန်းနံပါတ် -
တက်ရောက်လိုသော သင်တန်း -

အချက်အလက်များကို ဖြည့်ပြီး ပို့ပေးပါ။`,
      )
    }

    if (text === "အော်ဒါမှာမယ်") {
      return ctx.reply(
        `👗 HTZ FASHION အော်ဒါမှာရန်

အမည် -
ဖုန်းနံပါတ် -
လိုချင်သော အဝတ်အထည် -
အရောင် -
အရွယ်အစား -
အရေအတွက် -

အချက်အလက်များကို ဖြည့်ပြီး ပို့ပေးပါ။`,
      )
    }

    return ctx.reply(ctx.message.text)
  })
}
