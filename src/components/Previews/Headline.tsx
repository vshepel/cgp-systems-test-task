interface Props {
  value: string
}

function Headline({ value }: Props) {
  return (
    <section>
      <h1 className="text-[22px] font-bold">{value}</h1>
    </section>
  )
}

export default Headline
