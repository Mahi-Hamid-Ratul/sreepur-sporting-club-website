import Link from "next/link"
import { Mail, Phone, MapPin, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About SPSC</h3>
            <p className="text-sm opacity-90">
              One team, one mission. Empowering humanity for a brighter tomorrow!
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/activities" className="hover:underline">
                  Activities
                </Link>
              </li>
              <li>
                <Link href="/blood-donors" className="hover:underline">
                  Blood Donors
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:underline">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+88 01726772434</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>spsc3572@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5" />
                <span>Sreepur, Chatkhil, Noakhali</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100069484984933&sk=about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline"
                >
                  <Facebook size={16} />
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>&copy; 2025 Sreepur Sporting Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
