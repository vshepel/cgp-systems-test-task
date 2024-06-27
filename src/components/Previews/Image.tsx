interface Props {
  value?: string
}

function Image({ value }: Props) {
  return (
    <section>
      <img alt="Image" className="block h-auto max-w-full rounded" src={value || 'https://placehold.co/540x230'} />
    </section>
  )
}

export default Image
