import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode } from 'react'
import { TooltipArrow, TooltipContent } from './styles'

export type TooltipProps = ComponentProps<typeof TooltipPrimitive.Root> & {
  content: string | ReactNode
}

export function Tooltip({ children, content, ...props }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root {...props}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipContent>
            <TooltipPrimitive.TooltipArrow />

            {content}
          </TooltipContent>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

Tooltip.displayname = 'Tooltip'
