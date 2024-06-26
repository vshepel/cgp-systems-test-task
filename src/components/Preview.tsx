import Button from '@/components/Previews/Button.tsx'
import Headline from '@/components/Previews/Headline.tsx'
import Image from '@/components/Previews/Image.tsx'
import Paragraph from '@/components/Previews/Paragraph.tsx'

function Preview() {
  return (
    <section className="overflow-auto p-[30px]">
      <div className="mx-auto grid max-w-[540px] gap-[30px] text-center">
        <Image value="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" />
        <Headline value="A legendary cap set that feels like new" />
        <Paragraph value={'Prompt your customer to revisit your store by showing them the products they left behind. Consider offering them a coupon code to close the deal. \nUsing the "Insert" panel on the right, drag and drop \nthe Abandoned Cart element onto the page below.'} />
        <Button value="Register now" />
      </div>
    </section>
  )
}

export default Preview
