import { Home } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-slate-50 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Home className="h-5 w-5 text-teal-600" />
              <span className="text-lg font-semibold text-slate-900">
                RentAlley
              </span>
            </div>
            <p className="text-sm text-slate-600">
              Find and manage the perfect stay with ease and confidence.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a href="#" className="hover:text-teal-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-600 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-600 transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a href="#" className="hover:text-teal-600 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-600 transition-colors">
                  Safety
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-600 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Hosting</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a href="#" className="hover:text-teal-600 transition-colors">
                  List Your Property
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-600 transition-colors">
                  Host Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-600 transition-colors">
                  Community Forum
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-slate-600">
          <p>
            &copy; {new Date().getFullYear()} Rentalley. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
