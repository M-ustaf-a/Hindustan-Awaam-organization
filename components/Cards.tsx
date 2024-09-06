import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Cards() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Hindustan organization</CardTitle>
        <CardDescription>Organizations are built on trust.</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <img src="/logo.jpg" alt="logo" className="w-52 h-42 ml-10"/>
        </div>
        
      </CardContent>
      <CardFooter className="flex justify-between">
        <form action="/info">
          <Button>show</Button>
        </form>
      </CardFooter>
    </Card>
  )
}
