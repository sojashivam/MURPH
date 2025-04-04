import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"

export const Notifications = () => {
    return(
    <Button className="bg-white rounded-full py-6">
        <Bell
        color="#33352cc"
        fill="#33352cc"/>
    </Button>
    )
}