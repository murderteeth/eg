import { useEffect, useState } from 'react'
import { PiCircleFill, PiGithubLogoFill, PiSquareFill, PiStarFill, PiTriangleFill } from 'react-icons/pi'
import { Tooltip } from 'react-tooltip'
import ChainIcon from './components/ChainIcon'
import { ChainSelect } from './components/ChainSelect'
import Button from './components/elements/Button'
import Card from './components/elements/Card'
import Input from './components/elements/Input'
import ListItem from './components/elements/ListItem'
import Switch from './components/elements/Switch'
import Textarea from './components/elements/Textarea'
import Footer from './components/Footer'
import Header from './components/Header'
import { HoverCard, HoverCardTrigger } from './components/HoverCard'
import { HoverSelect } from './components/HoverSelect'
import ImgOrBg from './components/ImgOrBg'
import FlyInFromBottom from './components/motion/FlyInFromBottom'
import FlyInFromLeft from './components/motion/FlyInFromLeft'
import FlyInFromRight from './components/motion/FlyInFromRight'
import FlyInFromTop from './components/motion/FlyInFromTop'
import ScaleIn from './components/motion/ScaleIn'
import Odometer, { FORMAT_2_DECIMALS } from './components/Odometer'
import Skeleton from './components/Skeleton'
import ThemeToggle from './components/ThemeToggle'
import TokenIcon from './components/TokenIcon'
import { Yearn } from './components/Yearn'

function MotionDemo({
  MotionComponent,
  label,
}: {
  MotionComponent: React.ComponentType<{ children: React.ReactNode; _key: string }>
  label: string
}) {
  const [key, setKey] = useState(0)

  return (
    // biome-ignore lint/a11y/useSemanticElements: div needed for layout, not semantic button
    <div
      onClick={() => setKey((k) => k + 1)}
      className="cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && setKey((k) => k + 1)}
    >
      <MotionComponent key={key} _key={key.toString()}>
        <Card className="p-4 w-42 whitespace-nowrap text-center">{label}</Card>
      </MotionComponent>
    </div>
  )
}

