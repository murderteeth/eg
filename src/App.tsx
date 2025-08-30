import { Chains } from './components/Chains'
import ChainIcon from './components/ChainIcon'
import ThemeToggle from './components/ThemeToggle'
import Button from './components/elements/Button'
import Card from './components/elements/Card'
import { HoverCard, HoverCardTrigger } from './components/HoverCard'
import { Tooltip } from 'react-tooltip'

function App() {
  return (
    <div className="px-16 pt-8 pb-96">
      <div className="grid grid-cols-[200px_1fr] gap-y-12 gap-x-12 items-center max-w-6xl">

        <div className="text-right flex flex-col gap-3">
          <div>{'<Primary>'}</div>
          <div>{'<Secondary>'}</div>
          <div>{'<Accent>'}</div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-0">
            <div className="w-16 h-8 bg-primary-50 rounded-l-primary"></div>
            <div className="w-16 h-8 bg-primary-100"></div>
            <div className="w-16 h-8 bg-primary-200"></div>
            <div className="w-16 h-8 bg-primary-300"></div>
            <div className="w-16 h-8 bg-primary-400"></div>
            <div className="w-16 h-8 bg-primary-500"></div>
            <div className="w-16 h-8 bg-primary-600"></div>
            <div className="w-16 h-8 bg-primary-700"></div>
            <div className="w-16 h-8 bg-primary-800"></div>
            <div className="w-16 h-8 bg-primary-900"></div>
            <div className="w-16 h-8 bg-primary-950 rounded-r-primary"></div>
          </div>
          
          <div className="flex items-center gap-0">
            <div className="w-16 h-8 bg-secondary-50 rounded-l-primary"></div>
            <div className="w-16 h-8 bg-secondary-100"></div>
            <div className="w-16 h-8 bg-secondary-200"></div>
            <div className="w-16 h-8 bg-secondary-300"></div>
            <div className="w-16 h-8 bg-secondary-400"></div>
            <div className="w-16 h-8 bg-secondary-500"></div>
            <div className="w-16 h-8 bg-secondary-600"></div>
            <div className="w-16 h-8 bg-secondary-700"></div>
            <div className="w-16 h-8 bg-secondary-800"></div>
            <div className="w-16 h-8 bg-secondary-900"></div>
            <div className="w-16 h-8 bg-secondary-950 rounded-r-primary"></div>
          </div>

          <div className="flex items-center gap-0">
            <div className="w-16 h-8 bg-accent-50 rounded-l-primary"></div>
            <div className="w-16 h-8 bg-accent-100"></div>
            <div className="w-16 h-8 bg-accent-200"></div>
            <div className="w-16 h-8 bg-accent-300"></div>
            <div className="w-16 h-8 bg-accent-400"></div>
            <div className="w-16 h-8 bg-accent-500"></div>
            <div className="w-16 h-8 bg-accent-600"></div>
            <div className="w-16 h-8 bg-accent-700"></div>
            <div className="w-16 h-8 bg-accent-800"></div>
            <div className="w-16 h-8 bg-accent-900"></div>
            <div className="w-16 h-8 bg-accent-950 rounded-r-primary"></div>
          </div>
        </div>


        <div className="text-right">{'<ThemeToggle>'}</div>
        <div>
          <ThemeToggle />
        </div>

        <div className="text-right">{'<Chains>'}</div>
        <div>
          <Chains />
        </div>
        
        <div className="text-right">{'<ChainIcon>'}</div>
        <div className="flex gap-4">
          <ChainIcon chainId={1} size={48} />
        </div>
        
        <div className="text-right">{'<Button>'}</div>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="accent">Accent</Button>
          <Button variant="error">Error</Button>
          <Button variant="busy">Busy</Button>
          <Button disabled>Disabled</Button>
        </div>
        
        <div className="text-right">{'<Card>'}</div>
        <div>
          <Card className="max-w-md">
            This is a card component with some example content
          </Card>
        </div>

        <div className="text-right">{'<Tooltip>'}</div>
        <div className="flex">
          <div data-tooltip-id="tooltip" data-tooltip-content="This is a tooltip" className="flex">Hover me</div>
        </div>
        
        <div className="text-right">{'<HoverCard>'}</div>
        <div>
          <HoverCard
            hoverCardId="example-hover"
            trigger={<HoverCardTrigger>Hover me</HoverCardTrigger>}
          >
            <div className="p-4">
              This content appears on hover
            </div>
          </HoverCard>
        </div>
      </div>
      <Tooltip id="tooltip" className="z-[10000] font-mono !text-xl !rounded-primary" />
    </div>
  )
}

export default App
