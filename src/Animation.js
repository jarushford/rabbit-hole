import GetFrames from './util/AnimationFrames';

export default function Animation(props) {
  return (
    GetFrames(props.animationFrame)
  )
}