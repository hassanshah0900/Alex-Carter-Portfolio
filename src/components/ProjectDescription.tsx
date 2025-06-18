interface Props {
  children: string;
}

export default function ProjectDescription({ children }: Props) {
  return (
    <p className="text-start p-4 sm:py-4 sm:px-6 rounded-lg backdrop-blur-lg bg-radial from-accent/15 from-0% via-blue-400/10 via-70% to-blue-400/5 to-100%">
      {children}
    </p>
  );
}
