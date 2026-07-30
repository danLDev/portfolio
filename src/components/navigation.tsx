
import { useState, useEffect } from 'react';
import { cva } from '../../styled-system/css/cva';
import { css } from '../../styled-system/css';
import { hstack } from '../../styled-system/patterns';

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const navLinkStyles = cva({
  base: {
    textStyle: 'body.md.regular',
    position: 'relative',
    paddingBottom: '13px',
    color: 'neutral.100',
    transition: '0.4s ease-in-out',
    _hover: {
      color: 'primary'
    },
    _after: {
      position: 'absolute',
      width: '4px',
      height: '4px',
      borderRadius: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      bottom: '2px',
      content: '""',
      opacity: 0,
      backgroundColor: 'primary'
    }
  },
  variants: {
    isActive: {
      true: {
        _after: {
          opacity: 1
        }
      }
    }
  }
})
export function Navigation() {
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    const update = () => setPathname(window.location.pathname);

    update();

    document.addEventListener("astro:page-load", update);

    return () =>
      document.removeEventListener("astro:page-load", update);
  }, []);

  return (
    <nav className={hstack({
      height: '60px',
      borderBottom: 'solid 1px {colors.neutral.400}',
      justifyContent: 'center',
    })}>
      <div className={hstack({
        height: '60px',
        width: '100%',
        maxWidth: '1400px',
        paddingRight: '2vw',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '2vw',

      })}>
        <a href={'/'} className={css({ color: 'primary', marginRight: 'auto', textStyle: 'body.lg.regular', })}>DL</a>
        <ul className={hstack({ alignItems: 'center', gap: '3rem' })}>
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={navLinkStyles({ isActive: pathname === link.href })}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}