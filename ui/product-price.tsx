import { multiply, toUnit, type Dinero } from 'dinero.js'

import type { Product } from '#/app/api/products/product'
import { ProductCurrencySymbol } from '#/ui/product-currency-symbol'
import { ProductDeal } from '#/ui/product-deal'
import { ProductLighteningDeal } from '#/ui/product-lightening-deal'

function isDiscount(obj: any): obj is { expires?: number; percent: number } {
  return typeof obj?.percent === 'number'
}

function formatDiscount(
  price: Dinero<number>,
  discountRaw: Product['discount'],
) {
  return isDiscount(discountRaw)
    ? {
        amount: multiply(price, {
          amount: discountRaw.percent,
          scale: 2,
        }),
        expires: discountRaw.expires,
      }
    : undefined
}

export const ProductPrice = ({
  discount: discountRaw,
  price,
}: {
  discount: Product['discount']
  price: Dinero<number>
}) => {
  const discount = formatDiscount(price, discountRaw)

  if (discount) {
    if (discount?.expires && typeof discount.expires === 'number') {
      return <ProductLighteningDeal price={price} discount={discount} />
    }
    return <ProductDeal price={price} discount={discount} />
  }

  return (
    <div className="flex">
      <div className="text-sm leading-snug text-white">
        <ProductCurrencySymbol dinero={price} />
      </div>
      <div className="text-lg font-bold leading-snug text-white">
        {toUnit(price)}
      </div>
    </div>
  )
}
