import { INavLink } from '@/types';
import { Link } from 'gatsby';

interface NavLinkProps {
  heading: string;
  links: INavLink[];
  onCLick?(): void;
}

const NavLinks = ({ heading, links, onCLick }: NavLinkProps) => {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="font-serif text-base uppercase tracking-wider">
        {heading}
      </h3>
      <ul className="flex flex-col gap-1 opacity-80">
        {links.map(({ label, url, type }) => {
          if (type === 'external') {
            return (
              <li key={label}>
                <a
                  href={url}
                  onClick={onCLick}
                  target="_blank"
                  className="text-xs uppercase duration-500 hover:text-orange-500"
                  rel="noreferrer"
                >
                  {label}
                </a>
              </li>
            );
          }

          return (
            <li key={label}>
              <Link
                to={url}
                onClick={onCLick}
                className="text-xs uppercase duration-500 hover:text-orange-500"
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavLinks;
