'use client'

import { useIsMobileLayout } from '@/features/home/hooks/use-is-mobile-layout'
import DesktopHomeLayout from '@/features/home/layouts/DesktopHomeLayout'
import MobileHomeLayout from '@/features/home/layouts/MobileHomeLayout'

export default function ResponsiveHomeLayout() {
  const isMobileLayout = useIsMobileLayout()

  return isMobileLayout ? <MobileHomeLayout /> : <DesktopHomeLayout />
}
