export default function FooterLandingPage() {
  const socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Twitter", href: "https://x.com/" },
  ];

  const teamLinks = [{ label: "Linkedin", href: "https://id.linkedin.com/" }];

  return (
    <footer className="bg-blue px-10 py-10 md:px-28 lg:px-40 flex flex-col gap-10">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-5xl text-white uppercase font-rubikmaps">Neraki</h1>

        <div className="flex flex-col md:flex-row gap-4 md:gap-10">
          <div className="text-white">
            <h3 className="text-sm font-light mb-2">Social</h3>
            <table className=" table-auto text-sm">
              <tbody>
                {socialLinks.map((link) => (
                  <tr key={link.label}>
                    <td>
                      <a href={link.href} className=" text-base ">
                        {link.label}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-2 text-white">
            <h3 className="text-sm font-light">Our Team</h3>
            <ul className="flex flex-col gap-1">
              {teamLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <p className="text-sm text-white">
          &copy; 2025 Neraki. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
