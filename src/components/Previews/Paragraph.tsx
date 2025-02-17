interface Props {
  value?: string
}

function Paragraph({ value }: Props) {
  return (
    <section>
      <p className="whitespace-pre-wrap text-sm text-blue-200">{value || 'Empty Paragraph'}</p>
    </section>
  )
}

export default Paragraph
