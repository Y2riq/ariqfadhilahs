import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const PatternPlaceholder = () => {
  return (
    <div className="relative z-10">
      <div className="container py-28 md:py-32">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <Badge variant="secondary">Open to Work</Badge>
          <div className="max-w-3xl">
            <h1
              className="mb-6 text-4xl font-medium tracking-tight text-pretty md:text-5xl lg:text-6xl text-shadow whitespace-pre-line"
              style={{
                color: '#ffffff',
                WebkitTextStroke: '2px #6c6a6a',
                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.53)',
              }}
            >
              Ariq Fadhilah Saputa
            </h1>
            <p
              className="mx-auto max-w-2xl font-light tracking-widest text-pretty md:text-lg lg:text-xl"
              style={{
                color: '#fff',
                WebkitTextStroke: '1px #b1aeae',
                textShadow: '1px 1px 6px rgba(0, 0, 0, 0.53)',
                letterSpacing: '0.12em',
              }}
            >
              Junior Fullstack Developer focused on building clean, scalable, and user-friendly web applications.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button>View Resume</Button>
            <Button variant="secondary">Github</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PatternPlaceholder };
