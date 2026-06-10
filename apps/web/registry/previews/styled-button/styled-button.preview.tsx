import React from 'react'
import { StyledButton } from "@workspace/ui/registry/radix-nova/styled-button/styled-button"
import { Logo } from '@/components/ui/icons/logo'

export default function StyledButtonPreview() {
  return (
    <div className='w-full h-full flex items-center justify-center bg-background'>
        <StyledButton href="#" variant="blue" size="md" className='flex items-center gap-1 px-3 pr-4'><Logo className='w-5 h-5 text-background' />Dashboard</StyledButton>
    </div>
  )
}