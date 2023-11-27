import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FolderType } from "./page"

const FolderList = ({folder}:{folder:FolderType}) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Album Name</CardTitle>
        <CardDescription>Please click on view button to view the picture present in Album name</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end">
        <Link href={`/album/${folder.name}`}>
        <Button>View Album</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default FolderList