import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, AppWindow } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="text-primary" size={20} />
            Phone
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">+88 01726772434</p>
          <p className="text-xs text-muted-foreground mt-1">Available 9 AM - 10 PM</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="text-primary" size={20} />
            Email
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">spsc3572@gmail.com</p>
          <p className="text-xs text-muted-foreground mt-1">We respond within 24 hours</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="text-primary" size={20} />
            Address
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Sreepur</p>
          <p className="text-sm">Chatkhil, Noakhali</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AppWindow className="text-primary" size={20} />
            Developed by
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">MD Mahi Hamid Ratul</p>
          <p className="text-xs text-muted-foreground mt-1">Technology Editor</p>
        </CardContent>
      </Card>
    </div>
  )
}
