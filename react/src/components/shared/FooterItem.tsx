// NavItem.tsx
type FooterItemProps = {
  href: string;
  text: string;
};

export const FooterItem = ({ href, text }: FooterItemProps) => {
  return (
    <li>
      <a
        href={href}
        className="text-surface-a0 text-sm lg:text-base hover:underline underline-offset-2 transition-all duration-150"
      >
        {text}
      </a>
    </li>
  );
};
