import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

function App() {
  return (
    <div className="flex w-screen p-0 bg-[#fff]">
      <Tabs className="w-full">
        <TabsList className="w-full">
          <TabsTrigger className="cursor-pointer" value="account">
            Resumo de Conversas
          </TabsTrigger>
          <TabsTrigger value="password">Prioridade</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  )
}

export default App
