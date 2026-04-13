'use client'

import { useIsMobileLayout } from '@/hooks/use-is-mobile-layout'
import DesktopHomeLayout from '@/layouts/DesktopHomeLayout'
import MobileHomeLayout from '@/layouts/MobileHomeLayout'

const ResponsiveHomeLayout = (): JSX.Element => {
  const isMobileLayout = useIsMobileLayout()

  return isMobileLayout ? <MobileHomeLayout /> : <DesktopHomeLayout />
}

export default ResponsiveHomeLayout
