import Button from './components/elements/Button'
import Card, { CardHeader } from './components/elements/Card'
import { HoverCard, HoverCardTrigger } from './components/HoverCard'

function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-12">
      <div className="flex gap-8">
        <Button>Primary</Button>
        <Button h="secondary">Secondary</Button>
      </div>
      
      <div className="flex gap-8">
        <Card className="w-80">
          <h3 className="text-2xl font-bold">Standard Card</h3>
          <p>Cards use secondary colors with drop shadow for depth.</p>
        </Card>
        
        <Card className="w-80">
          <h3 className="text-2xl font-bold">Another Card</h3>
          <p>All cards have the same consistent styling.</p>
        </Card>
      </div>

      <div className="flex gap-8">
        <HoverCard hoverCardId="demo1" trigger={<HoverCardTrigger>Hover Me</HoverCardTrigger>}>
          <h4 className="text-xl font-bold mb-2">Hidden Content</h4>
          <p>This content appears when you hover over the trigger!</p>
        </HoverCard>

        <HoverCard 
          hoverCardId="demo2" 
          trigger={<HoverCardTrigger className="bg-primary-500 text-primary-950">Custom Trigger</HoverCardTrigger>}
          alignRight
        >
          <CardHeader className="bg-secondary-600 -m-6 mb-3">
            <h4 className="text-xl font-bold">With Header</h4>
          </CardHeader>
          <p>This card has a header and aligns to the right.</p>
        </HoverCard>
      </div>
    </div>
  )
}

export default App
