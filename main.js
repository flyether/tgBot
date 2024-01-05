import {Telegraf, Markup} from 'telegraf'
import { message } from 'telegraf/filters'
const token ='6802252669:AAGyYJeC_gPqmzDzgBvfAX5ruV9M4IggYG8'
const bot = new Telegraf(token)
const webAppUrl ='https://shiny-griffin-5b2d20.netlify.app'
bot.command('start', (ctx) => {
   ctx.reply(
      'Максимчик, мама тебя очень любит, нажми кнопку ниже чтобы начать ныть',
      Markup.keyboard([
       Markup.button.webApp(
         'Создай свое нытье',
         `${webAppUrl}/other`
       )  
      ])
   )
})
bot.on(message('web_app_data'), async ctx => {
   const data = ctx.webAppData.data.json()
   ctx.reply(`ты говоришь: ${data?.nag}, а у меня сердце кровью обливается, бедный ты мой малыш ((`)
})
bot.launch()