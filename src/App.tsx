import { Chains } from './components/Chains'
import ChainIcon from './components/ChainIcon'
import ThemeToggle from './components/ThemeToggle'
import Button from './components/elements/Button'
import Card from './components/elements/Card'
import { HoverCard, HoverCardTrigger } from './components/HoverCard'

function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center p-8">
      <div className="grid grid-cols-[200px_1fr] gap-y-12 gap-x-12 items-center max-w-4xl w-full">
        <div className="text-right text-[var(--foreground)] text-xl">ThemeToggle</div>
        <div>
          <ThemeToggle />
        </div>

        <div className="text-right text-[var(--foreground)] text-xl">Chains</div>
        <div className='flex'>
          <Chains />
        </div>
        
        <div className="text-right text-[var(--foreground)] text-xl">ChainIcon</div>
        <div className="flex gap-4">
          <ChainIcon chainId={1} size={48} />
          <ChainIcon chainId={10} size={48} />
          <ChainIcon chainId={100} size={48} />
          <ChainIcon chainId={8453} size={48} />
        </div>
        
        <div className="text-right text-[var(--foreground)] text-xl">Button</div>
        <div className="flex gap-4">
          <Button>Primary</Button>
          <Button h="secondary">Secondary</Button>
          <Button disabled>Disabled</Button>
        </div>
        
        <div className="text-right text-[var(--foreground)] text-xl">Card</div>
        <div>
          <Card className="max-w-md">
            This is a card component with some example content
          </Card>
        </div>
        
        <div className="text-right text-[var(--foreground)] text-xl">HoverCard</div>
        <div className='flex'>
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
    </div>
  )
}

export default App
