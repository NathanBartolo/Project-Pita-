import { Container } from "../shared/Container";

interface BannerProps {
  subheading: string;
  title: string;
  bgImage?: string; // 👈 Add background image prop
  children?: React.ReactNode;
}

export const Banner = ({ subheading, title, bgImage, children }: BannerProps) => {
  return (
    <section className="relative">
      <Container className="flex">
        <div
          className="relative flex h-120 w-full flex-col items-start justify-end 
                     rounded-4xl bg-cover bg-center px-5 md:px-25 py-10 text-white gap-10 overflow-hidden"
          style={{
            backgroundImage: bgImage ? `url(${bgImage})` : undefined,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 rounded-4xl z-0" />

          {/* Text Content */}
          <div className="relative z-10 gap-2">
            <p className="text-[min(4vw,1rem)]/tight border-l-2 pl-2 sm:border-l-4 sm:pl-3">
              {subheading}
            </p>
            <h2 className="text-[min(7vw,2.5rem)]/tight font-bold pt-2 w-full xl:max-w-2/3">
              {title}
            </h2>
          </div>

          {/* Optional children */}
          {children && <div className="relative z-10">{children}</div>}
        </div>
      </Container>
    </section>
  );
};
