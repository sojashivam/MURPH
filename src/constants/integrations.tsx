import { InstagramDuoToneBlue, SalesForceDuoToneBlue } from "@/icons";

type Props = {
    title: string
    icon: React.ReactNode;
    description: string;
    strategy: "INSTAGRAM" | "CRM"
}

export const INTEGRATION_CARDS: Props[] = [
    {
        title: 'Connect Instagram',
        description: ' Using this you can Connect the automation  to your instagram ',
        icon: <InstagramDuoToneBlue />,
        strategy: 'INSTAGRAM'
    },
    {
        title: 'Connect Salesforce',
        description: ' Using this you can Connect the automation  to your Salesforce ',
        icon: <SalesForceDuoToneBlue/>,
        strategy: 'CRM'
    },
]