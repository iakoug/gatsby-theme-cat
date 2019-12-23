import React from 'react'
import * as S from './index.style'

interface State {
  tick: string
}

const quoteReference = [
  `"闭门即是深山，心静随处净土。"`,
  `"世途渺于鸟道，人情浮比鱼蛮。"`,
  `"In me the tiger, sniffs the rose."`,
  `"做三十年众生马牛，才能六十年诸佛龙象。"`,
  `"勇于敢所为，则杀其身。勇于不敢所为，则活其身。"`,
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
  `"所有晦暗都留给过往，从遇见你开始，凛冬散尽，星河长明。"`,
  `"很多事犹如天气，慢慢热或渐渐冷，等到惊悟，又过了一季。"`,
  `"在世间，本就是各人下雪，各人有各人的隐晦和皎洁。"`,
  `"我身体里的火车从来不会错轨 / 所以允许大雪，风暴，泥石流，和荒谬。"`,
  `"我曾看到一个时间旅人，从身上拍落两场大雪，由心里携出一篮火焰，独自穿过整个冬天。"`,
  `"我在贩卖日落，你像神明一样慷慨地将光洒向我。"`,
  `"想去跳伞，带着身体重量从几万米的高空俯冲向大地；想沉在马尔代夫的海底，跟鱼儿一起生活。"`
]

let [index, timer] = [0, 0]
let duplicateIndex = 0

const getRandomIndex = (): number => {
  const currentIndex = Math.floor(Math.random() * quoteReference.length)

  return duplicateIndex === currentIndex
    ? getRandomIndex()
    : (duplicateIndex = currentIndex)
}

let startIndex = getRandomIndex()

const resetIndex = () => {
  index = 0 // Reset

  clearInterval(timer)
}

export class ByteDance extends React.Component<any, State> {
  constructor(props: any) {
    super(props)

    this.state = { tick: '' }
  }

  componentDidMount() {
    this.typing()
  }

  typing = () => {
    // const quote = quoteReference[getRandomIndex()]
    const useIndex =
      startIndex > quoteReference.length - 1 ? (startIndex = 0) : startIndex

    const quote = quoteReference[useIndex] || ''

    startIndex++

    timer = setInterval(() => {
      if (index <= quote.length) {
        return this.setState({ tick: quote.slice(0, index++) })
      }

      resetIndex()
    }, 50)
  }

  componentWillUnmount() {
    resetIndex() // Remove state settings effect.
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
