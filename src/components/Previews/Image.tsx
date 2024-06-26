interface Props {
  value: string
}

function Image({ value }: Props) {
  return (
    <section>
      <img alt="Image" className="block h-auto max-w-full rounded" src={value} />
    </section>
  )
}

export default Image
