import React from 'react'
import * as S from './index.style'

interface State {
  tick: string
}

const quoteReference = [
  `"闭门即是深山，心静随处净土。"`,
  `"世途渺于鸟道，人情浮比鱼蛮。"`,
  `"In me the tiger sniffs the rose."`,
  `"做 30 年众生马牛，才能 60 年诸佛龙象。"`,
  `"勇于敢所为，则杀其身。用于不敢所为，则活其身。"`,
  `"恕心养到极处，世间都无罪过。"`,
  `"真正睁眼，便见光明。"`,
  `"我见青山多妩媚，料青山见我应如是。"`,
  `"人从天上，载得春来。剑去山下，暑不敢至。"`,
  `"心湛静，笑白云多事，等闲为雨出山来。"`,
  `"见人心更深者，本已是渊中鱼，井底蛟。"`,
  `"几人得真鹿，不知终日梦为鱼。是日已过，命亦随减，如少水鱼，斯有何乐。"`,
  `"夜静水寒鱼不食，为何空欢喜。满船空载月明归，如何不欢喜。"`,
  `"尘中振衣，一样见华枝春满。泥里立足，不也是天心月圆。"`,
  `"今夕何夕，见此良人。"`,
]

let [index, timer] = [0, 0]

export class ByteDance extends React.Component<any, State> {
  constructor(props: any) {
    super(props)

    this.state = { tick: '' }

    setTimeout(this.typing, 1000)
  }

  typing = () => {
    const quote =
      quoteReference[Math.floor(Math.random() * quoteReference.length)]

    timer = setInterval(() => {
      if (index <= quote.length) {
        return this.setState({ tick: quote.slice(0, index++) })
      }

      clearInterval(timer)
    }, 50)
  }

  componentWillUnmount() {
    clearInterval(timer) // Remove state settings effect.
  }

  render() {
    const { tick } = this.state

    return (
      <S.Wrapper>
        {tick}
        {tick && <S.Blink>|</S.Blink>}
      </S.Wrapper>
    )
  }
}