function App() {
  const [switchValue, setSwitchValue] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [textareaValue, setTextareaValue] = useState('')
  const [odometerValue, setOdometerValue] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setOdometerValue((prev) => prev + 1)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <Header>
        <div>&lt;Header&gt;</div>
        <div className="flex items-center gap-12">
          <div>{'<ThemeToggle>'}</div>
          <ThemeToggle />
        </div>
      </Header>

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

          <div className="text-right">{'<Typography>'}</div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-sans text-lg font-semibold">Font Usage Rules</h3>
              <div className="text-sm text-secondary-600">
                <div>
                  <strong>Inter (Sans Serif):</strong> General text, headings, UI labels
                </div>
                <div>
                  <strong>Google Sans Code (Monospace):</strong> Numbers, code, technical data
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-sans text-base font-semibold mb-3">Sans Serif Examples</h4>
                <div className="flex flex-col gap-2">
                  <div className="font-sans text-3xl font-bold">Heading Bold</div>
                  <div className="font-sans text-2xl font-semibold">Heading Semibold</div>
                  <div className="font-sans text-xl font-medium">Heading Medium</div>
                  <div className="font-sans text-base">Regular body text with good readability</div>
                  <div className="font-sans text-sm text-secondary-600">Secondary text information</div>
                  <div className="font-sans text-xs text-secondary-500">Small caption text</div>
                </div>
              </div>

              <div>
                <h4 className="font-sans text-base font-semibold mb-3">Monospace Examples</h4>
                <div className="flex flex-col gap-2">
                  <div className="font-mono text-2xl font-bold">$1,234.56</div>
                  <div className="font-mono text-xl">42.000000 ETH</div>
                  <div className="font-mono text-base">0x1234...abcd</div>
                  <div className="font-mono text-sm">Block: 18,547,291</div>
                  <div className="font-mono text-xs">Gas: 21000 gwei</div>
                  <div className="font-mono text-sm bg-[var(--color-input-bg)] p-2 rounded-primary">
                    function transfer(address to, uint256 amount)
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-right">{'<ImgOrBg>'}</div>
          <div className="flex gap-4 items-center">
            <ImgOrBg
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E"
              alt="Invalid content"
              width={48}
              height={48}
              bgClassName="rounded-full flex items-center justify-center"
            ></ImgOrBg>
          </div>

          <div className="text-right">{'<Yearn>'}</div>
          <div className="flex gap-4">
            <Yearn front="text-primary-50" back="text-primary-600" size={48} />
            <Yearn front="text-secondary-200" back="text-secondary-900" size={48} />
            <Yearn front="text-accent-50" back="text-accent-500" size={48} />
          </div>

          <div className="text-right">{'<ChainSelect>'}</div>
          <div>
            <ChainSelect />
          </div>

          <div className="text-right">{'<ChainIcon>'}</div>
          <div className="flex gap-4">
            <ChainIcon chainId={1} size={48} />
          </div>

          <div className="text-right">{'<TokenIcon>'}</div>
          <div className="flex gap-4">
            <TokenIcon chainId={1} address="0xdC035D45d973E3EC169d2276DDab16f1e407384F" size={48} />
            <TokenIcon chainId={1} address="0xdC035D45d973E3EC169d2276DDab16f1e407384F" size={48} showChain={true} />
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
            <Card className="max-w-md">This is a card component with some example content</Card>
          </div>

          <div className="text-right">{'<ListItem>'}</div>
          <div className="flex flex-col gap-3 max-w-lg">
            <ListItem variant="xl">Extra Large List Item</ListItem>
            <ListItem variant="lg">Large List Item</ListItem>
            <ListItem variant="base">Base List Item</ListItem>
          </div>

          <div className="text-right">{'<Odometer>'}</div>
          <div className="flex gap-4">
            <Odometer value={odometerValue} format={FORMAT_2_DECIMALS} className="text-4xl font-bold" />
          </div>

          <div className="text-right">{'<Tooltip>'}</div>
          <div className="flex">
            <div data-tooltip-id="tooltip" data-tooltip-content="This is a tooltip" className="flex">
              Hover me
            </div>
          </div>

          <div className="text-right">{'<HoverCard>'}</div>
          <div>
            <HoverCard
              hoverCardId="example-hover"
              trigger={<HoverCardTrigger>Hover me</HoverCardTrigger>}
              className="w-64"
            >
              <div className="p-4">This content appears on hover</div>
            </HoverCard>
          </div>

          <div className="text-right">{'<HoverSelect>'}</div>
          <div className="flex gap-4">
            <HoverSelect
              selectId="single-example"
              options={[
                { value: 'circle', label: 'Circle', icon: <PiCircleFill /> },
                { value: 'square', label: 'Square', icon: <PiSquareFill /> },
                { value: 'triangle', label: 'Triangle', icon: <PiTriangleFill /> },
                { value: 'star', label: 'Star', icon: <PiStarFill /> },
              ]}
              placeholder="Select shape"
              triggerClassName="w-82"
            />

            <HoverSelect
              selectId="multi-example"
              options={[
                { value: 'red', label: 'Red', icon: <PiCircleFill className="text-red-500" /> },
                { value: 'blue', label: 'Blue', icon: <PiCircleFill className="text-blue-500" /> },
                { value: 'green', label: 'Green', icon: <PiCircleFill className="text-green-500" /> },
                { value: 'yellow', label: 'Yellow', icon: <PiCircleFill className="text-yellow-500" /> },
              ]}
              placeholder="Select colors"
              multiple={true}
              showSelectAll={true}
              triggerClassName="w-82"
            />
          </div>

          <div className="text-right">{'<Motion>'}</div>
          <div className="flex gap-4">
            <MotionDemo MotionComponent={FlyInFromLeft} label="From Left" />
            <MotionDemo MotionComponent={FlyInFromRight} label="From Right" />
            <MotionDemo MotionComponent={FlyInFromTop} label="From Top" />
            <MotionDemo MotionComponent={FlyInFromBottom} label="From Bottom" />
            <MotionDemo MotionComponent={ScaleIn} label="Scale In" />
          </div>

          <div className="text-right">{'<Skeleton>'}</div>
          <div className="flex gap-4">
            <Skeleton className="w-32 h-12" />
            <Skeleton className="w-32 h-12" />
            <Skeleton className="w-32 h-12" />
          </div>

          <div className="text-right">{'<Switch>'}</div>
          <div className="flex gap-8">
            <Switch label="Toggle me" checked={switchValue} onChange={setSwitchValue} />
            <Switch label="Always on" checked={true} disabled={true} />
            <Switch label="Disabled" checked={false} disabled={true} />
          </div>

          <div className="text-right">{'<Input>'}</div>
          <div className="flex flex-col gap-4">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type something..."
              className="w-96"
            />
            <Input placeholder="Warning state" theme="warn" className="w-96" />
            <Input placeholder="Error state" theme="error" className="w-96" />
            <Input placeholder="Disabled input" disabled className="w-96" />
          </div>

          <div className="text-right">{'<Textarea>'}</div>
          <div className="flex flex-col gap-4">
            <Textarea
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
              placeholder="Enter multiple lines of text..."
              rows={4}
              className="w-96"
            />
            <Textarea placeholder="Warning textarea" theme="warn" rows={3} className="w-96" />
            <Textarea placeholder="Error textarea" theme="error" rows={3} className="w-96" />
            <Textarea placeholder="Disabled textarea" disabled rows={3} className="w-96" />
          </div>
        </div>
        {/* biome-ignore lint/correctness/useUniqueElementIds: Global tooltip needs static ID for data-tooltip-id references */}
        <Tooltip id="tooltip" className="z-[10000] font-mono !text-xl !rounded-primary" />
      </div>

      <Footer>
        <div>&lt;Footer&gt;</div>
        <div className="text-content-secondary">
          <a
            href="https://github.com/yearn/eg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <PiGithubLogoFill />
            GitHub
          </a>
        </div>
      </Footer>
    </div>
  )
}

export default App
