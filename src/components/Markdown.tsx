import Image from "next/image";
import Markdown from "markdown-to-jsx";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface MarkdownProps {
  content: string;
}

// Custom CodeBlock component for syntax highlighting
const CodeBlock = ({
  className,
  children,
}: {
  className?: string;
  children: string;
}) => {
  // Extract language from className (format: language-jsx)
  const language = className
    ? className.replace("language-", "")
    : "javascript";

  return (
    <SyntaxHighlighter
      language={language}
      style={vscDarkPlus}
      className="rounded-md font-mono text-sm"
    >
      {children}
    </SyntaxHighlighter>
  );
};

// Custom component for displaying code filenames
const FileNameBlock = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-900 -mb-2 px-4 py-1 border-gray-700 border-b rounded-t-md font-mono text-gray-300 text-xs">
      {children}
    </div>
  );
};

// Custom image component with responsive sizing
const ImageComponent = ({
  alt,
  src,
  title,
}: {
  alt?: string;
  src?: string;
  title?: string;
}) => {
  if (!src) return null;

  return (
    <div className="my-6">
      <Image
        src={src}
        alt={alt || "Blog image"}
        className="rounded-lg w-full h-auto"
        title={title}
        width={1080}
        height={1080}
      />
      {title && (
        <p className="mt-2 text-gray-400 text-sm text-center">{title}</p>
      )}
    </div>
  );
};

export const MarkdownComponent: React.FC<MarkdownProps> = ({ content }) => {
  return (
    <Markdown
      options={{
        overrides: {
          h1: {
            props: {
              className: "text-3xl font-bold mt-8 mb-4 font-space-grotesk",
            },
          },
          h2: {
            props: {
              className: "text-2xl font-bold mt-6 mb-3 font-space-grotesk",
            },
          },
          h3: {
            props: {
              className: "text-xl font-bold mt-5 mb-2 font-space-grotesk",
            },
          },
          p: {
            props: {
              className: "mb-4 leading-relaxed",
            },
          },
          a: {
            props: {
              className:
                "text-purple-400 hover:text-purple-300 underline underline-offset-2",
            },
          },
          ul: {
            props: {
              className: "list-disc pl-6 mb-4",
            },
          },
          ol: {
            props: {
              className: "list-decimal pl-6 mb-4",
            },
          },
          li: {
            props: {
              className: "mb-1",
            },
          },
          blockquote: {
            props: {
              className:
                "border-l-4 border-purple-500 pl-4 italic text-gray-400 my-4",
            },
          },
          code: {
            component: CodeBlock,
          },
          pre: {
            props: {
              className: "mb-4",
            },
          },
          img: {
            component: ImageComponent,
          },
          FileName: {
            component: FileNameBlock,
          },
        },
      }}
    >
      {content}
    </Markdown>
  );
};

// Export for backward compatibility with existing imports
export { MarkdownComponent as Markdown };
