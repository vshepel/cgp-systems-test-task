interface Props {
  value: string
}

function Button({ value }: Props) {
  return (
    <section>
      <button className="rounded bg-blue-400 px-[30px] py-2.5 text-sm text-blue-100">{value}</button>
    </section>
  )
}

export default Button
