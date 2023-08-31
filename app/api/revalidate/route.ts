import { revalidatePath, revalidateTag } from 'next/cache'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path') || '/isr/[id]'
  const collection =
    request.nextUrl.searchParams.get('collection') || 'collection'
  revalidatePath(path)
  revalidateTag(collection)

  console.log('revalidated', path, collection)
  return NextResponse.json({
    cache: 'no-store',
    now: Date.now(),
    revalidated: true,
  })
}
