import React from 'react'
import * as S from './index.style'

interface State {
  tick: string
}

const quoteReference = [
  `"闭门即是深山，心静随处净土。"`,
  `"世途渺于鸟道，人情浮比鱼蛮。"`,
  `"心有猛虎，细嗅蔷薇。"`,
  `"勇于敢所为，则杀其身。勇于不敢所为，则活其身。"`,
  `"恕心养到极处，世间都无罪过。"`,
  `"我见青山多妩媚，料青山见我应如是。"`,
  `"人从天上，载得春来。剑去山下，暑不敢至。"`,
  `"心湛静，笑白云多事，等闲为雨出山来。"`,
  `"见人心更深者，本已是渊中鱼，井底蛟。"`,
  `"几人得真鹿，不知终日梦为鱼。"`,
  `"是日已过，命亦随减，如少水鱼，斯有何乐。"`,
  `"夜静水寒鱼不食，为何空欢喜。满船空载月明归，如何不欢喜。"`,
  `"今夕何夕，见此良人。"`,
  `"智者乐水，东山来也。"`,
  `"将所有的晦暗留给过往，从遇见你开始，凛冬散尽，星河长明。"`,
  `"很多事犹如天气，慢慢热或渐渐冷，等到惊悟，又过了一季。"`,
  `"如果人生能够重来，我大概还是这样。"`,
  `"在世间，本就是各人下雪，各人有各人的隐晦与皎洁。"`,
  `"我在贩卖日落，你像神明一样慷慨地将光洒向我。"`,
  `"胸中有丘壑，眼里存山河。"`,
  `"活在这珍贵的人间，太阳强烈，水波温柔。"`,
  `"玻璃晴朗，橘子辉煌。"`,
  `"树深时见鹿，溪午不闻钟。"`,
  `"二斤桃花酿做酒，万杯不及你温柔。"`,
  `"只缘感君一回顾，使我思君朝与暮。"`,
  `"你说你孤独，就像很久以前，长星照耀十三个州府。"`,
  `"你没有如期归来，而这正是离别的意义。"`,
  `"酒入豪肠，七分化作月光，剩下的三分啸成了剑气，绣口一吐就是半个盛唐。"`,
  `"浮舟沧海，立马昆仑"`,
  `"这世间众生皆孤寂，应怪众生未见过你。"`,
  `"我与春风皆过客，你携秋水揽星河。"`,
  `"你不知道那究竟有什么意义，开始了就不能重来。"`,
  `"当蝴蝶们逐一金属般爆炸，焚烧，死去而所见之处仅仅遗留你的痕迹。"`
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
    const quote = quoteReference[getRandomIndex()]

    // const useIndex =
    // startIndex > quoteReference.length - 1 ? (startIndex = 0) : startIndex

    // const quote = !quoteReference[useIndex]
    //   ? quoteReference[(startIndex = 0)]
    //   : `${startIndex++}` && quoteReference[useIndex]

    timer = setInterval(
      () =>
        quote.length
          ? this.setState({ tick: quote.slice(0, index++) })
          : resetIndex(),
      50
    )
  }

  componentWillUnmount() {
    resetIndex() // Remove state settings effect.
  }

  render() {
    const { tick } = this.state

    return (
      <S.Wrapper>
        {tick}
        <S.Blink>|</S.Blink>
      </S.Wrapper>
    )
  }
}
