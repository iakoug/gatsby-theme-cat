import React from 'react'
import * as S from './index.style'

interface State {
  tick: string
}

let [index, timer] = [0, 0]
let duplicateIndex = 0

// let startIndex = this.getRandomIndex()

const resetIndex = () => {
  index = 0 // Reset

  clearInterval(timer)
}

export class ByteDance extends React.Component<any, State> {
  quoteReference: string[]

  constructor(props: any) {
    super(props)

    this.state = { tick: '' }

    this.quoteReference = props.siteMeta.siteMetadata.byteDance || []
  }

  componentDidMount() {
    if (this.quoteReference.length) {
      this.typing()
    }
  }

  getRandomIndex = (): number => {
    const currentIndex = Math.floor(Math.random() * this.quoteReference.length)

    return duplicateIndex === currentIndex
      ? this.getRandomIndex()
      : (duplicateIndex = currentIndex)
  }

  typing = () => {
    const quote = this.quoteReference[this.getRandomIndex()]

    // const useIndex =
    // startIndex > this.quoteReference.length - 1 ? (startIndex = 0) : startIndex

    // const quote = !this.quoteReference[useIndex]
    //   ? this.quoteReference[(startIndex = 0)]
    //   : `${startIndex++}` && this.quoteReference[useIndex]

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
      <>
        {this.quoteReference.length > 0 && (
          <S.Wrapper>
            {tick}
            <S.Blink>|</S.Blink>
          </S.Wrapper>
        )}
      </>
    )
  }
}
